import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';

const ScrollInfo = () => {
  return (
    <Fragment>
      <Meta>
        <Meta
          title="Scroll Info"
        />
      </Meta>
      <h1>
        Scroll Info
      </h1>
    </Fragment>
  )
}

ScrollInfo.Layout = Doc;

export default ScrollInfo;
