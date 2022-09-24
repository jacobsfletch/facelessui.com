import { Hyperlink } from '@components/Hyperlink';
import { ArrowIcon } from '@root/icons/Arrow';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import classes from './index.module.scss';
import { DocsNav, NavItem } from '@root/docs-nav'
import { nav } from '@root/docs-nav';
import { CardBackground } from '@components/Card/Background';
import { useCustomCursor } from '@root/providers/CustomCursorProvider';
import { TextWithInlineIcon } from '@components/TextWithInlineIcon';

type NavLink = {
  label: string
  href: string
  index: number
  parentIndex?: number
  grandparentIndex?: number
}

const filterNavLinks = (initialNav: DocsNav): NavLink[] => {
  const links: NavLink[] = [];

  const recursiveFilter = (
    incomingNav: DocsNav,
    // TODO: instead of 'parentIndex' and 'grandparentIndex' just use dot notation
    parentIndex?: number,
    grandparentIndex?: number
  ) => {
    if (incomingNav) {
      incomingNav.forEach((item, index) => {
        const {
          label,
          href,
          items,
          type
        } = item;

        if ((type === 'group' || type === 'link' || type === 'jumplist' || type === 'subnav') && href) {
          links.push({
            label,
            href,
            index,
            parentIndex,
            grandparentIndex
          });
        }

        if ((type === 'group' || type === 'subnav') && items) {
          recursiveFilter(items, index, parentIndex)
        }
      });
    }
  }

  recursiveFilter(initialNav);
  return links;
}

const navLinks = filterNavLinks(nav);

export const NextInDocs: React.FC<{
  className?: string
}> = (props) => {
  const {
    className
  } = props;

  const { setHighlightCursor, setShowCustomCursor } = useCustomCursor();

  const [nextNavItem, setNextNavItem] = useState<NavItem | null>();

  const router = useRouter();
  const { pathname } = router;

  useEffect(() => {
    const activeNavIndex = navLinks.findIndex((item) => {
      const { href } = item;
      return Boolean(href && pathname === href);
    });

    const nextIndex = activeNavIndex + 1;

    if (nextIndex && navLinks[nextIndex]) {
      const nextNavLink = navLinks[nextIndex];

      const {
        index,
        parentIndex,
        grandparentIndex
      } = nextNavLink;

      let nextNavItem = null;
      if (grandparentIndex && parentIndex) nextNavItem = nav?.[grandparentIndex]?.items?.[parentIndex]?.items?.[index];
      else if (parentIndex) nextNavItem = nav?.[parentIndex]?.items?.[index];
      else nextNavItem = nav?.[index];

      setNextNavItem(nextNavItem)
    } else setNextNavItem(null);
  }, [pathname]);

  if (nextNavItem) {
    const {
      href,
      label
    } = nextNavItem;

    return (
      <Hyperlink
        href={href}
        underline={false}
        className={[
          className,
          classes.nextInDocs,
        ].filter(Boolean).join(' ')}
        onMouseEnter={() => {
          setShowCustomCursor(true);
          setHighlightCursor(true)
        }}
        onMouseLeave={() => {
          setShowCustomCursor(false);
          setHighlightCursor(false)
        }}
      >
        <CardBackground className={classes.content}>
          <div>
            Next:
          </div>
          <div>
            <TextWithInlineIcon
              className={classes.label}
              element="p"
              text={label}
              icon={(<ArrowIcon bold />)}
            />
          </div>
        </CardBackground>
      </Hyperlink>
    )
  }

  return null
}
