import { nav } from '@root/docs-nav';
import React from 'react';
import classes from './index.module.scss';
import { RecursiveNav } from '../RecursiveNav';
import { SearchBar } from '@components/SearchBar';
import { SearchResults } from '@components/SearchResults';
import { useWindowInfo } from '@faceless-ui/window-info';
import { useSearch } from '@root/providers/SearchProvider';
import useClickAway from '@root/utilities/useClickAway';

export const DesktopNav: React.FC = () => {
  const {
    renderResults,
    setRenderResults
  } = useSearch();

  const ref = React.useRef<HTMLDivElement>(null);

  const {
    breakpoints: {
      m: midBreak
    } = {}
  } = useWindowInfo();

  useClickAway(ref, () => {
    if (typeof setRenderResults === 'function') setRenderResults(false);
  });

  return (
    <div
      className={classes.desktopNav}
      ref={ref}
    >
      {!midBreak && ( // NOTE: conditionally render this to that two of these are not on the page at once (one for the mobile search modal)
        <div className={classes.search}>
          <SearchBar />
        </div>
      )}
      {renderResults && (
        <SearchResults />
      )}
      {!renderResults && (
        <RecursiveNav items={nav} />
      )}
    </div >
  )
}
