import { markdownComponents } from "@root/markdown";
import React from "react";
import ReactMarkdown from 'react-markdown'

export const MarkdownRenderer: React.FC<{
  children?: React.ReactNode
}> = (props) => {
  const {
    children
  } = props;

  if (typeof children === 'string') {
    return (
      <div>
        <ReactMarkdown components={markdownComponents}>
          {children}
        </ReactMarkdown>
      </div>
    )
  }

  return null;
}
