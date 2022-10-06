import React, { Fragment } from 'react';
import classes from './index.module.scss';
import { Modal, ModalToggler, useModal } from '@faceless-ui/modal';

const modalSlug = 'example-mega-menu';

export const MegaMenuExample = () => {
  const { closeModal } = useModal();

  return (
    <Fragment>
      <ModalToggler slug={modalSlug}>
        Open mega menu
      </ModalToggler>
      <Modal
        slug={modalSlug}
        className={classes.modal}
      >
        <div className={classes.wrapper}>
          <div>
            <ModalToggler
              slug={modalSlug}
              className={classes.close}
            >
              Close
            </ModalToggler>
          </div>
          <ModalToggler
            slug={`${modalSlug}__about`}
            className={classes.menuItem}
            onClick={() => {
              closeModal(modalSlug);
            }}
          >
            About
          </ModalToggler>
          <ModalToggler
            slug={`${modalSlug}__explore`}
            className={classes.menuItem}
            onClick={() => {
              closeModal(modalSlug);
            }}
          >
            Explore
          </ModalToggler>
        </div>
      </Modal>
      <Modal
        slug={`${modalSlug}__about`}
        className={classes.modal}
      >
        <div className={classes.wrapper}>
          <div>
            <ModalToggler
              slug={modalSlug}
              className={classes.close}
              onClick={() => {
                closeModal(`${modalSlug}__about`);
              }}
            >
              Back
            </ModalToggler>
          </div>
          <div>
            <h2>
              About
            </h2>
          </div>
        </div>
      </Modal>
      <Modal
        slug={`${modalSlug}__explore`}
        className={classes.modal}
      >
        <div className={classes.wrapper}>
          <div>
            <ModalToggler
              slug={modalSlug}
              className={classes.close}
              onClick={() => {
                closeModal(`${modalSlug}__explore`);
              }}
            >
              Back
            </ModalToggler>
          </div>
          <div>
            <h2>
              Explore
            </h2>
          </div>
        </div>
      </Modal>
    </Fragment>
  )
}
