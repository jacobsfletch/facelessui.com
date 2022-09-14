import { nav } from '@root/docs-nav';
import React from 'react';
import classes from './index.module.scss';
import { RecursiveNav } from '../RecursiveNav';
import { SearchBar } from '@components/SearchBar';
import { useSearch } from '@root/providers/SearchProvider';
import { SearchResults } from '@components/SearchResults';

export const DesktopNav: React.FC = () => {
  const { showResults } = useSearch();

  return (
    <div className={classes.desktopNav}>
      <div className={classes.search}>
        <SearchBar />
      </div>
      {showResults && (
        <SearchResults />
      )}
      {!showResults && (
        <RecursiveNav items={nav} />
      )}
    </div >
  )
}
