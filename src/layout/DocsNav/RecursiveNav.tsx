import { Hyperlink } from "@components/Hyperlink";
import { Collapsible, CollapsibleContent, CollapsibleToggler } from "@faceless-ui/collapsibles";
import { Item } from "@root/layout/DocsNav/nav";
import { Chevron } from "@root/icons/Chevron";
import { Fragment } from "react";
import classes from './index.module.scss';

export const RecursiveNav: React.FC<{
  items?: Item[]
}> = (props) => {
  const {
    items
  } = props;

  const hasItems = items && Array.isArray(items) && items.length > 0;

  if (hasItems) {
    return (
      <nav className={classes.nav}>
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

          if (type === 'link') {
            return (
              <Hyperlink
                key={index}
                href={href}
                className={classes.link}
              >
                <div className={classes.linkBullet} />
                <div
                  className={[
                    classes.itemLabel,
                    classes.linkLabel
                  ].filter(Boolean).join(' ')}
                >
                  {label}
                </div>
              </Hyperlink>
            )
          }

          if (type === 'group') {
            return (
              <Collapsible key={index}>
                {/* @ts-ignore */}
                {({ isOpen }) => {
                  return (
                    <div className={classes.group}>
                      <CollapsibleToggler className={classes.toggler}>
                        <Chevron
                          className={classes.chevron}
                          rotation={isOpen ? 0 : 180}
                          size="small"
                        />
                        <Hyperlink key={index} >
                          <div className={classes.itemLabel}>
                            {label}
                          </div>
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
        })
        }
      </nav>
    )
  }
  return null;
}
