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

  const { versions } = useVersions();
  const version = versions?.[name]?.version;

  return (
    <InlineCode size="small">
      {version ? `v${version}` : '...'}
    </InlineCode>
  )
}
