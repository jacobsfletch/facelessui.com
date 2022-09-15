import { createContext, useContext, useEffect, useState } from "react"
import Router from 'next/router';

export type SearchResult = {
  path: string
  snippets: string[]
}

export type SearchResults = SearchResult[]

export type ISearchContext = {
  results: SearchResults
  search?: string
  setSearch?: (search: string) => void // eslint-disable-line no-unused-vars
  hasResults?: boolean,
  threshold?: number
  thresholdMet?: boolean
}

export const SearchContext = createContext({} as ISearchContext);
export const useSearch = () => useContext(SearchContext);

export const SearchProvider: React.FC<{
  children: React.ReactNode
  threshold?: number
}> = (props) => {
  const {
    children,
    threshold = 3
  } = props;

  const [results, setResults] = useState<{
    path: string
    snippets: string[]
  }[]>([]);

  const [search, setSearch] = useState('');

  useEffect(() => {
    if (search && search.length >= 3) {
      const doSearch = async () => {
        const req = await fetch(`/api/search?search=${search}`);
        const newResults = await req.json();
        const parsedJSON = JSON.parse(newResults);
        setResults(parsedJSON);
      }
      doSearch();
    } else {
      setResults([]);
    }
  }, [search]);

  // NOTE: on route changes, clear the search ONLY if we clicked a result (i.e. 'highlight' is in the URL)
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      const query = new URLSearchParams(url.split('?')[1]);
      const isHighlight = query.get('highlight');
      console.log(isHighlight);
      if (isHighlight) {
        setSearch('');
      }
    }

    Router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, []);

  return (
    <SearchContext.Provider
      value={{
        results,
        search,
        setSearch,
        hasResults: results && Array.isArray(results) && results.length > 0,
        threshold,
        thresholdMet: Boolean(search && search.length >= threshold)
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}
