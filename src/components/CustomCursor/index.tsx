import { useMouseInfo } from '@faceless-ui/mouse-info';
import { useCustomCursor } from '@root/providers/CustomCursorProvider';
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

  if (showCustomCursor) {
    const lineClasses = [
      classes.line,
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
