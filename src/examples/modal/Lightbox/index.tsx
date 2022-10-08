import React, { Fragment } from 'react';
import classes from './index.module.scss';
import { Modal, ModalToggler } from '@faceless-ui/modal';

export const exampleLightboxModalSlug = 'modal-lightbox';

export const LightboxModalExample = () => {
  return (
    <Fragment>
      <ModalToggler slug={exampleLightboxModalSlug}>
        Open lightbox
      </ModalToggler>
      <Modal
        slug={exampleLightboxModalSlug}
        className={classes.modal}
      >
        <div className={classes.wrapper}>
          <ModalToggler
            slug={exampleLightboxModalSlug}
            className={classes.close}
          >
            Close
          </ModalToggler>
          <div className={classes.content}>
            Hello, world!
          </div>
        </div>
      </Modal>
    </Fragment>
  )
}
