import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';
import Margin from '@components/Margin';
import { SliderProvider, SliderTrack, Slide, DotsNav } from '@faceless-ui/slider'
import classes from './index.module.scss';
import { Hyperlink } from '@components/Hyperlink';

const slides = Array.from(Array(6).keys()); // NOTE: create array from number

const DotsSliderExample = () => {
  return (
    <Fragment>
      <h1>
        Dots Nav Example
      </h1>
      <Margin bottom="xs">
        This slider renders dot navigation. Click on any dot to see the effect.
      </Margin>
      <Margin bottom="xs">
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
      </Margin>
      <Hyperlink
        href={`${process.env.NEXT_PUBLIC_GITHUB_URL}/slider/examples/dots/index.tsx`}
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
      githubUrl={`/slider/examples/dots/index.tsx`}
      metaTitle="Example Dots Slider"
      metaDescription="Example dots slider using the @faceless-ui/slider npm module."
      metaURL="/docs/slider/examples/dots"
    />
  )
};

DotsSliderExample.Layout = DocLayout;

export default DotsSliderExample;
