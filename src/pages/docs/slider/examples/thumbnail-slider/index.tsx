import React, { Fragment, useState } from 'react';
import { Doc } from '@root/layout/Doc';
import Margin from '@components/Margin';
import { SliderProvider, SliderTrack, Slide } from '@faceless-ui/slider'
import classes from './index.module.scss';
import { Hyperlink } from '@components/Hyperlink';

const slides = Array.from(Array(6).keys()) // NOTE: create array from number

const ThumbnailSliderExample = () => {
  const [sliderIndex, setSliderIndex] = useState<number>(0);

  return (
    <Fragment>
      <h1>
        Thumbnail Slider Example
      </h1>
      <Margin bottom="xs">
        {'This is a "thumbnail slider" which allows a one slider to control another, larger slider. In this case, the lower slider is free scrolling while the other snaps. Click on any slide in the lower slider to see the effect. See '}
        <Hyperlink href="/docs/slider/setup#sync">
          synchronized sliders
        </Hyperlink>
        {' for more information.'}
      </Margin>
      <Margin bottom="xs">
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
      </Margin>
      <Margin bottom="xs">
        <SliderProvider
          slidesToShow={2}
          useFreeScroll
        >
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
      </Margin>
      <Hyperlink
        href={`${process.env.NEXT_PUBLIC_GITHUB_URL}/slider/examples/lightbox-slider/index.tsx`}
        newTab
      >
        Source code
      </Hyperlink>
    </Fragment >
  )
}

const DocLayout = (props: any) => {
  return (
    <Doc
      {...props}
      githubUrl={`${process.env.NEXT_PUBLIC_GITHUB_URL}/slider/examples/thumbnail-slider/index.tsx`}
      metaTitle="Thumbnail slider example"
      metaDescription="Thumbnail slider package."
    />
  )
};

ThumbnailSliderExample.Layout = DocLayout;

export default ThumbnailSliderExample;
