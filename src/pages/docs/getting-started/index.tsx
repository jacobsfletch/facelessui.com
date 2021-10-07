import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';

const GettingStarted = () => {
  return (
    <Fragment>
      <Meta>
        <title>
          Getting Started
        </title>
      </Meta>
      <h1>
        Getting Started
      </h1>
    </Fragment>
  )
}

GettingStarted.Layout = Doc;

export default GettingStarted;
