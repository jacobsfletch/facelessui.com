import { nav } from '@root/docs-nav';
import { useDarkMode } from '@root/providers/DarkMode';
import React from 'react';
import classes from './index.module.scss';
import { RecursiveNav } from './RecursiveNav';

export const DocsNav: React.FC = () => {
  const { isDark } = useDarkMode();

  return (
    <div
      className={[
        classes.docsNav,
        isDark && classes.darkMode
      ].filter(Boolean).join(' ')}
    >
      <RecursiveNav items={nav} />
    </div >
  )
}
