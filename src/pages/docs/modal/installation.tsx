import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';
import { VersionNumber } from '@components/VersionNumber';
import { InstallationCode } from '@components/InstallationCode';

const ModalInstallation = () => {
  return (
    <Fragment>
      <Meta
        title="Modal Installation"
      />
      <div>
        {'Modal '}
        <VersionNumber
          name="modal"
          element="span"
        />
      </div>
      <h1>
        Installation
      </h1>
      <InstallationCode name="modal" />
    </Fragment>
  )
}

ModalInstallation.Layout = Doc;

export default ModalInstallation;
