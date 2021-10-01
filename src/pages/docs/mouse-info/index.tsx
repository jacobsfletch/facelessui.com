import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';

const MouseInfo = () => {
  return (
    <Fragment>
      <Meta
        title="Mouse Info"
      />
      <h1>
        Mouse Info
      </h1>
    </Fragment>
  )
}

MouseInfo.Layout = Doc;

export default MouseInfo;
