import { createContext, useState, useContext } from "react"

type ICustomCursorContext = {
  showCustomCursor: boolean,
  setShowCustomCursor: (showCustomCursor: boolean) => void // eslint-disable-line
  highlightCursor: boolean,
  setHighlightCursor: (showCustomCursor: boolean) => void // eslint-disable-line
}

export const CustomCursorContext = createContext({} as ICustomCursorContext);
export const useCustomCursor = () => useContext(CustomCursorContext);

export const CustomCursorProvider: React.FC<{
  children: React.ReactNode
}> = (props) => {
  const { children } = props;

  const [showCustomCursor, setShowCustomCursor] = useState(false);
  const [highlightCursor, setHighlightCursor] = useState(false);

  return (
    <CustomCursorContext.Provider
      value={{
        setShowCustomCursor,
        showCustomCursor,
        highlightCursor,
        setHighlightCursor
      }}
    >
      {children}
    </CustomCursorContext.Provider>
  )
}
