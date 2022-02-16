import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';

const CollapsiblesExamples = () => {
  return (
    <Fragment>
      <Meta
        title="Collapsibles examples"
      />
      <h1>
        Collapsibles Examples
      </h1>
      <div>
        This page has no content.
      </div>
    </Fragment>
  )
}

CollapsiblesExamples.Layout = Doc;

export default CollapsiblesExamples;
