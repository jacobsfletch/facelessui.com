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
      githubUrl={`${process.env.NEXT_PUBLIC_GITHUB_URL}/slider/examples.tsx`}
      metaTitle="Slider examples"
      metaDescription="The Slider package examples."
    />
  )
};

SliderExamples.Layout = DocLayout;

export default SliderExamples;
