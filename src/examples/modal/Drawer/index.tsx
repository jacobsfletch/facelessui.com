import React, { Fragment } from 'react';
import classes from './index.module.scss';
import { Modal, ModalToggler } from '@faceless-ui/modal';

const modalSlug = 'modal-drawer';

export const DrawerModalExample = () => {
  return (
    <Fragment>
      <ModalToggler slug={modalSlug}>
        Open drawer
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
            <p className={classes.title}>
              This is a drawer
            </p>
            <p>
              Hello, world!
            </p>
          </div>
        </div>
      </Modal>
    </Fragment>
  )
}
