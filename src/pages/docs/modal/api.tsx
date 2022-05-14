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
import { ClassPrefix } from '@components/BasicProps/ClassPrefix';
import { PropName } from '@components/PropName';

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
          {'Wrap your app with this component. It does not have any required props and renders nothing in the DOM. It provides context for all the components and hooks to work together. This is where the global '}
          <Hyperlink
            underline
            href='/docs/modal/api#provider-props'
          >
            modal settings
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
          <InlineCode
            href="#container"
            underline
          >
            {'<ModalContainer>'}
          </InlineCode>
          {'. If '}
          <InlineCode
            href="#generateCSS"
            underline
          >
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
            underline
          >
            pushState
          </Hyperlink>
          {' from the '}
          <Hyperlink
            href="https://developer.mozilla.org/en-US/docs/Web/API/History_API"
            newTab
            underline
          >
            History API
          </Hyperlink>
          {'. If sent a callback, will execute your function with a slug for you to handle, see '}
          <Hyperlink
            href="/docs/modal/routing"
            underline
          >
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
          <InlineCode
            underline
            href="#generateCSS"
          >
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
          name="transTime"
          type="number"
          isContextProp
        />
        <p>
          {'The '}
          <InlineCode
            href="#transTime"
            underline
          >
            transTime
          </InlineCode>
          {' given to the provider.'}
        </p>
        <PropName
          name="oneIsOpen"
          type="boolean"
          isContextProp
        />
        <p>
          {'True when '}
          <InlineCode
            href="#currentModal"
            underline
          >
            currentModal
          </InlineCode>
          {' has value. The '}
          <InlineCode
            href="#container"
            underline
          >
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
          <InlineCode
            href="#currentModal"
            underline
          >
            currentModal
          </InlineCode>
          {' to the given slug. Will either add modal to the URL parameters or fire the given callback function based on '}
          <InlineCode
            href="#handleParamChange"
            underline
          >
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
          <InlineCode
            href="#open"
            underline
          >
            open
          </InlineCode>
          {' and '}
          <InlineCode
            href="#closeAll"
            underline
          >
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
          <InlineCode
            href="#currentModal"
            underline
          >
            currentModal
          </InlineCode>
          {' and '}
          <InlineCode
            href="#oneIsOpen"
            underline
          >
            oneIsOpen
          </InlineCode>
          {'. Will either remove modal from the URL parameters or fire the given callback function based on '}
          <InlineCode
            href="#handleParamChange"
            underline
          >
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
          <InlineCode
            underline
            href="#container"
          >
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
          <InlineCode
            href="#closeOnBlur-context"
            underline
          >
            closeOnBlur
          </InlineCode>
          {' status. Fired each time a modal is opened based on its own '}
          <InlineCode
            href="#closeOnBlur" // TODO: this is a different prop than the "closeOnBlur" before it
            underline
          >
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
          <Hyperlink
            href="#lockBodyScroll"
            underline
          >
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
            underline
          >
            body-scroll-lock
          </Hyperlink>
          {'. Fired by '}
          <InlineCode
            href="#lockBodyScroll"
            underline
          >
            lockBodyScroll
          </InlineCode>
          {' on each modal individually. Check '}
          <InlineCode
            href="#bodyScrollIsLocked"
            underline
          >
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
          <InlineCode
            href="#modal-container"
            underline
          >
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
          <Hyperlink
            href="#modal-container"
            underline
          >
            Modal Container
          </Hyperlink>
          {' to populate `containerRef` on mount.'}
        </p> */}
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
          This component will add an element to the DOM and is where every modal will portal into. Render this component once in the root of your application. It will receive transition classes when any modal is opened, and remove them when all modals are closed.
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
          {'This is the modal itself. It gets portaled into the '}
          <InlineCode
            underline
            href="#container"
          >
            {'<ModalContainer>'}
          </InlineCode>
          {' and receives transition classes when opened or closed. Render any number of this component throughout your app. It\'s only required prop is a unique '}
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
          <Hyperlink
            underline
            href="#context"
          >
            modal context
          </Hyperlink>
          {'. You could easily access the same context with the '}
          <InlineCode
            underline
            href="#useModal"
          >
            useModal
          </InlineCode>
          {' hook, but this would require a child component that adheres to the '}
          <Hyperlink
            newTab
            underline
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
          No content
        </p>
        <PropName
          name="lockBodyScroll"
          type="boolean"
        />
        <p>
          No content
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
          {'This is a button that will open or close a modal based on its current status. It\'s a simple wrapper around the '}
          <InlineCode
            href='#useModal'
            underline
          >
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
          <InlineCode
            underline
            href="#slug"
          >
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
          <Hyperlink
            href={`/docs/modal/api#context`}
            underline
          >
            modal  context
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
          {'For advanced setups, use this higher order component to create your own modal entirely from scratch. Wrap your React component with this HOC to have it function as a modal. It will attach the modal context into the props of the wrapped component, just as '}
          <InlineCode
            underline
            href="#modal"
          >
            {'<Modal>'}
          </InlineCode>
          {' does. The second argument is the unique '}
          <InlineCode
            underline
            href="#slug"
          >
            slug
          </InlineCode>
          {'.'}
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
      pageName="Modal API"
    />
  )
};

ModalAPI.Layout = DocLayout;

export default ModalAPI;
