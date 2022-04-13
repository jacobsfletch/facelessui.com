import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';

const JumplistAPI = () => {
  return (
    <Fragment>
      <Meta
        title="Jumplist API"
      />
      <h1>
        Jumplist API
      </h1>
      <div>
        This page has no content.
      </div>
    </Fragment>
  )
}

JumplistAPI.Layout = Doc;

export default JumplistAPI;
