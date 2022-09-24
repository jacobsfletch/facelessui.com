import { InlineCode } from '@components/InlineCode';
import { useVersions } from '@root/providers/Versions';
import React from 'react'
// import classes from './index.module.scss';

export const VersionNumber: React.FC<{
  name: string
}> = (props) => {
  const {
    name,
  } = props;

  const { githubVersions } = useVersions();
  const version = githubVersions?.[name]?.tag_name;

  return (
    <InlineCode size="small">
      {version || '...'}
    </InlineCode>
  )
}
