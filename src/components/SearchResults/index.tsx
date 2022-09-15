import React, { useEffect } from 'react';
import classes from './index.module.scss';
import { useSearch } from '@root/providers/SearchProvider';
import { SearchResult } from './SearchResult';

export const SearchResults: React.FC<{
  forceDark?: boolean
}> = (props) => {
  const {
    forceDark
  } = props;

  const {
    results,
    hasResults,
    search
  } = useSearch();

  const ref = React.useRef<HTMLDivElement>(null);

  const hasInitialized = React.useRef(false);

  useEffect(() => {
    if (hasInitialized.current) {
      ref.current?.scrollTo(0, 0);
    }

    hasInitialized.current = true;
  }, [results])

  return (
    <div className={classes.search}>
      <div
        className={classes.results}
        ref={ref}
      >
        {search && !hasResults && (
          <p className={classes.noResults}>
            {`No results for "${search}". Try again with a different keyword.`}
          </p>
        )}
        {!search && (
          <div>
            Start typing to search
          </div>
        )}
        {hasResults && results.map((result, index) => (
          <SearchResult
            key={index}
            {...result}
            forceDark={forceDark}
          />
        ))}
      </div>
    </div>
  )
}
