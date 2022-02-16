import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';
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
        This page has no content.
      </p>
    </Fragment>
  )
}

GettingStartedDoc.Layout = Doc;

export default GettingStartedDoc;
