import React, {
  createContext,
  Fragment,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react';
import canUseDOM from '@root/utilities/canUseDOM';
import Head from 'next/head';

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

const getStoredTheme = () => {
  if (canUseDOM) return localStorage.getItem(localStorageKey) as Theme
  return undefined
};

const DarkModeProvider: React.FC<{
  children: React.ReactNode
}> = (props) => {
  const {
    children,
  } = props;

  const [storedTheme, setStoredTheme] = useState<Theme | undefined>(() => getStoredTheme());

  const [theme, setTheme] = useState<Theme | undefined>(undefined);
  const [isDark, setIsDark] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    let themeToUse = storedTheme;

    // NOTE: if their preference is stored as 'auto', get it from their system
    if (!storedTheme || storedTheme === 'auto') {
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
        root.style.setProperty('--color-html-bg', 'var(--color-black)');
        root.classList.add('isDark');
        setIsDark(true);
      }

      if (theme === 'light') {
        root.style.setProperty('--color-html', 'var(--color-gray-10)');
        root.style.setProperty('--color-html-bg', 'var(--color-white)');
        root.classList.remove('isDark');
        setIsDark(false);
      }
    }
  }, [theme])


  // NOTE: populate stored theme on first load
  useEffect(() => {
    setStoredTheme(getStoredTheme());
  }, [])

  // NOTE: store their preference to local storage before setting state
  const storeTheme = useCallback((incomingTheme: Theme) => {
    localStorage.setItem(localStorageKey, incomingTheme);
    setStoredTheme(incomingTheme);
  }, []);

  return (
    <Fragment>
      <Head>
        {/* eslint-disable @next/next/no-sync-scripts */}
        <script src="/initDarkMode.js" />
      </Head>
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
    </Fragment>
  );
};

export default DarkModeProvider;
