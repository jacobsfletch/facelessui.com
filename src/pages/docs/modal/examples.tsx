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
    </Fragment>
  )
}

ModalExamples.Layout = Doc;

export default ModalExamples;
