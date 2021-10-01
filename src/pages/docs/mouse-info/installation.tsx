import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';

const MouseInfoInstallation = () => {
  return (
    <Fragment>
      <Meta
        title="Mouse Info installation"
      />
      <h1>
        Mouse Info Installation
      </h1>
    </Fragment>
  )
}

MouseInfoInstallation.Layout = Doc;

export default MouseInfoInstallation;
