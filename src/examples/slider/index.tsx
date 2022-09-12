import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';

const SliderExamples = () => {
  return (
    <Fragment>
      <h1>
        Slider Examples
      </h1>
    </Fragment>
  )
}

const DocLayout = (props: any) => {
  return (
    <Doc
      {...props}
      githubUrl={`/slider/examples.tsx`}
      metaTitle="Slider Examples"
      metaDescription="Examples of the @faceless-ui/slider npm module."
      metaURL="/docs/slider/examples"
    />
  )
};

SliderExamples.Layout = DocLayout;

export default SliderExamples;
