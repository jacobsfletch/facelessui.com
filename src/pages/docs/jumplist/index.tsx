import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';
import Margin from '@components/Margin';
import { InstallationCode } from '@components/InstallationCode';
import { InlineCode } from '@components/InlineCode';
import { Hyperlink } from '@components/Hyperlink';

const JumplistDoc = () => {
  return (
    <Fragment>
      <Meta
        title="Jumplist"
      />
      <h1>
        Jumplist
      </h1>
      <p>
        The jumplist package is a powerful way to create and track jumplist items as they pass through the viewport. This makes it possible to highlight the current item in a navigation menu as the user scrolls through content.
      </p>
      <Margin bottom="xs">
        <h5>
          Installation
        </h5>
        <InstallationCode name="jumplist" />
      </Margin>
      <Margin bottom="xs">
        <h5>
          How it works
        </h5>
        <p>
          {'In the top-level of your app, a '}
          <InlineCode>
            JumplistProvider
          </InlineCode>
          {' is used to provide context to every component that needs it. Then, anywhere in your app a '}
          <InlineCode>
            JumplistNode
          </InlineCode>
          {' can be rendered, which subscribes itself to the provider. This jumplist node is a wrapper around the '}
          <Hyperlink
            href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API"
            newTab
            underline
          >
            Intersection Observer API
          </Hyperlink>
          {' which is used to determine when the node is visible in the viewport. As nodes traverse in and out of the viewport they report their statuses.'}
        </p>
        <p>
          {'The jumplist context can be accessed from anywhere in your app using the '}
          <InlineCode>
            useJumplist
          </InlineCode>
          {' hook which contains an array of jumplist items, each with an '}
          <InlineCode>
            isIntersecting
          </InlineCode>
          {' property. If more than one node is intersecting, and you do not want both menu items to be styled, there are other properties try the '}
          <InlineCode>
            currentJumplistIndex
          </InlineCode>
          {' or '}
          <InlineCode>
            activeJumplistIndex
          </InlineCode>
          {' instead.'}
        </p>
      </Margin>
      <Margin bottom="xs">
        <h5>
          Key features
        </h5>
        <p>
          This section has no content
        </p>
      </Margin>
    </Fragment>
  )
}

JumplistDoc.Layout = Doc;

export default JumplistDoc;
