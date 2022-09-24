import { Hyperlink } from '@components/Hyperlink';
import { useVersions } from '@root/providers/Versions';
import React from 'react';
import classes from './index.module.scss';

export const PackageInfo: React.FC<{
  packageSlug: string
}> = (props) => {
  const { packageSlug } = props;
  const {
    // npmVersions,
    githubVersions
  } = useVersions();

  // const npmInfo = npmVersions?.[packageSlug];
  const githubInfo = githubVersions?.[packageSlug];

  const name = `@faceless-ui/${packageSlug}`;

  // const {
  //   version: latestVersion,
  //   dist: {
  //     tarball: latestTarball = '',
  //     unpackedSize: latestUnpackedSize = 0,
  //   } = {}
  // } = npmInfo || {};

  const {
    tag_name: latestGithubVersion,
  } = githubInfo || {};

  return (
    <div className={classes.packageInfo}>
      <div>
        <div>
          {`Name: `}
          <span className={classes.latestName}>
            {name}
          </span>
        </div>
        <div>
          {`Latest: `}
          <span className={classes.latestVersion}>
            <Hyperlink
              href={`https://github.com/faceless-ui/${packageSlug}/releases/${latestGithubVersion}`}
              newTab
            >
              {latestGithubVersion}
            </Hyperlink>
          </span>
        </div>
        {/* <div>
          {`Dev: `}
          <span className={classes.latestVersion}>
            {`v${latestVersion}`}
            {latestUnpackedSize && (
              <Fragment>
                {` — ${latestUnpackedSize / 1000} KB`}
              </Fragment>
            )}
          </span>
        </div> */}
        <div>
          <Hyperlink
            href={`https://github.com/faceless-ui/${packageSlug}`}
            newTab
          >
            GitHub
          </Hyperlink>
        </div>
        <div>
          <Hyperlink
            href={`https://npmjs.org/${name}`}
            newTab
          >
            NPM
          </Hyperlink>
        </div>
      </div>
    </div>
  )
}
