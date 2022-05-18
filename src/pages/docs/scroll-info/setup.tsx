import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';
import { Hyperlink } from '@components/Hyperlink';
import { CodeBlock } from '@components/CodeBlock';
import { InlineCode } from '@components/InlineCode';
import Margin from '@components/Margin';
import { Heading } from '@components/Heading';
import { InstallationCode } from '@components/InstallationCode';
import { VersionNumber } from '@components/VersionNumber';

const ScrollInfoInstallation = () => {
  return (
    <Fragment>
      <h4>
        Basic Setup
      </h4>
      <p>
        {'Latest version: '}
        <VersionNumber
          name="scroll-info"
        />
      </p>
      <Margin bottom="xs">
        <Heading
          id="installation"
          href="/docs/scroll-info/setup#installation"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/scroll-info/setup#installation`}
          element='h5'
        >
          Installation
        </Heading>
        <InstallationCode name="scroll-info" />
      </Margin>
      <p>
        First, wrap your app with the provider. This component does not render anything in the DOM, and should be placed nearest to the top of your app as possible to provide context to any components that need it.
      </p>
      <Margin bottom="xs">
        <CodeBlock>
          {`import { ScrollInfoProvider } from \'@faceless-ui/scroll-info\';

export const App = () => {
  return (
    <ScrollInfoProvider>
      ...
    </ScrollInfoProvider>
  )
}`}
        </CodeBlock>
      </Margin>
      <p>
        {'Then consume the context however needed, most commonly with the '}
        <InlineCode>
          useScrollInfo
        </InlineCode>
        {' hook.'}
      </p>
      <Margin bottom="xs">
        <CodeBlock>
          {`import { useScrollInfo } from \'@faceless-ui/scroll-info\';

export const MyComponent = (props) => {
    const scrollInfo = useScrollInfo();
    return (
      ...
    );
}`}
        </CodeBlock>
      </Margin>
      <p>
        {'For more advanced setups, see the full '}
        <Hyperlink href="/docs/scroll-info/api">
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
      githubUrl={`${process.env.NEXT_PUBLIC_GITHUB_URL}/scroll-info/installation.tsx`}
      pageName="Scroll Info Setup"
      pageTitle="Scroll Info Setup"
      metaDescription="Basic setup for the Scroll Info package."
    />
  )
};

ScrollInfoInstallation.Layout = DocLayout;

export default ScrollInfoInstallation;
