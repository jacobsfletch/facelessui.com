import { Hyperlink } from '@components/Hyperlink';
import React from 'react';
import classes from './index.module.scss';

export const EditOnGitHub: React.FC<{
  href?: string
}> = (props) => {
  const {
    href
  } = props;

  return (
    <div className={classes.editOnGitHub}>
      <Hyperlink
        href={`${process.env.NEXT_PUBLIC_GITHUB_URL}${href}`}
        newTab
        underline
      >
        Edit this page on GitHub
      </Hyperlink>
    </div>
  );
};
