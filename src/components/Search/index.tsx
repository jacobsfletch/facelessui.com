import { Hyperlink } from '@components/Hyperlink';
import { CloseIcon } from '@root/icons/CloseIcon';
import useClickAway from '@root/utilities/useClickAway';
import React, { useCallback, useEffect } from 'react';
import classes from './index.module.scss';

export const Search: React.FC = () => {
  const [results, setResults] = React.useState<{
    path: string
    snippets: string[]
  }[]>([]);

  const [value, setValue] = React.useState('');
  const [showResults, setShowResults] = React.useState(false);

  const ref = React.useRef<HTMLDivElement>(null);
  const handleClickAway = useCallback(() => {
    setShowResults(false);
    ref.current?.scrollTo(0, 0);
  }, []);

  useClickAway(ref, handleClickAway);

  useEffect(() => {
    if (value && value.length >= 3) {
      const doSearch = async () => {
        const req = await fetch(`/api/search?search=${value}`);
        const newResults = await req.json();
        const parsedJSON = JSON.parse(newResults);
        setResults(parsedJSON);
        setShowResults(true);
      }
      doSearch();
    } else {
      setShowResults(false);
    }
  }, [value])

  const hasResults = results && Array.isArray(results) && results.length > 0;

  // console.log(typeof results);

  useEffect(() => {
    ref.current?.scrollTo(0, 0);
  }, [value])

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
        {hasResults && results.map((result, index) => {
          const {
            path,
            snippets
          } = result;

          const hasSnippets = snippets && snippets.length > 0;

          return (
            <div
              key={index}
              className={classes.result}
            >
              <Hyperlink
                href={path}
                underline={false}
                className={classes.resultLink}
              >
                <div className={classes.pathName}>
                  {path}
                </div>
                {hasSnippets && snippets.map((snippet, index) => (
                  <div
                    key={index}
                    className={classes.snippet}
                    dangerouslySetInnerHTML={{ __html: snippet }}
                  />
                ))}
              </Hyperlink>
            </div>
          )
        })}
      </div>
    </div>
  )
}
