import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';
import { CodeBlock } from '@components/CodeBlock';
import { InlineCode } from '@components/InlineCode';
import { Hyperlink } from '@components/Hyperlink';
import Margin from '@components/Margin';
import { VersionNumber } from '@components/VersionNumber';
import { InstallationCode } from '@components/InstallationCode';

const ModalSetupDoc = () => {
  return (
    <Fragment>
      <Meta
        title="Modal Basic Setup"
      />
      <h4>
        Basic Setup
      </h4>
      <p>
        {'Installation '}
        <VersionNumber
          name="modal"
          element='span'
        />
      </p>
      <Margin bottom="xs">
        <InstallationCode name="modal" />
      </Margin>
      <p>
        First, wrap your app with the provider. This component does not render anything, and should be nearest to the top of your app as possible. This is also where your options are defined:
      </p>
      <Margin bottom="xs">
        <CodeBlock>
          {`import { ModalProvider } from \'@faceless-ui/modal\';

export const App = () => {
  return (
    <ModalProvider
    transTime={250}
    >
      ...
    </ModalProvider>
  )
}`}
        </CodeBlock>
      </Margin>
      <p>
        {'You can also consume the context however you need. The '}
        <InlineCode>
          useModal
        </InlineCode>
        {' hook is the most common use case:'}
      </p>
      <Margin bottom="xs">
        <CodeBlock>
          {`import { useModal } from \'@faceless-ui/modal\';

export const MyComponent = (props) => {
    const modal = useModal();
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
          href="/docs/modal/api"
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
      githubUrl={`${process.env.NEXT_PUBLIC_GITHUB_URL}/modal/setup.tsx`}
    />
  )
};

ModalSetupDoc.Layout = DocLayout;

export default ModalSetupDoc;
