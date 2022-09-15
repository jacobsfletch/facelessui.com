import { CloseIcon } from '@root/icons/CloseIcon';
import { useSearch } from '@root/providers/SearchProvider';
import useDebounce from '@root/utilities/useDebounce';
import React, { useCallback, useEffect, useRef } from 'react';
import classes from './index.module.scss';

type Props = {
  className?: string
}

export const SearchBar: React.FC<Props> = (props) => {
  const {
    search: valueFromContext,
    setSearch: setSearchContext
  } = useSearch();

  const {
    className,
  } = props;

  const ref = useRef<HTMLInputElement>(null);

  const [internalValue, setInternalValue] = React.useState(valueFromContext || '');
  const debouncedSearch = useDebounce(internalValue, 50);
  const prevValue = useRef(valueFromContext);

  // enable keyboard shortcut
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (ref && ref.current && e.key === '/') {
      e.preventDefault();
      ref.current.focus();
    }
  }, [ref])

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

  // NOTE: let external changes to the search value update the input
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
            internalValue && classes.hasValue
          ].filter(Boolean).join(' ')}
          onChange={(e) => {
            setInternalValue(e.target.value);
          }}
          value={internalValue}
        />
      </label>
      {internalValue && (
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
