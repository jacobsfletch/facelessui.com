import React from 'react';
import { SliderProvider, SliderTrack, Slide, DotsNav } from '@faceless-ui/slider'
import classes from './index.module.scss';

const slides = Array.from(Array(6).keys()); // NOTE: create array from number

export const DotsSliderExample = () => {
  return (
    <SliderProvider
      slidesToShow={1}
      autoPlay
    >
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
      <DotsNav
        className={classes.dots}
        dotClassName={classes.dot}
        activeDotClassName={classes.dotIsActive}
      />
    </SliderProvider>
  )
}
