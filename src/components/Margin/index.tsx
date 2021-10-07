import React from 'react';
import classes from './index.module.scss';

const Margin: React.FC<{
  top?: 'small' | 'medium' | 'large'
  bottom?: 'small' | 'medium' | 'large'
  style?: React.CSSProperties
  id?: string
}> = (props) => {
  const {
    children,
    top,
    bottom,
    style,
    id
  } = props;

  return (
    <div
      className={[
        classes[`top-${top}`],
        classes[`bottom-${bottom}`],
      ].filter(Boolean).join(' ')}
      style={style}
      id={id}
    >
      {children}
    </div >
  )
}

export default Margin;
