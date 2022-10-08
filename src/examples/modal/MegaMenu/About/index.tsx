import React from 'react';
import classes from './index.module.scss';
import { Modal, ModalToggler } from '@faceless-ui/modal';
import { aboutMegaMenuSlug } from '..';

export const AboutModal = () => {
  return (
    <Modal
      slug={aboutMegaMenuSlug}
      className={classes.aboutMegaMenuExample}
    >
      <div className={classes.wrapper}>
        <div>
          <ModalToggler
            slug={aboutMegaMenuSlug}
            className={classes.close}
          >
            Back
          </ModalToggler>
        </div>
        <div>
          <p className={classes.title}>
            About
          </p>
          <p>
            Hello, world!
          </p>
        </div>
      </div>
    </Modal>
  )
}
