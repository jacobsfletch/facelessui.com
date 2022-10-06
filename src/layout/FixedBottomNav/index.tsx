import { Hamburger } from '@components/Hamburger';
import { ModalToggler, useModal } from '@faceless-ui/modal';
import { SearchIcon } from '@root/icons/SearchIcon';
import { useSearch } from '@root/search/SearchProvider';
import React, { useEffect } from 'react';
import { mobileNavModalSlug } from '../MobileNavModal';
import classes from './index.module.scss';

export const MobileNav: React.FC<{
  className?: string
}> = (props) => {
  const {
    className,
  } = props;

  const {
    isModalOpen,
    oneModalIsOpen,
    closeAllModals,
    openModal,
  } = useModal();

  const { searchBarRef } = useSearch();

  useEffect(() => {
    if (isModalOpen('search')) {
      if (searchBarRef?.current) {
        searchBarRef.current.focus();
      }
    }
  }, [
    isModalOpen,
    searchBarRef
  ])

  return (
    <div className={classes.fixedBottomNav}>
      <ModalToggler
        slug="search"
        className={[
          className,
          classes.mobileNavToggler,
          (oneModalIsOpen && isModalOpen('search')) && classes.hide,
        ].filter(Boolean).join(' ')}
        aria-label="Open search modal"
      >
        <div className={classes.icon}>
          <SearchIcon bold />
        </div>
      </ModalToggler>
      <button
        onClick={() => {
          if (oneModalIsOpen) {
            closeAllModals();
          } else {
            openModal(mobileNavModalSlug);
          }
        }}
        className={[
          className,
          classes.mobileNavToggler,
        ].filter(Boolean).join(' ')}
        aria-label="Open mobile navigation modal"
      >
        <div className={classes.icon}>
          <Hamburger isOpen={isModalOpen('mobile-nav') || isModalOpen('search')} />
        </div>
      </button>
    </div>
  )
}
