import Meta from '@components/Meta';
import React, { Fragment, useEffect } from 'react';
import { Doc } from '@root/layout/Doc';
import { JumplistNode, useJumplist } from '@faceless-ui/jumplist';
import { BasicProps } from '@components/BasicProps';
import { InlineCode } from '@components/InlineCode';
import { Hyperlink } from '@components/Hyperlink';
import { jumplistJumplistNav } from '@root/docs-nav';
import { Heading } from '@components/Heading';
import Margin from '@components/Margin';
import { CodeBlock } from '@components/CodeBlock';

const JumplistAPI = () => {
  const {
    setJumplist,
    clearJumplist
  } = useJumplist();

  useEffect(() => {
    const jumplist = jumplistJumplistNav.map((item) => ({ nodeID: item.id || '' }));
    setJumplist(jumplist);
    return () => {
      clearJumplist();
    }
  }, [
    setJumplist,
    clearJumplist
  ])

  return (
    <Fragment>
      <Meta
        title="Jumplist API"
      />
      <h1>
        Jumplist API
      </h1>
      <JumplistNode nodeID="provider">
        <Heading
          id="provider"
          href="/docs/jumplist/api#provider"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/jumplist/api#provider`}
          element='h4'
        >
          {'<JumplistProvider>'}
        </Heading>
        <p>
          The provider is rendered on time at the root of your project. It maintains a list of the intersection status of each jumplist item. Global settings can be controlled here. It has no required props.
        </p>
        <Margin bottom="xs">
          <CodeBlock>
            {`import React from 'react';
import { JumplistProvider } from \'@faceless-ui/jumplist\';

export const MyApp = () => {
  return (
    <JumplistProvider
      threshold={0.5}
      rootMargin="-100px 0px 0px 0px"
    >
      ...
    </JumplistProvider>
  )
}`}
          </CodeBlock>
        </Margin>
        <Heading
          id="provider-props"
          href="/docs/jumplist/api#provider-props"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/jumplist/api#provider-props`}
          element='h5'
        >
          Props
        </Heading>
        <InlineCode>
          rootMargin
        </InlineCode>
        <p>
          {'Optional. The root margin of the intersection observer. See the '}
          <Hyperlink
            href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API"
            newTab
            underline
          >
            Intersection Observer API
          </Hyperlink>
        </p>
        <InlineCode>
          threshold
        </InlineCode>
        <p>
          {'Optional. The threshold of the intersection observer. See the '}
          <Hyperlink
            href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API"
            newTab
            underline
          >
            Intersection Observer API
          </Hyperlink>
        </p>
        <Heading
          id="context"
          href="/docs/jumplist/api#context"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/jumplist/api#context`}
          element='h5'
        >
          Context
        </Heading>
        <InlineCode>
          jumplist
        </InlineCode>
        <p>
          This is an array of jumplist nodes, each with its current intersection status.
        </p>
        <InlineCode>
          clearJumplist
        </InlineCode>
        <p>
          This is a method you can use to erase empty the jumplist array.
        </p>
        <InlineCode>
          rootMargin
        </InlineCode>
        <p>
          This is the same rootMargin you passed into the JumplistProvider.
        </p>
        <InlineCode>
          threshold
        </InlineCode>
        <p>
          This is the same threshold you passed into the JumplistProvider.
        </p>
        <InlineCode>
          currentJumplistIndex
        </InlineCode>
        <p>
          The first-most active jumplist node. Sometimes multiple nodes might be intersecting the viewport simultaneously. Will be -1 if no nodes are intersecting.
        </p>
        <InlineCode>
          activeJumplistIndex
        </InlineCode>
        <p>
          {'This is the most recent jumplist node that has intersected. This is helpful when no nodes are intersecting and the '}
          <InlineCode>
            currentJumplistIndex
          </InlineCode>
          {' is -1. This property is essentially a cached index.'}
        </p>
        <InlineCode>
          setJumplist
        </InlineCode>
        <p>
          A method used to set the jumplist.
        </p>
      </JumplistNode>
      <JumplistNode nodeID="node">
        <Heading
          id="node"
          href="/docs/jumplist/api#node"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/jumplist/api#node`}
          element='h4'
        >
          {'<JumplistNode>'}
        </Heading>
        <p>
          Each jumplist node is a wrapper around Intersection Observer, and syncs its current intersection status to the provider.
        </p>
        <Margin bottom="xs">
          <CodeBlock>
            {`import React from 'react';
import { JumplistNode } from \'@faceless-ui/jumplist\';

export const MyComponent = () => {
  return (
    <div>
      <JumplistNode nodeID="node-1">
        ...
      </JumplistNode>
      <JumplistNode nodeID="node-2">
        ...
      </JumplistNode>
    </div>
  )
}`}
          </CodeBlock>
        </Margin>
        <Heading
          id="node-props"
          href="/docs/jumplist/api#node-props"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/jumplist/api#node-props`}
          element='h5'
        >
          Props
        </Heading>
        <InlineCode>
          nodeID*
        </InlineCode>
        <p>
          Required. A unique string to identify this node.
        </p>
        <BasicProps />
      </JumplistNode>
      <JumplistNode nodeID="useJumplist">
        <Heading
          id="useJumplist"
          href="/docs/jumplist/api#useJumplist"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/jumplist/api#useJumplist`}
          element='h4'
        >
          useJumplist
        </Heading>
        <p>
          {'A hook used to access the '}
          <Hyperlink
            underline
            href="/docs/jumplist/api#context"
          >
            jumplist context
          </Hyperlink>
          {'.'}
        </p>
        <Margin bottom="xs">
          <CodeBlock>
            {`import React from 'react';
import { useJumplist } from \'@faceless-ui/jumplist\';

export const MyComponent = () => {
  const jumplist = useJumplist();

  return (
    ...
  )
}`}
          </CodeBlock>
        </Margin>
      </JumplistNode>
    </Fragment>
  )
}

const DocLayout = (props: any) => {
  return (
    <Doc
      {...props}
      githubUrl={`${process.env.NEXT_PUBLIC_GITHUB_URL}/jumplist/api.tsx`}
    />
  )
};

JumplistAPI.Layout = DocLayout;

export default JumplistAPI;
