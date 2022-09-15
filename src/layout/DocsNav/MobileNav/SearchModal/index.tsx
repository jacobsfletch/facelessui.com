import { Modal, useModal } from '@faceless-ui/modal';
import React, { useEffect } from 'react';
import classes from './index.module.scss';
import { useWindowInfo } from '@faceless-ui/window-info';
import { SearchResults } from '@components/SearchResults';
import { SearchBar } from '@components/SearchBar';

export const SearchModal: React.FC = () => {
  const { closeAll } = useModal();

  const {
    breakpoints: {
      m: midBreak
    } = {}
  } = useWindowInfo();

  useEffect(() => {
    if (!midBreak) {
      closeAll();
    }
  }, [
    closeAll,
    midBreak
  ]);

  return (
    <Modal
      slug="search"
      className={classes.searchModal}
    >
      {midBreak && ( // NOTE: conditionally render this to that two of these are not on the page at once (one for the desktop sidebar nav)
        <div className={classes.searchBar}>
          <SearchBar />
        </div>
      )}
      <SearchResults />
    </Modal>
  )
}
