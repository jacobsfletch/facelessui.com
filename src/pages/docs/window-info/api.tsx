import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';
import { InlineCode } from '@components/InlineCode';
import { CodeBlock } from '@components/CodeBlock';
import { Hyperlink } from '@components/Hyperlink';
import Margin from '@components/Margin';

const WindowInfoAPI = () => {
  return (
    <Fragment>
      <Meta
        title="Window Info API"
      />
      <h1>
        Window Info API
      </h1>
      <h4>
        Provider
      </h4>
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
      <p id="props">
        <b>
          Props:
        </b>
      </p>
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
      <p id="context">
        <b>
          Context:
        </b>
      </p>
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
      <h4>
        useWindowInfo
      </h4>
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
      <h4>
        withWindowInfo
      </h4>
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
