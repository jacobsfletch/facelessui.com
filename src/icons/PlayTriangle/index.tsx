import React from 'react';
import classes from '../index.module.scss';

export const PlayTriangle: React.FC<{
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
      width="100%"
      height="100%"
      viewBox="0 0 11 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      <path
        className="fill"
        d="M10.999 5.99951L0.532537 0.466974L0.532538 11.5321L10.999 5.99951Z"
        fill={color}
      />
    </svg>
  );
};
