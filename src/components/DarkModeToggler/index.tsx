import { Chevron } from '@root/icons/Chevron';
import { Theme, useDarkMode } from '@root/providers/DarkMode';
import classes from './index.module.scss';

export const DarkModeToggler: React.FC = () => {
  const {
    storedTheme,
    setStoredTheme
  } = useDarkMode();

  return (
    <label
      className={classes.label}
      htmlFor='dark-mode-toggler'
    >
      <span className={classes.labelText}>
        Theme:&nbsp;
      </span>
      <div className={classes.selectWrapper}>
        <select
          id="dark-mode-toggler"
          className={classes.select}
          value={storedTheme || "auto"}
          onChange={(e) => {
            const newTheme = e.target.value as Theme;
            setStoredTheme(newTheme)
          }}
        >
          <option value="auto">
            Auto
          </option>
          <option value="light">
            Light
          </option>
          <option value="dark">
            Dark
          </option>
        </select>
        &nbsp;
        <Chevron
          className={classes.icon}
          size="small"
          bold
        />
      </div>
    </label >
  )
}
