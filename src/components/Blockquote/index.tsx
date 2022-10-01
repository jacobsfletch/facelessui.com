import { Chevron } from '@root/icons/Chevron';
import React from 'react';
import classes from './index.module.scss';

export const Blockquote: React.FC<{
  children?: React.ReactNode
  className?: string
}> = (props) => {
  const {
    children,
    className
  } = props;

  return (
    <blockquote
      className={[
        className,
        classes.blockquote,
      ].filter(Boolean).join(' ')}
    >
      <Chevron
        className={classes.icon}
        bold
        rotation={90}
      />
      {children}
    </blockquote>
  )
}
