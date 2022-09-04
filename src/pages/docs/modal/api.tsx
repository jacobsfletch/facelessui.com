import React, { Fragment, useEffect } from 'react';
import { Doc } from '@root/layout/Doc';
import { InlineCode } from '@components/InlineCode';
import { CodeBlock } from '@components/CodeBlock';
import { Hyperlink } from '@components/Hyperlink';
import Margin from '@components/Margin';
import { JumplistNode } from '@faceless-ui/jumplist';
import { useJumplist } from '@faceless-ui/jumplist';
import { modalAPINav } from '@root/docs-nav';
import { BasicProps } from '@components/BasicProps';
import { Heading } from '@components/Heading';
import { ClassPrefix } from '@components/ClassPrefix';
import { PropName } from '@components/PropName';
import { BasicContext } from '@components/BasicContext';

const ModalAPI = () => {
  const {
    setJumplist,
    clearJumplist
  } = useJumplist();

  useEffect(() => {
    const jumplist = modalAPINav.map((item) => ({ nodeID: item.id || '' }));
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
          {'This component provides the '}
          <Hyperlink href="#context">
            modal context
          </Hyperlink>
          {' to your app. It does not have any required props and renders nothing in the DOM. This is where the '}
          <Hyperlink href='#provider-props'>
            global settings
          </Hyperlink>
          {' are defined.'}
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
        <PropName
          name="zIndex"
          type="number"
        />
        <p>
          {'Applies z-index to the '}
          <InlineCode href="#container">
            {'<ModalContainer>'}
          </InlineCode>
          {'. If '}
          <InlineCode href="#generateCSS">
            generateCSS
          </InlineCode>
          {' is false, this prop is ignored. Defaults to '}
          <InlineCode>
            9999
          </InlineCode>
          {'.'}
        </p>
        <PropName
          name="transTime"
          type="number"
        />
        <p>
          {'The transition duration of modals and the modal container, in milliseconds. Defaults to '}
          <InlineCode>
            250
          </InlineCode>
          {'.'}
        </p>
        <PropName
          name="handleParamChange"
          type="boolean or function"
        />
        <p>
          {'If true, will set and reset the '}
          <InlineCode>
            ?modal=
          </InlineCode>
          {' URL parameter using '}
          <Hyperlink
            href="https://developer.mozilla.org/en-US/docs/Web/API/History/pushState"
            newTab
          >
            pushState
          </Hyperlink>
          {' from the '}
          <Hyperlink
            href="https://developer.mozilla.org/en-US/docs/Web/API/History_API"
            newTab

          >
            History API
          </Hyperlink>
          {'. If sent a callback, will execute your function with a slug for you to handle, see '}
          <Hyperlink href="/docs/modal/routing">
            Routing
          </Hyperlink>
          {' for more details.'}
        </p>
        <ClassPrefix id="classPrefix" />
        <PropName
          name="generateCSS"
          type="boolean"
        />
        <p>
          {'Generates a tiny CSS stylesheet (~650B), rendered at the root of the provider. This is used for core positioning and transition timing, not visual styling. Defaults to '}
          <InlineCode>
            true
          </InlineCode>
          {'.'}
        </p>
        <PropName
          name="minifyCSS"
          type="boolean"
        />
        <p>
          {'Minifies the result of '}
          <InlineCode href="#generateCSS">
            generateCSS
          </InlineCode>
          {'. Defaults to '}
          <InlineCode>
            true
          </InlineCode>
          {'.'}
        </p>
        <Heading
          id="context"
          href="/docs/modal/api#context"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/modal/api#context`}
          element='h5'
        >
          Context
        </Heading>
        <PropName
          name="currentModal"
          type="string"
          isContextProp
        />
        <p>
          {'The slug of the currently open modal. Modals compare their slug with this value to determine their open status. If the page was loaded with a '}
          <InlineCode>
            ?modal=x
          </InlineCode>
          {' URL parameter, this value will be used even if no matches are found.'}
        </p>
        <PropName
          name="oneIsOpen"
          type="boolean"
          isContextProp
        />
        <p>
          {'True when '}
          <InlineCode href="#currentModal" >
            currentModal
          </InlineCode>
          {' has value. The '}
          <InlineCode href="#container">
            {'<ModalContainer>'}
          </InlineCode>
          {' will undergo transition every time this changes.'}
        </p>
        <PropName
          name="open(slug: string)"
          type="method"
          isContextProp
        />
        <p>
          {'Sets '}
          <InlineCode href="#currentModal">
            currentModal
          </InlineCode>
          {' to the given slug. Will either add modal to the URL parameters or fire the given callback function based on '}
          <InlineCode href="#handleParamChange" >
            handleParamChange
          </InlineCode>
          .
        </p>
        <PropName
          name="toggle(slug: string)"
          type="method"
          isContextProp
        />
        <p>
          {'Takes the slug of any modal and opens or closes that modal based on its current status, using the '}
          <InlineCode href="#open" >
            open
          </InlineCode>
          {' and '}
          <InlineCode href="#closeAll">
            closeAll
          </InlineCode>
          {' methods.'}
        </p>
        <PropName
          name="closeAll()"
          type="method"
          isContextProp
        />
        <p>
          {'Resets '}
          <InlineCode href="#currentModal">
            currentModal
          </InlineCode>
          {' and '}
          <InlineCode href="#oneIsOpen">
            oneIsOpen
          </InlineCode>
          {'. Will either remove modal from the URL parameters or fire the given callback function based on '}
          <InlineCode href="#handleParamChange">
            handleParamChange
          </InlineCode>
          . Unlocks all body scroll locks.
        </p>
        <PropName
          name="closeOnBlur"
          type="boolean"
          id="closeOnBlur-context"
          isContextProp
        />
        <p>
          {'Enables a click event on the '}
          <InlineCode href="#container">
            {'<ModalContainer>'}
          </InlineCode>
          {' that, when clicked, will close all modals.'}
        </p>
        <PropName
          name="setCloseOnBlur()"
          type="method"
          isContextProp
        />
        <p>
          {'Used internally to set the global '}
          <InlineCode href="#closeOnBlur-context">
            closeOnBlur
          </InlineCode>
          {' status. Fired each time a modal is opened based on its own '}
          <InlineCode href="#closeOnBlur">
            closeOnBlur
          </InlineCode>
          {' prop.'}
        </p>
        <PropName
          name="bodyScrollIsLocked"
          type="boolean"
          isContextProp
        />
        <p>
          {'The current state of body scroll lock, useful when multiple modals differ in '}
          <Hyperlink href="#lockBodyScroll">
            lockBodyScroll
          </Hyperlink>
          .
        </p>
        <PropName
          name="setBodyScrollLock(set: boolean)"
          type="method"
          isContextProp
        />
        <p>
          {'Enables and disables scroll on the HTML body using '}
          <Hyperlink
            href="https://www.npmjs.com/package/body-scroll-lock"
            newTab
          >
            body-scroll-lock
          </Hyperlink>
          {'. Fired by '}
          <InlineCode href="#lockBodyScroll">
            lockBodyScroll
          </InlineCode>
          {' on each modal individually. Check '}
          <InlineCode href="#bodyScrollIsLocked">
            bodyScrollIsLocked
          </InlineCode>
          {' for the global status after overrides.'}
        </p>
        <PropName
          name="containerRef"
          type="object"
          isContextProp
        />
        <p>
          {'A reference to '}
          <InlineCode href="#modal-container">
            {'<ModalContainer>'}
          </InlineCode>
          {', where each modal portals into.'}
        </p>
        {/* <PropName
          name="setContainerRef(ref: React.MutableRefObject<HTMLElement>)"
          type="method"
          isContextProp
        />
        <p>
          {'Used by '}
          <Hyperlink href="#modal-container">
            Modal Container
          </Hyperlink>
          {' to populate `containerRef` on mount.'}
        </p> */}
        <BasicContext />
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
          This component will add an element to the DOM where every modal will portal into. It will receive transition classes when any modal is opened.
        </p>
        <Margin bottom="xs">
          <CodeBlock>
            {`import react from 'react';
import { ModalContainer } from '@faceless-ui/modal;

export const MyApp = () = (
  <ModalContainer>
    ...
  </ModalContainer>
);`}
          </CodeBlock>
        </Margin>
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
          {'Each modal is portaled into the '}
          <InlineCode href="#container">
            {'<ModalContainer>'}
          </InlineCode>
          {' and receives transition classes when opened or closed. The only required prop is a unique '}
          <InlineCode>
            slug
          </InlineCode>
          {'.'}
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
          {'You can also pass a function as a child to conveniently access '}
          <Hyperlink href="#context">
            modal context
          </Hyperlink>
          {'. You could access the same context with the '}
          <InlineCode href="#useModal">
            useModal
          </InlineCode>
          {' hook, but this would require a child component, see the official '}
          <Hyperlink
            newTab
            href="https://reactjs.org/docs/hooks-rules.html"
          >
            Rules of Hooks
          </Hyperlink>
          {'.'}
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
        <PropName
          name="slug"
          type="string"
          required
        />
        <p>
          A unique identifier for this modal.
        </p>
        <PropName
          name="closeOnBlur"
          type="boolean"
        />
        <p>
          Will close the modal when the user clicks outside of it. Defaults to true.
        </p>
        <PropName
          name="lockBodyScroll"
          type="boolean"
        />
        <p>
          Will prevent the document from scrolling while the modal is open. Defaults to true.
        </p>
        <ClassPrefix />
        <PropName
          name="callbacks"
          type="method"
        />
        <p>
          These methods still need documentation: onOpen
          onClose
          onEnter
          onEntered
          onEntering
          onExit
          onExiting
          onExited
          openOnInit
        </p>
        <BasicProps
          defaultElement='dialog'
          idPrefix='modal'
        />
        <Heading
          id="modal-a11y"
          href="#modal-a11y"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/collapsibles/api#modal-a11y`}
          element='h5'
        >
          Accessibility
        </Heading>
        <p>
          {'The '}
          <InlineCode>
            open
          </InlineCode>
          {' HTML attribute is automatically set when the modal opens and closes and the '}
          <InlineCode href="#modal-htmlElement">
            htmlElement
          </InlineCode>
          {' is '}
          <InlineCode>
            dialog
          </InlineCode>
          {'.'}
        </p>
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
          {'This is a button that will open or close a modal based on its current status. It\'s a simple wrapper around the '}
          <InlineCode href='#useModal'>
            useModal
          </InlineCode>
          {' hook. It\'s only required prop is a unique '}
          <InlineCode
            href="#toggler-slug"
          >
            slug
          </InlineCode>
          {'.'}
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
        <PropName
          name="slug"
          id="toggler-slug"
          type="string"
          required
        />
        <p>
          {'The unique '}
          <InlineCode href="#slug">
            slug
          </InlineCode>
          {' of the modal to open or close.'}
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
          <Hyperlink href="#context" >
            modal context
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
          {'For advanced setups, use this higher order component to create your own modal entirely from scratch. Wrap your React component with this HOC to have it function as a modal. It will attach the modal context into the props of the wrapped component. The second argument is the unique '}
          <InlineCode href="#slug">
            slug
          </InlineCode>
          {'.'}
        </p>
        <Margin bottom="xs">
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
        </Margin>
      </JumplistNode>
      <JumplistNode nodeID="typescript">
        <Heading
          id="typescript"
          href="/docs/modal/api#typescript"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/modal/api#typescript`}
          element='h4'
        >
          TypeScript
        </Heading>
        <p>
          All types can be directly imported
        </p>
        <CodeBlock>{`import {
  ModalProviderProps,
  IModalContext,
  ModalContainerProps,
  ModalProps
} from '@faceless-ui/modal/dist/types';`}
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
      metaTitle="Modal API"
      metaDescription="API documentation for the @faceless-ui/modal npm module."
      metaURL="/docs/modal/api"
    />
  )
};

ModalAPI.Layout = DocLayout;

export default ModalAPI;
