import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';

const ScrollInfoInstallation = () => {
  return (
    <Fragment>
      <Meta
        title="Scroll Info installation"
      />
      <h1>
        Scroll Info Installation
      </h1>
    </Fragment>
  )
}

ScrollInfoInstallation.Layout = Doc;

export default ScrollInfoInstallation;
