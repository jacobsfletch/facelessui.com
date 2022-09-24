import React, { useState } from 'react';
import { SliderProvider, SliderTrack, Slide } from '@faceless-ui/slider'
import classes from './index.module.scss';

const slides = Array.from(Array(6).keys()) // NOTE: create array from number

export const ThumbnailSliderExample = () => {
  const [sliderIndex, setSliderIndex] = useState<number>(0);

  return (
    <div>
      <SliderProvider
        slidesToShow={1}
        currentSlideIndex={sliderIndex}
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
      </SliderProvider>
      <SliderProvider slidesToShow={2}>
        <SliderTrack className={classes.track}>
          {slides.map((slide, index) => (
            <Slide
              key={index}
              index={index}
              className={[
                classes.slide,
                classes.clickable
              ].filter(Boolean).join(' ')}
              onClick={() => {
                setSliderIndex(index);
              }}
            >
              {`Slide ${index + 1}`}
            </Slide>
          ))}
        </SliderTrack>
      </SliderProvider>
    </div>
  )
}
