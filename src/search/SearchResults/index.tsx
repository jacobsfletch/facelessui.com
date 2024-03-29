import React, { Fragment } from 'react';
import classes from './index.module.scss';
import { useSearch } from '@root/search/SearchProvider';
import { SearchResult } from './SearchResult';

export const SearchResults: React.FC<{
  forceDark?: boolean
  className?: string
}> = (props) => {
  const {
    forceDark,
    className,
  } = props;

  const {
    results,
    search,
    isLoading,
    showLoader
  } = useSearch();

  const hasResults = results && results.length > 0;

  const ref = React.useRef<HTMLDivElement>(null);

  return (
    <div
      className={[
        classes.search,
        className
      ].filter(Boolean).join(' ')}
    >
      <div
        className={classes.results}
        ref={ref}
      >
        {!isLoading && (
          <Fragment>
            {!hasResults ? (
              <p className={classes.noResults}>
                {`No results for "${search}". Try again with a different keyword.`}
              </p>
            ) : (
              <Fragment>
                {results?.map((result, index) => (
                  <SearchResult
                    key={index}
                    {...result}
                    forceDark={forceDark}
                  />
                ))}
              </Fragment>
            )}
          </Fragment>
        )}
        {isLoading && showLoader && (
          <div>
            Loading...
          </div>
        )}
      </div>
    </div>
  )
}
