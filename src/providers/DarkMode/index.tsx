import React, {
  createContext,
  Fragment,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react';
import Script from 'next/script';

interface IDarkMode {
  isDark?: boolean
  setIsDark: (incomingIsDark?: boolean) => void // eslint-disable-line no-unused-vars
}

export const DarkModeContext = createContext<IDarkMode>({} as IDarkMode);
export const useDarkMode = (): IDarkMode => useContext(DarkModeContext);

const DarkModeProvider: React.FC<{
  children: React.ReactNode
}> = (props) => {
  const {
    children,
  } = props;

  const [isDark, setIsDark] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const localIsDark = localStorage.getItem('isDark');
    if (localIsDark === 'false' || localIsDark === null) setIsDark(false)
    if (localIsDark === 'true') setIsDark(true)
  }, [])

  useEffect(() => {
    if (isDark !== undefined) {
      const root = document.documentElement;
      if (isDark) {
        // IMPORTANT: must match /public/initDarkMode.js
        root.style.setProperty('--color-html', 'var(--color-cream)');
        root.style.setProperty('--color-html-bg', 'var(--color-almost-black)');
        root.style.setProperty('--color-cursor', 'var(--color-darker-gray)');
        root.style.setProperty('--color-cursor-highlight', 'var(--color-gray)');
      } else {
        root.style.setProperty('--color-html', 'var(--color-almost-black)');
        root.style.setProperty('--color-html-bg', 'var(--color-white)');
        root.style.setProperty('--color-cursor', 'var(--color-lighter-gray)');
        root.style.setProperty('--color-cursor-highlight', 'var(--color-gray)');
      }
    }
  }, [isDark])

  const handleSetDarkMode = useCallback((incomingIsDark?: boolean) => {
    if (incomingIsDark) localStorage.setItem('isDark', 'true');
    else localStorage.removeItem('isDark');
    setIsDark(incomingIsDark);
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
          setIsDark: handleSetDarkMode
        }}
      >
        {(isDark !== undefined) && children}
      </DarkModeContext.Provider>
    </Fragment >
  );
};

export default DarkModeProvider;
