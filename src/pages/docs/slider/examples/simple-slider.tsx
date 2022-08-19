import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';
import Margin from '@components/Margin';

const SimpleSliderExample = () => {
  return (
    <Fragment>
      <h1>
        Simple Slider Example
      </h1>
      <Margin bottom="xs">
        Simple Slider
      </Margin>
    </Fragment>
  )
}

const DocLayout = (props: any) => {
  return (
    <Doc
      {...props}
      githubUrl={`${process.env.NEXT_PUBLIC_GITHUB_URL}/slider/examples/simple-slider.tsx`}
      pageName="Slider example"
      pageTitle="Slider example"
      metaDescription="The Slider package."
    />
  )
};

SimpleSliderExample.Layout = DocLayout;

export default SimpleSliderExample;
