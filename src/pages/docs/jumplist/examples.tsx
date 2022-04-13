import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';

const JumplistExamples = () => {
  return (
    <Fragment>
      <Meta
        title="Jumplist examples"
      />
      <h1>
        Jumplist Examples
      </h1>
      <div>
        This page has no content.
      </div>
    </Fragment>
  )
}

JumplistExamples.Layout = Doc;

export default JumplistExamples;
