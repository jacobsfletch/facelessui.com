import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';
import { VersionNumber } from '@components/VersionNumber';

const SliderInstallation = () => {
  return (
    <Fragment>
      <Meta
        title="Slider Basic Setup"
      />
      <div>
        {'Slider - '}
        <VersionNumber
          name="slider"
          element="span"
        />
      </div>
      <h1>
        Basic Setup
      </h1>
    </Fragment>
  )
}

SliderInstallation.Layout = Doc;

export default SliderInstallation;
