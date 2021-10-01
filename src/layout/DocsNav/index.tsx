import { nav } from '@root/layout/DocsNav/nav';
import React from 'react';
import classes from './index.module.scss';
import { RecursiveNav } from './RecursiveNav';

export const DocsNav: React.FC = () => {
  return (
    <div className={classes.docsNav}>
      <div>
        <b>
          Documentation
        </b>
      </div>
      <RecursiveNav items={nav} />
    </div >
  )
}
