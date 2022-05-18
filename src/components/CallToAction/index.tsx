import React from 'react';
import classes from './index.module.scss';
import { BlockContainer } from '@root/layout/BlockContainer';
import { Hyperlink } from '@components/Hyperlink';
import { useCustomCursor } from '@root/providers/CustomCursorProvider';
import { useDarkMode } from '@root/providers/DarkMode';

export const CallToAction: React.FC<{
  className?: string
}> = (props) => {
  const {
    className
  } = props;

  const {
    setHighlightCursor
  } = useCustomCursor()

  const { isDark } = useDarkMode();

  return (
    <div
      className={[
        className,
        classes.callToAction,
        isDark && classes.isDark
      ].filter(Boolean).join(' ')}
    >
      <BlockContainer>
        <Hyperlink
          href="/docs/getting-started"
          underline={false}
          className={classes.link}
          onMouseEnter={() => setHighlightCursor(true)}
          onMouseLeave={() => setHighlightCursor(false)}
        >
          <div className={classes.background}>
            <div className={classes.backgroundColor} />
          </div>
          <div className={classes.content} >
            <div className={classes.title}>
              Do it
            </div>
          </div>
        </Hyperlink>
      </BlockContainer>
    </div >
  )
}
