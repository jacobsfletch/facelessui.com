import { useDarkMode } from '@root/providers/DarkMode';
import classes from './index.module.scss';

export const DarkModeToggler: React.FC = () => {
  const {
    isDark,
    setIsDark,
  } = useDarkMode();

  return (
    <button
      className={classes.darkModeToggler}
      onClick={() => setIsDark(!isDark)}
    >
      {isDark ? 'Light' : 'Dark'}
      &nbsp;
      Mode
    </button>
  )
}
