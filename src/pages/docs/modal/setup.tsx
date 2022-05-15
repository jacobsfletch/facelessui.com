import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';
import { CodeBlock } from '@components/CodeBlock';
import { InlineCode } from '@components/InlineCode';
import { Hyperlink } from '@components/Hyperlink';
import Margin from '@components/Margin';
import { VersionNumber } from '@components/VersionNumber';
import { Heading } from '@components/Heading';
import { InstallationCode } from '@components/InstallationCode';

const ModalSetupDoc = () => {
  return (
    <Fragment>
      <h1>
        Basic Setup
      </h1>
      <p>
        {'Latest version: '}
        <VersionNumber
          name="modal"
        />
      </p>
      <Margin bottom="xs">
        <Heading
          id="installation"
          href="/docs/modal/setup#installation"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/modal/setup#installation`}
          element='h5'
        >
          Installation
        </Heading>
        <InstallationCode name="modal" />
      </Margin>
      <p>
        {'First, wrap your app with the provider. This component does not render anything and should be nearest to the top of your app as possible. This is where the '}
        <Hyperlink
          href="/docs/modal/api#provider-props"
          underline
        >
          global settings
        </Hyperlink>
        {' are defined.'}
      </p>
      <p>
        {'Anywhere inside of this, render the'}
        <InlineCode>
          <Hyperlink
            underline
            href="/docs/modal/api#container"
          >
            {'<ModalContainer>'}
          </Hyperlink>
        </InlineCode>
        {'. This is where each modal will portal into so its best to keep this relatively high in your tree.'}
      </p>
      <Margin bottom="xs">
        <CodeBlock>
          {`import React from 'react';
import { ModalProvider, ModalContainer } from \'@faceless-ui/modal\';

export const MyApp = () => {
  return (
    <ModalProvider transTime={250}>
      <ModalContainer />
    </ModalProvider>
  )
}`}
        </CodeBlock>
      </Margin>
      <p>
        {'Now to create a modal, render a '}
        <InlineCode>
          <Hyperlink
            underline
            href="/docs/modal/api#modal"
          >
            {'<Modal>'}
          </Hyperlink>
        </InlineCode>
        {' component anywhere in your app. The only required prop is the unique '}
        <InlineCode>
          slug
        </InlineCode>
        {' that identifies this modal. The simplest way to open and close the modal is to use the '}
        <InlineCode>
          <Hyperlink
            underline
            href="/docs/modal/api#toggler"
          >
            {'<ModalToggler>'}
          </Hyperlink>
        </InlineCode>
        {' component. This component takes the slug of any modal and toggles it open or closed based on the current state of that modal.'}
      </p>
      <Margin bottom="xs">
        <CodeBlock>
          {`import React from 'react';
import { Modal, ModalToggler } from \'@faceless-ui/modal\';

export const MyComponent = () => {
  return (
    <div>
      <Modal slug="my-modal">
        <h1>
          Hello, world!
        </h1>
      </Modal>
      <ModalToggler slug="my-modal">
        Toggle
      </ModalToggler>
    </div>
  )
}`}
        </CodeBlock>
      </Margin>
      <p>
        {'Alternatively, you could build your own button. To do this, the '}
        <InlineCode>
          toggle
        </InlineCode>
        {' method  can be directly accessed from the '}
        <Hyperlink
          underline
          href="/docs/modal/api#context"
        >
          modal context
        </Hyperlink>
        {' with the '}
        <InlineCode>
          <Hyperlink
            underline
            href="/docs/modal/api#useModal"
          >
            useModal
          </Hyperlink>
        </InlineCode>
        {' hook.'}
      </p>
      <Margin bottom="xs">
        <CodeBlock>
          {`import React from 'react';
import { useModal } from \'@faceless-ui/modal\';

export const MyComponent = (props) => {
    const { toggle } = useModal();

    return (
      <button
        onClick={() => toggle('my-modal')}
        type="button"
      >
        Toggle
      </button>
    );
}`}
        </CodeBlock>
      </Margin>
      <p>
        {'It is also possible to open and close modals with the URL or your router, see '}
        <Hyperlink
          href="/docs/modal/routing"
          underline
        >
          Routing
        </Hyperlink>
        {' for full details. For more advanced setups, see the full '}
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
      pageName="Modal Setup"
    />
  )
};

ModalSetupDoc.Layout = DocLayout;

export default ModalSetupDoc;
