import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';
import Margin from '@components/Margin';
import { SliderProvider, SliderTrack, Slide, SliderButton } from '@faceless-ui/slider'
import classes from './index.module.scss';
import { Hyperlink } from '@components/Hyperlink';

const slides = Array.from(Array(6).keys()); // NOTE: create array from number

const SnapSliderExample = () => {
  return (
    <Fragment>
      <h1>
        Snap Slider Example
      </h1>
      <Margin bottom="xs">
        {'This slider snaps to each slide as the user navigates them. This uses '}
        <Hyperlink
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scroll_Snap"
          newTab
        >
          CSS Scroll Snap
        </Hyperlink>
        {' behind the scenes. Scroll to see the effect.'}
      </Margin>
      <Margin bottom="xs">
        <SliderProvider
          slidesToShow={1}
          autoPlay
          scrollSnap
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
        href={`${process.env.NEXT_PUBLIC_GITHUB_URL}/slider/examples/snap/index.tsx`}
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
      githubUrl={`${process.env.NEXT_PUBLIC_GITHUB_URL}/slider/examples/snap/index.tsx`}
      metaTitle="Snap slider example"
      metaDescription="Snap slider example."
    />
  )
};

SnapSliderExample.Layout = DocLayout;

export default SnapSliderExample;
