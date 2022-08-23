import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';
import Margin from '@components/Margin';
import { SliderProvider, SliderTrack, Slide, SliderProgress } from '@faceless-ui/slider'
import classes from './index.module.scss';
import { Hyperlink } from '@components/Hyperlink';
import { InlineCode } from '@components/InlineCode';

const slides = Array.from(Array(6).keys()); // NOTE: create array from number

const CustomScrollbarExample = () => {
  return (
    <Fragment>
      <h1>
        Custom Scrollbar Example
      </h1>
      <Margin bottom="xs">
        {'This is a slider which displays a custom scrollbar using the '}
        <InlineCode href="/docs/slider/api#slider-progress">
          {'<SliderProgress />'}
        </InlineCode>
        {' component. This component can be placed anywhere in your DOM. The native scrollbar is hidden from the track basic css. Scroll or drag the slider to see the effect.'}
      </Margin>
      {/* <Margin bottom="xs">
        <CodeBlock>
          {`scrollbar-width: none;
&::-webkit-scrollbar {
  display: none;
}`}
        </CodeBlock>
      </Margin> */}
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
          <SliderProgress
            className={classes.progress}
            indicator={{
              className: classes.progressIndicator,
            }}
          />
        </SliderProvider>
      </Margin>
      <Hyperlink
        href={`${process.env.NEXT_PUBLIC_GITHUB_URL}/slider/examples/custom-scrollbar/index.tsx`}
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
      githubUrl={`${process.env.NEXT_PUBLIC_GITHUB_URL}/slider/examples/custom-scrollbar/index.tsx`}
      metaTitle="Custom scrollbar example"
      metaDescription="Custom scrollbar example."
    />
  )
};

CustomScrollbarExample.Layout = DocLayout;

export default CustomScrollbarExample;
