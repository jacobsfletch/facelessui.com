import { Heading } from '@components/Heading';
import { Hyperlink } from '@components/Hyperlink';
import { ReleaseData } from '@root/github-api';
import { useVersions } from '@root/providers/Versions';
import { formatDateTime } from '@root/utilities/formatDateTime';
import React from 'react';
import classes from './index.module.scss';

export const ReleaseRow: React.FC<ReleaseData & {
  packageSlug?: string
  className?: string
  id?: string
}> = (props) => {
  const {
    packageSlug,
    className,
    id,
    tag_name,
    html_url,
    body,
    published_at,
    prerelease
  } = props;

  const { versions } = useVersions();
  const latestVersion = versions[packageSlug || ''];

  return (
    <div
      id={id}
      className={[
        className,
        classes.releaseRow,
      ].filter(Boolean).join(' ')}
    >
      <Heading
        href={`#${tag_name}`}
        copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/modal/releases#${tag_name}`}
        element='h5'
      >
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
      <div>
        {formatDateTime(published_at)}
      </div>
      {!body && (
        <div>
          No release notes
        </div>
      )}
      {body && (
        <div>
          <p style={{ margin: 0 }}>
            Release notes:
          </p>
          <div
            style={{
              border: '1px solid var(--color-gray-3)',
              marginBottom: '10px',
              marginTop: '10px',
              padding: '10px'
            }}
          >
            <p style={{ margin: 0 }}>
              {body}
            </p>
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
