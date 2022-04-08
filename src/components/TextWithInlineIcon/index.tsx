import React, { Fragment } from 'react';
import classes from './index.module.scss';

export const TextWithInlineIcon: React.FC<{
  id?: string
  className?: string
  text: string
  icon: any
  element?: keyof JSX.IntrinsicElements
}> = (props) => {
  const {
    className,
    text,
    icon: Icon,
    element: Element = 'span'
  } = props;

  if (text) {
    const words = text.trim().split(' ');

    return (
      <Element
        className={[
          className,
          classes.textWithInlineIcon,
        ].filter(Boolean).join(' ')}
      >
        {words && words.length > 0 && words.map((word, index) => {
          const isLast = index === words.length - 1;

          return (
            <span
              key={index}
              className={classes.span}
            >
              {!isLast ? (
                <Fragment>
                  {word}
                  &nbsp;
                </Fragment>
              ) : (
                <span className={classes.iconWrapper}>
                  {word}
                  &nbsp;
                  {Icon && React.cloneElement(Icon)}
                </span>
              )}
            </span>
          );
        })}
      </Element>
    );
  }
  return null;
};
