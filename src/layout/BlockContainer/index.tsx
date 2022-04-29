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
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  children: React.ReactNode
}> = (props) => {
  const {
    id,
    children,
    className,
    cellClassName,
    style,
    onMouseEnter,
    onMouseLeave
  } = props;

  return (
    <Grid
      id={id}
      className={[
        classes.blockContainer,
        className
      ].filter(Boolean).join(' ')}
      style={style}
      htmlAttributes={{
        onMouseEnter,
        onMouseLeave
      }}
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
