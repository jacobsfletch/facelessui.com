import React, {
  createContext,
  Fragment,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react';
import Script from 'next/script';

const localStorageKey = 'theme';

export type Theme = 'dark' | 'light' | 'auto';

interface IDarkMode {
  theme?: Theme
  setTheme: (incomingTheme: Theme) => void // eslint-disable-line no-unused-vars
  storedTheme?: Theme
  setStoredTheme: (incomingTheme: Theme) => void // eslint-disable-line no-unused-vars
  isDark?: boolean
}

export const DarkModeContext = createContext<IDarkMode>({} as IDarkMode);
export const useDarkMode = (): IDarkMode => useContext(DarkModeContext);

const DarkModeProvider: React.FC<{
  children: React.ReactNode
}> = (props) => {
  const {
    children,
  } = props;

  const [storedTheme, setStoredTheme] = useState<Theme | undefined>(undefined);
  const [theme, setTheme] = useState<Theme | undefined>(undefined);
  const [isDark, setIsDark] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    let themeToUse = storedTheme;

    // NOTE: if their preference is stored as 'auto', get it from their system
    if (storedTheme === 'auto') {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) themeToUse = 'dark';
      if (window.matchMedia('(prefers-color-scheme: light)').matches) themeToUse = 'light';
    }

    setTheme(themeToUse);
  }, [storedTheme])

  useEffect(() => {
    if (theme !== undefined) {
      const root = document.documentElement;

      if (theme === 'dark') {
        // IMPORTANT: must match /public/initDarkMode.js
        root.style.setProperty('--color-html', 'var(--color-cream)');
        root.style.setProperty('--color-html-bg', 'var(--color-almost-black)');
        root.style.setProperty('--color-cursor', 'var(--color-darker-gray)');
        root.style.setProperty('--color-cursor-highlight', 'var(--color-gray)');
        setIsDark(true);
      }

      if (theme === 'light') {
        root.style.setProperty('--color-html', 'var(--color-almost-black)');
        root.style.setProperty('--color-html-bg', 'var(--color-white)');
        root.style.setProperty('--color-cursor', 'var(--color-lighter-gray)');
        root.style.setProperty('--color-cursor-highlight', 'var(--color-gray)');
        setIsDark(false);
      }
    }
  }, [theme])


  // NOTE: populate stored theme on first load
  useEffect(() => {
    const storedThemeOnLoad = localStorage.getItem(localStorageKey) as Theme;
    setStoredTheme(storedThemeOnLoad);
  }, [])

  // NOTE: store their preference to local storage before setting state
  const storeTheme = useCallback((incomingTheme: Theme) => {
    localStorage.setItem(localStorageKey, incomingTheme);
    setStoredTheme(incomingTheme);
  }, []);

  return (
    <Fragment>
      <Script
        strategy="beforeInteractive"
        src="/initDarkMode.js"
      />
      <DarkModeContext.Provider
        value={{
          isDark,
          theme,
          setTheme,
          storedTheme,
          setStoredTheme: storeTheme
        }}
      >
        {children}
      </DarkModeContext.Provider>
    </Fragment >
  );
};

export default DarkModeProvider;
