import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';
import { CodeBlock } from '@components/CodeBlock';
import { InlineCode } from '@components/InlineCode';
import { Hyperlink } from '@components/Hyperlink';
import Margin from '@components/Margin';
import { VersionNumber } from '@components/VersionNumber';

const ModalSetupDoc = () => {
  return (
    <Fragment>
      <Meta
        title="Modal Basic Setup"
      />
      <h1>
        Basic Setup
      </h1>
      <p>
        {'Latest version: '}
        <VersionNumber
          name="modal"
          element='span'
        />
      </p>
      <p>
        {'First, wrap your app with the provider. This component does not render anything, and should be nearest to the top of your app as possible. This is also where the '}
        <Hyperlink
          href="/docs/modal/api#provider-props"
          underline
        >
          global settings
        </Hyperlink>
        {' are defined. Then anywhere inside of this, render the'}
        <InlineCode >
          {'<ModalContainer>'}
        </InlineCode>
        {'. This is where each modal will be rendered, so its often best to keep this relatively high in your tree.'}
      </p>
      <Margin bottom="xs">
        <CodeBlock>
          {`import { ModalProvider, ModalContainer } from \'@faceless-ui/modal\';

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
        {'To create a modal, render a '}
        <InlineCode>
          {'<Modal>'}
        </InlineCode>
        {' component from anywhere in your app. The only required prop is a unique modal slug.'}
      </p>
      <Margin bottom="xs">
        <CodeBlock>
          {`import { Modal } from \'@faceless-ui/modal\';

export const MyComponent = () => {
  return (
    <Modal slug="my-modal">
      <h1>
        Hello, world!
      </h1>
    </Modal>
  )
}`}
        </CodeBlock>
      </Margin>
      <p>
        {'The simplest way to open and close the modal is to use the '}
        <InlineCode>
          {'<ModalToggler>'}
        </InlineCode>
        {' component. This component takes the slug of any modal and toggles it open or closed based on the current state.'}
      </p>
      <Margin bottom="xs">
        <CodeBlock>
          {`import { ModalToggler } from \'@faceless-ui/modal\';

export const MyComponent = () => {
  return (
    <ModalToggler slug="my-modal">
      Toggle My Modal
    </ModalToggler>
  )
}`}
        </CodeBlock>
      </Margin>
      <p>
        {'If you need to use '}
        <Hyperlink
          underline
          href="/docs/modal/api#context"
        >
          modal context
        </Hyperlink>
        {', the easiest way to do this is with the '}
        <InlineCode>
          useModal
        </InlineCode>
        {' hook.'}
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
