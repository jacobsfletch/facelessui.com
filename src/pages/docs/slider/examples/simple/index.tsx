import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';
import Margin from '@components/Margin';
import { SliderProvider, SliderTrack, Slide, SliderButton } from '@faceless-ui/slider'
import classes from './index.module.scss';
import { Hyperlink } from '@components/Hyperlink';

const slides = Array.from(Array(6).keys()); // NOTE: create array from number

const SimpleSliderExample = () => {
  return (
    <Fragment>
      <h1>
        Simple Slider Example
      </h1>
      <Margin bottom="xs">
        This is a simple slider that shows a single slide at a time and auto-plays.
      </Margin>
      <Margin bottom="xs">
        <SliderProvider
          slidesToShow={1}
          autoPlay
          breakpoints={{}}
        >
          <div className={classes.buttons}>
            <SliderButton direction="prev">
              Previous
            </SliderButton>
            <SliderButton direction="next">
              Next
            </SliderButton>
          </div>
          <SliderTrack className={classes.track}>
            {slides.map((slide, index) => (
              <Slide
                key={index}
                index={index}
                className={classes.slide}
              >
                {`Slide ${index + 1}`}
              </Slide>
            ))}
          </SliderTrack>
        </SliderProvider>
      </Margin>
      <Hyperlink
        href={`${process.env.NEXT_PUBLIC_GITHUB_URL}/slider/examples/simple/index.tsx`}
        newTab
      >
        Source code
      </Hyperlink>
    </Fragment>
  )
}

const DocLayout = (props: any) => {
  return (
    <Doc
      {...props}
      githubUrl={`/slider/examples/simple/index.tsx`}
      metaTitle="Example Slider"
      metaDescription="Example slider using the @faceless-ui/slider npm module."
      metaURL="/docs/slider/examples/simple"
    />
  )
};

SimpleSliderExample.Layout = DocLayout;

export default SimpleSliderExample;
