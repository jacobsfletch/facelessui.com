import React, { forwardRef, Ref } from 'react';
import { Cell, Grid } from '@faceless-ui/css-grid';
import classes from './index.module.scss'

type Props = {
  id?: string
  className?: string
  cellClassName?: string
  style?: React.CSSProperties
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  children: React.ReactNode
  ref?: Ref<HTMLElement>
}

// places two columns onto each side of its children,
// reduces available columns in all child grids to 12 (easily divisible)
export const BlockContainer: React.FC<Props> = forwardRef<HTMLElement, Props>((props, ref) => {
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
      ref={ref}
      id={id}
      className={[
        classes.blockContainer,
        className
      ].filter(Boolean).join(' ')}
      style={style}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Cell
        className={cellClassName}
        start={3}
        cols={12}
        startL={2}
        colsL={12}
        colsM={8}
        startM={1}
      >
        {children}
      </Cell>
    </Grid>
  );
});

BlockContainer.displayName = 'BlockContainer';
