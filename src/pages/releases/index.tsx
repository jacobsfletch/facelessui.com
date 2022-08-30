import { Heading } from '@components/Heading'
import { getReleaseNotes, ReleaseData } from '@root/github-api'
import { BlockContainer } from '@root/layout/BlockContainer'
import { useCustomCursor } from '@root/providers/CustomCursorProvider'
import { formatDateTime } from '@root/utilities/formatDateTime'
import type { NextPage } from 'next'
import { Fragment, useEffect, useState } from 'react'
import Meta from '../../components/Meta'
import QueryString from 'qs';
import Router, { useRouter } from 'next/router';
import classes from './index.module.scss'
import { Hyperlink } from '@components/Hyperlink'

const pkgNames: {
  [key: string]: string
} = {
  'modal': 'Modal',
  'slider': 'Slider',
  'css-grid': 'CSS Grid',
  'jumplist': 'Jumplist',
  'collapsibles': 'Collapsibles',
  'window-info': 'Window Info',
  'scroll-info': 'Scroll Info',
  'mouse-info': 'Mouse Info'
};

const pkgs = Object.keys(pkgNames);

const Releases: NextPage = () => {
  const [releasesByDate, setReleasesByDate] = useState<[string, ReleaseData[]][]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { setShowCustomCursor } = useCustomCursor();
  const router = useRouter();
  const { pathname, asPath } = router;

  const [packageToShow, setPackageToShow] = useState<string>(() => {
    const search = QueryString.parse(asPath.split('?')[1]);
    return search.package as string || '';
  });

  // sync query state to url
  useEffect(() => {
    if (packageToShow) {
      if (packageToShow !== 'all') {
        const query = QueryString.stringify({ package: packageToShow }, {
          encode: false,
          addQueryPrefix: true
        });
        Router.push(`${pathname}${query}`, undefined, { shallow: true });
      } else {
        Router.push(`${pathname}`, undefined, { shallow: true });
      }
    }
  }, [
    packageToShow,
    pathname
  ])

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
              {/* <label>
                <div>
                  Showing
                </div>
                <select
                  value={packageToShow}
                  onChange={(e) => { setPackageToShow(e.target.value) }}
                >
                  <option value="all">
                    All
                  </option>
                  {pkgs.map((pkg) => (
                    <option
                      key={pkg}
                      value={pkg}
                    >
                      {pkgNames[pkg]}
                    </option>
                  ))}
                </select>
              </label> */}
              {releasesByDate.map((releaseByDate, index) => {
                const [date, releases] = releaseByDate;

                return (
                  <div
                    key={index}
                    className={classes.releaseRow}
                  >
                    <Heading
                      id={date}
                      href={`/releases#${date}`}
                      copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/releases#${date}`}
                      element='h5'
                    >
                      {formatDateTime(date)}
                    </Heading>
                    <ul
                      style={{
                        paddingLeft: '20px',
                        margin: 0
                      }}
                    >
                      {releases.map((release, index2) => {
                        const {
                          slug,
                          tag_name,
                          body,
                          html_url
                        } = release;

                        return (
                          <li
                            key={`${index}-${index2}`}
                          >
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center'
                              }}
                            >
                              <h6 style={{ marginBottom: 0 }}>
                                {pkgNames[slug]}
                              </h6>
                              &nbsp;
                              <Hyperlink
                                href={html_url}
                                newTab
                              >
                                <h6 style={{ marginBottom: 0 }}>
                                  {tag_name}
                                </h6>
                              </Hyperlink>
                            </div>
                            {body && (
                              <div
                                style={{
                                  border: '1px solid var(--color-gray-3)',
                                  marginBottom: '20px',
                                  marginTop: '10px',
                                  padding: '10px'
                                }}
                              >
                                <p style={{ margin: 0 }}>
                                  {body}
                                </p>
                              </div>
                            )}
                          </li>
                        )
                      })}
                    </ul>
                  </div>
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
