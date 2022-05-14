import { nav } from '@root/docs-nav';
import React from 'react';
import classes from './index.module.scss';
import { RecursiveNav } from '../RecursiveNav';

export const DesktopNav: React.FC = () => {
  return (
    <div className={classes.desktopNav}>
      <RecursiveNav items={nav} />
    </div >
  )
}
