import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';
import { VersionNumber } from '@components/VersionNumber';
import { InstallationCode } from '@components/InstallationCode';
import { CodeBlock } from '@components/CodeBlock';
import { InlineCode } from '@components/InlineCode';
import { Hyperlink } from '@components/Hyperlink';
import Margin from '@components/Margin';

const WindowInfoInstallation = () => {
  return (
    <Fragment>
      <Meta
        title="Window Info installation"
      />
      <div>
        {'Window Info '}
        <VersionNumber
          name="window-info"
          element="span"
        />
      </div>
      <h1>
        Installation
      </h1>
      <Margin bottom="xs">
        <InstallationCode name="window-info" />
      </Margin>
      <h4>
        Basic Setup
      </h4>
      <p>
        First, wrap your app with the provider. This component does not render anything, and should be nearest to the top of your app as possible to encompass any components that need to read from the provided context. This is also where your breakpoints get defined:
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
        {'Then, consume the context however you need. The '}
        <InlineCode>
          useWindowInfo
        </InlineCode>
        {' hook is the most common use case:'}
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
        <Hyperlink
          underline
          href="/docs/window-info/api"
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

WindowInfoInstallation.Layout = DocLayout;

export default WindowInfoInstallation;
