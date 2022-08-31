import { getReleaseNotes, ReleaseData } from '@root/github-api'
import { Fragment, useEffect, useState } from 'react'
import { ReleaseRow } from '@root/layout/Releases/ReleaseRow'
import { useVersions } from '@root/providers/Versions'
import classes from './index.module.scss';
import { Hyperlink } from '@components/Hyperlink';

const Releases: React.FC<{
  packageLabel?: string
  packageSlug: string
}> = (props) => {
  const {
    packageSlug,
    packageLabel = packageSlug,
  } = props;

  const [releasesByDate, setReleasesByDate] = useState<ReleaseData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const { versions } = useVersions();

  const npmInfo = versions?.[packageSlug];

  const {
    version: latestVersion,
    name: latestName,
    dist: {
      tarball: latestTarball = '',
      unpackedSize: latestUnpackedSize = 0,
    } = {}
  } = npmInfo || {};

  useEffect(() => {
    setIsLoading(true);

    const doFetch = async () => {
      const releases = await getReleaseNotes(packageSlug)

      if (releases) {
        let sortedByDate = releases
          .sort((a, b) => new Date(a.published_at).getTime() - new Date(b.published_at).getTime())
          .reverse();

        setReleasesByDate(sortedByDate);
      }

      // NOTE: give the illusion of at least a 1 second load so that page doesn't flash too quickly and appear broken
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
    doFetch();
  }, [packageSlug]);

  return (
    <main className={classes.release}>
      <h1>
        {`${packageLabel} Releases`}
      </h1>
      <div className={classes.latestInfo}>
        {latestVersion && (
          <div>
            <div>
              {`Name: `}
              <span className={classes.latestName}>
                {latestName}
              </span>
            </div>
            <div>
              {`Latest: `}
              <span className={classes.latestVersion}>
                {`v${latestVersion}`}
              </span>
            </div>
            <div>
              {`Size: `}
              {latestUnpackedSize && (
                <span className={classes.latestSize}>
                  {`${latestUnpackedSize / 1000} KB`}
                </span>
              )}
            </div>
            <div>
              <Hyperlink
                href={`https://npmjs.org/${latestName}`}
                newTab
              >
                View
              </Hyperlink>
            </div>
            <div>
              <Hyperlink href={latestTarball}>
                Download
              </Hyperlink>
            </div>
          </div>
        )}
      </div>
      {isLoading && (
        <p className={classes.loading}>
          Loading release notes...
        </p>
      )}
      {!isLoading && (
        <Fragment>
          {releasesByDate.map((release, index) => {
            return (
              <ReleaseRow
                {...release}
                key={index}
              />
            )
          })}
        </Fragment>
      )}
    </main>
  )
}

export default Releases;
