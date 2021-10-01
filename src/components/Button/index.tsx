import { Hyperlink } from '@components/Hyperlink';
import { ArrowIcon } from '@root/icons/Arrow';
import React from 'react';
import classes from './index.module.scss';

export type ButtonProps = {
  className?: string,
  anchorClassName?: string
  href?: string
  label?: string
  color?: string
  arrow?: boolean
  size?: string
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  onClick?: () => void
  type?: 'submit' | 'button'
  appearance: 'primary' | 'secondary' | 'text'
  newTab?: boolean
}

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    href,
    label,
    className,
    anchorClassName,
    appearance = 'primary',
    arrow,
    size,
    onMouseEnter,
    onMouseLeave,
    onClick,
    type,
    newTab
  } = props;

  const classList = [
    className,
    classes.button,
    appearance && classes[`type--${appearance}`],
    size && classes[`size--${size}`]
  ].filter(Boolean).join(' ')

  if (type === 'submit' || type === 'button') {
    return (
      <button
        className={classList}
        type={type}
        onClick={onClick}
      >
        <span className={classes.contents}>
          {label}
          {arrow && (
            <div className={classes.arrowWrapper}>
              <ArrowIcon />
            </div>
          )}
        </span>
      </button>
    )
  }

  return (
    <div className={classList}>
      <Hyperlink
        href={href}
        className={[
          classes.contents,
          anchorClassName
        ].filter(Boolean).join(' ')}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        newTab={newTab}
      >
        {label}
        {arrow && (
          <div className={classes.arrowWrapper}>
            <ArrowIcon />
          </div>
        )}
      </Hyperlink>
    </div>
  )
}
