import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';
import Margin from '@components/Margin';
import { SliderProvider, SliderTrack, Slide, SliderButton } from '@faceless-ui/slider'
import classes from './index.module.scss';
import { Hyperlink } from '@components/Hyperlink';
import { InlineCode } from '@components/InlineCode';

const slides = Array.from(Array(6).keys()); // NOTE: create array from number

const MarqueeSliderExample = () => {
  return (
    <Fragment>
      <h1>
        Marquee Slider Example
      </h1>
      <Margin bottom="xs">
        {`This is a marquee slider that slowly scrolls through the slides, as opposed to sliding one-by-slide. For more details, see `}
        <InlineCode href="/docs/slider/api#marquee">
          marquee
        </InlineCode>
        {' prop.'}
      </Margin>
      <Margin bottom="xs">
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
      metaTitle="Example Marquee Slider"
      metaDescription="Example marquee slider using the @faceless-ui/slider npm module."
      metaURL="/docs/slider/examples/marquee"
    />
  )
};

MarqueeSliderExample.Layout = DocLayout;

export default MarqueeSliderExample;
