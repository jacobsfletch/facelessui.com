import { Theme, useDarkMode } from '@root/providers/DarkMode';
import classes from './index.module.scss';

export const DarkModeToggler: React.FC = () => {
  const {
    storedTheme,
    setStoredTheme
  } = useDarkMode();

  return (
    <label className={classes.label}>
      Theme
      <select
        className={classes.select}
        value={storedTheme}
        onChange={(e) => {
          const newTheme = e.target.value as Theme;
          setStoredTheme(newTheme)
        }}
      >
        <option value="">

        </option>
        <option value="light">
          Light
        </option>
        <option value="dark">
          Dark
        </option>
        <option value="auto">
          Auto
        </option>
      </select>
    </label>
  )
}
