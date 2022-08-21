import { Hyperlink, HyperlinkProps } from '@components/Hyperlink';
import React from 'react';
import classes from './index.module.scss';

const CodeTag: React.FC<{
  id?: string
  children: React.ReactNode
  size?: 'small'
}> = (props) => {
  const {
    id,
    children,
    size
  } = props;

  return (
    <code
      id={id}
      className={[
        classes.code,
        size && classes[`size--${size}`]
      ].filter(Boolean).join(' ')}
    >
      {children}
    </code>
  )
}

export const InlineCode: React.FC<HyperlinkProps & {
  id?: string
  children: React.ReactNode
  size?: 'small'
}> = (props) => {
  const {
    children,
    id,
    href,
    size,
    ...rest
  } = props;

  if (href) {
    return (
      <CodeTag
        id={id}
        size={size}
      >
        <Hyperlink
          href={href}
          underline={Boolean(href)}
          {...rest}
        >
          {children}
        </Hyperlink>
      </CodeTag>
    )
  }

  return (
    <CodeTag
      id={id}
      size={size}
    >
      {children}
    </CodeTag>
  )
}
