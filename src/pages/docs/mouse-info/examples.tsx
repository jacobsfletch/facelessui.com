import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';

const MouseInfoExamples = () => {
  return (
    <Fragment>
      <Meta
        title="Mouse Info examples"
      />
      <h1>
        Mouse Info Examples
      </h1>
    </Fragment>
  )
}

MouseInfoExamples.Layout = Doc;

export default MouseInfoExamples;
