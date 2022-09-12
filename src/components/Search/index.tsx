import { Hyperlink } from '@components/Hyperlink';
import { CloseIcon } from '@root/icons/CloseIcon';
import useClickAway from '@root/utilities/useClickAway';
import React, { useEffect } from 'react';
import searchCache from '../../../search/searchCache';
import classes from './index.module.scss';

export const Search: React.FC = () => {
  const [results, setResults] = React.useState<string[]>([]);
  const [value, setValue] = React.useState('');
  const [showResults, setShowResults] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);
  useClickAway(ref, () => setShowResults(false));

  useEffect(() => {
    if (value && value.length >= 3) {
      const doSearch = async () => {
        const newResults = await searchCache(value);
        setResults(newResults);
        setShowResults(true);
      }
      doSearch();
    } else {
      setShowResults(false);
    }
  }, [value])

  const hasResults = results && results.length > 0;

  return (
    <div className={classes.search}>
      <label>
        <input
          type="text"
          placeholder="Search (beta)"
          className={[
            classes.input,
            value && classes.hasValue
          ].filter(Boolean).join(' ')}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={value}
        />
      </label>
      {value && (
        <button
          className={classes.clearButton}
          type="button"
          onClick={() => {
            setValue('');
          }}
        >
          <CloseIcon
            color="black"
            bold
            size="small"
          />
        </button>
      )}
      <div
        className={[
          classes.results,
          showResults && classes.show,
        ].filter(Boolean).join(' ')}
        ref={ref}
      >
        {!hasResults && (
          <div>
            No results found
          </div>
        )}
        {hasResults && results.map((result, index) => (
          <div key={index}>
            <Hyperlink href={result}>
              {result}
            </Hyperlink>
          </div>
        ))}
      </div>
    </div>
  )
}
