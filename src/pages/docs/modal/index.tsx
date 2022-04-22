import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';
import { StyledList } from '@components/StyledList';
import { Hyperlink } from '@components/Hyperlink';
import Margin from '@components/Margin';
import { InlineCode } from '@components/InlineCode';
import { InstallationCode } from '@components/InstallationCode';

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
        This package includes a powerful set of hooks and components that make it incredibly easy to create modals of all kinds. Transitions come out-of-the-box and are easily customizable. Modals can optionally be controlled via the URL, and easily tie into your existing router. As with all of Faceless UI, modals are highly accessible.
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
        <h5>
          Installation
        </h5>
        <InstallationCode name="modal" />
      </Margin>
      <Margin bottom="xs">
        <h5>
          How it works
        </h5>
        <p>
          {'Each modal is wrapper around '}
          <Hyperlink
            underline
            href="https://reactjs.org/docs/portals.html"
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
          {'. This lifts them into the out of their current stacking context and makes it possible to apply fullscreen transitions.'}
        </p>
        <p>
          {'Now each modal can be independently controlled using a '}
          <InlineCode>
            {'<ModalToggler>'}
          </InlineCode>
          {', the '}
          <InlineCode>
            {'useModal'}
          </InlineCode>
          {' hook, or even the URL. When a modal is opened, transition events are fired on both the Modal and ModalContainer simultaneously using '}
          <Hyperlink
            underline
            href="https://reactcommunity.org/react-transition-group"
          >
            React Transitions Group
          </Hyperlink>
          {'. This is a useful pattern for standardizing modal transitions or creating entirely unique ones.'}
        </p>
        <p>
          {'The final piece to this is the '}
          <InlineCode>
            {'<ModalProvider>'}
          </InlineCode>
          {' which should wrap your entire app. This provides context for all the components and hooks to work together. If you need more granular control, there are more advanced ways to set up and interact with these modals. See the '}
          <Hyperlink
            href="/docs/modal/api"
            underline
          >
            API
          </Hyperlink>
          {' for full capabilities.'}
        </p>
      </Margin>
      <h5>
        Key features
      </h5>
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
                Built-in transitions, agnostic to the css of your app
              </div>
            ),
            (
              <div key={4}>
                Fully aria accessible
              </div>
            ),
            (
              <div key={1}>
                Can be controlled via the URL, enabling direct links
              </div>
            ),
            (
              <div key={1}>
                Easily ties into your existing router
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
