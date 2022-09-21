import { Hyperlink } from '@components/Hyperlink';
import { SearchResult as SearchResultType } from '@root/providers/SearchProvider';
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

  const hasSnippets = snippets && snippets.length > 0;

  return (
    <div
      className={[
        classes.result,
        forceDark && classes.forceDark
      ].filter(Boolean).join(' ')}
    >
      <Hyperlink
        href={`${path}?highlight=1`}
        underline={false}
        className={classes.resultLink}
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
