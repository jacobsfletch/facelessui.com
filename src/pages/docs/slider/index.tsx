import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';
import { Hyperlink } from '@components/Hyperlink';
import Margin from '@components/Margin';
import { InstallationCode } from '@components/InstallationCode';

const SliderDoc = () => {
  return (
    <Fragment>
      <Meta
        title="Slider"
      />
      <h1>
        Slider
      </h1>
      <p>
        Installation
      </p>
      <Margin bottom="xs">
        <InstallationCode name="slider" />
      </Margin>
      <p>
        This page has no content.
      </p>
      <Hyperlink
        href="https://slider.faceless-ui.com"
        underline
        newTab
      >
        <small>
          Demo in playground
        </small>
      </Hyperlink>
    </Fragment>
  )
}

SliderDoc.Layout = Doc;

export default SliderDoc;
