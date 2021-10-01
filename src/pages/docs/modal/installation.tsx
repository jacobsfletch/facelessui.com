import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';

const ModalInstallation = () => {
  return (
    <Fragment>
      <Meta
        title="Modal installation"
      />
      <h1>
        Modal Installation
      </h1>
    </Fragment>
  )
}

ModalInstallation.Layout = Doc;

export default ModalInstallation;
