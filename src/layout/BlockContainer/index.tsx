import React from 'react';
import { Cell, Grid } from '@faceless-ui/css-grid';
import classes from './index.module.scss'

// places two columns onto each side of its children,
// reduces available columns in all child grids to 12 (easily divisible)
export const BlockContainer: React.FC<{
  id?: string
  className?: string
  cellClassName?: string
  style?: React.CSSProperties
}> = (props) => {
  const {
    id,
    children,
    className,
    cellClassName,
    style
  } = props;

  return (
    <Grid
      className={classes.blockContainer}
    >
      <Cell
        className={cellClassName}
        start={2}
        cols={12}
        colsM={8}
        startM={1}
      >
        {children}
      </Cell>
    </Grid>
  );
};
