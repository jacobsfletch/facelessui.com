import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';
import Margin from '@components/Margin';
import { SliderProvider, SliderTrack, Slide, SliderButton } from '@faceless-ui/slider'
import classes from './index.module.scss';
import { Hyperlink } from '@components/Hyperlink';

const slides = Array.from(Array(6).keys()) // NOTE: create array from number

const FreeScrollingSliderExample = () => {
  return (
    <Fragment>
      <h1>
        Free Scrolling Slider Example
      </h1>
      <Margin bottom="xs">
        This slider allows the user to scroll or drag anywhere in the track freely. Auto-play or navigation will correct slide alignment. Scroll or drag to see the effect.
      </Margin>
      <Margin bottom="xs">
        <SliderProvider
          slidesToShow={1}
          autoPlay
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
        href={`${process.env.NEXT_PUBLIC_GITHUB_URL}/slider/examples/free-scrolling/index.tsx`}
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
      githubUrl={`${process.env.NEXT_PUBLIC_GITHUB_URL}/slider/examples/free-scrolling/index.tsx`}
      metaTitle="Free-scrolling slider example"
      metaDescription="The Slider package."
    />
  )
};

FreeScrollingSliderExample.Layout = DocLayout;

export default FreeScrollingSliderExample;
