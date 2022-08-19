import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';
import Margin from '@components/Margin';

const LightboxSliderExample = () => {
  return (
    <Fragment>
      <h1>
        Lightbox Slider Example
      </h1>
      <Margin bottom="xs">
        Lightbox Slider
      </Margin>
    </Fragment>
  )
}

const DocLayout = (props: any) => {
  return (
    <Doc
      {...props}
      githubUrl={`${process.env.NEXT_PUBLIC_GITHUB_URL}/slider/examples/lightbox-slider.tsx`}
      pageName="Lightbox slider example"
      pageTitle="Lightbox slider example"
      metaDescription="The Slider package."
    />
  )
};

LightboxSliderExample.Layout = DocLayout;

export default LightboxSliderExample;
