import { CodeBlock } from "@components/CodeBlock"
import { Hyperlink } from "@components/Hyperlink"
import { InlineCode } from "@components/InlineCode"
import { Components as ReactMarkdownComponents } from "react-markdown"

export const markdownComponents: ReactMarkdownComponents = {
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
  h1: ({ children }) => (
    <h5>
      {children}
    </h5>
  ),
  h2: ({ children }) => (
    <h5>
      {children}
    </h5>
  ),
  h3: ({ children }) => (
    <h5>
      {children}
    </h5>
  ),
  h4: ({ children }) => (
    <h5>
      {children}
    </h5>
  ),
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
}
