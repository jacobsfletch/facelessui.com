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
            Copyright
            &nbsp;&copy;&nbsp;
            {`${new Date().getFullYear()}`}
            &nbsp;&mdash;&nbsp;
            <Hyperlink href="/">
              Faceless UI
            </Hyperlink>
          </div>
          <menu className={classes.menu}>
            <div>
              <DarkModeToggler />
            </div>
            <div>
              <Hyperlink
                newTab
                href="https://www.npmjs.com/org/faceless-ui"
              >
                NPM
              </Hyperlink>
            </div>
            <div>
              <Hyperlink
                newTab
                href="https://github.com/faceless-ui"
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
