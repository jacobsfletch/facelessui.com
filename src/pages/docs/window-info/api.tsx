import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';

const WindowInfoAPI = () => {
  return (
    <Fragment>
      <Meta
        title="Window Info API"
      />
      <h1>
        Window Info API
      </h1>
    </Fragment>
  )
}

WindowInfoAPI.Layout = Doc;

export default WindowInfoAPI;
