import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';
import { StyledList } from '@components/StyledList';
import { Hyperlink } from '@components/Hyperlink';
import Margin from '@components/Margin';
import { InlineCode } from '@components/InlineCode';
import { Heading } from '@components/Heading';

const ModalDoc = () => {
  return (
    <Fragment>
      <Meta
        title="Modal"
      />
      <h1>
        Modal
      </h1>
      <p>
        This package makes it incredibly easy to create highly customized modals from anywhere in your app. Every modal comes with built-in transitions, allowing you to easily build unique open and close effects. You can also open modals using the URL or your existing router, enabling direct links to modal content.
      </p>
      <p>
        Some common uses for this package include:
      </p>
      <Margin bottom="xs">
        <StyledList
          items={[
            (
              <div key={1}>
                Mega menus
              </div>
            ),
            (
              <div key={1}>
                Search menus
              </div>
            ),
            (
              <div key={1}>
                Media lightboxes
              </div>
            ),
            (
              <div key={1}>
                Dialogue boxes
              </div>
            ),
          ]}
        />
      </Margin>
      <Margin bottom="xs">
        <Heading
          id="how-it-works"
          href="/docs/modal#how-it-works"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/modal#how-it-works`}
          element='h5'
        >
          How it works
        </Heading>
        <p>
          {'Each modal is a wrapper around '}
          <Hyperlink
            underline
            href="https://reactjs.org/docs/portals.html"
            newTab
          >
            React Portal
          </Hyperlink>
          {'. This means that you can render a '}
          <InlineCode>
            {'<Modal>'}
          </InlineCode>
          {' from anywhere in your app and it will be portaled into the '}
          <InlineCode>
            {'<ModalContainer>'}
          </InlineCode>
          {'. This lifts them out of their current stacking context and makes it possible to apply fullscreen transitions. The modal container can also be used to standardize transitions.'}
        </p>
        <p>
          {'Now each modal can be independently controlled in a number of ways. Most commonly you will render a '}
          <InlineCode>
            {'<ModalToggler>'}
          </InlineCode>
          {' component, but you could also use methods on the '}
          <InlineCode>
            {'useModal'}
          </InlineCode>
          {' hook or even the URL. When a modal is opened, transition events are fired using '}
          <Hyperlink
            underline
            href="https://reactcommunity.org/react-transition-group"
            newTab
          >
            React Transition Group
          </Hyperlink>
          {'. These transitions can be styled using css classes or any of the transition event callbacks.'}
        </p>
        <p>
          {'The final piece to this is the '}
          <InlineCode>
            {'<ModalProvider>'}
          </InlineCode>
          {' which should wrap your entire app and where you define the '}
          <Hyperlink
            underline
            href="/docs/modal/api#provider-props"
          >
            global settings
          </Hyperlink>
          {'. This provides the '}
          <Hyperlink
            href="/docs/modal/api#context"
            underline
          >
            modal context
          </Hyperlink>
          {' for all the components and hooks to work together. If you need more granular control, there are more advanced ways to set up and interact with modals. See the '}
          <Hyperlink
            href="/docs/modal/api"
            underline
          >
            API
          </Hyperlink>
          {' for full details.'}
        </p>
      </Margin>
      <Heading
        id="features"
        href="/docs/modal#features"
        copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/modal#features`}
        element='h5'
      >
        Key features
      </Heading>
      <Margin bottom="xs">
        <StyledList
          items={[
            (
              <div key={1}>
                Allows you to render a modal from anywhere in your DOM tree
              </div>
            ),
            (
              <div key={3}>
                Built-in, fully customizable transitions
              </div>
            ),
            (
              <div key={1}>
                Optionally controlled via the URL, enabling direct links
              </div>
            ),
            (
              <div key={1}>
                Easily ties into your existing router, if desired
              </div>
            ),
            (
              <div key={4}>
                Fully ARIA accessible and easily extendable
              </div>
            ),
          ]}
        />
      </Margin>
    </Fragment>
  )
}

const DocLayout = (props: any) => {
  return (
    <Doc
      {...props}
      githubUrl={`${process.env.NEXT_PUBLIC_GITHUB_URL}/modal/index.tsx`}
    />
  )
};

ModalDoc.Layout = DocLayout;

export default ModalDoc;
