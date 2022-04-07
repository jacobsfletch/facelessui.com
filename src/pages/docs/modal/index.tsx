import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';
import { StyledList } from '@components/StyledList';
import { Hyperlink } from '@components/Hyperlink';
import Margin from '@components/Margin';
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
        Installation
      </p>
      <Margin bottom="xs">
        <InstallationCode name="modal" />
      </Margin>
      <p>
        This component:
      </p>
      <Margin bottom="xs">
        <StyledList
          items={[
            (
              <div key={1}>
                Allows you to render any number of modals from anywhere in your app to the top-level
              </div>
            ),
            (
              <div key={3}>
                {'Automatically handles transition states for you using '}
                <Hyperlink
                  href="https://github.com/reactjs/react-transition-group"
                  newTab
                  underline
                >
                  React Transition Group
                </Hyperlink>
              </div>
            ),
            (
              <div key={4}>
                Comes fully aria accessible and is entirely customizable
              </div>
            ),
            (
              <div key={4}>
                Optionally handles url parameters, or lets you handle this with your own custom router
              </div>
            ),
          ]}
        />
      </Margin>
      <p>
        Some common uses for this component are:
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
      {/* <Hyperlink
        href="https://modal.faceless-ui.com"
        underline
        newTab
      >
        <small>
          Demo in playground
        </small>
      </Hyperlink> */}
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
