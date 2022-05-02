import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';
import { InlineCode } from '@components/InlineCode';
import { Hyperlink } from '@components/Hyperlink';
import Margin from '@components/Margin';
import { InstallationCode } from '@components/InstallationCode';
import { StyledList } from '@components/StyledList';
import { Heading } from '@components/Heading';

const SliderDoc = () => {
  return (
    <Fragment>
      <Meta
        title="Slider"
      />
      <h1>
        Slider
      </h1>
      <Margin bottom="xs">
        {'This package makes it incredibly easy to create sliders of every kind. Sliders can be free-scrolling or snap to each slide. You can render the built-in navigation components or easily control the sliders yourself. Sliders can even control other sliders and slide synchronously. Scroll progress can also be displayed anywhere, and is not constrained to the overflowed container.'}
      </Margin>
      <Margin bottom="xs">
        <Heading
          id="installation"
          href="/docs/slider#installation"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/slider#installation`}
          element='h5'
        >
          Installation
        </Heading>
        <InstallationCode name="slider" />
      </Margin>
      <Heading
        id="how-it-works"
        href="/docs/slider#how-it-works"
        copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/slider#how-it-works`}
        element='h5'
      >
        How it works
      </Heading>
      <Margin bottom="xs">
        <p>
          {'First, wrap any section of your code with the '}
          <InlineCode>
            {'<SliderProvider>'}
          </InlineCode>
          {', where your slider settings are configured. Then, render any number of  '}
          <InlineCode>
            {'<Slide>'}
          </InlineCode>
          {' components inside a single '}
          <InlineCode>
            {'<SliderTrack>'}
          </InlineCode>
          {' to have them register as slides. '}
          {'Behind the scenes, each slide is watched using the '}
          <Hyperlink
            href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API"
            newTab
            underline
          >
            Intersection Observer API
          </Hyperlink>
          {' which efficiently reports each slide intersection status to the slider context.'}
        </p>
      </Margin>
      <Margin bottom="xs">
        <p>
          {'Its very easy to trigger slider navigation with the '}
          <InlineCode>
            useSlider
          </InlineCode>
          {' hook, but there is a '}
          <InlineCode>
            {'<SliderButton>'}
          </InlineCode>
          {' and a '}
          <InlineCode>
            {'<SliderNav>'}
          </InlineCode>
          {' that cover the most common use cases for you. Sliders can be free-scrolling or snap-scrolling, and multiple sliders can easily be linked together with synced navigation.'}
        </p>
        <p>
          {'Scroll progress is also tracked on each slider, using '}
          <InlineCode>
            requestAnimationFrame
          </InlineCode>
          {'. This means that the scrollbar is not constrained to the slider track element, but can rendered anywhere within the slider provider. Conveniently, the '}
          <InlineCode>
            {'<SliderProgress>'}
          </InlineCode>
          {' component is provided for you to display the current progress of the slider.'}
        </p>
      </Margin>
      <div>
        <Heading
          id="features"
          href="/docs/slider#features"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/slider#features`}
          element='h5'
        >
          Key features
        </Heading>
        <StyledList
          items={[
            (
              <div key={1}>
                Slides don&apos;t have to be direct children of the slider track
              </div>
            ),
            (
              <div key={1}>
                Multiple, synchronous sliders
              </div>
            ),
            (
              <div key={1}>
                Free-scrolling or snap-scrolling
              </div>
            ),
            (
              <div key={1}>
                Drag-scrolling
              </div>
            ),
            (
              <div key={1}>
                Auto-play
              </div>
            ),
            (
              <div key={1}>
                Scroll-progress
              </div>
            ),
          ]}
        />
      </div>
    </Fragment>
  )
}

SliderDoc.Layout = Doc;

export default SliderDoc;
