import { Hyperlink } from '@components/Hyperlink';
import { ArrowIcon } from '@root/icons/Arrow';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import classes from './index.module.scss';
import { DocsNav, NavItem } from '@root/docs-nav'
import { TextWithInlineIcon } from '@components/TextWithInlineIcon';

import { nav } from '@root/docs-nav';
import { useDarkMode } from '@root/providers/DarkMode';

type NavLink = {
  label: string
  href: string
  index: number
  parentIndex?: number
}

const filterNavLinks = (initialNav: DocsNav): NavLink[] => {
  const links: NavLink[] = [];

  const recursiveFilter = (incomingNav: DocsNav, parentIndex?: number) => {
    if (incomingNav) {
      incomingNav.forEach((item, index) => {
        const {
          label,
          href,
          items,
          type
        } = item;

        if ((type === 'group' || type === 'link' || type === 'jumplist') && href) {
          links.push({
            label,
            href,
            index,
            parentIndex
          });
        }

        if (type === 'group' && items) {
          recursiveFilter(items, index)
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

  const { isDark } = useDarkMode();

  const [nextNavItem, setNextNavItem] = useState<NavItem | null>();

  const router = useRouter();
  const { asPath: asPathFromRouter } = router;
  const asPath = asPathFromRouter.split('#')[0];

  useEffect(() => {
    const activeNavIndex = navLinks.findIndex((item) => {
      const { href } = item;
      return Boolean(href && asPath === href);
    });

    const nextIndex = activeNavIndex + 1;

    if (nextIndex && navLinks[nextIndex]) {
      const nextNavLink = navLinks[nextIndex];
      const {
        index,
        parentIndex
      } = nextNavLink;

      let nextNavItem = null;
      if (parentIndex) nextNavItem = nav?.[parentIndex]?.items?.[index];
      else nextNavItem = nav?.[index];

      setNextNavItem(nextNavItem)
    } else setNextNavItem(null);
  }, [asPath]);

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
          isDark && classes.isDark
        ].filter(Boolean).join(' ')}
      >
        <div>
          Next:
        </div>
        <div>
          <TextWithInlineIcon
            className={classes.label}
            element="h5"
            text={label}
            icon={(<ArrowIcon bold />)}
          />
        </div>
      </Hyperlink>
    )
  }

  return null
}
