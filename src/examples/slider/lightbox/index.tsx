import React, { Fragment, useState } from 'react';
import { SliderProvider, SliderTrack, Slide } from '@faceless-ui/slider'
import classes from './index.module.scss';
import { Modal, ModalToggler, useModal } from '@faceless-ui/modal';
import { Hyperlink } from '@components/Hyperlink';

const slides = Array.from(Array(6).keys()); // NOTE: create array from number
const modalSlug = 'slider-lightbox';

export const LightboxSliderExample = () => {
  const { openModal } = useModal();
  const [sliderIndex, setSliderIndex] = useState<number>(0);

  return (
    <Fragment>
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
      <Hyperlink
        className={classes.sandboxLink}
        href="https://codesandbox.io/s/lightbox-slider-0m8tyu"
        newTab
      >
        CodeSandbox
      </Hyperlink>
    </Fragment >
  )
}
