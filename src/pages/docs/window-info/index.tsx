import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';

const WindowInfo = () => {
  return (
    <Fragment>
      <Meta>
        <Meta
          title="Window Info"
        />
      </Meta>
      <h1>
        Window Info
      </h1>
    </Fragment>
  )
}

WindowInfo.Layout = Doc;

export default WindowInfo;
