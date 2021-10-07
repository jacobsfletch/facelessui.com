import { useVersions, Versions } from '@root/providers/Versions';
import React, { ElementType } from 'react'
import classes from './index.module.scss';

export const VersionNumber: React.FC<{
  name: string
  element?: ElementType
  size?: 'small' | string
  color?: string
}> = (props) => {
  const {
    name,
    element: Element = 'div',
    size,
    color
  } = props;

  const { versions } = useVersions();
  const version = versions?.[name];

  if (version) {
    return (
      <Element
        className={[
          classes.versionNumber,
          size && classes[size],
          color && classes[color]
        ].filter(Boolean).join(' ')}
      >
        {version}
      </Element>
    )
  }

  return null;
}
