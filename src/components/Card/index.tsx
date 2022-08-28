import { Hyperlink } from '@components/Hyperlink'
import { useCustomCursor } from '@root/providers/CustomCursorProvider';
import React from 'react'
import classes from './index.module.scss';

export const Card: React.FC<{
  href?: string
  title?: string
  leader?: JSX.Element
  description?: string
}> = (props) => {
  const {
    href,
    leader,
    title,
    description
  } = props;

  const { setHighlightCursor } = useCustomCursor();

  return (
    <Hyperlink
      href={href}
      className={classes.card}
      onMouseEnter={() => { setHighlightCursor(true) }}
      onMouseLeave={() => { setHighlightCursor(false) }}
      underline={false}
    >
      {leader && (
        <div className={classes.leader}>
          {leader}
        </div>
      )}
      {title && (
        <h5 className={classes.title}>
          {title}
        </h5>
      )}
      {description && (
        <p className={classes.description}>
          {description}
        </p>
      )}
    </Hyperlink>
  )
}
