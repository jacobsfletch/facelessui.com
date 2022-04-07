import React, {
  createContext,
  useContext,
  useEffect,
  useState
} from 'react';

interface IDarkMode {
  isDark?: boolean
  setIsDark: (is?: boolean) => void // eslint-disable-line no-unused-vars
}

export const DarkModeContext = createContext<IDarkMode>({} as IDarkMode);
export const useDarkMode = (): IDarkMode => useContext(DarkModeContext);

const DarkModeProvider: React.FC<{
  children?: React.ReactChild | ((context: IDarkMode) => JSX.Element) // eslint-disable-line no-unused-vars
}> = (props) => {
  const {
    children,
  } = props;

  const [isDark, setIsDark] = useState<boolean | undefined>(false);

  useEffect(() => {
    const localIsDark = localStorage.getItem('isDark');
    if (localIsDark === 'true') setIsDark(true)
    if (localIsDark === 'false') setIsDark(false)
  }, [])

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      localStorage.setItem('isDark', 'true');
      root.style.setProperty('--color-html', 'var(--color-cream)');
      root.style.setProperty('--color-html-bg', 'var(--color-almost-black)');
      root.style.setProperty('--color-cursor', 'var(--color-darker-gray)');
      root.style.setProperty('--color-cursor-highlight', 'var(--color-gray)');
    } else {
      localStorage.removeItem('isDark');
      root.style.setProperty('--color-html', 'var(--color-almost-black)');
      root.style.setProperty('--color-html-bg', 'var(--color-white)');
      root.style.setProperty('--color-cursor', 'var(--color-lighter-gray)');
      root.style.setProperty('--color-cursor-highlight', 'var(--color-gray)');
    }
  }, [isDark])

  return (
    <DarkModeContext.Provider
      value={{
        isDark,
        setIsDark
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;
