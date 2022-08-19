import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';
import { CodeBlock } from '@components/CodeBlock';
import { InlineCode } from '@components/InlineCode';
import { Hyperlink } from '@components/Hyperlink';
import Margin from '@components/Margin';
import { Heading } from '@components/Heading';
import { InstallationCode } from '@components/InstallationCode';
import { VersionNumber } from '@components/VersionNumber';

const WindowInfoInstallation = () => {
  return (
    <Fragment>
      <h4>
        Basic Setup
      </h4>
      <p>
        {'Latest version: '}
        <VersionNumber name="window-info" />
      </p>
      <Margin bottom="xs">
        <Heading
          id="installation"
          href="/docs/window-info/setup#installation"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/window-info/setup#installation`}
          element='h5'
        >
          Installation
        </Heading>
        <InstallationCode name="window-info" />
      </Margin>
      <p>
        First, wrap your app with the provider. This component does not render anything in the DOM, and should be placed nearest to the top of your app as possible to provide context to any components that need it. This is also where your breakpoints get defined.
      </p>
      <Margin bottom="xs">
        <CodeBlock>
          {`import { WindowInfoProvider } from \'@faceless-ui/window-info\';

export const App = () => {
  return (
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
  )
}`}
        </CodeBlock>
      </Margin>
      <p>
        {'Then consume the context however needed, most commonly with the '}
        <InlineCode>
          useWindowInfo
        </InlineCode>
        {' hook.'}
      </p>
      <Margin bottom="xs">
        <CodeBlock>
          {`import { useWindowInfo } from \'@faceless-ui/window-info\';

export const MyComponent = (props) => {
    const windowInfo = useWindowInfo();
    return (
      ...
    );
}`}
        </CodeBlock>
      </Margin>
      <p>
        {'For more advanced setups, see the full '}
        <Hyperlink href="/docs/window-info/api">
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
      metaTitle="Window Info Setup"
      metaDescription="Basic setup for the Window Info package."
    />
  )
};

WindowInfoInstallation.Layout = DocLayout;

export default WindowInfoInstallation;
