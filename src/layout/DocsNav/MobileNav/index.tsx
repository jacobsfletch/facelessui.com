import { Hamburger } from '@components/Hamburger';
import { ModalToggler, useModal } from '@faceless-ui/modal';
import React, { Fragment } from 'react';
import classes from './index.module.scss';
import { MobileNavModal } from './MobileNavModal';

export const MobileNav: React.FC<{
  className?: string
}> = (props) => {
  const {
    className,
  } = props;

  const {
    currentModal,
    // oneIsOpen
  } = useModal();

  return (
    <Fragment>
      <MobileNavModal />
      <ModalToggler
        slug="mobile-nav"
        className={[
          className,
          classes.mobileNavToggler,
          // (oneIsOpen && currentModal !== 'mobile-nav') && classes.hide,
        ].filter(Boolean).join(' ')}
        aria-label='Mobile Navigation'
      >
        <div className={classes.icon}>
          <Hamburger isOpen={currentModal === 'mobile-nav'} />
        </div>
      </ModalToggler>
    </Fragment>
  )
}
