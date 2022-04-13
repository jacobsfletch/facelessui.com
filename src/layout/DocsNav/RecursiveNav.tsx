import { Hyperlink } from "@components/Hyperlink";
import { Collapsible, CollapsibleContent, CollapsibleGroup, CollapsibleToggler } from "@faceless-ui/collapsibles";
import { NavItem } from "@root/layout/DocsNav/nav";
import { Chevron } from "@root/icons/Chevron";
import { Fragment } from "react";
import classes from './index.module.scss';
import { useRouter } from "next/dist/client/router";
import { VersionNumber } from "@components/VersionNumber";

export const RecursiveNav: React.FC<{
  items?: NavItem[]
}> = (props) => {
  const {
    items,
  } = props;

  const { asPath } = useRouter();

  const hasItems = items && Array.isArray(items) && items.length > 0;

  if (hasItems) {
    return (
      <CollapsibleGroup allowMultiple={false}>
        <nav className={classes.nav}>
          {items.map((item, index) => {
            const {
              type,
              label,
              href,
              versionName,
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
              const isActiveLink = Boolean(href && asPath === href);

              return (
                <Hyperlink
                  key={index}
                  href={href}
                  className={classes.link}
                >
                  <div
                    className={[
                      classes.itemLabel,
                      classes.linkLabel,
                      isActiveLink && classes.itemIsActive,
                    ].filter(Boolean).join(' ')}
                  >
                    <div className={classes.linkBullet} />
                    {label}
                  </div>
                </Hyperlink>
              )
            }

            if (type === 'group') {
              const isCurrentSection = asPath.startsWith(href || '');

              return (
                <Collapsible
                  key={index}
                  openOnInit={isCurrentSection}
                  open={isCurrentSection}
                >
                  {/* @ts-ignore */}
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
                            href={href}
                            className={[
                              classes.itemLabel,
                              isCurrentSection && classes.itemIsActive
                            ].filter(Boolean).join(' ')}
                          >
                            {label}
                            {isOpen && versionName && (
                              <Fragment>
                                &nbsp;
                                <VersionNumber
                                  name={versionName}
                                  element="span"
                                />
                              </Fragment>
                            )}
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

            if (type === 'jumplist') {
              const isCurrentSection = asPath.startsWith(href || '');

              return (
                <Collapsible
                  key={index}
                  openOnInit={isCurrentSection}
                  open={isCurrentSection}
                >
                  {/* @ts-ignore */}
                  {({ isOpen }) => {
                    return (
                      <div className={classes.jumplist}>
                        <CollapsibleToggler
                          className={classes.toggler}
                          disable={isCurrentSection}
                        >
                          <Hyperlink
                            href={href}
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
                            {isOpen && versionName && (
                              <Fragment>
                                &nbsp;
                                <VersionNumber
                                  name={versionName}
                                  element="span"
                                />
                              </Fragment>
                            )}
                          </Hyperlink>
                        </CollapsibleToggler>
                        <CollapsibleContent>
                          <div className={classes.jumplistContent}>
                            {groupItems?.map((item, jumplistItemIndex) => {
                              const {
                                type,
                                label: jumplistItemLabel,
                                href: itemHref
                              } = item;

                              if (type === 'link') {
                                const isActiveLink = Boolean(itemHref && asPath === itemHref);

                                return (
                                  <Hyperlink
                                    key={`${index}-${jumplistItemIndex}`}
                                    href={itemHref}
                                    className={classes.jumplistLink}
                                  >
                                    <div
                                      className={[
                                        classes.jumplistLinkLabel,
                                        isActiveLink && classes.itemIsActive,
                                      ].filter(Boolean).join(' ')}
                                    >
                                      <div className={classes.jumplistBullet} />
                                      <small>
                                        {jumplistItemLabel}
                                      </small>
                                    </div>
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
