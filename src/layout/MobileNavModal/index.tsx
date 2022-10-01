import { Modal, useModal } from '@faceless-ui/modal';
import React, { useEffect } from 'react';
import { RecursiveNav } from '../DocsNav/RecursiveNav';
import classes from './index.module.scss';
import { nav } from '@root/docs-nav';
import { useWindowInfo } from '@faceless-ui/window-info';

export const MobileNavModal: React.FC = () => {
  const { closeAllModals } = useModal();

  const {
    breakpoints: {
      m: midBreak
    } = {}
  } = useWindowInfo();

  useEffect(() => {
    if (!midBreak) {
      closeAllModals();
    }
  }, [
    closeAllModals,
    midBreak
  ])

  return (
    <Modal
      slug="mobile-nav"
      className={classes.mobileNavModal}
    >
      <div className={classes.wrapper}>
        <RecursiveNav items={nav} />
      </div>
    </Modal>
  )
}
