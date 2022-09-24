import { CodeBlock } from "@components/CodeBlock"
import { Heading } from "@components/Heading";
import { Hyperlink } from "@components/Hyperlink";
import { InlineCode } from "@components/InlineCode";
import { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h1: (props) => (
    <Heading
      {...props}
      element="h1"
    />
  ),
  h2: (props) => (
    <Heading
      {...props}
      element="h2"
    />
  ),
  h3: (props) => (
    <Heading
      {...props}
      element="h3"
    />
  ),
  h4: (props) => (
    <Heading
      {...props}
      element="h4"
    />
  ),
  h5: (props) => (
    <Heading
      {...props}
      element="h5"
    />
  ),
  h6: (props) => (
    <Heading
      {...props}
      element="h6"
    />
  ),
  a: ({
    children,
    href
  }) => (
    <Hyperlink href={href}>
      {children}
    </Hyperlink>
  ),
  code: ({
    className,
    children
  }) => {
    const isCodeBlock = className && className.includes('language-');

    if (!isCodeBlock) {
      return (
        <InlineCode>
          {children}
        </InlineCode>
      )
    }

    return (
      <CodeBlock>
        {children}
      </CodeBlock>
    )
  },
  // inlineCode: InlineCode
}
