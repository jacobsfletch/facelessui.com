import { Heading } from '@components/Heading';
import { Hyperlink } from '@components/Hyperlink';
import { MarkdownRenderer } from '@components/MarkdownRenderer';
import { GitHubRelease } from '@root/github-api';
import { useVersions } from '@root/providers/Versions';
import { formatDateTime } from '@root/utilities/formatDateTime';
import React from 'react';
import classes from './index.module.scss';

export const ReleaseRow: React.FC<GitHubRelease & {
  packageSlug?: string
  packageName?: string
  className?: string
  showName?: boolean
  showDate?: boolean
}> = (props) => {
  const {
    packageSlug,
    packageName,
    className,
    id,
    tag_name,
    html_url,
    body,
    published_at,
    prerelease,
    showDate = true,
    showName = false
  } = props;

  const { githubVersions } = useVersions();
  const latestVersion = githubVersions[packageSlug || '']?.tag_name;

  return (
    <div
      id={id.toString()}
      className={[
        className,
        classes.releaseRow,
      ].filter(Boolean).join(' ')}
    >
      <Heading
        href={`#${tag_name}`}
        element="h2"
        as="h4"
      >
        {showName && (
          <span>
            {packageName}
            &nbsp;
          </span>
        )}
        {tag_name}
        {tag_name === latestVersion && (
          <span className={classes.latestVersion}>
            &nbsp;
            [Latest]
          </span>
        )}
        {prerelease && (
          <span className={classes.prerelease}>
            &nbsp;
            (Prerelease)
          </span>
        )}
      </Heading>
      {showDate && (
        <div>
          {formatDateTime(published_at)}
        </div>
      )}
      {!body && (
        <div>
          No release notes
        </div>
      )}
      {body && (
        <div className={classes.body}>
          <p style={{ margin: 0 }}>
            Release notes:
          </p>
          <div className={classes.notes}>
            <MarkdownRenderer>
              {body}
            </MarkdownRenderer>
          </div>
        </div>
      )}
      <Hyperlink
        href={html_url}
        newTab
      >
        <p style={{ marginBottom: 0 }}>
          Full details
        </p>
      </Hyperlink>
    </div>
  )
}
