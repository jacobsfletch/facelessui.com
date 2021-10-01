import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';

const CollapsiblesAPI = () => {
  return (
    <Fragment>
      <Meta
        title="Collapsibles API"
      />
      <h1>
        Collapsibles API
      </h1>
    </Fragment>
  )
}

CollapsiblesAPI.Layout = Doc;

export default CollapsiblesAPI;
