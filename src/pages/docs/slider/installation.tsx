import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';
import { VersionNumber } from '@components/VersionNumber';
import { InstallationCode } from '@components/InstallationCode';

const SliderInstallation = () => {
  return (
    <Fragment>
      <Meta
        title="Slider Installation"
      />
      <div>
        {'Slider - '}
        <VersionNumber
          name="slider"
          element="span"
        />
      </div>
      <h1>
        Installation
      </h1>
      <InstallationCode name="slider" />
    </Fragment>
  )
}

SliderInstallation.Layout = Doc;

export default SliderInstallation;
