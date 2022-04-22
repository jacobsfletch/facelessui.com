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
        Faceless UI is an unstyled React library. It is component-first, so you can build your app using components instead of class names. If you know React, you know Faceless UI. And since each package is independently versioned, you can integrate as little or as much into your existing app as you need.
      </p>
      <Margin bottom="xs">
        <h5>
          Styling
        </h5>
        <p>
          You can apply styles to Faceless UI components using any CSS setup. All components expose their entire DOM, letting you customize the markup to your exact needs. A typical pattern is to pass class names into components through props.
        </p>
        <p>
          There may also be cases where Faceless UI sets a small amount of css of its own to achieve core functionality. This is typically done with inline-css but may also include stylesheets. Either way, all css has a tiny footprint and can be overridden or opted-out. See each API for implementation details.
        </p>
      </Margin>
      <Margin>
        <h5>
          Accessibility
        </h5>
        <p>
          Accessibility is a top-priority of Faceless UI. Being unstyled, this library is perfectly suited for standardizing and enforcing best web practices. By default, all Faceless UI components are fully accessible using the latest WAI-ARIA standards. Since each component is pluggable, you can easily add your own accessibility features.
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
