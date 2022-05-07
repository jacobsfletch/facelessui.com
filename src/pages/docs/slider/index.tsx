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
        {'This package makes it incredibly easy to create sliders of every kind — free-scrolling, drag-scrolling, snapping, auto-playing, and so much more. Sliders can even synchronize with other sliders and are very easy to control using the built-in navigation components or provided methods.'}
      </Margin>
      <p>
        Some common uses for this package include:
      </p>
      <Margin bottom="xs">
        <StyledList
          items={[
            (
              <div key={0}>
                Image sliders
              </div>
            ),
            (
              <div key={1}>
                Content sliders
              </div>
            ),
            (
              <div key={2}>
                Fullscreen sliders
              </div>
            ),
            (
              <div key={3}>
                Thumbnail sliders
              </div>
            )
          ]}
        />
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
          {'The '}
          <InlineCode>
            {'<SliderProvider>'}
          </InlineCode>
          {' component wraps any section of your code with a new slider context, so there may be many providers spread throughout your app. This is where the '}
          <Hyperlink
            href="/docs/slider/api#provider-props"
            underline
          >
            slider settings
          </Hyperlink>
          {' are configured. This component does not render anything in the DOM. It provides properties and methods for all sliders parts to work together.'}
        </p>
        <p>
          {'Anywhere inside of the provider is the '}
          <InlineCode>
            {'<SliderTrack>'}
          </InlineCode>
          {' component, which renders a scrollable element onto the page and overflows its content as necessary. Within the track are the '}
          <InlineCode>
            {'<Slide>'}
          </InlineCode>
          {' components, each of which is a simple wrapper around the '}
          <Hyperlink
            href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API"
            newTab
            underline
          >
            Intersection Observer API
          </Hyperlink>
          {'. These slides report their intersection statuses to the '}
          <InlineCode>
            {'<SliderProvider>'}
          </InlineCode>
          {' as they happen, using the track as their '}
          <Hyperlink
            underline
            href="https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/rootMargin"
            newTab
          >
            root margin
          </Hyperlink>
          {'.'}
        </p>
      </Margin>
      <Margin bottom="xs">
        <p>
          {'Sliders that are not free-scrolling, drag-scrolling, or auto-playing will need to render navigation controls. The '}
          <InlineCode>
            {'<SliderButton>'}
          </InlineCode>
          {' covers the most common navigation needs for you, but sliders are also easily controlled using methods provided by the '}
          <InlineCode>
            useSlider
          </InlineCode>
          {' hook. It is also possible to subscribe to slide events using the '}
          <InlineCode>
            onSlide
          </InlineCode>
          {' prop of the provider.'}
        </p>
        <p>
          {'The current progress of any slider can be displayed using the '}
          <InlineCode>
            {'<SliderProgress>'}
          </InlineCode>
          {' component — a powerful alternative to native scrollbars. This allows you to render a scrollbar anywhere in your DOM, even outside of your track. Progress is also draggable, providing another way to navigate sliders.'}
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
              <div key={0}>
                Free-scrolling
              </div>
            ),
            (
              <div key={1}>
                Snap-scrolling
              </div>
            ),
            (
              <div key={2}>
                Drag-scrolling
              </div>
            ),
            (
              <div key={4}>
                Auto-playing
              </div>
            ),
            (
              <div key={3}>
                Synchronized sliders
              </div>
            ),
            (
              <div key={6}>
                Custom scrollbar
              </div>
            ),
          ]}
        />
      </div>
    </Fragment>
  )
}

const DocLayout = (props: any) => {
  return (
    <Doc
      {...props}
      githubUrl={`${process.env.NEXT_PUBLIC_GITHUB_URL}/slider/index.tsx`}
    />
  )
};

SliderDoc.Layout = DocLayout;

export default SliderDoc;
