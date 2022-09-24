import { CloseIcon } from '@root/icons/CloseIcon';
import { useSearch } from '@root/providers/SearchProvider';
import useDebounce from '@root/utilities/useDebounce';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import classes from './index.module.scss';

type Props = {
  className?: string
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void // eslint-disable-line no-unused-vars
}

export const SearchBar: React.FC<Props> = (props) => {
  const {
    search: valueFromContext,
    setSearch: setSearchContext,
    searchBarRef
  } = useSearch();

  const {
    className,
    onFocus
  } = props;

  const [internalValue, setInternalValue] = React.useState(valueFromContext || '');
  const debouncedSearch = useDebounce(internalValue, 50);
  const [hasValue, setHasValue] = useState(false);
  const prevValue = useRef(valueFromContext);

  // enable keyboard shortcut
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (searchBarRef && searchBarRef.current && e.key === '/') {
      e.preventDefault();
      searchBarRef.current.focus();
    }
  }, [
    searchBarRef,
  ])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, [handleKeyDown])

  // report throttled search to context
  useEffect(() => {
    if (typeof setSearchContext === 'function') {
      if (debouncedSearch !== valueFromContext) {
        setSearchContext(debouncedSearch);
      }
    }
  }, [
    debouncedSearch,
    setSearchContext,
    valueFromContext
  ]);

  // NOTE: this is necessary for UI hydration when server rendering
  useEffect(() => {
    setHasValue(Boolean(internalValue));
  }, [internalValue])

  // NOTE: allow external changes to the search, (like clearing, etc)
  useEffect(() => {
    if (valueFromContext !== undefined && valueFromContext !== prevValue.current) {
      setInternalValue(valueFromContext)
    };
  }, [valueFromContext]);

  useEffect(() => {
    prevValue.current = internalValue;
  }, [internalValue])

  return (
    <div
      className={[
        classes.search,
        className
      ].filter(Boolean).join(' ')}
    >
      <label>
        <input
          ref={searchBarRef}
          type="text"
          placeholder="Search"
          className={[
            classes.input,
            hasValue && classes.hasValue
          ].filter(Boolean).join(' ')}
          onChange={(e) => {
            setInternalValue(e.target.value);
          }}
          onFocus={(e) => {
            if (onFocus && typeof onFocus === 'function') {
              onFocus(e)
            }
          }}
          value={internalValue}
        />
      </label>
      {hasValue && (
        <button
          className={classes.clearButton}
          type="button"
          onClick={() => {
            setInternalValue('');
          }}
        >
          <CloseIcon
            color="black"
            className={classes.clearIcon}
            bold
          />
        </button>
      )}
    </div>
  )
}
