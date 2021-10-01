import React from 'react';
import classes from '../index.module.scss';

export const Chevron: React.FC<{
  className?: string
  color?: string
  rotation?: number
  size?: string
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
      viewBox="0 0 10 7"
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
        className={classes.stroke}
        d="M8.50586 6.32031L5.00586 2.32031L1.50586 6.32031"
      />
    </svg>
  )
}
