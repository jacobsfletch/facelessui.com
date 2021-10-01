import React from 'react';
import classes from '../index.module.scss';

export const SearchIcon: React.FC<{
  color?: string
  size?: string
  bold?: boolean
}> = (props) => {
  const {
    color,
    size,
    bold
  } = props;

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 22 22"
      xmlns="http://www.w3.org/2000/svg"
      className={[
        classes.icon,
        color && classes[color],
        size && classes[size],
        bold && classes.bold
      ].filter(Boolean).join(' ')}
    >
      <circle
        cx="9.19111"
        cy="8.30634"
        r="7.20478"
        className={classes.stroke}
      />
      <line
        x1="14.9044"
        y1="13.859"
        x2="20.9441"
        y2="20.0011"
        stroke="#A42D30"
        className={classes.stroke}
      />
    </svg>
  )
}
