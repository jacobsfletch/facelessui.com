import { useDarkMode } from '@root/providers/DarkMode';
import React from 'react';
import classes from './index.module.scss';

export const InlineCode: React.FC<{
  id?: string
}> = (props) => {
  const {
    children,
    id
  } = props;

  const { isDark } = useDarkMode();

  return (
    <code
      id={id}
      className={[
        classes.code,
        isDark && classes.darkMode
      ].filter(Boolean).join(' ')}
    >
      {children}
    </code>
  )
}
