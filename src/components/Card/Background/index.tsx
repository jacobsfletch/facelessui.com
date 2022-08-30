import React from 'react'
import classes from './index.module.scss';

export const CardBackground: React.FC<{
  children?: React.ReactNode
  className?: string
  forceDark?: boolean
}> = (props) => {
  const {
    children,
    className,
    forceDark
  } = props;

  return (
    <div
      className={[
        className,
        classes.cardBackground,
        forceDark && classes.forceDark
      ].filter(Boolean).join(' ')}
    >
      <div className={classes.border} />
      {children}
    </div>
  )
}
