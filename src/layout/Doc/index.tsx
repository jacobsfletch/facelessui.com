import { Cell, Grid } from '@faceless-ui/css-grid';
import React from 'react';
import { BlockContainer } from '../BlockContainer';
import { DocsNav } from '../DocsNav';

export const Doc: React.FC<{
}> = (props) => {
  const { children } = props;

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
        </Cell>
      </Grid>
    </BlockContainer>
  );
};
