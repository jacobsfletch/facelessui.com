import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';

const Modal = () => {
  return (
    <Fragment>
      <Meta
        title="Modal"
      />
      <h1>
        Modal
      </h1>
    </Fragment>
  )
}

Modal.Layout = Doc;

export default Modal;
