import { CloseIcon } from '@root/icons/CloseIcon';
import { useSearch } from '@root/providers/SearchProvider';
import useDebounce from '@root/utilities/useDebounce';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import classes from './index.module.scss';

type Props = {
  className?: string
}

export const SearchBar: React.FC<Props> = (props) => {
  const {
    search: valueFromContext,
    setSearch: setSearchContext,
    setRenderResults,
    results
  } = useSearch();

  const {
    className,
  } = props;

  const ref = useRef<HTMLInputElement>(null);

  const [internalValue, setInternalValue] = React.useState(valueFromContext || '');
  const debouncedSearch = useDebounce(internalValue, 50);
  const [hasValue, setHasValue] = useState(false);
  const prevValue = useRef(valueFromContext);

  // enable keyboard shortcut
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (ref && ref.current && e.key === '/') {
      e.preventDefault();
      ref.current.focus();
    }
  }, [
    ref,
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
      setSearchContext(debouncedSearch);
    }
  }, [
    debouncedSearch,
    setSearchContext
  ]);

  // NOTE: this is necessary for UII hydration when server rendering
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
          ref={ref}
          type="text"
          placeholder="Search (beta)"
          className={[
            classes.input,
            hasValue && classes.hasValue
          ].filter(Boolean).join(' ')}
          onChange={(e) => {
            setInternalValue(e.target.value);
          }}
          onFocus={() => {
            if (typeof setRenderResults === 'function' && results && results.length > 0) {
              setRenderResults(true)
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
