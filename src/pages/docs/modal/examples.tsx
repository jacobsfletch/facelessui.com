import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';

const ModalExamples = () => {
  return (
    <Fragment>
      <Meta
        title="Modal examples"
      />
      <h1>
        Modal Examples
      </h1>
      <div>
        This page has no content.
      </div>
    </Fragment>
  )
}

ModalExamples.Layout = Doc;

export default ModalExamples;
