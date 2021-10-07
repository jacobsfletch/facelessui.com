import { Hyperlink } from '@components/Hyperlink'
import React from 'react'
import classes from './index.module.scss';

export const Card: React.FC<{
  href?: string
}> = (props) => {
  const {
    href,
    children
  } = props;

  return (
    <Hyperlink
      href={href}
      className={classes.card}
    >
      {children}
    </Hyperlink>
  )
}
