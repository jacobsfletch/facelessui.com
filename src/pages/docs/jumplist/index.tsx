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
        {'The jumplist package is a powerful way to track elements as they pass through the viewport. This allows you to highlight menu items as the page is scrolled which is useful for pages with lengthy content. This jumplist is a lightweight, component-centric wrapper around the '}
        <Hyperlink
          href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API"
          newTab
          underline
        >
          Intersection Observer API
        </Hyperlink>
        {' — so props mirror this API very closely.'}
      </p>
      <p>
        Some common uses for this package include:
      </p>
      <Margin bottom="xs">
        <StyledList
          items={[
            (
              <div key={0}>
                Table of contents
              </div>
            ),
            (
              <div key={1}>
                Dot nav
              </div>
            )
          ]}
        />
      </Margin>
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
          {'. As nodes traverse in and out of the viewport they report their statuses to the jumplist context which can be accessed from anywhere in your app with the '}
          <InlineCode>
            useJumplist
          </InlineCode>
          {' hook. This contains an array of jumplist items, each with an '}
          <InlineCode>
            isIntersecting
          </InlineCode>
          {' property which can be used to style individual menu items. Also in context is the '}
          <InlineCode>
            currentJumplistIndex
          </InlineCode>
          {' and '}
          <InlineCode>
            activeJumplistIndex
          </InlineCode>
          {' properties, which are useful when multiple nodes are intersecting simultaneously.'}
        </p>
        <p>
          {'A final piece to this is the '}
          <InlineCode>
            {'<JumplistProvider>'}
          </InlineCode>
          {' which should wrap your entire app and where you define '}
          <Hyperlink
            underline
            href="/docs/jumplist/api#provider-props"
          >
            global settings
          </Hyperlink>
          {' like '}
          <InlineCode>
            threshold
          </InlineCode>
          {' and '}
          <InlineCode>
            rootMargin
          </InlineCode>
          {'. This provides the '}
          <Hyperlink
            href="/docs/jumplist/api#context"
            underline
          >
            jumplist context
          </Hyperlink>
          {' for all the components and hooks to work together. If you need more granular control, see the '}
          <Hyperlink
            href="/docs/jumplist/api"
            underline
          >
            API
          </Hyperlink>
          {' for full details.'}
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
              <div key={0}>
                Watches nodes as they traverse the viewport
              </div>
            ),
            (
              <div key={1}>
                Use the native Intersection Observer API
              </div>
            ),
            (
              <div key={2}>
                Tracks the intersection status of each node which can be used to style menus
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
      githubUrl={`${process.env.NEXT_PUBLIC_GITHUB_URL}/jumplist/index.tsx`}
    />
  )
};

JumplistDoc.Layout = DocLayout;

export default JumplistDoc;
