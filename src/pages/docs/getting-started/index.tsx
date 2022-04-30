import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';
import Margin from '@components/Margin';

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
        Faceless UI is an unstyled React library. It is component-first, so you can build your app using components instead of class names. If you know React, you know Faceless UI — and since each package is independently versioned, you can integrate as little or as much into your existing app as you need.
      </p>
      <p>
        Faceless UI allows you to build your app in a way that is familiar to you. It is designed to integrate seamlessly into any setup. Each Faceless UI component has no appearance, making it perfectly suited to power your brand&apos;s own UI library.
      </p>
      <Margin bottom="xs">
        <h5>
          Styling
        </h5>
        <p>
          Faceless UI components apply as little CSS as possible to achieve core functionality. To customize the appearance of Faceless UI components, use your using your existing CSS setup. Every Faceless UI component exposes its DOM, letting you customize the markup to meet your exact needs. A typical pattern is to pass class names or style objects to these components through props. This makes it possible to tie into any CSS framework, such as SCSS modules.
        </p>
      </Margin>
      <Margin>
        <h5>
          Accessibility
        </h5>
        <p>
          Accessibility is a top-priority of Faceless UI, and is perfectly suited for standardizing and enforcing best web practices. By default, all Faceless UI components are fully accessible using the latest WAI-ARIA standards — and since each component is pluggable, you can easily add your own accessibility features.
        </p>
      </Margin>
      {/* <p>
        Developer experience is another  API is simple and expected, with props and methods being as consistent as possible with native APIs - usually by exposing these APIs directly to you. It is also abstract and modular, so that your configuration can meet your exact specifications.
      </p> */}
      {/* abstract, not every single component needs to be built out with a fancy name and fancy API */}
    </Fragment>
  )
}

GettingStartedDoc.Layout = Doc;

export default GettingStartedDoc;
