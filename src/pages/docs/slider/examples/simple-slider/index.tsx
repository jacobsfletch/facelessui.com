import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';
import Margin from '@components/Margin';
import { SliderProvider, SliderTrack, Slide } from '@faceless-ui/slider'
import classes from './index.module.scss';
import { Hyperlink } from '@components/Hyperlink';

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
        >
          <SliderTrack className={classes.track}>
            <Slide
              index={0}
              className={classes.slide}
            >
              Slide 1
            </Slide>
            <Slide
              index={1}
              className={classes.slide}
            >
              Slide 2
            </Slide>
            <Slide
              index={2}
              className={classes.slide}
            >
              Slide 3
            </Slide>
            <Slide
              index={3}
              className={classes.slide}
            >
              Slide 4
            </Slide>
            <Slide
              index={4}
              className={classes.slide}
            >
              Slide 5
            </Slide>
            <Slide
              index={5}
              className={classes.slide}
            >
              Slide 6
            </Slide>
          </SliderTrack>
        </SliderProvider>
      </Margin>
      <Hyperlink href={`${process.env.NEXT_PUBLIC_GITHUB_URL}/slider/examples/simple-slider.tsx`}>
        Source code
      </Hyperlink>
    </Fragment>
  )
}

const DocLayout = (props: any) => {
  return (
    <Doc
      {...props}
      githubUrl={`${process.env.NEXT_PUBLIC_GITHUB_URL}/slider/examples/simple-slider.tsx`}
      metaTitle="Slider example"
      metaDescription="The Slider package."
    />
  )
};

SimpleSliderExample.Layout = DocLayout;

export default SimpleSliderExample;
