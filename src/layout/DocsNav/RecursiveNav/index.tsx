import { Hyperlink } from "@components/Hyperlink";
import { Collapsible, CollapsibleContent, CollapsibleGroup, CollapsibleToggler } from "@faceless-ui/collapsibles";
import { NavItem } from "@root/docs-nav";
import { Chevron } from "@root/icons/Chevron";
import { useState } from "react";
import classes from './index.module.scss';
import { useRouter } from "next/dist/client/router";
import { useJumplist } from '@faceless-ui/jumplist'
import { useWindowInfo } from "@faceless-ui/window-info";
import { useEffect } from "react";
import QueryString from "qs";

export const RecursiveNav: React.FC<{
  items?: NavItem[]
  className?: string
}> = (props) => {
  const {
    items,
    className,
  } = props;

  const {
    breakpoints: {
      m: midBreak
    } = {}
  } = useWindowInfo();

  const [canUseDOM, setCanUseDOM] = useState(false);
  const { activeJumplistIndex } = useJumplist();
  const { pathname, query } = useRouter();

  useEffect(() => {
    setCanUseDOM(true);
  }, [])

  const hasItems = items && Array.isArray(items) && items.length > 0;

  if (hasItems) {
    return (
      <CollapsibleGroup allowMultiple={midBreak}>
        <nav
          className={[
            classes.nav,
            className
          ].filter(Boolean).join(' ')}
        >
          {items.map((item, index) => {
            const {
              type,
              label,
              href,
              items: groupItems
            } = item;

            if (type === 'title') {
              return (
                <div
                  key={index}
                  className={classes.title}
                >
                  {label}
                </div>
              )
            }

            if (type === 'link' || type === 'overview') {
              const isActiveLink = Boolean(href && pathname === href);

              return (
                <Hyperlink
                  underline={false}
                  key={index}
                  href={href}
                  className={classes.link}
                >
                  <div
                    className={[
                      classes.itemLabel,
                      classes.linkLabel,
                      (canUseDOM && isActiveLink) && classes.itemIsActive,
                    ].filter(Boolean).join(' ')}
                  >
                    <div className={classes.linkBullet} />
                    {label}
                  </div>
                </Hyperlink>
              )
            }

            if (type === 'group') {
              const isCurrentSection = pathname.startsWith(href || '');

              return (
                <Collapsible
                  key={index}
                  openOnInit={isCurrentSection}
                  open={isCurrentSection}
                >
                  {({ isOpen }) => {
                    return (
                      <div className={classes.group}>
                        <CollapsibleToggler
                          className={classes.toggler}
                          disable={isCurrentSection}
                        >
                          <Chevron
                            className={classes.chevron}
                            rotation={isOpen ? 180 : 90}
                            size="small"
                          />
                          <Hyperlink
                            underline={false}
                            href={!midBreak ? href : ''} // disable links on mobile, so that the user can dropdown without navigating and having the modal close
                            className={[
                              classes.itemLabel,
                              isCurrentSection && classes.itemIsActive
                            ].filter(Boolean).join(' ')}
                          >
                            {label}
                          </Hyperlink>
                        </CollapsibleToggler>
                        <CollapsibleContent>
                          <div className={classes.groupItems}>
                            <RecursiveNav items={groupItems} />
                          </div>
                        </CollapsibleContent>
                      </div>
                    )
                  }}
                </Collapsible>
              )
            }

            if (type === 'jumplist' || type === 'subnav') {
              const isCurrentSection = pathname.startsWith(href || '');

              return (
                <Collapsible
                  key={index}
                  openOnInit={isCurrentSection}
                  open={isCurrentSection}
                >
                  {({ isOpen }) => {
                    return (
                      <div className={classes.jumplist}>
                        <CollapsibleToggler
                          className={classes.toggler}
                          disable={isCurrentSection}
                        >
                          <Hyperlink
                            underline={false}
                            href={!midBreak ? href : ''} // disable links on mobile, so that the user can dropdown without navigating and having the modal close
                            className={[
                              classes.itemLabel,
                              isCurrentSection && classes.itemIsActive
                            ].filter(Boolean).join(' ')}
                          >
                            <Chevron
                              className={classes.chevron}
                              rotation={isOpen ? 180 : 90}
                              size="small"
                            />
                            {label}
                          </Hyperlink>
                        </CollapsibleToggler>
                        <CollapsibleContent>
                          <div className={classes.jumplistContent}>
                            {groupItems?.map((item, jumplistItemIndex) => {
                              const {
                                type: itemType,
                                label: jumplistItemLabel,
                                href: itemHref
                              } = item;

                              if (itemType === 'link') {

                                let isActiveLink = false;

                                let hrefToUse = itemHref;

                                if (type === 'jumplist') isActiveLink = activeJumplistIndex === jumplistItemIndex;
                                if (type === 'subnav') isActiveLink = itemHref === pathname;

                                // keep query params on href if jumplist type
                                if (type === 'jumplist' && itemHref && Object.keys(query).length > 0) {
                                  const pathBeforeHash = itemHref.split('#')[0];
                                  const hash = itemHref.split('#')[1];
                                  hrefToUse = `${pathBeforeHash}?${QueryString.stringify(query)}${hash ? `#${hash}` : ''}`;
                                }

                                return (
                                  <Hyperlink
                                    underline={false}
                                    key={`${index}-${jumplistItemIndex}`}
                                    href={hrefToUse}
                                    className={classes.jumplistLink}
                                  >
                                    <span
                                      className={[
                                        classes.jumplistLinkLabel,
                                        isActiveLink && classes.itemIsActive,
                                      ].filter(Boolean).join(' ')}
                                    >
                                      <span className={classes.jumplistBullet} />
                                      {jumplistItemLabel}
                                    </span>
                                  </Hyperlink>
                                )
                              }
                              return null
                            })}
                          </div>
                        </CollapsibleContent>
                      </div>
                    )
                  }}
                </Collapsible>
              )
            }
          })}
        </nav>
      </CollapsibleGroup>
    )
  }
  return null;
}
