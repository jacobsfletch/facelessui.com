import React from 'react';
import classes from './index.module.scss';

export const MarginGrid: React.FC<{
  className?: string
  size?: 'small'
  children: React.ReactNode
}> = (props) => {
  const {
    className,
    children,
    size
  } = props;

  return (
    <div
      className={[
        classes.marginGrid,
        className,
        size && classes[size]
      ].filter(Boolean).join(' ')}
    >
      {children}
    </div>
  );
};
