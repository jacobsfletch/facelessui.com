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
        {'To start tracking jumplist nodes, you first need to wrap your app with the '}
        <InlineCode>
          <Hyperlink
            underline
            href="/docs/jumplist/api#provider"
          >
            {'<JumplistProvider>'}
          </Hyperlink>
        </InlineCode>
        {'. This does not render anything in the DOM. It will maintains the state of all the jumplist nodes of your app, and provide context that you can access from anywhere in your app.'}
      </p>
      <Margin bottom="xs">
        <CodeBlock>
          {`import React from 'react';
import { JumplistProvider } from \'@faceless-ui/jumplist\';

export const MyApp = () => {
  return (
    <JumplistProvider>
      ...
    </JumplistProvider>
  )
}`}
        </CodeBlock>
      </Margin>
      <p>
        {'Now you can use the '}
        <InlineCode>
          <Hyperlink
            underline
            href="/docs/jumplist/api#node"
          >
            {'<JumplistNode>'}
          </Hyperlink>
        </InlineCode>
        {' component for each item you want to track. The only required prop of this component is the '}
        <InlineCode>
          nodeID
        </InlineCode>
        {' which is a unique string to identify each node.'}
      </p>
      <Margin bottom="xs">
        <CodeBlock>
          {`import React from 'react';
import { JumplistNode } from \'@faceless-ui/jumplist\';

export const MyComponent = () => {
  return (
    <JumplistNode nodeID="my-node">
      <h1>
        Hello, world!
      </h1>
    </JumplistNode>
  )
}`}
        </CodeBlock>
      </Margin>
      <p>
        {'The status of all nodes are collectively tracked in the '}
        <InlineCode>
          jumplist
        </InlineCode>
        {' array provided by the '}
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
            {\`Is intersecting: \${isIntersecting}\`}
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
        {' which will return the node\'s status immediately.'}
      </p>
      <Margin bottom="xs">
        <CodeBlock>
          {`import React from 'react';
import { JumplistNode } from \'@faceless-ui/jumplist\';

export const MyComponent = () => {
  return (
    <JumplistNode nodeID="my-node">
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

JumplistSetup.Layout = Doc;

export default JumplistSetup;
