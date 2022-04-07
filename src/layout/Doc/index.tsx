import { EditOnGitHub } from '@components/EditOnGitHub';
import Margin from '@components/Margin';
import { NextInDocs } from '@components/NextInDocs';
import { Cell, Grid } from '@faceless-ui/css-grid';
import React from 'react';
import { BlockContainer } from '../BlockContainer';
import { DocsNav } from '../DocsNav';

export const Doc: React.FC<{
  githubUrl?: string
}> = (props) => {
  const {
    githubUrl,
    children
  } = props;

  return (
    <BlockContainer>
      <Grid>
        <Cell
          cols={4}
          colsM={8}
        >
          <DocsNav />
        </Cell>
        <Cell
          cols={8}
          colsM={8}
        >
          {children}
          <Margin top="small">
            <NextInDocs />
          </Margin>
          <Margin top="small">
            <EditOnGitHub href={githubUrl} />
          </Margin>
        </Cell>
      </Grid>
    </BlockContainer>
  );
};
