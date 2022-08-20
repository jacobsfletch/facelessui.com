import { Hyperlink, HyperlinkProps } from '@components/Hyperlink';
import React from 'react';
import classes from './index.module.scss';

const CodeTag: React.FC<{
  id?: string
  children: React.ReactNode
}> = (props) => {
  const { id, children } = props;

  return (
    <code
      id={id}
      className={classes.code}
    >
      {children}
    </code>
  )
}

export const InlineCode: React.FC<HyperlinkProps & {
  id?: string
  children: React.ReactNode
}> = (props) => {
  const {
    children,
    id,
    href,
    ...rest
  } = props;

  if (href) {
    return (
      <CodeTag id={id}>
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
    <CodeTag id={id}>
      {children}
    </CodeTag>
  )
}
