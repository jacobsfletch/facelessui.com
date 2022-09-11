import React from 'react';
import Margin from '@components/Margin';
import classes from './index.module.scss';
import { Modal, ModalToggler } from '@faceless-ui/modal';

const modalSlug = 'modal-lightbox';

export const LightboxModalExample = () => {
  return (
    <div>
      <Margin bottom="xs">
        <ModalToggler slug={modalSlug}>
          Open lightbox
        </ModalToggler>
        <Modal
          slug={modalSlug}
          className={classes.modal}
        >
          <div className={classes.wrapper}>
            <ModalToggler
              slug={modalSlug}
              className={classes.close}
            >
              Close
            </ModalToggler>
            <div className={classes.content}>
              Hello, world!
            </div>
          </div>
        </Modal>
      </Margin>
    </div>
  )
}
