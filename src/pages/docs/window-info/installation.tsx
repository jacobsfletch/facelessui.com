import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';

const WindowInfoInstallation = () => {
  return (
    <Fragment>
      <Meta
        title="Window Info installation"
      />
      <h1>
        Window Info Installation
      </h1>
    </Fragment>
  )
}

WindowInfoInstallation.Layout = Doc;

export default WindowInfoInstallation;
