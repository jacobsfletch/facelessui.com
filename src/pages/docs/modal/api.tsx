import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';

const ModalAPI = () => {
  return (
    <Fragment>
      <Meta
        title="Modal API"
      />
      <h1>
        Modal API
      </h1>
    </Fragment>
  )
}

ModalAPI.Layout = Doc;

export default ModalAPI;
