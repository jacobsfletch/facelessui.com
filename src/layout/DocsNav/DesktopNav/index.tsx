import { nav } from '@root/docs-nav';
import React, { useEffect, useState } from 'react';
import classes from './index.module.scss';
import { RecursiveNav } from '../RecursiveNav';
import { SearchBar } from '@components/SearchBar';
import { SearchResults } from '@components/SearchResults';
import { useWindowInfo } from '@faceless-ui/window-info';
import { useSearch } from '@root/providers/SearchProvider';
import useClickAway from '@root/utilities/useClickAway';

export const DesktopNav: React.FC = () => {
  const {
    thresholdMet
  } = useSearch();

  const [showResults, setShowResults] = useState(false);

  const ref = React.useRef<HTMLDivElement>(null);

  const {
    breakpoints: {
      m: midBreak
    } = {}
  } = useWindowInfo();

  useEffect(() => {
    if (thresholdMet) {
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  }, [
    thresholdMet
  ])

  useClickAway(ref, () => {
    setShowResults(false);
  });

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowResults(false);
      }
    }

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    }
  }, [])

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
      {showResults && (
        <SearchResults />
      )}
      {!showResults && (
        <RecursiveNav items={nav} />
      )}
    </div >
  )
}
