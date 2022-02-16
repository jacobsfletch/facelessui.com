import { useDarkMode } from '@root/providers/DarkMode';
import React from 'react';
import classes from './index.module.scss';

export const InlineCode: React.FC = (props) => {
  const { children } = props;
  const { isDark } = useDarkMode();

  return (
    <code
      className={[
        classes.code,
        isDark && classes.darkMode
      ].filter(Boolean).join(' ')}
    >
      {children}
    </code>
  )
}
