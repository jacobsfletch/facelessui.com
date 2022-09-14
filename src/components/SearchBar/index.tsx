import { CloseIcon } from '@root/icons/CloseIcon';
import { useSearch } from '@root/providers/SearchProvider';
import React from 'react';
import classes from './index.module.scss';

export const SearchBar: React.FC = () => {
  const { search, setSearch } = useSearch();

  return (
    <div className={classes.search}>
      <label>
        <input
          type="text"
          placeholder="Search (beta)"
          className={[
            classes.input,
            search && classes.hasValue
          ].filter(Boolean).join(' ')}
          onChange={(e) => {
            if (typeof setSearch === 'function') {
              setSearch(e.target.value);
            }
          }}
          value={search}
        />
      </label>
      {search && (
        <button
          className={classes.clearButton}
          type="button"
          onClick={() => {
            if (typeof setSearch === 'function') {
              setSearch('');
            }
          }}
        >
          <CloseIcon
            color="black"
            bold
            size="small"
          />
        </button>
      )}
    </div>
  )
}
