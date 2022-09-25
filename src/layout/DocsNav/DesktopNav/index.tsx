import { nav } from '@root/docs-nav';
import React, { useEffect } from 'react';
import classes from './index.module.scss';
import { RecursiveNav } from '../RecursiveNav';
import { SearchBar } from '@root/search/SearchBar';
import { SearchResults } from '@root/search/SearchResults';
import { useWindowInfo } from '@faceless-ui/window-info';
import { useSearch } from '@root/search/SearchProvider';
import useClickAway from '@root/utilities/useClickAway';
import { Router } from 'next/router';

export const DesktopNav: React.FC = () => {
  const ref = React.useRef<HTMLDivElement>(null);

  const {
    thresholdMet,
    results
  } = useSearch();

  const [renderResults, setRenderResults] = React.useState(false);

  const {
    breakpoints: {
      m: midBreak
    } = {}
  } = useWindowInfo();

  useClickAway(ref, () => {
    if (typeof setRenderResults === 'function') setRenderResults(false);
  });

  useEffect(() => {
    setRenderResults(Boolean(thresholdMet));
  }, [thresholdMet])

  useEffect(() => {
    const handleRouteChange = () => {
      setRenderResults(false);
    }

    Router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, []);

  return (
    <div
      className={classes.desktopNav}
      ref={ref}
    >
      {!midBreak && ( // NOTE: conditionally render this to that two of these are not on the page at once (one for the mobile search modal)
        <div className={classes.search}>
          <SearchBar
            onFocus={() => {
              if (results !== undefined) {
                setRenderResults(true)
              }
            }}
          />
        </div>
      )}
      {renderResults && (
        <SearchResults className={classes.searchResults} />
      )}
      {!renderResults && (
        <RecursiveNav items={nav} />
      )}
    </div >
  )
}
