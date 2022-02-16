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
      <div>
        This page has no content.
      </div>
    </Fragment>
  )
}

CollapsiblesAPI.Layout = Doc;

export default CollapsiblesAPI;
