import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';
import Margin from '@components/Margin';
import { CodeBlock } from '@components/CodeBlock';
import { Hyperlink } from '@components/Hyperlink';
import { InlineCode } from '@components/InlineCode';
import { Heading } from '@components/Heading';

const ScrollInfoAPI = () => {
  return (
    <Fragment>
      <Meta
        title="Scroll Info API"
      />
      <h1>
        Scroll Info API
      </h1>
      <Heading
        id="provider"
        href="/docs/scroll-info/api#provider"
        copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/scroll-info/api#provider`}
        element='h4'
      >
        {'<ScrollInfoProvider>'}
      </Heading>
      <Margin bottom="xs">
        <CodeBlock>
          {`import react from 'react';
import ScrollInfoProvider from '@faceless-ui/scroll-info;

export const MyApp = () = (
  <ScrollInfoProvider>
    ...
  </ScrollInfoProvider>
);`}
        </CodeBlock>
      </Margin>
      <Heading
        id="props"
        href="/docs/scroll-info/api#props"
        copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/scroll-info/api#props`}
        element='h5'
      >
        Props
      </Heading>
      <InlineCode>
        children
      </InlineCode>
      <p>
        React children.
      </p>
      <Heading
        id="context"
        href="/docs/scroll-info/api#context"
        copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/scroll-info/api#context`}
        element='h5'
      >
        Context
      </Heading>
      <InlineCode>
        x
      </InlineCode>
      <p>
        Current scroll position along the x axis
      </p>
      <InlineCode>
        y
      </InlineCode>
      <p>
        Current scroll position along the y axis
      </p>
      <InlineCode>
        xDifference
      </InlineCode>
      <p>
        Last number of pixels scrolled along the x-axis
      </p>
      <InlineCode>
        yDifference
      </InlineCode>
      <p>
        Last number of pixels scrolled along the y-axis
      </p>
      <InlineCode>
        xPercentage
      </InlineCode>
      <p>
        Percentage scrolled along the x-axis
      </p>
      <InlineCode>
        yPercentage
      </InlineCode>
      <p>
        Percentage scrolled along the y-axis
      </p>
      <InlineCode>
        totalPercentage
      </InlineCode>
      <p>
        Percentage scrolled along the both and x and y axes
      </p>
      <InlineCode>
        eventsFired
      </InlineCode>
      <p>
        Number of animation frames completed.
      </p>
      <Heading
        id="useScrollInfo"
        href="/docs/scroll-info/api#useScrollInfo"
        copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/scroll-info/api#useScrollInfo`}
        element='h4'
      >
        useScrollInfo
      </Heading>
      <p>
        {'This is a hook you can use to access the '}
        <Hyperlink
          href={`/docs/scroll-info/api#context`}
          underline
        >
          context
        </Hyperlink>
        .
      </p>
      <Margin bottom="xs">
        <CodeBlock>
          {`import react from 'react';
import { useScrollInfo } from '@faceless-ui/scroll-info;

export const MyComponent = () => {
  const scrollInfo = useScrollInfo();
  return (
    ...
  )
};`}
        </CodeBlock>
      </Margin>
      <Heading
        id="withScrollInfo"
        href="/docs/scroll-info/api#withScrollInfo"
        copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/scroll-info/api#withScrollInfo`}
        element='h4'
      >
        withScrollInfo
      </Heading>
      <p>
        {'This is a higher-order component you can use to access the '}
        <Hyperlink
          href={`/docs/scroll-info/api#context`}
          underline
        >
          context
        </Hyperlink>
        .
      </p>
      <Margin bottom="xs">
        <CodeBlock>
          {`import react from 'react';
import { withScrollInfo } from '@faceless-ui/scroll-info;

export const MyComponent = withScrollInfo((props) => {
  const { scrollInfo } = props;
  return (
    ...
  )
};`}
        </CodeBlock>
      </Margin>
    </Fragment>
  )
}

const DocLayout = (props: any) => {
  return (
    <Doc
      {...props}
      githubUrl={`${process.env.NEXT_PUBLIC_GITHUB_URL}/scroll-info/api.tsx`}
    />
  )
};

ScrollInfoAPI.Layout = DocLayout;

export default ScrollInfoAPI;
