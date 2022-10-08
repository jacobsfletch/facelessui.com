import React from 'react';
import classes from './index.module.scss';
import { Modal, ModalToggler } from '@faceless-ui/modal';
import { exploreMegaMenuSlug } from '..';

export const ExploreModal = () => {
  return (
    <Modal
      slug={exploreMegaMenuSlug}
      className={classes.exploreMegaMenuExample}
    >
      <div className={classes.wrapper}>
        <div>
          <ModalToggler
            slug={exploreMegaMenuSlug}
            className={classes.close}
          >
            Back
          </ModalToggler>
        </div>
        <div>
          <p className={classes.title}>
            Explore
          </p>
          <p>
            Hello, world!
          </p>
        </div>
      </div>
    </Modal>
  )
}
