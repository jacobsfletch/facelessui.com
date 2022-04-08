import React from 'react';
import classes from './index.module.scss';

export const Heading: React.FC<{
  element?: keyof JSX.IntrinsicElements
  as?: string
  margin?: boolean
  marginTop?: boolean
  marginBottom?: boolean
}> = (props) => {
  const {
    element: Element = 'h1',
    as,
    children,
    margin,
    marginTop,
    marginBottom
  } = props;

  return (
    <Element
      className={[
        as && classes[as],
        margin === false && classes.noMargin,
        marginTop === false && classes.noMarginTop,
        marginBottom === false && classes.noMarginBottom
      ].filter(Boolean).join(' ')}
    >
      {children}
    </Element>
  )
}
