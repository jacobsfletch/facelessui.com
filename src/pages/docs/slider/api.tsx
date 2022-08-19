import React, { Fragment, useEffect } from 'react';
import { Doc } from '@root/layout/Doc';
import { JumplistNode, useJumplist } from '@faceless-ui/jumplist';
import { sliderAPINav } from '@root/docs-nav';
import { Heading } from '@components/Heading';
import { BasicProps } from '@components/BasicProps';
import { InlineCode } from '@components/InlineCode';
import { Hyperlink } from '@components/Hyperlink';
import Margin from '@components/Margin';
import { CodeBlock } from '@components/CodeBlock';
import { PropName } from '@components/PropName';
import { BasicContext } from '@components/BasicContext';

const SliderAPI = () => {
  const {
    setJumplist,
    clearJumplist
  } = useJumplist();

  useEffect(() => {
    const jumplist = sliderAPINav.map((item) => ({ nodeID: item.id || '' }));
    setJumplist(jumplist);
    return () => {
      clearJumplist();
    }
  }, [
    setJumplist,
    clearJumplist
  ])

  return (
    <Fragment>
      <h1>
        Slider API
      </h1>
      <JumplistNode nodeID="provider">
        <Heading
          id="provider"
          href="/docs/slider/api#provider"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/slider/api#provider`}
          element='h4'
        >
          {'<SliderProvider>'}
        </Heading>
        <p>
          {'This component provides a new '}
          <Hyperlink href="#context">
            slider context
          </Hyperlink>
          {' to any section of your app. It has no required props and renders nothing in the DOM. This is where the '}
          <Hyperlink href="#provider-props">
            slider settings
          </Hyperlink>
          {' are defined.'}
        </p>
        <Margin bottom="xs">
          <CodeBlock>
            {`import React from 'react';
import { SliderProvider } from \'@faceless-ui/slider\';

export const MyComponent = () => {
  return (
    <SliderProvider
      slidesToShow={3}
    >
      ...
    </SliderProvider>
  )
}`}
          </CodeBlock>
        </Margin>
        <Heading
          id="provider-props"
          href="/docs/slider/api#provider-props"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/slider/api#provider-props`}
          element='h5'
        >
          Props
        </Heading>
        <PropName
          name="slidesToShow"
          type="number"
        />
        <p>
          The number of slides within the track. This effects the width of each slide.
        </p>
        <PropName
          name="slideOnSelect"
          type="boolean"
        />
        <p>
          {'When '}
          <InlineCode>
            true
          </InlineCode>
          {', navigates the slider directly to any slide that is clicked.'}
        </p>
        <PropName
          name="scrollOffset"
          type="number"
        />
        <p>
          {'Adjusts the scroll target when navigating slides. Useful when slides need to maintain alignment with other elements on the page. Defaults to '}
          <InlineCode>
            0
          </InlineCode>
          {'.'}
        </p>
        <PropName
          name="onSlide(index: number)"
          type="method"
        />
        <p>
          {'A callback fired on every slide change. Returns the current slide index.'}
        </p>
        <PropName
          name="useFreeScroll"
          type="boolean"
        />
        <p>
          Will enable free-scrolling.
        </p>
        <PropName
          name="autoPlay"
          type="boolean"
        />
        <p>
          {'Whether to autoplay on load. Defaults to '}
          <InlineCode>
            false
          </InlineCode>
          {'.'}
        </p>
        <PropName
          name="autoplaySpeed"
          type="number"
        />
        <p>
          {'The speed of the autoplay. Only applicable when '}
          <InlineCode href="#autoPlay">
            autoPlay
          </InlineCode>
          {'is '}
          <InlineCode>
            true
          </InlineCode>
          {'. Defaults to '}
          <InlineCode>
            2000
          </InlineCode>
          {'.'}
        </p>
        <PropName
          name="pauseOnHover"
          type="boolean"
        />
        <p>
          {'Only applicable when '}
          <InlineCode href="#autoPlay">
            autoPlay
          </InlineCode>
          {' is '}
          <InlineCode>
            true
          </InlineCode>
          {'. Defaults to '}
          <InlineCode>
            true
          </InlineCode>
          {'.'}
        </p>
        <PropName
          name="pause"
          type="boolean"
        />
        <p>
          {'Stops and starts '}
          <InlineCode href="#autoPlay">
            autoPlay
          </InlineCode>
          {'. Set to '}
          <InlineCode>
            undefined
          </InlineCode>
          {' to return control back to the slider.'}
        </p>
        <PropName
          name="useGhostSlide"
          type="boolean"
        />
        <p>
          {'Renders an invisible div at the end of your '}
          <InlineCode href="#track">
            SliderTrack
          </InlineCode>
          {' which will fully left-align your last slide with the left of your track. The width of the ghost slide is equal to one less than your '}
          <InlineCode href="#slidesToShow">
            slidesToShow
          </InlineCode>
          {'.'}
        </p>
        <Heading
          id="provider-props"
          href="/docs/slider/api#provider-props"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/slider/api#provider-props`}
          element='h5'
        >
          Context
        </Heading>
        <PropName
          name="currentSlideIndex"
          type="number"
          isContextProp
        />
        <p>
          The index of the current slide.
        </p>
        <PropName
          name="sliderTrackRef"
          type="object"
          isContextProp
        />
        <p>
          {'A reference to the '}
          <InlineCode href="#track">
            {'<SliderTrack>'}
          </InlineCode>
          {'.'}
        </p>
        <PropName
          name="goToNextSlide()"
          type="method"
          isContextProp
        />
        <p>
          Navigates to the next slide. If on the last slide, navigates to the first.
        </p>
        <PropName
          name="goToPrevSlide()"
          type="method"
          isContextProp
        />
        <p>
          Navigates to the previous slide. If on the first slide, navigates to the last.
        </p>
        <PropName
          name="goToSlideIndex(index: string)"
          type="method"
          isContextProp
        />
        <p>
          Navigates to the given slide index.
        </p>
        <PropName
          name="slides"
          type="array"
          isContextProp
        />
        <p>
          An array of every slide in the slider.
        </p>
        <PropName
          name="isPaused"
          type="boolean"
          isContextProp
        />
        <p>
          {'Returns whether the slider is currently paused. One applicable when '}
          <InlineCode href="#pauseOnHover">
            pauseOnHover
          </InlineCode>
          {' is '}
          <InlineCode>
            true
          </InlineCode>
          {'.'}
        </p>
        <PropName
          name="scrollRatio"
          type="number"
          isContextProp
        />
        <p>
          The current scroll progress of the slider.
        </p>
        <PropName
          name="slideWidth"
          type="string"
          isContextProp
        />
        <p>
          {'The width of each slide in pixels, based on '}
          <InlineCode href="#slidesToShow" >
            slidesToShow
          </InlineCode>
          {'.'}
        </p>
        <BasicContext />
      </JumplistNode>
      <JumplistNode nodeID="track">
        <Heading
          id="track"
          href="/docs/slider/api#track"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/slider/api#track`}
          element='h4'
        >
          {'<SliderTrack>'}
        </Heading>
        <p>
          {'This will add a scrollable element onto the page which overflows its content as necessary. Acts as the '}
          <Hyperlink
            href="https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/root"
            newTab
          >
            root
          </Hyperlink>
          {' of each slide\'s intersection observer.'}
        </p>
        <Margin bottom="xs">
          <CodeBlock>
            {`import React from 'react';
import { SliderTrack } from \'@faceless-ui/slider\';

export const MyComponent = () => {
  return (
    <SliderTrack>
      ...
    </SliderTrack>
  )
}`}
          </CodeBlock>
        </Margin>
        <Heading
          id="track-props"
          href="/docs/slider/api#track-props"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/slider/api#track-props`}
          element='h5'
        >
          Props
        </Heading>
        <BasicProps />
      </JumplistNode>
      <JumplistNode nodeID="slide">
        <Heading
          id="slide"
          href="/docs/slider/api#slide"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/slider/api#slide`}
          element='h4'
        >
          {'<Slide>'}
        </Heading>
        <p>
          {'Each slide is a wrapper around the '}
          <Hyperlink
            newTab
            href='https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API'
          >
            Intersection Observer API
          </Hyperlink>
          {', and syncs its '}
          <InlineCode >
            isIntersecting
          </InlineCode>
          {' status to the provider.'}
        </p>
        <Margin bottom="xs">
          <CodeBlock>
            {`import React from 'react';
import { Slide } from \'@faceless-ui/slider\';

export const MyComponent = () => {
  return (
    <SliderTrack>
      <Slide index={0}>
        ...
      </Slide>
      <Slide index={1}>
        ...
      </Slide>
    </SliderTrack>
  )
}`}
          </CodeBlock>
        </Margin>
        <Heading
          id="slide-props"
          href="/docs/slider/api#slide-props"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/slider/api#slide-props`}
          element='h5'
        >
          Props
        </Heading>
        <PropName
          name="index"
          required
        />
        <p>
          The index of the slide.
        </p>
        <BasicProps />
      </JumplistNode>
      <JumplistNode nodeID="button">
        <Heading
          id="button"
          href="/docs/slider/api#button"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/slider/api#button`}
          element='h4'
        >
          {'<SliderButton>'}
        </Heading>
        <p>
          {'The slider button is a simple wrapper around the '}
          <InlineCode href="#useSlider" >
            useSlider
          </InlineCode>
          {' hook, used to quickly and easily navigate to any slide in the slider.'}
        </p>
        <Margin bottom="xs">
          <CodeBlock>
            {`import React from 'react';
import { SliderButton } from \'@faceless-ui/slider\';

export const MyComponent = () => {
  return (
    <SliderButton direction="next">
      ...
    </SliderButton>
  )
}`}
          </CodeBlock>
        </Margin>
        <Heading
          id="button-props"
          href="/docs/slider/api#button-props"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/slider/api#button-props`}
          element='h5'
        >
          Props
        </Heading>
        <PropName
          name="direction"
          type="string"
        />
        <p>
          {'Set to '}
          <InlineCode>
            previous
          </InlineCode>
          {' or '}
          <InlineCode>
            next
          </InlineCode>
          {' to navigate to the slider to either the previous or next slide.'}
        </p>
        <BasicProps
          idPrefix='button'
          defaultElement='button'
        />
        <Heading
          id="button-a11y"
          href="#button-a11y"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/collapsibles/api#button-a11y`}
          element='h5'
        >
          Accessibility
        </Heading>
        <p>
          {'The '}
          <InlineCode>
            type
          </InlineCode>
          {' attribute is automatically set to "button" when the '}
          <InlineCode href="#button-htmlElement">
            htmlElement
          </InlineCode>
          {' is '}
          <InlineCode>
            button
          </InlineCode>
          {'. The '}
          <InlineCode>
            aria-label
          </InlineCode>
          {' attribute is also preset and easily overridden.'}
        </p>
      </JumplistNode>
      <JumplistNode nodeID="useSlider">
        <Heading
          id="useSlider"
          href="/docs/slider/api#useSlider"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/slider/api#useSlider`}
          element='h4'
        >
          useSlider
        </Heading>
        <p>
          {'This is a hook you can use to access the '}
          <Hyperlink href="#context">
            slider context
          </Hyperlink>
          .
        </p>
        <Margin bottom="xs">
          <CodeBlock>
            {`import react from 'react';
import { useSlider } from '@faceless-ui/slider;

export const MyComponent = () => {
  const slider = useSlider();
  return (
    ...
  )
};`}
          </CodeBlock>
        </Margin>
      </JumplistNode>
    </Fragment>
  )
}

const DocLayout = (props: any) => {
  return (
    <Doc
      {...props}
      githubUrl={`${process.env.NEXT_PUBLIC_GITHUB_URL}/slider/api.tsx`}
      pageName="Slider API"
      pageTitle="Slider API"
      metaDescription="API for the Slider package."
    />
  )
};

SliderAPI.Layout = DocLayout;

export default SliderAPI;
