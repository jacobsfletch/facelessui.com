import { getReleaseNotes, GitHubRelease } from '@root/github-api'
import { Fragment, useEffect, useState } from 'react'
import { ReleaseRow } from '@root/layout/Releases/ReleaseRow'
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

  const [releasesByDate, setReleasesByDate] = useState<GitHubRelease[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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
      {isLoading && (
        <p className={classes.loading}>
          Loading releases...
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
      <div className={classes.releasesLink}>
        <Hyperlink
          href={`https://github.com/faceless-ui/${packageSlug}/releases`}
          newTab
        >
          See all releases
        </Hyperlink>
      </div>
    </main>
  )
}

export default Releases;
