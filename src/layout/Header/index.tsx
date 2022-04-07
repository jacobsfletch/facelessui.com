import { Hyperlink } from '@components/Hyperlink';
import React from 'react';
import { BlockContainer } from '../BlockContainer';
import classes from './index.module.scss';

export const Header: React.FC = () => {

  return (
    <div className={classes.header}>
      <BlockContainer >
        <div className={classes.wrapper}>
          <div className={classes.logoWrapper}>
            {/* <Eye /> */}
            <div className={classes.logo}>
              <Hyperlink href="/">
                <b>
                  Faceless UI
                </b>
              </Hyperlink>
            </div>
          </div>
          <menu className={classes.menu}>
            <div>
              <Hyperlink href="/docs/getting-started">
                Docs
              </Hyperlink>
            </div>
          </menu>
        </div>
      </BlockContainer>
    </div>
  )
}
