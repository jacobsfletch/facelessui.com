import Link from 'next/link';
import React from 'react';
import classes from './index.module.scss';

// NOTE: this component exists so that any element can be linked with a sanitized url, and conditionally passed through local routing
// this adds consistency and safety to any links rendered through the app, in or outside a traditional button component

export type HyperlinkProps = {
  href?: string
  className?: string
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  onClick?: () => void
  newTab?: boolean
  underline?: boolean
  underlineOnHover?: boolean
  colored?: boolean
  children?: React.ReactNode
  'aria-label'?: string
  dimOnHover?: boolean
}

export const Hyperlink: React.FC<HyperlinkProps> = (props) => {
  const {
    className,
    href,
    children,
    onMouseEnter,
    onMouseLeave,
    onClick,
    newTab,
    underline = true,
    underlineOnHover,
    colored,
    'aria-label': ariaLabel,
    dimOnHover
  } = props;

  const sharedProps = {
    className: [
      className,
      classes.hyperlink,
      underline && classes.underline,
      (underline !== true && underlineOnHover) && classes.underlineOnHover,
      colored && classes.colored,
      dimOnHover && classes.dimOnHover
    ].filter(Boolean).join(' '),
    onMouseEnter,
    onMouseLeave,
    onClick,
    ...newTab ? {
      rel: 'noopener noreferrer',
      target: '_blank'
    } : {},
    'aria-label': ariaLabel
  }

  if (href) {
    const beginsWithSlash = href?.startsWith('/') || href?.startsWith('#');
    let isLocal = beginsWithSlash;

    // continue to check whether this is a local href by comparing the url origin
    if (!beginsWithSlash) {
      try {
        const url = new URL(href);
        if (url.origin !== process.env.NEXT_PUBLIC_APP_URL) {
          isLocal = false;
        }
      } catch (e) {
        console.log(href);
        console.error(e)
      };
    }


    if (!newTab && isLocal) {
      return (
        <Link
          href={href}
          scroll={false}
        >
          <a  {...sharedProps}>
            {children}
          </a>
        </Link>
      )
    }

    return (
      <a
        href={href}
        {...sharedProps}
        rel="noopener noreferrer"
        target="_blank"
      >
        {children}
      </a>
    )
  }

  return (
    <span {...sharedProps}>
      {children}
    </span>
  )
}
