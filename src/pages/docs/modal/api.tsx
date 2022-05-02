import Meta from '@components/Meta';
import React, { Fragment, useEffect } from 'react';
import { Doc } from '@root/layout/Doc';
import { InlineCode } from '@components/InlineCode';
import { CodeBlock } from '@components/CodeBlock';
import { Hyperlink } from '@components/Hyperlink';
import Margin from '@components/Margin';
import { JumplistNode } from '@faceless-ui/jumplist';
import { useJumplist } from '@faceless-ui/jumplist';
import { modalJumplistNav } from '@root/docs-nav';
import { BasicProps } from '@components/BasicProps';
import { Heading } from '@components/Heading';

const ModalAPI = () => {
  const {
    setJumplist,
    clearJumplist
  } = useJumplist();

  useEffect(() => {
    const jumplist = modalJumplistNav.map((item) => ({ nodeID: item.id || '' }));
    setJumplist(jumplist);
    return () => {
      clearJumplist();
    }
  }, [
    setJumplist,
    clearJumplist
  ])

  return (
    <Fragment>
      <Meta
        title="Modal API"
      />
      <h1>
        Modal API
      </h1>
      <JumplistNode nodeID="provider">
        <Heading
          id="provider"
          href="/docs/modal/api#provider"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/modal/api#provider`}
          element='h4'
        >
          {'<ModalProvider>'}
        </Heading>
        <p>
          This provides context for all the components and hooks to work together. The context includes properties and methods used to read and interact with the modal state. Render it one time in the top-level of your app. It does not have any required props.
        </p>
        <Margin bottom="xs">
          <CodeBlock>
            {`import react from 'react';
import { ModalProvider } from '@faceless-ui/modal;

export const MyApp = () = (
  <ModalProvider>
    ...
  </ModalProvider>
);`}
          </CodeBlock>
        </Margin>
        <Heading
          id="provider-props"
          href="/docs/modal/api#provider-props"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/modal/api#provider-props`}
          element='h5'
        >
          Props
        </Heading>
        <InlineCode id="zIndex">
          zIndex
        </InlineCode>
        <p>
          {'Applies z-index to the '}
          <Hyperlink
            href="#modal-container"
            underline
            colored
          >
            Modal Container
          </Hyperlink>
          {'. If '}
          <InlineCode >
            generateCSS
          </InlineCode>
          {' is false, this prop is ignored. '}
        </p>
        <InlineCode id="transTime">
          transTime
        </InlineCode>
        <p>
          The transition duration of modals and the modal container, in milliseconds.
        </p>
        <InlineCode id="handleParamChange">
          handleParamChange
        </InlineCode>
        <p>
          {'If true, will set and reset the '}
          <InlineCode>
            ?modal=
          </InlineCode>
          {' URL parameter using '}
          <Hyperlink
            href="https://developer.mozilla.org/en-US/docs/Web/API/History/pushState"
            newTab
            underline
            colored
          >
            pushState
          </Hyperlink>
          {' from the '}
          <Hyperlink
            href="https://developer.mozilla.org/en-US/docs/Web/API/History_API"
            newTab
            underline
            colored
          >
            History API
          </Hyperlink>
          {'. If sent a callback, will execute your function with a slug for you to process.'}
        </p>
        <InlineCode id="classPrefix">
          classPrefix
        </InlineCode>
        <p>
          Send a string to prepend onto every class name, useful for unique namespacing within complex stylesheets. Set to false to disable.
        </p>
        <InlineCode id="generateCSS">
          generateCSS
        </InlineCode>
        <p>
          Generates a tiny CSS stylesheet (~650B) to render at the root of the provider. Used for positioning and transition timing, not visual styling. Relevant to the vast majority of use cases. True by default.
        </p>
        <InlineCode id="minifyCSS">
          minifyCSS
        </InlineCode>
        <p>
          {'Minifies the result of '}
          <InlineCode >
            generateCSS
          </InlineCode>
        </p>
        <Heading
          id="context"
          href="/docs/modal/api#context"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/modal/api#context`}
          element='h5'
        >
          Context
        </Heading>
        <InlineCode id="containerRef">
          containerRef
        </InlineCode>
        <p>
          {'The container that each modal will portal into, used by '}
          <Hyperlink
            href="#modal-container"
            underline
            colored
          >
            Modal Container
          </Hyperlink>
          .
        </p>
        <InlineCode id="setContainerRef">
          setContainerRef
        </InlineCode>
        <p>
          {'Used by '}
          <Hyperlink
            href="#modal-container"
            underline
            colored
          >
            Modal Container
          </Hyperlink>
          {' to populate `containerRef` on mount.'}
        </p>
        <InlineCode id="oneIsOpen">
          oneIsOpen
        </InlineCode>
        <p>
          {'True when '}
          <Hyperlink
            href="#currentModal"
            underline
            colored
          >
            currentModal
          </Hyperlink>
          {' has value. Triggers transition states on the '}
          <Hyperlink
            href="#modal-container"
            underline
            colored
          >
            Modal Container
          </Hyperlink>
          .
        </p>
        <InlineCode id="currentModal">
          currentModal
        </InlineCode>
        <p>
          {'Slug of the currently open modal, or the '}
          <InlineCode>
            ?modal=
          </InlineCode>
          {' URL parameter on load (valid or not). Each modal compares its slug with this value to determine its open status.'}
        </p>
        <InlineCode id="closeAll">
          closeAll
        </InlineCode>
        <p>
          {'Resets '}
          <Hyperlink
            href="#currentModal"
            underline
            colored
          >
            currentModal
          </Hyperlink>
          {' and '}
          <Hyperlink
            href="#oneIsOpen"
            underline
            colored
          >
            oneIsOpen
          </Hyperlink>
          {'. Will either remove modal from the URL parameters or fire the given callback function based on '}
          <Hyperlink
            href="#handleParamChange"
            underline
            colored
          >
            handleParamChange
          </Hyperlink>
          . Unlocks all body scroll locks.
        </p>
        <InlineCode id="closeOnBlur">
          closeOnBlur
        </InlineCode>
        <p>
          {'Enables a click event on the '}
          <Hyperlink underline>
            Modal Container
          </Hyperlink>
          {' that will close all modals.'}
        </p>
        <InlineCode id="setCloseOnBlur">
          setCloseOnBlur
        </InlineCode>
        <p>
          {'Sets the '}
          <Hyperlink
            href="#closeOnBlur"
            underline
            colored
          >
            closeOnBlur
          </Hyperlink>
          {' status. Fired each time a modal is opened based on its own '}
          <Hyperlink
            href="#closeOnBlur"
            underline
            colored
          >
            closeOnBlur
          </Hyperlink>
          {' prop.'}
        </p>
        <InlineCode id="bodyScrollIsLocked">
          bodyScrollIsLocked
        </InlineCode>
        <p>
          {'The current state of body scroll lock, useful when multiple modals differ in '}
          <Hyperlink
            href="#lockBodyScroll"
            underline
            colored
          >
            lockBodyScroll
          </Hyperlink>
          .
        </p>
        <InlineCode id="setBodyScrollLock">
          setBodyScrollLock
        </InlineCode>
        <p>
          {'Enables and disables scroll on the HTML body using '}
          <Hyperlink
            href="https://www.npmjs.com/package/body-scroll-lock"
            newTab
            underline
            colored
          >
            body-scroll-lock
          </Hyperlink>
          {'. Fired by '}
          <Hyperlink
            href="#lockBodyScroll"
            underline
            colored
          >
            lockBodyScroll
          </Hyperlink>
          {' on each modal individually. Check '}
          <Hyperlink
            href="#bodyScrollIsLocked"
            underline
            colored
          >
            bodyScrollIsLocked
          </Hyperlink>
          {' for the global status after overrides.'}
        </p>
        <InlineCode id="open">
          open
        </InlineCode>
        <p>
          {'Sets '}
          <Hyperlink
            href="#currentModal"
            underline
            colored
          >
            currentModal
          </Hyperlink>
          {' to the given slug and '}
          <Hyperlink
            href="#oneIsOpen"
            underline
            colored
          >
            oneIsOpen
          </Hyperlink>
          {' to true. Will either add modal to the URL parameters or fire the given callback function based on '}
          <Hyperlink
            href="#handleParamChange"
            underline
            colored
          >
            handleParamChange
          </Hyperlink>
          .
        </p>
        <InlineCode id="toggle">
          toggle
        </InlineCode>
        <p>
          {'Will '}
          <Hyperlink
            href="#closeAll"
            underline
            colored
          >
            closeAll
          </Hyperlink>
          {' if the given slug is currently open, otherwise will '}
          <Hyperlink
            href="#open"
            underline
            colored
          >
            open
          </Hyperlink>
          {' the given slug.'}
        </p>
        <InlineCode id="transTime">
          transTime
        </InlineCode>
        <p>
          {'See '}
          <Hyperlink
            href="#transTime"
            underline
            colored
          >
            transTime
          </Hyperlink>
          {' above.'}
        </p>
      </JumplistNode>
      <JumplistNode nodeID="container">
        <Heading
          id="container"
          href="/docs/modal/api#container"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/modal/api#container`}
          element='h4'
        >
          {'<ModalContainer>'}
        </Heading>
        <p>
          This is the component which every modal will portal into. It should be rendered once in the root of your application.
        </p>
        <Heading
          id="container-props"
          href="/docs/modal/api#container-props"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/modal/api#container-props`}
          element='h5'
        >
          Props
        </Heading>
        <BasicProps />
      </JumplistNode>
      <JumplistNode nodeID="modal">
        <Heading
          id="modal"
          href="/docs/modal/api#modal"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/modal/api#modal`}
          element='h4'
        >
          {'<Modal>'}
        </Heading>
        <p>
          Render any number of this component throughout your app. Each one is portaled into the ModalContainer.
        </p>
        <Margin bottom="xs">
          <CodeBlock>
            {`import react from 'react';
import { Modal } from '@faceless-ui/modal;

export const MyModal = () => {
  return (
    <Modal slug="my-modal">
      ...
    </Modal>
  )
};`}
          </CodeBlock>
        </Margin>
        <p>
          {'You can also pass a function as a child to conveniently access context. This is an alternative to the '}
          <InlineCode>
            useModal
          </InlineCode>
          {' hook.'}
        </p>
        <Margin bottom="xs">
          <CodeBlock>
            {`import react from 'react';
import { Modal } from '@faceless-ui/modal;

export const MyModal = () => {
  return (
    <Modal slug="my-modal">
      {(modalContext) => {
        return (
          ...
        )
      }}
    </Modal>
  )
};`}
          </CodeBlock>
        </Margin>
        <Heading
          id="modal-props"
          href="/docs/modal/api#modal-props"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/modal/api#modal-props`}
          element='h5'
        >
          Props
        </Heading>
        <InlineCode id="classPrefix">
          slug*
        </InlineCode>
        <p>
          Required. A unique identifier for this modal. You will need know this value when you go to open and close a modal.
        </p>
        <InlineCode id="classPrefix">
          closeOnBlur
        </InlineCode>
        <p>
          Required. A unique identifier for this modal. You will need know this value when you go to open and close a modal.
        </p>
        closeOnBlur
        lockBodyScroll
        classPrefix
        onOpen
        onClose
        onEnter
        onEntered
        onEntering
        onExit
        onExiting
        onExited
        openOnInit
        <BasicProps />
      </JumplistNode>
      <JumplistNode nodeID="toggler">
        <Heading
          id="toggler"
          href="/docs/modal/api#toggler"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/modal/api#toggler`}
          element='h4'
        >
          {'<ModalToggler>'}
        </Heading>
        <p>
          {'This is just a button that will open or close a modal, depending on its current status. It\'s a simple wrapper around the '}
          <InlineCode>
            useModal
          </InlineCode>
          {' hook. You can easily open and close modals using the methods provided by the context, but this component wraps that logic for you.'}
        </p>
        <Margin bottom="xs">
          <CodeBlock>
            {`import react from 'react';
import { ModalToggler } from '@faceless-ui/modal;

export const MyComponent = () => {
  return (
    <ModalToggler slug="my-modal">
      ...
    </ModalToggler>
  )
};`}
          </CodeBlock>
        </Margin>
        <Heading
          id="toggler-props"
          href="/docs/modal/api#toggler-props"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/modal/api#toggler-props`}
          element='h5'
        >
          Props
        </Heading>
        <InlineCode>
          slug*
        </InlineCode>
        <p>
          Required. The unique slug of the modal to open or close.
        </p>
        <BasicProps />
      </JumplistNode>
      <JumplistNode nodeID="useModal">
        <Heading
          id="useModal"
          href="/docs/modal/api#useModal"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/modal/api#useModal`}
          element='h4'
        >
          useModal
        </Heading>
        <p>
          {'This is a hook you can use to access the '}
          <Hyperlink
            href={`/docs/modal/api#context`}
            underline
            colored
          >
            context
          </Hyperlink>
          .
        </p>
        <Margin bottom="xs">
          <CodeBlock>
            {`import react from 'react';
import { useModal } from '@faceless-ui/modal;

export const MyComponent = () => {
  const modal = useModal();
  return (
    ...
  )
};`}
          </CodeBlock>
        </Margin>
      </JumplistNode>
      <JumplistNode nodeID="asModal">
        <Heading
          id="asModal"
          href="/docs/modal/api#asModal"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/modal/api#asModal`}
          element='h4'
        >
          asModal
        </Heading>
        <p>
          For advanced setups, there is a higher order component you can use to wrap any React component to have it function as a modal. This is actually what the Modal component is doing behind the scenes, but you can easily do it yourself if needed. It will attach the modal context into the props of the wrapped component.
        </p>
        <CodeBlock>
          {`import react from 'react';
import { asModal } from '@faceless-ui/modal;

export const MyModal = asModal((props) => {
  const { modal } = props;
  return (
    ...
  )
}, 'my-modal');`}
        </CodeBlock>
      </JumplistNode>
    </Fragment>
  )
}

const DocLayout = (props: any) => {
  return (
    <Doc
      {...props}
      githubUrl={`${process.env.NEXT_PUBLIC_GITHUB_URL}/modal/api.tsx`}
    />
  )
};

ModalAPI.Layout = DocLayout;

export default ModalAPI;
