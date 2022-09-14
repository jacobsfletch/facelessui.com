import { createContext, useContext, useEffect, useState } from "react"

export type SearchResults = {
  path: string
  snippets: string[]
}[]

export type ISearchContext = {
  results: SearchResults
  search?: string
  setSearch?: (search: string) => void // eslint-disable-line no-unused-vars
  showResults?: boolean,
  hasResults?: boolean
}

export const SearchContext = createContext({} as ISearchContext);
export const useSearch = () => useContext(SearchContext);

export const SearchProvider: React.FC<{
  children: React.ReactNode
}> = (props) => {
  const { children } = props;

  const [results, setResults] = useState<{
    path: string
    snippets: string[]
  }[]>([]);

  const [search, setSearch] = useState('');

  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (search && search.length >= 3) {
      const doSearch = async () => {
        const req = await fetch(`/api/search?search=${search}`);
        const newResults = await req.json();
        const parsedJSON = JSON.parse(newResults);
        setResults(parsedJSON);
        setShowResults(true);
      }
      doSearch();
    } else {
      setShowResults(false);
    }
  }, [search]);

  return (
    <SearchContext.Provider
      value={{
        results,
        search,
        setSearch,
        showResults,
        hasResults: results && Array.isArray(results) && results.length > 0
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}
