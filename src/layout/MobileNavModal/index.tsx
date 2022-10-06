import { Modal, useModal } from '@faceless-ui/modal';
import React, { useEffect } from 'react';
import { RecursiveNav } from '../DocsNav/RecursiveNav';
import classes from './index.module.scss';
import { nav } from '@root/docs-nav';
import { useWindowInfo } from '@faceless-ui/window-info';

export const mobileNavModalSlug = 'mobile-nav';

export const MobileNavModal: React.FC = () => {
  const { closeModal } = useModal();

  const {
    breakpoints: {
      m: midBreak
    } = {}
  } = useWindowInfo();

  useEffect(() => {
    if (!midBreak) {
      closeModal(mobileNavModalSlug)
    }
  }, [
    closeModal,
    midBreak
  ]);

  return (
    <Modal
      slug={mobileNavModalSlug}
      className={classes.mobileNavModal}
    >
      <div className={classes.wrapper}>
        <RecursiveNav items={nav} />
      </div>
    </Modal>
  )
}
