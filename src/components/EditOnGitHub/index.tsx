import { Hyperlink } from '@components/Hyperlink';
import React from 'react';
import classes from './index.module.scss';

export const EditOnGitHub: React.FC<{
  href?: string
}> = (props) => {
  const {
    href
  } = props;

  console.log(href)

  return (
    <div className={classes.editOnGitHub}>
      <Hyperlink
        href={href}
        newTab
        underline
      >
        Edit this page on GitHub
      </Hyperlink>
    </div>
  );
};
