import { CodeBlock } from "@components/CodeBlock";
import { Hyperlink } from "@components/Hyperlink";
import { InlineCode } from "@components/InlineCode";
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
        <ReactMarkdown
          components={{
            code: ({ inline, children }) => {
              // const match = /language-(\w+)/.exec(className || '');

              if (inline) {
                return (
                  <InlineCode>
                    {children}
                  </InlineCode>
                )
              }

              return (
                <CodeBlock>
                  {children.toString()}
                </CodeBlock>
              )
            },
            p: ({ children }) => {
              return (
                <p style={{ margin: 0 }}>
                  {children}
                </p>
              )
            },
            a: ({ href, children }) => {
              return (
                <Hyperlink
                  href={href}
                  newTab
                  underline
                >
                  {children}
                </Hyperlink>
              )
            },
            ul: ({ children }) => {
              return (
                <ul
                  style={{
                    margin: 0,
                    padding: 0,
                    paddingLeft: '20px'
                  }}
                >
                  {children}
                </ul>
              )
            },
            li: ({ children }) => {
              return (
                <li className="li">
                  {children}
                </li>
              )
            },
          }}
        >
          {children}
        </ReactMarkdown>
      </div>
    )
  }

  return null;
}
