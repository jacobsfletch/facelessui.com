import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';
import { CodeBlock } from '@components/CodeBlock';
import { InlineCode } from '@components/InlineCode';
import { Hyperlink } from '@components/Hyperlink';
import Margin from '@components/Margin';
import { Heading } from '@components/Heading';
import { InstallationCode } from '@components/InstallationCode';
import { VersionNumber } from '@components/VersionNumber';

const MouseInfoInstallation = () => {
  return (
    <Fragment>
      <Meta
        title="Mouse Info Basic Setup"
      />
      <h4>
        Basic Setup
      </h4>
      <p>
        {'Latest version: '}
        <VersionNumber
          name="mouse-info"
          element='span'
        />
      </p>
      <Margin bottom="xs">
        <Heading
          id="installation"
          href="/docs/mouse-info/setup#installation"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/mouse-info/setup#installation`}
          element='h5'
        >
          Installation
        </Heading>
        <InstallationCode name="mouse-info" />
      </Margin>
      <p>
        First, wrap your app with the provider. This component does not render anything in the DOM, and should be placed nearest to the top of your app as possible to provide context to any components that need it.
      </p>
      <Margin bottom="xs">
        <CodeBlock>
          {`import { MouseInfoProvider } from \'@faceless-ui/mouse-info\';

export const App = () => {
  return (
    <MouseInfoProvider>
      ...
    </MouseInfoProvider>
  )
}`}
        </CodeBlock>
      </Margin>
      <p>
        {'Then consume the context however needed, most commonly with the '}
        <InlineCode>
          useMouseInfo
        </InlineCode>
        {' hook.'}
      </p>
      <Margin bottom="xs">
        <CodeBlock>
          {`import { useMouseInfo } from \'@faceless-ui/mouse-info\';

export const MyComponent = (props) => {
  const mouseInfo = useMouseInfo();
  return (
    ...
  )
}`}
        </CodeBlock>
      </Margin>
      <p>
        {'For more advanced setups, see the full '}
        <Hyperlink
          underline
          href="/docs/mouse-info/api"
        >
          API reference
        </Hyperlink>
        .
      </p>
    </Fragment>
  )
}

const DocLayout = (props: any) => {
  return (
    <Doc
      {...props}
      githubUrl={`${process.env.NEXT_PUBLIC_GITHUB_URL}/window-info/installation.tsx`}
    />
  )
};

MouseInfoInstallation.Layout = DocLayout;

export default MouseInfoInstallation;
