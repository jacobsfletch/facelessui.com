import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';

const WindowInfoExamples = () => {
  return (
    <Fragment>
      <Meta
        title="Window Info examples"
      />
      <h1>
        Window Info Examples
      </h1>
    </Fragment>
  )
}

WindowInfoExamples.Layout = Doc;

export default WindowInfoExamples;
