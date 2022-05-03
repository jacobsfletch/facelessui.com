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
        {'This package makes it incredibly easy to create sliders of every kind — free-scrolling, drag-scrolling, auto-playing, snap to each slide, and so much more. Sliders can even synchronize with other sliders. Easily control each slider using the built-in navigation components or the provided methods.'}
      </Margin>
      <p>
        Some common uses for this package include:
      </p>
      <Margin bottom="xs">
        <StyledList
          items={[
            (
              <div key={0}>
                Full-screen sliders
              </div>
            ),
            (
              <div key={1}>
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
          {', which wraps any section of your code with a new slider context. This component does not render anything in the DOM and provides properties and methods for all the components of the slider to work together. The '}
          <InlineCode>
            {'<SliderTrack>'}
          </InlineCode>
          {' will render a scrollable element onto the page to contain every '}
          <InlineCode>
            {'<Slide>'}
          </InlineCode>
          {'. These slides are a wrapper around the '}
          <Hyperlink
            href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API"
            newTab
            underline
          >
            Intersection Observer API
          </Hyperlink>
          {', reporting their intersection statuses to the slider provider in real-time.'}
        </p>
      </Margin>
      <Margin bottom="xs">
        <p>
          {'Its very easy to trigger using the built-in navigation components like '}
          <InlineCode>
            {'<SliderButton>'}
          </InlineCode>
          {'. These will cover the most common navigation needs for you, but you can easily trigger navigation manually using methods on the '}
          <InlineCode>
            useSlider
          </InlineCode>
          {' hook. You can also tie into slide events very easily using one of the callback props on the '}
          <InlineCode>
            {'<SliderProvider>'}
          </InlineCode>
          {' like '}
          <InlineCode>
            onSlide
          </InlineCode>
          {'.'}
        </p>
        <p>
          {'A final piece to this is the '}
          <InlineCode>
            {'<SliderProgress>'}
          </InlineCode>
          {' component which is a powerful way to display the current progress of any slider, utilizing '}
          <InlineCode>
            requestAnimationFrame
          </InlineCode>
          {' to smoothly and efficiently animate it. This allows you to render a scrollbar outside of your slider track, a limitation found with native browser scrollbars. Scrollbars can also be draggable, another way to navigate sliders.'}
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
              <div key={3}>
                Synchronized sliders
              </div>
            ),
            (
              <div key={4}>
                Auto-play
              </div>
            ),
            (
              <div key={5}>
                Component-centric
              </div>
            ),
            (
              <div key={6}>
                Scroll-progress
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
