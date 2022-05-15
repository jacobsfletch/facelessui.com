import React, {
  createContext,
  Fragment,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react';
import Script from 'next/script';

interface IDarkMode {
  isDark?: boolean
  setIsDark: (is?: boolean) => void // eslint-disable-line no-unused-vars
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
  const hasInitialized = useRef(false);

  useEffect(() => {
    const localIsDark = localStorage.getItem('isDark');
    if (localIsDark === 'true' || localIsDark === null) setIsDark(true)
    if (localIsDark === 'false') setIsDark(false)
  }, [])

  useEffect(() => {
    if (isDark !== undefined) {
      if (isDark) {
        localStorage.setItem('isDark', 'true');
      } else {
        localStorage.removeItem('isDark');
      }

      const root = document.documentElement;

      if (hasInitialized.current === true) {
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

      hasInitialized.current = true;
    }
  }, [isDark])

  return (
    <Fragment>
      <Script
        strategy="beforeInteractive"
        src="/initDarkMode.js"
      />
      <DarkModeContext.Provider
        value={{
          isDark,
          setIsDark
        }}
      >
        {(isDark !== undefined) && children}
      </DarkModeContext.Provider>
    </Fragment >
  );
};

export default DarkModeProvider;
