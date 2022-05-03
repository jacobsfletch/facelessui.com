import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';
import { InlineCode } from '@components/InlineCode';
import { Hyperlink } from '@components/Hyperlink';
import Margin from '@components/Margin';
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
        {'This package makes it incredibly easy to create sliders of every kind. Sliders can be free-scrolling, drag-scrolling, snap to each slide, and so much more. Sliders can autoplay and can even control other sliders to slide synchronously. Easily control each slider using the provided methods, or use the built-in navigation components.'}
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
          <Hyperlink
            href="/docs/slider/api#provider-props"
            underline
          >
            Slider settings
          </Hyperlink>
          {' are configured on the '}
          <InlineCode>
            {'<SliderProvider>'}
          </InlineCode>
          {', which wraps any section of your code with a slider. This component does not render anything in the DOM, and provides properties and methods for all the components of that slider to work together. Individual '}
          <InlineCode>
            {'<Slide>'}
          </InlineCode>
          {' components are then nested inside a single '}
          <InlineCode>
            {'<SliderTrack>'}
          </InlineCode>
          {'. '}
          {'Behind the scenes, these slides are a wrapper around the '}
          <Hyperlink
            href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API"
            newTab
            underline
          >
            Intersection Observer API
          </Hyperlink>
          {'. Each slide registers itself to the provider and reports the changes to its intersection as they happen.'}
        </p>
      </Margin>
      <Margin bottom="xs">
        <p>
          {'Its very easy to trigger slider navigation with the '}
          <InlineCode>
            useSlider
          </InlineCode>
          {' hook, but there are also built-in navigation components, like '}
          <InlineCode>
            {'<SliderButton>'}
          </InlineCode>
          {', that cover the most common use cases for you. There are also callback methods you can use to tie into slide events and sync navigation.'}
        </p>
        <p>
          {'The '}
          <InlineCode>
            {'<SliderProgress>'}
          </InlineCode>
          {' component is a powerful way to display that current progress of any slider. It utilizes '}
          <InlineCode>
            requestAnimationFrame
          </InlineCode>
          {' to smoothly animate the current scroll progress of any slider. This allows you to render a scrollbar outside of your slider track.'}
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
