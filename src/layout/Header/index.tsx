import { Button } from '@components/Button';
import { GitHubLogo } from '@components/GitHubLogo';
import { Hyperlink } from '@components/Hyperlink';
import { useCustomCursor } from '@root/providers/CustomCursorProvider';
import React, { useEffect } from 'react';
import { BlockContainer } from '../BlockContainer';
import classes from './index.module.scss';

export const Header: React.FC = () => {
  const [active, setActive] = React.useState(false);
  const timer = React.useRef<NodeJS.Timeout | null>(null);

  const { highlightCursor } = useCustomCursor();

  useEffect(() => {
    const timerID = timer.current;

    if (highlightCursor) {
      if (timerID) clearTimeout(timerID);
      setActive(true);
    }

    if (!highlightCursor) {
      timer.current = setTimeout(() => {
        if (!highlightCursor) {
          setActive(false);
        }
      }, 100)
    }

    return () => {
      if (timerID) {
        clearTimeout(timerID);
      }
    }
  }, [highlightCursor])

  return (
    <div className={classes.header}>
      <BlockContainer>
        <div className={classes.wrapper}>
          <div className={classes.logo}>
            <Hyperlink
              href="/"
              underline={false}
              className={classes.logoAnchor}
            >
              <div className={classes.logoBox}>
                <img
                  className={classes.logoImage}
                  src="/images/logo.png"
                  alt="logo"
                />
                <img
                  className={[
                    classes.logo2,
                    active && classes.show
                  ].filter(Boolean).join(' ')}
                  src="/images/logo-glasses.png"
                  alt="logo"
                />
              </div>
              <span>
                Faceless UI
              </span>
            </Hyperlink>
          </div>
          <menu className={classes.menu}>
            <Button
              className={classes.docsButton}
              appearance='primary'
              href="/docs/getting-started"
              label="Docs"
              size="small"
            />
            <GitHubLogo
              href="https://github.com/faceless-ui"
              newTab
            />
          </menu>
        </div>
      </BlockContainer>
    </div>
  )
}
