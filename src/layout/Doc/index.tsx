import { EditOnGitHub } from '@components/EditOnGitHub';
import Margin from '@components/Margin';
import { NextInDocs } from '@components/NextInDocs';
import { Cell, Grid } from '@faceless-ui/css-grid';
import React from 'react';
import { BlockContainer } from '../BlockContainer';
import { DocsNav } from '../DocsNav';

export const Doc: React.FC<{
  githubUrl?: string
  children: React.ReactNode
}> = (props) => {
  const {
    githubUrl,
    children
  } = props;

  return (
    <BlockContainer>
      <Grid>
        <Cell
          cols={3}
          colsM={8}
        >
          <DocsNav />
        </Cell>
        <Cell
          cols={9}
          colsM={8}
        >
          {children}
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
  );
};
