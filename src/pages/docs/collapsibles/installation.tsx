import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';
import { VersionNumber } from '@components/VersionNumber';
import { InstallationCode } from '@components/InstallationCode';

const CollapsiblesInstallation = () => {
  return (
    <Fragment>
      <Meta
        title="Collapsibles Installation"
      />
      <div>
        {'Collapsibles '}
        <VersionNumber
          name="collapsibles"
          element="span"
        />
      </div>
      <h1>
        Installation
      </h1>
      <InstallationCode name="collapsibles" />
    </Fragment>
  )
}

CollapsiblesInstallation.Layout = Doc;

export default CollapsiblesInstallation;
