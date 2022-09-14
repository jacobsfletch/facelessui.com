import { Hyperlink } from '@components/Hyperlink';
import React, { useEffect } from 'react';
import classes from './index.module.scss';
import { useSearch } from '@root/providers/SearchProvider';

export const SearchResults = () => {
  const { results, hasResults } = useSearch();

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
