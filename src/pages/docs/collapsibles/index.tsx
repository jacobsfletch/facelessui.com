import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';

const Collapsibles = () => {
  return (
    <Fragment>
      <Meta
        title="Collapsibles"
      />
      <h1>
        Collapsibles
      </h1>
    </Fragment>
  )
}

Collapsibles.Layout = Doc;

export default Collapsibles;
