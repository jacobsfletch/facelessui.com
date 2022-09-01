import { GitHubLogo } from '@components/GitHubLogo';
import { Hyperlink } from '@components/Hyperlink';
import React from 'react';
import { BlockContainer } from '../BlockContainer';
import classes from './index.module.scss';

export const Header: React.FC = () => {

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
              <img
                className={classes.logoImage}
                src="/images/logo.png"
                alt="logo"
              />
              <span>
                Faceless UI
              </span>
            </Hyperlink>
          </div>
          <menu className={classes.menu}>
            <Hyperlink
              href="/docs/getting-started"
              underline={false}
            >
              Docs
            </Hyperlink>
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
