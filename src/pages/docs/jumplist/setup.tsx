import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';
import { VersionNumber } from '@components/VersionNumber';

const JumplistSetup = () => {
  return (
    <Fragment>
      <Meta
        title="Jumplist Basic Setup"
      />
      <div>
        {'Jumplist - '}
        <VersionNumber
          name="jumplist"
          element="span"
        />
      </div>
      <h1>
        Basic Setup
      </h1>
    </Fragment>
  )
}

JumplistSetup.Layout = Doc;

export default JumplistSetup;
