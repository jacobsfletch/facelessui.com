import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';

const SliderInfoInstallation = () => {
  return (
    <Fragment>
      <Meta
        title="Slider Info installation"
      />
      <h1>
        Slider Info Installation
      </h1>
    </Fragment>
  )
}

SliderInfoInstallation.Layout = Doc;

export default SliderInfoInstallation;
