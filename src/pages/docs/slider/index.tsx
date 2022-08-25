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
      <h1>
        Slider
      </h1>
      <Margin bottom="xs">
        {'This package makes it incredibly easy to create sliders of every kind — free-scrolling, drag-scrolling, snapping, auto-playing, and so much more. Sliders are fully responsive and can even synchronize with other sliders. They are very easy to control using the built-in navigation components or provided methods.'}
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
                <Hyperlink href="/docs/slider/examples/lightbox">
                  Lightbox sliders
                </Hyperlink>
              </div>
            ),
            (
              <div key={4}>
                <Hyperlink href="/docs/slider/examples/thumbnail">
                  Thumbnail sliders
                </Hyperlink>
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
          {' component wraps any section of your code with a new slider context. This component does not render anything in the DOM. This is where the '}
          <Hyperlink href="/docs/slider/api#provider-props" >
            slider settings
          </Hyperlink>
          {' are configured like '}
          <InlineCode>
            slidesToShow
          </InlineCode>
          {' and '}
          <InlineCode>
            breakpoints
          </InlineCode>
          {'.'}
        </p>
        <p>
          {'Inside this is the '}
          <InlineCode>
            {'<SliderTrack>'}
          </InlineCode>
          {' component, which renders a scrollable element onto the page and overflows its content as necessary. Within the track are '}
          <InlineCode>
            {'<Slide>'}
          </InlineCode>
          {' components, each of which is a simple wrapper around the '}
          <Hyperlink
            href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API"
            newTab
          >
            Intersection Observer API
          </Hyperlink>
          {'. These slides report their intersection statuses to the '}
          <InlineCode>
            {'<SliderProvider>'}
          </InlineCode>
          {' as they happen, using the track as their '}
          <Hyperlink
            href="https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/root"
            newTab
          >
            root
          </Hyperlink>
          {'. The last-most intersecting slide is considered active. With this pattern, we can freely navigate the track and trust the index is accurate. '}
        </p>
      </Margin>
      <Margin bottom="xs">
        <p>
          {'By default, all sliders can be scrolled or dragged, although some sliders may want to render navigation controls. The '}
          <InlineCode>
            {'<SliderButton>'}
          </InlineCode>
          {' covers the most common navigation needs, but sliders are also easily controlled using methods provided by the '}
          <InlineCode>
            useSlider
          </InlineCode>
          {' hook. It is also possible to subscribe to slide events using the '}
          <InlineCode>
            onSlide
          </InlineCode>
          {' prop of the provider.'}
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
                Scrollable
                {/* <p>
                  One big UX challenge with sliders is that they are often painful to navigate. Natural scroll behavior is either removed are hijacked.
                </p> */}
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
            ), (
              <div key={6}>
                Anchor handling
                {/* <p>
                  {'A common pain point of sliders is that while you slide, nested anchor links are clicked. To prevent this, we recursively disable pointer events on all anchor links while the user is dragging using '}
                  <InlineCode href="https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events">
                    CSS pointer-events
                  </InlineCode>
                  {'.'}
                </p> */}
              </div>
            ),
            (
              <div key={6}>
                Scrollbar component
                {/* <p>
                  {'Another common pain point of sliders are that the scrollbar is bound to the overflowing element. To fix this, the current progress of any slider can be displayed using the '}
                  <InlineCode>
                    {'<SliderProgress>'}
                  </InlineCode>
                  {' component — a powerful alternative to native scrollbars. This allows you to render a draggable scrollbar anywhere in your DOM, even outside of your track.'}
                </p> */}
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
      metaTitle="Slider"
      metaDescription="The Slider package."
    />
  )
};

SliderDoc.Layout = DocLayout;

export default SliderDoc;
