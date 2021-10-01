import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';

const ScrollInfoAPI = () => {
  return (
    <Fragment>
      <Meta
        title="Scroll Info API"
      />
      <h1>
        Scroll Info API
      </h1>
    </Fragment>
  )
}

ScrollInfoAPI.Layout = Doc;

export default ScrollInfoAPI;
