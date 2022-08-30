import { Heading } from '@components/Heading'
import { InlineCode } from '@components/InlineCode'
import { getReleaseNotes, ReleaseData } from '@root/github-api'
import { BlockContainer } from '@root/layout/BlockContainer'
import { useCustomCursor } from '@root/providers/CustomCursorProvider'
import { formatDateTime } from '@root/utilities/formatDateTime'
import type { NextPage } from 'next'
import { Fragment, useEffect, useState } from 'react'
import Meta from '../components/Meta'

const pkgs = [
  'modal',
  'slider',
  'css-grid',
  'jumplist',
  'collapsibles',
  'window-info',
  'scroll-info',
  'mouse-info'
];

const Releases: NextPage = () => {
  const [releasesByDate, setReleasesByDate] = useState<[string, ReleaseData[]][]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { setShowCustomCursor } = useCustomCursor();

  useEffect(() => {
    setIsLoading(true);

    const doFetch = async () => {
      const releasesByPackage = await Promise.all(pkgs.map(
        async (pkgName) => await getReleaseNotes(pkgName)
      ));

      const releasesByDate = releasesByPackage
        .filter(Boolean)
        .flat()
        .reduce((acc, release) => {
          if (release) {
            const date = release.published_at.split('T')[0];
            acc[date] = acc[date] || [];
            acc[date].push(release);
          }
          return acc;
        }, {} as Record<string, ReleaseData[]>);

      const sortedByDate = Object.entries(releasesByDate)
        .sort((a, b) => new Date(b[0]).getTime() - new Date(a[0]).getTime())

      setReleasesByDate(sortedByDate);
      setIsLoading(false);
    }
    doFetch();
  }, []);

  useEffect(() => {
    setShowCustomCursor(false);
  }, [setShowCustomCursor])

  return (
    <Fragment>
      <Meta
        title="Faceless UI Releases"
      />
      <main>
        {isLoading && (
          <BlockContainer>
            <div>
              Loading...
            </div>
          </BlockContainer>
        )}
        {!isLoading && (
          <BlockContainer>
            <Fragment>
              <h1>
                Releases
              </h1>
              {releasesByDate.map((releaseByDate, index) => {
                const [date, releases] = releaseByDate;

                return (
                  <Fragment key={index}>
                    <Heading
                      id={date}
                      href="/releases#date"
                      copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/releases#date`}
                      element='h5'
                    >
                      {formatDateTime(date)}
                    </Heading>
                    {releases.map((release, index2) => {
                      const {
                        packageName,
                        tag_name,
                        body
                      } = release;

                      return (
                        <Fragment key={`${index}-${index2}`}>
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center'
                            }}
                          >
                            <h6 style={{ marginBottom: 0 }}>
                              {packageName}
                            </h6>
                            <InlineCode>
                              {tag_name}
                            </InlineCode>
                          </div>
                          <p>
                            {body}
                          </p>
                        </Fragment>
                      )
                    })}
                  </Fragment>
                )
              })}
            </Fragment>
          </BlockContainer>
        )}
      </main>
    </Fragment>
  )
}

export default Releases
