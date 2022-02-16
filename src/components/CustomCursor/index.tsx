import { useMouseInfo } from '@faceless-ui/mouse-info';
import { useCustomCursor } from '@root/providers/CustomCursorProvider';
import { useDarkMode } from '@root/providers/DarkMode';
import classes from './index.module.scss';

export const CustomCursor: React.FC = () => {
  const {
    x: mouseX,
    y: mouseY
  } = useMouseInfo();

  const {
    showCustomCursor,
    highlightCursor
  } = useCustomCursor();

  const { isDark } = useDarkMode();

  if (showCustomCursor) {
    const lineClasses = [
      classes.line,
      isDark && classes.isDark,
      highlightCursor && classes.isHighlighted
    ].filter(Boolean).join(' ');

    return (
      <div
        className={classes.customCursor}
        style={{
          left: mouseX,
          top: mouseY
        }}
      >
        <div className={lineClasses} />
        <div className={lineClasses} />
        <div className={lineClasses} />
        <div className={lineClasses} />
      </div>
    )
  }
  return null
}
