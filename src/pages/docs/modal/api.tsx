import Meta from '@components/Meta';
import React, { Fragment, useEffect } from 'react';
import { Doc } from '@root/layout/Doc';
import { InlineCode } from '@components/InlineCode';
import { CodeBlock } from '@components/CodeBlock';
import { Hyperlink } from '@components/Hyperlink';
import Margin from '@components/Margin';
import { JumplistNode } from '@faceless-ui/jumplist';
import { useJumplist } from '@faceless-ui/jumplist';
import { modalJumplistNav } from '@root/layout/DocsNav/nav';

const ModalAPI = () => {
  const { setJumplist } = useJumplist();

  useEffect(() => {
    const jumplist = modalJumplistNav.map((item) => ({ id: item.id || '' }));
    setJumplist(jumplist);
  }, [setJumplist])

  return (
    <Fragment>
      <Meta
        title="Modal API"
      />
      <h1>
        Modal API
      </h1>
      <JumplistNode id="provider">
        <h4>
          Provider
        </h4>
        <Margin bottom="xs">
          <CodeBlock>
            {`import react from 'react';
import ModalProvider from '@faceless-ui/modal;

export const MyApp = () = (
  <ModalProvider
    transTime={250}
  >
    ...
  </ModalProvider>
);`}
          </CodeBlock>
        </Margin>
        <h6 id="props">
          <b>
            Props
          </b>
        </h6>
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
        <InlineCode id="zIndex">
          zIndex
        </InlineCode>
        <p>
          {'Only used when '}
          <InlineCode >
            generateCSS
          </InlineCode>
          {' is true. Determines the stacking order of the '}
          <Hyperlink
            href="#modal-container"
            underline
            colored
          >
            Modal Container
          </Hyperlink>
          .
        </p>
        <InlineCode id="transTime">
          transTime
        </InlineCode>
        <p>
          Determines the duration by which transition classes are applied, in milliseconds.
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
      </JumplistNode>
      <JumplistNode id="context">
        <h6 id="context">
          <b>
            Context
          </b>
        </h6>
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
          Enables a click event on the [Modal Container](../ModalContainer/README.md) that will close all modals.
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
        <InlineCode id="classPrefix">
          classPrefix
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
      <JumplistNode id="useModal">
        <h4>
          useModal
        </h4>
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
