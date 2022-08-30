import { DarkModeToggler } from '@components/DarkModeToggler';
import { Hyperlink } from '@components/Hyperlink';
import React from 'react';
import { BlockContainer } from '../BlockContainer';
import classes from './index.module.scss';

export const Footer: React.FC = () => {
  return (
    <div className={classes.footer}>
      <BlockContainer>
        <div className={classes.content}>
          <div className={classes.copyright}>
            <span>
              Copyright
            </span>
            <span>
              &nbsp;
            </span>
            <span>
              &copy;
            </span>
            <span>
              &nbsp;
            </span>
            {`${new Date().getFullYear()}`}
            &nbsp;&mdash;&nbsp;
            <Hyperlink
              href="/"
              underline={false}
            >
              Faceless UI
            </Hyperlink>
          </div>
          <menu className={classes.menu}>
            <div>
              <DarkModeToggler />
            </div>
            <div>
              <Hyperlink
                href="/releases"
                underline={false}
              >
                Releases
              </Hyperlink>
            </div>
            <div>
              <Hyperlink
                newTab
                href="https://www.npmjs.com/org/faceless-ui"
                underline={false}
              >
                NPM
              </Hyperlink>
            </div>
            <div>
              <Hyperlink
                newTab
                href="https://github.com/faceless-ui"
                underline={false}
              >
                GitHub
              </Hyperlink>
            </div>
          </menu>
        </div>
      </BlockContainer>
    </div>
  )
}
