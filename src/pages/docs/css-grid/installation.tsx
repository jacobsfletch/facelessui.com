import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';
import { VersionNumber } from '@components/VersionNumber';
import { InstallationCode } from '@components/InstallationCode';

const CSSGridInstallation = () => {
  return (
    <Fragment>
      <Meta
        title="CSS Grid Installation"
      />
      <div>
        {'CSS Grid '}
        <VersionNumber
          name="modal"
          element="span"
        />
      </div>
      <h1>
        Installation
      </h1>
      <InstallationCode name="css-grid" />
    </Fragment>
  )
}

CSSGridInstallation.Layout = Doc;

export default CSSGridInstallation;
