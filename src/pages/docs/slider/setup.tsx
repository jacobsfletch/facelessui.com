import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';
import { VersionNumber } from '@components/VersionNumber';
import { InlineCode } from '@components/InlineCode';
import { CodeBlock } from '@components/CodeBlock';
import Margin from '@components/Margin';
import { Hyperlink } from '@components/Hyperlink';
import { Heading } from '@components/Heading';

const SliderInstallation = () => {
  return (
    <Fragment>
      <Meta
        title="Slider Basic Setup"
      />
      <h1>
        Basic Setup
      </h1>
      <p>
        {'Latest version: '}
        <VersionNumber
          name="slider"
          element='span'
        />
      </p>
      <p>
        {'To create a slider, wrap any portion of your app with a '}
        <InlineCode>
          {'<Slider>'}
        </InlineCode>
        {' component. This does not render anything, and will provide context for the individual slider parts to all work together. This is also where '}
        <Hyperlink
          href="/docs/slider/api#provider-props"
          underline
        >
          slider settings
        </Hyperlink>
        {' are configured. Then, render the '}
        <InlineCode>
          {'<SliderTrack>'}
        </InlineCode>
        {' somewhere within it. This adds an element in the DOM with an scrolling overflow, where each .'}
        <InlineCode>
          {'<Slide>'}
        </InlineCode>
        {' will appear.'}
      </p>
      <Margin bottom="xs">
        <CodeBlock>
          {`import { Slider, SliderTrack, Slide } from \'@faceless-ui/slider\';

export const MyComponent = () => {
  return (
    <Slider
      slidesToShow={1}
    >
      <SliderTrack>
        <Slide index={0}>
          Slide 1
        </Slide>
        <Slide index={1}>
          Slide 2
        </Slide>
      </SliderTrack>
    </Slider>
  )
}`}
        </CodeBlock>
      </Margin>
      <Heading
        id="sync"
        href="/docs/slider/setup#sync"
        copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/slider/setup#sync`}
        element='h5'
      >
        Synchronized sliders
      </Heading>
      <p>
        {'It is also possible to synchronize multiple sliders. To do this, lift the index of one slider and pass it into another. Lift the current slide index into the local state of your component using the '}
        <InlineCode>
          onSlide
        </InlineCode>
        {' prop. This is a callback function that will fire on every slide change. Pass this value into the '}
        <InlineCode>
          currentSlideIndex
        </InlineCode>
        {' prop of another slider to have it be controlled.'}
      </p>
      <Margin bottom="xs">
        <CodeBlock>
          {`import { useState } from 'react';
import { Slider, SliderTrack, Slide } from \'@faceless-ui/slider\';

export const MyComponent = () => {
  const [index, setIndex] = useState();

  return (
    <Slider
      slidesToShow={1}
      onSlide={(incomingIndex) => {
        setIndex(incomingIndex);
      }}
    >
      <SliderTrack>
        <Slide index={0}>
          Slide 1
        </Slide>
        <Slide index={1}>
          Slide 2
        </Slide>
      </SliderTrack>
    </Slider>
    <Slider
      slidesToShow={1}
      currentSlideIndex={index}
    >
      <SliderTrack>
        <Slide index={0}>
          Description for slide 1
        </Slide>
        <Slide index={1}>
          Description for slide 2
        </Slide>
      </SliderTrack>
    </Slider>
  )
}`}
        </CodeBlock>
      </Margin>
      <Heading
        id="navigation"
        href="/docs/slider/setup#navigation"
        copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/slider/setup#navigation`}
        element='h5'
      >
        Slider navigation
      </Heading>
      <p>
        {'There are '}
        <InlineCode>
          SliderButton
        </InlineCode>
        {' and '}
        <InlineCode>
          SliderNav
        </InlineCode>
        {' components are available to provide navigation for your slider. These components solve the most common navigation needs.'}
      </p>
      <Margin bottom="xs">
        <CodeBlock>
          {`import { Slider, SliderTrack, Slide, SliderButton } from \'@faceless-ui/slider\';

export const MyComponent = () => {
  return (
    <Slider
      slidesToShow={1}
    >
      <SliderButton direction="prev">
        Previous
      </SliderButton>
      <SliderButton direction="next">
        Next
      </SliderButton>
      <SliderTrack>
        <Slide index={0}>
          Slide 1
        </Slide>
        <Slide index={1}>
          Slide 2
        </Slide>
      </SliderTrack>
    </Slider>
  )
}`}
        </CodeBlock>
      </Margin>
      <p>
        {'It is also possible to trigger slider navigation manually using methods on the slider context, like '}
        <InlineCode>
          goToNextSlide
        </InlineCode>
        {'. The simplest way to access these is to use the '}
        <InlineCode>
          useSlider
        </InlineCode>
        {' hook from within any slider.'}
      </p>
      <Margin bottom="xs">
        <CodeBlock>
          {`import { Slider, SliderTrack, Slide, useSlider } from \'@faceless-ui/slider\';

export const MyButton = () => {
  const { goToNextSlide } = useSlider();
  return (
    <button onClick={goToNextSlide}>
      Next
    </button>
  )
}

export const MyComponent = () => {
  return (
    <Slider
      slidesToShow={1}
    >
      <MyButton />
      <SliderTrack>
        <Slide index={0}>
          Slide 1
        </Slide>
        <Slide index={1}>
          Slide 2
        </Slide>
      </SliderTrack>
    </Slider>
  )
}`}
        </CodeBlock>
      </Margin>
    </Fragment>
  )
}

SliderInstallation.Layout = Doc;

export default SliderInstallation;
