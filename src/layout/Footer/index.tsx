import { Hyperlink } from '@components/Hyperlink';
import React from 'react';
import { BlockContainer } from '../BlockContainer';
import classes from './index.module.scss';

export const Footer: React.FC = () => {
  return (
    <div className={classes.footer}>
      <BlockContainer>
        <div className={classes.content}>
          <div>
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
              <Hyperlink
                href="https://www.npmjs.com/org/faceless-ui"
              >
                NPM
              </Hyperlink>
            </div>
            <div>
              <Hyperlink
                href="https://github.com/faceless-ui/website/docs"
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
