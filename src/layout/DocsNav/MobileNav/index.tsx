import { Hamburger } from '@components/Hamburger';
import { ModalToggler, useModal } from '@faceless-ui/modal';
import { useDarkMode } from '@root/providers/DarkMode';
import React, { Fragment } from 'react';
import classes from './index.module.scss';
import { MobileNavModal } from './MobileNavModal';

export const MobileNav: React.FC<{
  className?: string
  currentPage?: string
}> = (props) => {
  const {
    className,
  } = props;

  const { isDark } = useDarkMode();
  const { oneIsOpen } = useModal();

  return (
    <Fragment>
      <MobileNavModal />
      <ModalToggler
        slug="mobile-nav"
        className={[
          className,
          classes.mobileNavToggler,
          isDark && classes.darkMode
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
