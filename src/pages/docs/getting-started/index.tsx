import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';
import Margin from '@components/Margin';
import { Hyperlink } from '@components/Hyperlink';
import { Heading } from '@components/Heading';

const GettingStartedDoc = () => {
  return (
    <Fragment>
      <Meta
        title="Getting Started"
      />
      <h1>
        Getting Started
      </h1>
      <p>
        Faceless UI is an unstyled React library. It is component-first, so you can build your app using props instead of class names. If you know React, you know Faceless UI — and since each package is independently versioned, you can integrate as little or as much into your existing app as you need.
      </p>
      <p>
        Faceless UI components are abstract, making them perfectly suited to power other UI libraries. This also leaves Faceless UI core small and focused. This pattern allows you to freely reassemble the same set of components in many different ways. Your library can ship specific, styled implementations of the same core APIs.
      </p>
      <Margin bottom="xs">
        <Heading
          id="styling"
          href="/docs/getting-started#styling"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/getting-started#styling`}
          element='h5'
        >
          Styling
        </Heading>
        <p>
          {'Faceless UI components have no appearance and apply as little CSS as possible to achieve core functionality. To customize the appearance of Faceless UI components, use your existing CSS setup. Every Faceless UI component exposes its DOM entirely, letting you customize the markup to meet your exact needs. A typical pattern is to pass class names or style objects to these components through props. This makes it possible to tie into any CSS framework, such as '}
          <Hyperlink
            href="https://github.com/css-modules/css-modules"
            newTab
            underline
          >
            CSS Modules
          </Hyperlink>
          {'.'}
        </p>
      </Margin>
      <Margin>
        <Heading
          id="accessibility"
          href="/docs/getting-started#accessibility"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/getting-started#accessibility`}
          element='h5'
        >
          Accessibility
        </Heading>
        <p>
          Accessibility is a top-priority of Faceless UI, which ensures best web practices out-of-the-box. By default, all Faceless UI components are fully accessible using the latest WAI-ARIA standards — and since every component exposes its DOM, you can easily add your own accessibility features as necessary.
        </p>
      </Margin>
    </Fragment>
  )
}

GettingStartedDoc.Layout = Doc;

export default GettingStartedDoc;
