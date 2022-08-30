import React from 'react';
import classes from './index.module.scss';

export const MarginGrid: React.FC<{
  className?: string
  marginSize?: 'small'
  cols?: 4 | 3 | 2
  colsL?: 4 | 3 | 2
  fullWidthMobile?: boolean
  children: React.ReactNode
  alignItems?: 'stretch'
}> = (props) => {
  const {
    className,
    children,
    marginSize = 'default',
    cols = 2,
    colsL,
    fullWidthMobile = true,
    alignItems
  } = props;

  return (
    <div
      className={[
        classes.marginGrid,
        className,
        marginSize && classes[`size--${marginSize}`],
        cols && classes[`cols--${cols}`],
        colsL && classes[`colsL--${colsL}`],
        fullWidthMobile && classes.fullWidthMobile,
        alignItems === 'stretch' && classes.stretch
      ].filter(Boolean).join(' ')}
    >
      {children}
    </div>
  );
};
