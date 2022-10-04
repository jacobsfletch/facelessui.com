import { EditOnGitHub } from '@components/EditOnGitHub';
import Margin from '@components/Margin';
import Meta from '@components/Meta';
import { NextInDocs } from '@components/NextInDocs';
import { Cell, Grid } from '@faceless-ui/css-grid';
import { JumplistNodes } from '@faceless-ui/jumplist/dist/JumplistProvider/context';
import { useCustomCursor } from '@root/providers/CustomCursorProvider';
import React, { Fragment, useEffect } from 'react';
import { BlockContainer } from '../BlockContainer';
import { DesktopNav } from '../DocsNav/DesktopNav';
import classes from './index.module.scss';

export const Doc: React.FC<{
  githubUrl?: string
  children: React.ReactNode
  metaTitle?: string
  metaDescription?: string
  metaURL?: string
  jumplist?: JumplistNodes
}> = (props) => {
  const {
    githubUrl,
    children,
    metaTitle,
    metaDescription,
    metaURL,
  } = props;

  const {
    setShowCustomCursor,
  } = useCustomCursor();

  useEffect(() => {
    setShowCustomCursor(false);
  }, [setShowCustomCursor])

  return (
    <Fragment>
      <Meta
        title={metaTitle}
        description={metaDescription}
        url={metaURL}
      />
      <BlockContainer>
        <Grid>
          <Cell
            cols={3}
            colsL={4}
            colsM={8}
            className={classes.desktopNav}
          >
            <DesktopNav />
          </Cell>
          <Cell
            cols={9}
            colsL={8}
            colsM={8}
          >
            <div className={classes.content}>
              {children}
            </div>
            <Margin top="small">
              <NextInDocs />
            </Margin>
            {githubUrl && (
              <Margin top="small">
                <EditOnGitHub href={githubUrl} />
              </Margin>
            )}
          </Cell>
        </Grid>
      </BlockContainer>
    </Fragment>
  );
};
