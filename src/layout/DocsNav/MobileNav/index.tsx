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

  const { oneIsOpen } = useModal();

  return (
    <Fragment>
      <MobileNavModal />
      <ModalToggler
        slug="mobile-nav"
        className={[
          className,
          classes.mobileNavToggler,
        ].filter(Boolean).join(' ')}
        aria-label='Mobile Navigation'
      >
        <div className={classes.icon}>
          <Hamburger isOpen={oneIsOpen} />
        </div>
      </ModalToggler>
    </Fragment>
  )
}
