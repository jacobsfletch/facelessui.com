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
        element="h2"
        as="h4"
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
        element="h3"
        as="h5"
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
        element="h3"
        as="h5"
      >
        Context
      </Heading>
      <p>
        This section has no content.
      </p>
      <Heading
        id="useMouseInfo"
        href="/docs/mouse-info/api#useMouseInfo"
        element="h2"
        as="h4"
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
        element="h2"
        as="h4"
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
      <Heading
        id="typescript"
        href="/docs/mouse-info/api#typescript"
        element="h2"
        as="h4"
      >
        TypeScript
      </Heading>
      <p>
        All types can be directly imported
      </p>
      <CodeBlock>{`import {
  MouseInfoProviderProps,
  MouseInfoProps,
  IMouseInfoContext
} from '@faceless-ui/mouse-info/dist/types';`}
      </CodeBlock>
    </Fragment>
  )
}

const DocLayout = (props: any) => {
  return (
    <Doc
      {...props}
      githubUrl={`/mouse-info/api.tsx`}
      metaTitle="Mouse Info API"
      metaDescription="API documentation for the @faceless-ui/mouse-info npm module."
      metaURL="/docs/mouse-info/api"
    />
  )
};

MouseInfoAPI.Layout = DocLayout;

export default MouseInfoAPI;
