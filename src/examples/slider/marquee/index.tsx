import React from 'react';
import { SliderProvider, SliderTrack, Slide, SliderButton } from '@faceless-ui/slider'
import classes from './index.module.scss';

const slides = Array.from(Array(6).keys()); // NOTE: create array from number

export const MarqueeSliderExample = () => {
  return (
    <SliderProvider
      slidesToShow={1}
      marquee
      marqueeSpeed={50}
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
  )
}
