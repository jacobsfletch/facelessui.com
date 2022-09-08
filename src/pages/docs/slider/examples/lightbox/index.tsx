import React, { Fragment, useState } from 'react';
import { Doc } from '@root/layout/Doc';
import Margin from '@components/Margin';
import { SliderProvider, SliderTrack, Slide } from '@faceless-ui/slider'
import classes from './index.module.scss';
import { Modal, ModalToggler, useModal } from '@faceless-ui/modal';
import { Hyperlink } from '@components/Hyperlink';

const slides = Array.from(Array(6).keys()); // NOTE: create array from number
const modalSlug = 'slider-lightbox';

const LightboxSliderExample = () => {
  const { open: openModal } = useModal();
  const [sliderIndex, setSliderIndex] = useState<number>(0);

  return (
    <Fragment>
      <h1>
        Lightbox Slider Example
      </h1>
      <Margin bottom="xs">
        {'This is a "lightbox slider" that opens the slide in a larger view when clicked. Click on any slide to see the effect. See '}
        <Hyperlink href="/docs/slider/setup#sync">
          synchronized sliders
        </Hyperlink>
        {' for more information.'}
      </Margin>
      <Margin bottom="xs">
        <SliderProvider slidesToShow={2}>
          <SliderTrack className={classes.track}>
            {slides.map((slide, index) => (
              <Slide
                key={index}
                index={index}
                className={[
                  classes.slide,
                  classes.clickable
                ].filter(Boolean).join(' ')}
                onClick={() => {
                  openModal(modalSlug);
                  setSliderIndex(index);
                }}
              >
                {`Slide ${index + 1}`}
              </Slide>
            ))}
          </SliderTrack>
        </SliderProvider>
        <Modal
          slug={modalSlug}
          className={classes.modal}
        >
          <div className={classes.modalContent}>
            <ModalToggler
              slug={modalSlug}
              className={classes.close}
            >
              Close
            </ModalToggler>
            <SliderProvider
              slidesToShow={1}
              currentSlideIndex={sliderIndex}
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
            </SliderProvider>
          </div>
        </Modal>
      </Margin>
      <Margin bottom="xs">
        <Hyperlink
          href="https://codesandbox.io/s/lightbox-slider-0m8tyu"
          newTab
        >
          CodeSandbox
        </Hyperlink>
      </Margin>
    </Fragment>
  )
}

const DocLayout = (props: any) => {
  return (
    <Doc
      {...props}
      githubUrl={`${process.env.NEXT_PUBLIC_GITHUB_URL}/slider/examples/lightbox/index.tsx`}
      metaTitle="Example Lightbox Slider"
      metaDescription="Example lightbox slider using the @faceless-ui/slider npm module."
      metaURL="/docs/slider/examples/lightbox"
    />
  )
};

LightboxSliderExample.Layout = DocLayout;

export default LightboxSliderExample;
