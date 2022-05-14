import React from 'react';
import classes from './index.module.scss';

export const Hamburger: React.FC<{
  isOpen?: boolean
  color?: string
}> = (props) => {
  const {
    isOpen,
    color,
  } = props;

  const lineClasses = [
    classes.line,
    isOpen && classes.lineIsOpen,
  ].filter(Boolean).join(' ')

  return (
    <div
      className={[
        classes.hamburger,
        isOpen && classes.isOpen,
        color && classes[color]
      ].filter(Boolean).join(' ')}
    >
      <span className={lineClasses} />
      <span className={lineClasses} />
      <span className={lineClasses} />
      <span className={lineClasses} />
    </div>
  )
}
