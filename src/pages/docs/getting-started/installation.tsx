import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';

const Installation = () => {
  return (
    <Fragment>
      <Meta>
        <title>
          Installation
        </title>
      </Meta>
      <h1>
        Installation
      </h1>
    </Fragment>
  )
}

Installation.Layout = Doc;

export default Installation;
