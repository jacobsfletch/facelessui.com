import { Modal, useModal } from '@faceless-ui/modal';
import React, { Fragment, useEffect } from 'react';
import classes from './index.module.scss';
import { useWindowInfo } from '@faceless-ui/window-info';
import { SearchResults } from '@root/search/SearchResults';
import { SearchBar } from '@root/search/SearchBar';
import { useSearch } from '@root/search/SearchProvider';

const suggestions = ['Modal', 'Slider', 'Accessibility']

export const SearchModal: React.FC = () => {
  const { closeAll } = useModal();

  const {
    setSearch,
    results
  } = useSearch();

  const [renderResults, setRenderResults] = React.useState(false);

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

  useEffect(() => {
    setRenderResults(results !== undefined)
  }, [results])

  return (
    <Modal
      slug="search"
      className={classes.searchModal}
    >
      <div className={classes.wrapper}>
        {midBreak && ( // NOTE: conditionally render this to that two of these are not on the page at once (one for the desktop sidebar nav)
          <div className={classes.searchBar}>
            <SearchBar />
          </div>
        )}
        {!renderResults && (
          <p className={classes.suggestions}>
            Suggestions:
            &nbsp;
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                className={classes.suggestion}
                onClick={() => {
                  if (typeof setSearch === 'function') {
                    setSearch(suggestion)
                  }
                }}
                type="button"
              >
                <span className={classes.suggestionLabel}>
                  {suggestion}
                </span>
                {index !== suggestions.length - 1 && (
                  <Fragment>
                    ,
                    &nbsp;
                  </Fragment>
                )}
              </button>
            ))}
          </p>
        )}
        {renderResults && (
          <SearchResults />
        )}
      </div>
    </Modal>
  )
}
