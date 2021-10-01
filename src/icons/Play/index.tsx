import React from 'react';
import classes from '../index.module.scss';

export const Play: React.FC<{
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
      className={[
        classes.icon,
        color && classes[color],
        size && classes[size],
        bold && classes.bold
      ].filter(Boolean).join(' ')}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 18"
      height="100%"
      width="100%"
    >
      <circle
        className="stroke"
        stroke={color}
        fill="none"
        strokeWidth="2"
        cx="9"
        cy="9"
        r="9"
      />
      <polygon
        className="fill"
        transform="translate(10.000000, 9.000000) rotate(-270.000000) translate(-10.000000, -9.000000)"
        fill={color}
        points="10 5 14 13 6 13"
      />
    </svg>
  );
};
