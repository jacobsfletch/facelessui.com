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
import { PropName } from '@components/PropName';

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
          {'Wrap your app with this component. It has no required props and renders nothing in the DOM. It provides context for all the components and hooks to work together. This is where the global '}
          <InlineCode
            href="#provider-props"
            underline
          >
            jumplist settings
          </InlineCode>
          {'  are defined.'}
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
        <PropName
          name="rootMargin"
          type="string"
        />
        <p>
          {'The root margin of the intersection observer. See the '}
          <Hyperlink
            href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API"
            newTab
            underline
          >
            Intersection Observer API
          </Hyperlink>
          {'.'}
        </p>
        <PropName
          name="threshold"
          type="string"
        />
        <p>
          {'The threshold of the intersection observer. See the '}
          <Hyperlink
            href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API"
            newTab
            underline
          >
            Intersection Observer API
          </Hyperlink>
          {'.'}
        </p>
        <PropName
          name="smoothScroll"
          type="boolean"
        />
        <p>
          {'Will inject '}
          <InlineCode>
            {'html: { scroll-behavior: smooth; }'}
          </InlineCode>
          {' as inline CSS onto the root html element of your DOM. See '}
          <Hyperlink
            href={`${process.env.NEXT_PUBLIC_APP_URL}/docs/jumplist/setup#smooth-scroll`}
            underline
          >
            smooth-scrolling
          </Hyperlink>
          {' for more details. Defaults to '}
          <InlineCode>
            true
          </InlineCode>
          {'.'}
        </p>
        <Heading
          id="context"
          href="/docs/jumplist/api#context"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/jumplist/api#context`}
          element='h5'
        >
          Context
        </Heading>
        <PropName
          name="jumplist"
          type="array"
          isContextProp
        />
        <p>
          {'This is an array of jumplist nodes, each with its '}
          <InlineCode>
            <Hyperlink
              underline
              href="/docs/jumplist/api#isIntersecting"
            >
              isIntersecting
            </Hyperlink>
          </InlineCode>
          {' status.'}
        </p>
        <PropName
          name="clearJumplist()"
          type="method"
          isContextProp
        />
        <p>
          This is a method you can use to empty the jumplist array.
        </p>
        <PropName
          name="rootMargin"
          type="string"
          isContextProp
        />
        <p>
          {'The same '}
          <InlineCode>
            <Hyperlink
              underline
              href="/docs/jumplist/api#rootMargin"
            >
              rootMargin
            </Hyperlink>
          </InlineCode>
          {' passed to the provider.'}
        </p>
        <PropName
          name="threshold"
          type="string"
          isContextProp
        />
        <p>
          {'The same '}
          <InlineCode>
            <Hyperlink
              underline
              href="/docs/jumplist/api#threshold"
            >
              threshold
            </Hyperlink>
          </InlineCode>
          {' passed to the provider.'}
        </p>
        <PropName
          name="currentJumplistIndex"
          type="number"
          isContextProp
        />
        <p>
          {'The first-most active jumplist node. Sometimes multiple nodes might be intersecting the viewport simultaneously. Is '}
          <InlineCode>
            -1
          </InlineCode>
          {' if no nodes are intersecting.'}
        </p>
        <PropName
          name="activeJumplistIndex"
          type="number"
          isContextProp
        />
        <p>
          {'The most recent jumplist node that has intersected. This is helpful when no nodes are intersecting and the '}
          <InlineCode>
            <Hyperlink
              underline
              href="/docs/jumplist/api#currentJumplistIndex"
            >
              currentJumplistIndex
            </Hyperlink>
          </InlineCode>
          {' is '}
          <InlineCode>
            -1
          </InlineCode>
          {'. This property is essentially a cached index.'}
        </p>
        <PropName
          name="setJumplist(jumplist: array)"
          type="method"
          isContextProp
        />
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
          {'Each jumplist node is a wrapper around the '}
          <Hyperlink
            newTab
            underline
            href='https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API'
          >
            Intersection Observer API
          </Hyperlink>
          {', and syncs its '}
          <InlineCode >
            isIntersecting
          </InlineCode>
          {' status to the provider.'}
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
        <PropName
          name="nodeID"
          required
          type="string"
        />
        <p>
          A unique string to identify this node.
        </p>
        <BasicProps />
      </JumplistNode>
      <JumplistNode nodeID="button">
        <Heading
          id="button"
          href="/docs/jumplist/api#button"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/jumplist/api#button`}
          element='h4'
        >
          {'<JumplistButton>'}
        </Heading>
        <p>
          {'The jumplist button is a simple wrapper around the '}
          <InlineCode
            underline
            href="#useJumplist"
          >
            useJumplist
          </InlineCode>
          {' hook, to quickly scroll to the previous or next node in the jumplist.'}
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
        <PropName
          name="nodeID"
          required
          type="string"
        />
        <p>
          A unique string to identify this node.
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
      pageName="Jumplist API"
      pageTitle="Jumplist API"
      metaDescription="API for the Jumplist package."
    />
  )
};

JumplistAPI.Layout = DocLayout;

export default JumplistAPI;
