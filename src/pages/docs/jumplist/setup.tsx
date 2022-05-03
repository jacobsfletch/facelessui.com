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
        {'. This does not render anything in the DOM and is where the '}
        <Hyperlink
          href="/docs/jumplist/api#provider-props"
          underline
        >
          global settings
        </Hyperlink>
        {' are defined. This will maintain the state of all the jumplist nodes of your app and provide context that you can access from anywhere in your app. '}
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
        {'Now you can use a '}
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
        {' which is a unique string that identifies each node.'}
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
        {'to return to immediately return the context of that individual node.'}
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
