import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';
import { InlineCode } from '@components/InlineCode';
import { CodeBlock } from '@components/CodeBlock';
import { Hyperlink } from '@components/Hyperlink';
import Margin from '@components/Margin';
import { Heading } from '@components/Heading';

const WindowInfoAPI = () => {
  return (
    <Fragment>
      <Meta
        title="Window Info API"
      />
      <h1>
        Window Info API
      </h1>
      <Heading
        id="provider"
        href="/docs/window-info/api#provider"
        copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/window-info/api#provider`}
        element='h4'
      >
        Provider
      </Heading>
      <Margin bottom="xs">
        <CodeBlock>
          {`import react from 'react';
import WindowInfoProvider from '@faceless-ui/window-info';

export const MyApp = () = (
  <WindowInfoProvider
    breakpoints={{
      s: '(max-width: 768px)',
      m: '(max-width: 1024px)',
      l: '(max-width: 1680px)',
      xl: '(max-width: 1920px)',
    }}
  >
    ...
  </WindowInfoProvider>
);`}
        </CodeBlock>
      </Margin>
      <Heading
        id="props"
        href="/docs/window-info/api#props"
        copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/window-info/api#props`}
        element='h5'
      >
        Props
      </Heading>
      <InlineCode>
        breakpoints
      </InlineCode>
      <p>
        An object of named css-queries.
      </p>
      <InlineCode>
        children
      </InlineCode>
      <p>
        React children.
      </p>
      <Heading
        id="context"
        href="/docs/window-info/api#context"
        copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/window-info/api#context`}
        element='h5'
      >
        Context
      </Heading>
      <InlineCode>
        width
      </InlineCode>
      <p>
        Window width.
      </p>
      <InlineCode>
        height
      </InlineCode>
      <p>
        Window height.
      </p>
      <InlineCode>
        --vw
      </InlineCode>
      <p>
        A CSS variable representing the viewport width.
      </p>
      <InlineCode>
        --vh
      </InlineCode>
      <p>
        A CSS variable representing the viewport height.
      </p>
      <InlineCode>
        breakpoints
      </InlineCode>
      <p>
        An object representing the results of your breakpoints.
      </p>
      <InlineCode>
        eventsFired
      </InlineCode>
      <p>
        Number of animation frames completed.
      </p>
      <Heading
        id="useWindowInfo"
        href="/docs/window-info/api#useWindowInfo"
        copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/window-info/api#useWindowInfo`}
        element='h4'
      >
        useWindowInfo
      </Heading>
      <p>
        {'This is a hook you can use to access the '}
        <Hyperlink
          href={`/docs/window-info/api#context`}
          underline
        >
          context
        </Hyperlink>
        .
      </p>
      <Margin bottom="xs">
        <CodeBlock>
          {`import react from 'react';
import { useWindowInfo } from '@faceless-ui/window-info;

export const MyComponent = () => {
  const windowInfo = useWindowInfo();
  return (
    ...
  )
};`}
        </CodeBlock>
      </Margin>
      <Heading
        id="withWindowInfo"
        href="/docs/window-info/api#withWindowInfo"
        copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/window-info/api#withWindowInfo`}
        element='h4'
      >
        withWindowInfo
      </Heading>
      <p>
        {'This is a higher-order component you can use to access the '}
        <Hyperlink
          href={`/docs/window-info/api#context`}
          underline
        >
          context
        </Hyperlink>
        .
      </p>
      <Margin bottom="xs">
        <CodeBlock>
          {`import react from 'react';
import { withWindowInfo } from '@faceless-ui/window-info;

export const MyComponent = withWindowInfo((props) => {
  const { windowInfo } = props;
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
      githubUrl={`${process.env.NEXT_PUBLIC_GITHUB_URL}/window-info/api.tsx`}
    />
  )
};

WindowInfoAPI.Layout = DocLayout;

export default WindowInfoAPI;
