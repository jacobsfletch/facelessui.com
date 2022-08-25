import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';
import Margin from '@components/Margin';
import { SliderProvider, SliderTrack, Slide, SliderButton } from '@faceless-ui/slider'
import classes from './index.module.scss';
import { Hyperlink } from '@components/Hyperlink';
import { InlineCode } from '@components/InlineCode';

const slides = Array.from(Array(6).keys()); // NOTE: create array from number

const ResponsiveSliderExample = () => {
  return (
    <Fragment>
      <h1>
        Responsive Slider Example
      </h1>
      <Margin bottom="xs">
        {`This is a responsive slider that shows two slides at a time on desktop, then only 1 slide at screens smaller than 576px wide. You can override any slider setting using any CSS media query using the `}
        <InlineCode href="/docs/slider/api#breakpoints">
          breakpoints
        </InlineCode>
        {' prop.'}
      </Margin>
      <Margin bottom="xs">
        <SliderProvider
          slidesToShow={1}
          autoPlay
          breakpoints={{
            '(max-width: 576px)': {
              slidesToShow: 1
            },
          }}
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
        href={`${process.env.NEXT_PUBLIC_GITHUB_URL}/slider/examples/responsive/index.tsx`}
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
      githubUrl={`${process.env.NEXT_PUBLIC_GITHUB_URL}/slider/examples/responsive/index.tsx`}
      metaTitle="Responsive slider example"
      metaDescription="Responsive slider example."
    />
  )
};

ResponsiveSliderExample.Layout = DocLayout;

export default ResponsiveSliderExample;
