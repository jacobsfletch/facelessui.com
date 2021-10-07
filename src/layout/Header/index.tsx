import { Hyperlink } from '@components/Hyperlink';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { BlockContainer } from '../BlockContainer';
import classes from './index.module.scss';

export const Header: React.FC = () => {
  const { asPath } = useRouter();
  const isDoc = asPath.indexOf('docs/');

  return (
    <div className={classes.header}>
      <BlockContainer >
        <div className={classes.wrapper}>
          <div className={classes.logo}>
            <Hyperlink href="/">
              Faceless UI
            </Hyperlink>
          </div>
          <menu className={classes.menu}>
            <div>
              <Hyperlink href="/docs">
                Docs
              </Hyperlink>
            </div>
          </menu>
        </div>
      </BlockContainer>
    </div>
  )
}
