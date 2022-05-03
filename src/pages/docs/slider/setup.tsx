import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';
import { VersionNumber } from '@components/VersionNumber';
import { InlineCode } from '@components/InlineCode';
import { CodeBlock } from '@components/CodeBlock';
import Margin from '@components/Margin';
import { Hyperlink } from '@components/Hyperlink';
import { Heading } from '@components/Heading';
import { InstallationCode } from '@components/InstallationCode';

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
      <Margin bottom="xs">
        <Heading
          id="installation"
          href="/docs/slider/setup#installation"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/slider/setup#installation`}
          element='h5'
        >
          Installation
        </Heading>
        <InstallationCode name="slider" />
      </Margin>
      <p>
        {'To create a slider, wrap any portion of your app with a '}
        <InlineCode>
          <Hyperlink
            href="/docs/slider/api#provider"
            underline
          >
            {'<SliderProvider>'}
          </Hyperlink>
        </InlineCode>
        {' component. This does not render anything in the DOM, but will provide context for the individual slider parts to all work together. This is also where '}
        <Hyperlink
          href="/docs/slider/api#provider-props"
          underline
        >
          slider settings
        </Hyperlink>
        {' are configured. The '}
        <InlineCode>
          <Hyperlink
            href="/docs/slider/api#track"
            underline
          >
            {'<SliderTrack>'}
          </Hyperlink>
        </InlineCode>
        {' is will create an overflowing element where each '}
        <InlineCode>
          <Hyperlink
            href="/docs/slider/api#slide"
            underline
          >
            {'<Slide>'}
          </Hyperlink>
        </InlineCode>
        {' will appear. These components do not need to be direct descendants of one another.'}
      </p>
      <Margin bottom="xs">
        <CodeBlock>
          {`import React from 'react';
import { SliderProvider, SliderTrack, Slide } from \'@faceless-ui/slider\';

export const MyComponent = () => {
  return (
    <SliderProvider
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
        id="navigation"
        href="/docs/slider/setup#navigation"
        copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/slider/setup#navigation`}
        element='h5'
      >
        Slider navigation
      </Heading>
      <p>
        {'If your slider is not free-scrolling, you will need to render navigation buttons. Conveniently, the '}
        <InlineCode>
          <Hyperlink
            href="/docs/slider/api#button"
            underline
          >
            {'<SliderButton>'}
          </Hyperlink>
        </InlineCode>
        {' and '}
        <InlineCode>
          <Hyperlink
            href="/docs/slider/api#nav"
            underline
          >
            {'<SliderNav>'}
          </Hyperlink>
        </InlineCode>
        {' components are available for you to use which solve most the most common navigation needs out-of-the-block.'}
      </p>
      <Margin bottom="xs">
        <CodeBlock>
          {`import React from 'react';
import { SliderProvider, SliderTrack, Slide, SliderButton } from \'@faceless-ui/slider\';

export const MyComponent = () => {
  return (
    <SliderProvider
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
        {'You can easily wire these buttons up yourself by triggering slider navigation using methods on the '}
        <Hyperlink
          href="/docs/slider/api#context"
          underline
        >
          slider context
        </Hyperlink>
        {', like '}
        <InlineCode>
          goToNextSlide
        </InlineCode>
        {'. The simplest way to access these is to use the '}
        <InlineCode>
          useSlider
        </InlineCode>
        {' hook.'}
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
      <Heading
        id="sync"
        href="/docs/slider/setup#sync"
        copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/slider/setup#sync`}
        element='h5'
      >
        Synchronized sliders
      </Heading>
      <p>
        {'It is also possible to synchronize multiple sliders, where the navigation of one slider triggers the navigation of another. To do this, lift the index of one slider using the '}
        <InlineCode>
          onSlide
        </InlineCode>
        {' prop. This is a callback function that will fire on every slide change. Then pass this value as the '}
        <InlineCode>
          currentSlideIndex
        </InlineCode>
        {' of another slider to have it be entirely controlled.'}
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
    </Fragment>
  )
}

SliderInstallation.Layout = Doc;

export default SliderInstallation;
