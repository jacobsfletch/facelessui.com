import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';
import { VersionNumber } from '@components/VersionNumber';

const CSSGridInstallation = () => {
  return (
    <Fragment>
      <Meta
        title="CSS Grid Basic Setup"
      />
      <h1>
        Basic Setup
      </h1>
      <p>
        {'Latest version: '}
        <VersionNumber
          name="css-grid"
          element='span'
        />
      </p>
    </Fragment>
  )
}

CSSGridInstallation.Layout = Doc;

export default CSSGridInstallation;
