import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';
import { VersionNumber } from '@components/VersionNumber';

const CollapsiblesInstallation = () => {
  return (
    <Fragment>
      <Meta
        title="Collapsibles installation"
      />
      <h1>
        Collapsibles Installation
      </h1>
    </Fragment>
  )
}

CollapsiblesInstallation.Layout = Doc;

export default CollapsiblesInstallation;
