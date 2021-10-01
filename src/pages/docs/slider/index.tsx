import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';

const Slider = () => {
  return (
    <Fragment>
      <Meta
        title="Slider"
      />
      <h1>
        Slider
      </h1>
    </Fragment>
  )
}

Slider.Layout = Doc;

export default Slider;
