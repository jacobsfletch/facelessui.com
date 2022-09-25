import { Hamburger } from '@components/Hamburger';
import { ModalToggler, useModal } from '@faceless-ui/modal';
import { SearchIcon } from '@root/icons/SearchIcon';
import { useSearch } from '@root/search/SearchProvider';
import React, { Fragment, useEffect } from 'react';
import classes from './index.module.scss';
import { MobileNavModal } from './MobileNavModal';
import { SearchModal } from '../../../layout/SearchModal';

export const MobileNav: React.FC<{
  className?: string
}> = (props) => {
  const {
    className,
  } = props;

  const {
    currentModal,
    oneIsOpen,
    closeAll,
    open: openModal,
  } = useModal();

  const { searchBarRef } = useSearch();

  useEffect(() => {
    if (currentModal === 'search') {
      if (searchBarRef?.current) {
        searchBarRef.current.focus();
      }
    }
  }, [
    currentModal,
    searchBarRef
  ])

  return (
    <Fragment>
      <MobileNavModal />
      <SearchModal />
      <div className={classes.fixedBottomNav}>
        <ModalToggler
          slug="search"
          className={[
            className,
            classes.mobileNavToggler,
            (oneIsOpen && currentModal === 'search') && classes.hide,
          ].filter(Boolean).join(' ')}
          aria-label="Open search modal"
        >
          <div className={classes.icon}>
            <SearchIcon bold />
          </div>
        </ModalToggler>
        <button
          onClick={() => {
            if (oneIsOpen) {
              closeAll();
            } else {
              openModal('mobile-nav');
            }
          }}
          className={[
            className,
            classes.mobileNavToggler,
            // (oneIsOpen && currentModal !== 'mobile-nav') && classes.hide,
          ].filter(Boolean).join(' ')}
          aria-label="Open mobile navigation modal"
        >
          <div className={classes.icon}>
            <Hamburger isOpen={currentModal === 'mobile-nav' || currentModal === 'search'} />
          </div>
        </button>
      </div>
    </Fragment>
  )
}
