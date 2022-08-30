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
    return (
      <div
        className={[
          classes.customCursor,
          highlightCursor && classes.isHighlighted
        ].filter(Boolean).join(' ')}
        style={{
          left: mouseX,
          top: mouseY
        }}
      >
        <div className={classes.line} />
        <div className={classes.line} />
        <div className={classes.line} />
        <div className={classes.line} />
      </div>
    )
  }

  return null
}
