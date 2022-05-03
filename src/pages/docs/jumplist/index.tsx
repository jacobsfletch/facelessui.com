import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';
import Margin from '@components/Margin';
import { InlineCode } from '@components/InlineCode';
import { Hyperlink } from '@components/Hyperlink';
import { Heading } from '@components/Heading';
import { StyledList } from '@components/StyledList';

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
        The jumplist package is a powerful way to track elements as they pass through the viewport. This allows you to highlight menu items as the page is scrolled. This is useful for pages with lengthy content.
      </p>
      <Margin bottom="xs">
        <Heading
          id="how-it-works"
          href="/docs/jumplist#how-it-works"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/jumplist#how-it-works`}
          element='h5'
        >
          How it works
        </Heading>
        <p>
          {'Each '}
          <InlineCode>
            {'<JumplistNode>'}
          </InlineCode>
          {' is a wrapper around the '}
          <Hyperlink
            href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API"
            newTab
            underline
          >
            Intersection Observer API
          </Hyperlink>
          {'. As nodes traverse in and out of the viewport they report their statuses to the jumplist context which can be accessed from anywhere in your app.'}
        </p>
        <p>
          {'The jumplist context can be accessed from anywhere in your app with the '}
          <InlineCode>
            useJumplist
          </InlineCode>
          {' hook. This contains an array of jumplist items, each with an '}
          <InlineCode>
            isIntersecting
          </InlineCode>
          {' property. This property can be used to style individual menu items, although if more than one node is intersecting simultaneously, the '}
          <InlineCode>
            currentJumplistIndex
          </InlineCode>
          {' or '}
          <InlineCode>
            activeJumplistIndex
          </InlineCode>
          {' properties may be a better choice.'}
        </p>
        <p>
          {'The '}
          <InlineCode>
            {'<JumplistProvider>'}
          </InlineCode>
          {' is the last part of this, which is a component the wraps your entire app. It is used to provide the jumplist context to your app and does not render anything in the DOM.'}
        </p>
      </Margin>
      <Margin bottom="xs">
        <Heading
          id="features"
          href="/docs/jumplist#features"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/jumplist#features`}
          element='h5'
        >
          Key features
        </Heading>
        <StyledList
          items={[
            (
              <p key={0}>
                Watches nodes as they traverse the viewport
              </p>
            ),
            (
              <p key={1}>
                Use the native Intersection Observer API
              </p>
            ),
            (
              <p key={2}>
                Tracks the intersection status of each node which can be used to style menus
              </p>
            ),
          ]}
        />
      </Margin>
    </Fragment>
  )
}

JumplistDoc.Layout = Doc;

export default JumplistDoc;
