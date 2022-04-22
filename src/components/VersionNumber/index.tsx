import { useDarkMode } from '@root/providers/DarkMode';
import { useVersions } from '@root/providers/Versions';
import React from 'react'
import classes from './index.module.scss';

export const VersionNumber: React.FC<{
  name: string
  element?: keyof JSX.IntrinsicElements
  color?: string
}> = (props) => {
  const {
    name,
    element: Element = 'div',
    color: colorFromProps
  } = props;

  const { versions } = useVersions();
  const version = versions?.[name];

  const { isDark } = useDarkMode();
  let colorToUse = colorFromProps;
  if (!colorFromProps) {
    colorToUse = isDark ? 'darker-gray' : 'lighter-gray'
  }

  return (
    <Element
      className={[
        classes.versionNumber,
        colorToUse && classes[colorToUse]
      ].filter(Boolean).join(' ')}
    >
      {version || '...'}
    </Element>
  )
}
