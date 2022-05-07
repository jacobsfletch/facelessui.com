import { Hyperlink } from '@components/Hyperlink';
import React, { useCallback } from 'react';
import classes from './index.module.scss';
import { copyToClipboard } from '@root/utilities/copyToClipboard';
import { useNotifications } from '@root/providers/Notifications';

export const Heading: React.FC<{
  element?: keyof JSX.IntrinsicElements
  as?: string
  margin?: boolean
  marginTop?: boolean
  marginBottom?: boolean
  children: React.ReactNode
  copyToClipboard?: string
  id?: string
  href?: string
}> = (props) => {
  const {
    element: Element = 'h1',
    as,
    children,
    margin,
    marginTop,
    marginBottom,
    copyToClipboard: textToCopy,
    id,
    href
  } = props;

  const { setNotification } = useNotifications();

  const onCopy = useCallback(() => {
    setNotification({
      id: 'copied',
      message: 'Copied to clipboard!'
    })
  }, [setNotification])

  const classList = [
    'heading',
    as && classes[as],
    margin === false && classes.noMargin,
    marginTop === false && classes.noMarginTop,
    marginBottom === false && classes.noMarginBottom,
    textToCopy && classes.canCopy
  ].filter(Boolean).join(' ');

  if (href) {
    return (
      <Element
        id={id}
        className={classList}
      >
        <Hyperlink
          href={href}
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

  return (
    <Element
      id={id}
      className={classList}
    >
      {children}
    </Element>
  )
}
