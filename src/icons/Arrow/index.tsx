import React from 'react';
import classes from '../index.module.scss';

export const ArrowIcon: React.FC<{
  rotation?: number,
  color?: string
  size?: string
  className?: string
  bold?: boolean
}> = (props) => {
  const {
    color,
    rotation,
    size,
    className,
    bold
  } = props;

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 28 25"
      xmlns="http://www.w3.org/2000/svg"
      className={[
        className,
        classes.icon,
        color && classes[color],
        size && classes[size],
        bold && classes.bold
      ].filter(Boolean).join(' ')}
      style={{
        transform: rotation ? `rotate(${rotation}deg)` : undefined
      }}
    >
      <path
        d="M15.1473 1.97986L26 12.8325L15.1473 23.6852"
        className={classes.stroke}
      />
      <path
        d="M24.73 12.8333L1.17737 12.8333"
        className={classes.stroke}
      />
    </svg>
  )
}
