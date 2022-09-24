import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState
} from "react";
import useDebounce from "@root/utilities/useDebounce";
import QueryString from "qs";
import { Router } from "next/router";

export type SearchResult = {
  path: string
  title: string
  snippets: string[]
}

export type SearchResults = SearchResult[]

export type ISearchContext = {
  results?: SearchResults
  search: string
  setSearch?: (search: string) => void // eslint-disable-line no-unused-vars
  threshold?: number
  isLoading?: boolean
  searchBarRef?: React.RefObject<HTMLInputElement>
  setClearSearchAfterNextRouteChange?: (clear: boolean) => void // eslint-disable-line no-unused-vars
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

  const searchBarRef = useRef<HTMLInputElement>(null);

  const [results, setResults] = useState<SearchResult[] | undefined>(undefined);
  const [clearSearchAfterNextRouteChange, setClearSearchAfterNextRouteChange] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [search, setSearch] = useState<string>(() => {
    // NOTE: initialized search from URL
    if (typeof window !== 'undefined') {
      const query = QueryString.parse(window.location.search, {
        ignoreQueryPrefix: true
      });

      return query.search as string || '';
    }

    return '';
  });

  const debouncedSearch = useDebounce(search, 50);

  useEffect(() => {
    let loadingTimer: NodeJS.Timeout | undefined;

    if (debouncedSearch && debouncedSearch.length >= threshold) {
      // NOTE: delay the loading indicator to prevent flickering for fast searches
      loadingTimer = setTimeout(() => {
        setIsLoading(true);
      }, 250);

      const doSearch = async () => {
        const req = await fetch(`/api/search?search=${debouncedSearch}`);
        const newResults = await req.json();
        const parsedJSON = JSON.parse(newResults);
        clearTimeout(loadingTimer);
        setResults(parsedJSON);
        setIsLoading(false);
      }

      doSearch();
    } else {
      if (loadingTimer) clearTimeout(loadingTimer);
      setResults(undefined);
      setIsLoading(false);
    }
  }, [
    debouncedSearch,
    threshold
  ]);

  // NOTE: bind escape to hide results
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSearch('');
      }
    }

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    }
  }, []);

  useEffect(() => {
    const clearSearch = () => {
      if (clearSearchAfterNextRouteChange) {
        setSearch('');
        setClearSearchAfterNextRouteChange(false);
      }
    }

    Router.events.on('routeChangeComplete', clearSearch)

    return () => {
      Router.events.off('routeChangeComplete', clearSearch)
    }
  }, [clearSearchAfterNextRouteChange]);

  return (
    <SearchContext.Provider
      value={{
        results,
        search,
        setSearch,
        threshold,
        isLoading,
        searchBarRef,
        setClearSearchAfterNextRouteChange
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}
