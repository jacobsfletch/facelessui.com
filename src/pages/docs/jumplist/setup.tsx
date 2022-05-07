import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';
import { VersionNumber } from '@components/VersionNumber';
import Margin from '@components/Margin';
import { Heading } from '@components/Heading';
import { InstallationCode } from '@components/InstallationCode';
import { InlineCode } from '@components/InlineCode';
import { Hyperlink } from '@components/Hyperlink';
import { CodeBlock } from '@components/CodeBlock';

const JumplistSetup = () => {
  return (
    <Fragment>
      <Meta
        title="Jumplist Basic Setup"
      />
      <h1>
        Basic Setup
      </h1>
      <p>
        {'Latest version: '}
        <VersionNumber
          name="jumplist"
          element='span'
        />
      </p>
      <Margin bottom="xs">
        <Heading
          id="installation"
          href="/docs/jumplist/setup#installation"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/jumplist/setup#installation`}
          element='h5'
        >
          Installation
        </Heading>
        <InstallationCode name="jumplist" />
      </Margin>
      <p>
        {'To track elements as they enter and exit the viewport, you first need to wrap your app with the '}
        <InlineCode>
          <Hyperlink
            underline
            href="/docs/jumplist/api#provider"
          >
            {'<JumplistProvider>'}
          </Hyperlink>
        </InlineCode>
        {'. This does not render anything in the DOM and is where the '}
        <Hyperlink
          href="/docs/jumplist/api#provider-props"
          underline
        >
          global settings
        </Hyperlink>
        {' are defined. This will maintain the state of every jumplist node in your app and provide this state through context. '}
      </p>
      <Margin bottom="xs">
        <CodeBlock>
          {`import React from 'react';
import { JumplistProvider } from \'@faceless-ui/jumplist\';

export const MyApp = () => {
  return (
    <JumplistProvider
      threshold={0.05}
      rootMargin="-100px 0px 0px 0px"
    >
      ...
    </JumplistProvider>
  )
}`}
        </CodeBlock>
      </Margin>
      <p>
        {'Then, use a '}
        <InlineCode>
          <Hyperlink
            underline
            href="/docs/jumplist/api#node"
          >
            {'<JumplistNode>'}
          </Hyperlink>
        </InlineCode>
        {' for every element you want to track. The only required prop of this component is the '}
        <InlineCode>
          nodeID
        </InlineCode>
        {', the unique string identifying each node.'}
      </p>
      <Margin bottom="xs">
        <CodeBlock>
          {`import React from 'react';
import { JumplistNode } from \'@faceless-ui/jumplist\';

export const MyComponent = () => {
  return (
    <div>
      <JumplistNode nodeID="node-1">
        Node 1
      </JumplistNode>
      <JumplistNode nodeID="node-2">
        Node 2
      </JumplistNode>
    </div>
  )
}`}
        </CodeBlock>
      </Margin>
      <p>
        {'Every node is a wrapper around the '}
        <Hyperlink
          href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API"
          newTab
          underline
        >
          Intersection Observer API
        </Hyperlink>
        {', reporting their '}
        <InlineCode>
          isIntersecting
        </InlineCode>
        {' status to the '}
        <InlineCode>
          <Hyperlink
            underline
            href="/docs/jumplist/api#context"
          >
            jumplist context
          </Hyperlink>
        </InlineCode>
        {'. You can access this from anywhere with the '}
        <InlineCode>
          <Hyperlink
            underline
            href="/docs/jumplist/api#useJumplist"
          >
            useJumplist
          </Hyperlink>
        </InlineCode>
        {' hook.'}
      </p>
      <Margin bottom="xs">
        <CodeBlock>
          {`import React from 'react';
import { useJumplist } from \'@faceless-ui/jumplist\';

export const MyComponent = () => {
  const { jumplist } = useJumplist();

  return (
    <div>
      {jumplist.map((node, index) => {
        const { isIntersecting } = node;
        return (
          <div key={index}>
            {\`Node \${index} is intersecting: \${isIntersecting}\`}
          </div>
        )
      })}
    </div>
  )
}`}
        </CodeBlock>
      </Margin>
      <p>
        {'You could also pass a function as a child to the '}
        <InlineCode>
          {'<JumplistNode>'}
        </InlineCode>
        {' to immediately return the context of that node.'}
      </p>
      <Margin bottom="xs">
        <CodeBlock>
          {`import React from 'react';
import { JumplistNode } from \'@faceless-ui/jumplist\';

export const MyComponent = () => {
  return (
    <JumplistNode nodeID="node-1">
      {({ isIntersecting }) => (
        <div>
          {\`Is intersecting: \${isIntersecting}\`}
        </div>
      )}
    </JumplistNode>
  )
}`}
        </CodeBlock>
      </Margin>
    </Fragment>
  )
}

const DocLayout = (props: any) => {
  return (
    <Doc
      {...props}
      githubUrl={`${process.env.NEXT_PUBLIC_GITHUB_URL}/jumplist/setup.tsx`}
    />
  )
};

JumplistSetup.Layout = DocLayout;

export default JumplistSetup;
