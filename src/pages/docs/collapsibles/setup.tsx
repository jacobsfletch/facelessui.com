import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';

const CollapsiblesInstallation = () => {
  return (
    <Fragment>
      <Meta
        title="Collapsibles Basic Setup"
      />
      <h1>
        Basic Setup
      </h1>
    </Fragment>
  )
}

CollapsiblesInstallation.Layout = Doc;

export default CollapsiblesInstallation;
