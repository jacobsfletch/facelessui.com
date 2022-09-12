import { Hyperlink } from '@components/Hyperlink'
import { ArrowIcon } from '@root/icons/Arrow';
import { useCustomCursor } from '@root/providers/CustomCursorProvider';
import React from 'react'
import { CardBackground } from './Background';
import classes from './index.module.scss';

export const Card: React.FC<{
  href?: string
  title?: string
  leader?: JSX.Element
  description?: string
  forceDark?: boolean
}> = (props) => {
  const {
    href,
    leader,
    title,
    description,
    forceDark
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
      <CardBackground
        className={classes.cardContent}
        forceDark={forceDark}
      >
        {leader && (
          <div className={classes.leader}>
            {leader}
          </div>
        )}
        {title && (
          <h2 className={classes.title}>
            {title}
          </h2>
        )}
        <p className={classes.description}>
          {description}
        </p>
        <div className={classes.cta}>
          <span className={classes.ctaText}>
            Documentation&nbsp;
          </span>
          <span className={classes.ctaIcon}>
            <ArrowIcon size="small" />
          </span>
        </div>
      </CardBackground>
    </Hyperlink>
  )
}
