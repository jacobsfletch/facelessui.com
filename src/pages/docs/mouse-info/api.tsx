import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';

const MouseInfoAPI = () => {
  return (
    <Fragment>
      <Meta
        title="Mouse Info API"
      />
      <h1>
        Mouse Info API
      </h1>
    </Fragment>
  )
}

MouseInfoAPI.Layout = Doc;

export default MouseInfoAPI;
