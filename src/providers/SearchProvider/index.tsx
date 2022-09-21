import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState
} from "react";
import Router, { useRouter } from 'next/router';
import useDebounce from "@root/utilities/useDebounce";
import QueryString from "qs";

export type SearchResult = {
  path: string
  title: string
  snippets: string[]
}

export type SearchResults = SearchResult[]

export type ISearchContext = {
  results?: SearchResults
  search?: string
  setSearch?: (search: string) => void // eslint-disable-line no-unused-vars
  threshold?: number
  isLoading?: boolean
  hasLoaded?: boolean
  renderResults?: boolean
  setRenderResults?: (renderResults: boolean) => void // eslint-disable-line no-unused-vars
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

  const [results, setResults] = useState<SearchResult[] | undefined>(undefined);

  const prevResults = useRef<SearchResult[] | undefined>(undefined);

  const [renderResults, setRenderResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  const [search, setSearch] = useState(() => {
    // NOTE: initialized search from URL
    if (typeof window !== 'undefined') {
      const query = QueryString.parse(window.location.search, {
        ignoreQueryPrefix: true
      });

      return query.search as string;
    }
  });

  const debouncedSearch = useDebounce(search, 50);

  const router = useRouter();

  useEffect(() => {
    let loadingTimer: NodeJS.Timeout | undefined;

    if (debouncedSearch && (debouncedSearch.length >= threshold)) {
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
      setIsLoading(false);
    }
  }, [
    router,
    debouncedSearch,
    threshold
  ]);

  // NOTE: on route changes, clear the search ONLY if we clicked a result (i.e. 'highlight' is in the URL)
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      const query = new URLSearchParams(url.split('?')[1]);
      const isHighlight = query.get('highlight');

      if (isHighlight) {
        setResults(undefined); // TODO: this isn't working, I think because the search is occurring twice, once on clear, but then again on the route change and search is prefilled still
        setSearch('');
        setRenderResults(false);
      }
    }

    Router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, []);

  // NOTE: bind escape to hide results
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setRenderResults(false);
      }
    }

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    }
  }, []);

  useEffect(() => {
    const thresholdMet = Boolean(debouncedSearch && debouncedSearch.length >= threshold);

    if (!thresholdMet) {
      setRenderResults(false);
    }
    if (thresholdMet) {
      setRenderResults(true);
    }
  }, [
    debouncedSearch,
    threshold
  ])

  useEffect(() => {
    const prev = prevResults.current;
    if (!isLoading && results !== prev) {
      setHasLoaded(true);
      prevResults.current = results;
    }
  }, [
    isLoading,
    results
  ])

  return (
    <SearchContext.Provider
      value={{
        results,
        search,
        setSearch,
        threshold,
        isLoading,
        hasLoaded,
        renderResults,
        setRenderResults
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}
