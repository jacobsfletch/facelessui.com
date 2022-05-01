import Meta from '@components/Meta';
import React, { Fragment, useEffect } from 'react';
import { Doc } from '@root/layout/Doc';
import { JumplistNode, useJumplist } from '@faceless-ui/jumplist';
import { sliderJumplistNav } from '@root/docs-nav';
import { Heading } from '@components/Heading';
import { BasicProps } from '@components/BasicProps';
import { InlineCode } from '@components/InlineCode';

const SliderAPI = () => {
  const {
    setJumplist,
    clearJumplist
  } = useJumplist();

  useEffect(() => {
    const jumplist = sliderJumplistNav.map((item) => ({ nodeID: item.id || '' }));
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
      <Meta
        title="Slider API"
      />
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
          Provider
        </Heading>
        <p>
          This section has no content.
        </p>
        <Heading
          id="provider-props"
          href="/docs/slider/api#provider-props"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/slider/api#provider-props`}
          element='h5'
        >
          Props
        </Heading>
        <p>
          This section has no content.
        </p>
      </JumplistNode>
      <JumplistNode nodeID="slider">
        <Heading
          id="slider"
          href="/docs/slider/api#slider"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/slider/api#slider`}
          element='h4'
        >
          Slider
        </Heading>
        <p>
          This section has no content.
        </p>
        <Heading
          id="slider-props"
          href="/docs/slider/api#slider-props"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/slider/api#slider-props`}
          element='h5'
        >
          Props
        </Heading>
        <p>
          This section has no content.
        </p>
      </JumplistNode>
      <JumplistNode nodeID="track">
        <Heading
          id="track"
          href="/docs/slider/api#track"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/slider/api#track`}
          element='h4'
        >
          SliderTrack
        </Heading>
        <p>
          This section has no content.
        </p>
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
          Slide
        </Heading>
        <p>
          This section has no content.
        </p>
        <Heading
          id="track-props"
          href="/docs/slider/api#track-props"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/slider/api#track-props`}
          element='h5'
        >
          Props
        </Heading>
        <InlineCode>
          index*
        </InlineCode>
        <p>
          Required. The index of the slide.
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
          SliderButton
        </Heading>
        <p>
          This section has no content.
        </p>
        <Heading
          id="button-props"
          href="/docs/slider/api#button-props"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/slider/api#button-props`}
          element='h5'
        >
          Props
        </Heading>
        <BasicProps />
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
          This section has no content.
        </p>
      </JumplistNode>
    </Fragment>
  )
}

SliderAPI.Layout = Doc;

export default SliderAPI;
