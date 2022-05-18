import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';
import { Hyperlink } from '@components/Hyperlink';
import Margin from '@components/Margin';
import { CodeBlock } from '@components/CodeBlock';
import { Heading } from '@components/Heading';
import { InlineCode } from '@components/InlineCode';

const MouseInfoAPI = () => {
  return (
    <Fragment>
      <h1>
        Mouse Info API
      </h1>
      <Heading
        id="provider"
        href="/docs/mouse-info/api#provider"
        copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/mouse-info/api#provider`}
        element='h4'
      >
        {'<MouseInfoProvider>'}
      </Heading>
      <Margin bottom="xs">
        <CodeBlock>
          {`import react from 'react';
import MouseInfoProvider from '@faceless-ui/mouse-info;

export const MyApp = () = (
  <MouseInfoProvider>
    ...
  </MouseInfoProvider>
);`}
        </CodeBlock>
      </Margin>
      <Heading
        id="props"
        href="/docs/mouse-info/api#props"
        copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/mouse-info/api#props`}
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
        href="/docs/mouse-info/api#context"
        copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/mouse-info/api#context`}
        element='h5'
      >
        Context
      </Heading>
      <p>
        This section has no content.
      </p>
      <Heading
        id="useMouseInfo"
        href="/docs/mouse-info/api#useMouseInfo"
        copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/mouse-info/api#useMouseInfo`}
        element='h4'
      >
        useMouseInfo
      </Heading>
      <p>
        {'This is a hook you can use to access the '}
        <Hyperlink href="#context">
          context
        </Hyperlink>
        .
      </p>
      <Margin bottom="xs">
        <CodeBlock>
          {`import react from 'react';
import { useMouseInfo } from '@faceless-ui/mouse-info;

export const MyComponent = () => {
  const mouseInfo = useMouseInfo();
  return (
    ...
  )
};`}
        </CodeBlock>
      </Margin>
      <Heading
        id="withMouseInfo"
        href="/docs/mouse-info/api#withMouseInfo"
        copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/mouse-info/api#withMouseInfo`}
        element='h4'
      >
        withMouseInfo
      </Heading>
      <p>
        {'This is a higher-order component you can use to access the '}
        <Hyperlink href="#context">
          context
        </Hyperlink>
        .
      </p>
      <Margin bottom="xs">
        <CodeBlock>
          {`import react from 'react';
import { withMouseInfo } from '@faceless-ui/mouse-info;

export const MyComponent = withMouseInfo((props) => {
  const { mouseInfo } = props;
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
      githubUrl={`${process.env.NEXT_PUBLIC_GITHUB_URL}/mouse-info/api.tsx`}
      pageName="Mouse Info API"
      pageTitle="Mouse Info API"
      metaDescription="API for the Mouse Info package."
    />
  )
};

MouseInfoAPI.Layout = DocLayout;

export default MouseInfoAPI;
