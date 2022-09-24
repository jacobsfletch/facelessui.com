import { Hyperlink } from '@components/Hyperlink';
import { SearchResult as SearchResultType, useSearch } from '@root/providers/SearchProvider';
import React from 'react';
import classes from './index.module.scss';

export const SearchResult: React.FC<SearchResultType & {
  forceDark?: boolean
}> = (props) => {
  const {
    forceDark,
    snippets,
    path,
    title
  } = props;

  const { setClearSearchAfterNextRouteChange } = useSearch();

  const hasSnippets = snippets && snippets.length > 0;
  const pathWithoutHash = path.split('#')[0];
  const hash = path.split('#')[1];
  const href = `${pathWithoutHash}${hash ? `#${hash}` : ''}`;

  return (
    <div
      className={[
        classes.result,
        forceDark && classes.forceDark
      ].filter(Boolean).join(' ')}
    >
      <Hyperlink
        href={href}
        underline={false}
        className={classes.resultLink}
        onClick={() => {
          if (typeof setClearSearchAfterNextRouteChange === 'function') {
            setClearSearchAfterNextRouteChange(true);
          }
        }}
      >
        <p className={classes.title}>
          {title}
        </p>
        {hasSnippets && snippets.map((snippet, index) => {
          if (index < 3) {
            return (
              <div
                key={index}
                className={classes.snippet}
                dangerouslySetInnerHTML={{ __html: snippet }}
              />
            )
          }
          return null;
        })}
        {snippets.length > 3 && (
          <div className={classes.remaining}>
            {`and ${snippets.length - 3} more`}
          </div>
        )}
      </Hyperlink>
    </div>
  )
}
