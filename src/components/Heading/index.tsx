import { Hyperlink } from '@components/Hyperlink';
import React, { useCallback } from 'react';
import classes from './index.module.scss';
import { copyToClipboard } from '@root/utilities/copyToClipboard';
import { useNotifications } from '@root/providers/Notifications';
import kebabCase from "lodash.kebabcase";

export const Heading: React.FC<{
  element?: keyof JSX.IntrinsicElements
  as?: string
  margin?: boolean
  marginTop?: boolean
  marginBottom?: boolean
  children?: React.ReactNode
  id?: string
  href?: string
  className?: string
}> = (props) => {
  const {
    element: Element = 'h1',
    as,
    children,
    margin,
    marginTop,
    marginBottom,
    id: idFromProps,
    href: hrefFromProps,
    className
  } = props;

  const kebab = kebabCase(children as string);
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
  const textToCopy = `${process.env.NEXT_PUBLIC_APP_URL}${pathname}#${kebab}`;

  const { setNotification } = useNotifications();

  const onCopy = useCallback(() => {
    setNotification({
      id: 'copied',
      message: 'Copied to clipboard!'
    })
  }, [setNotification])

  return (
    <Element
      id={idFromProps || kebab}
      className={[
        className,
        'heading',
        as && classes[as],
        margin === false && classes.noMargin,
        marginTop === false && classes.noMarginTop,
        marginBottom === false && classes.noMarginBottom,
        textToCopy && classes.canCopy
      ].filter(Boolean).join(' ')}
    >
      <Hyperlink
        href={hrefFromProps || `#${kebab}`}
        underline={false}
        onClick={() => {
          if (textToCopy) {
            copyToClipboard(textToCopy, onCopy);
          }
        }}
        className={classes.headingAnchor}
      >
        {textToCopy && (
          <span className={classes.hashMark}>
            #
          </span>
        )}
        {children}
      </Hyperlink>
    </Element>
  )
}
