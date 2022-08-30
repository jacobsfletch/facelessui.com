import { AppProps } from 'next/app';
import { AppHead } from '../components/AppHead';
import { Footer } from '../layout/Footer';
import { Header } from '../layout/Header';
import { GridProvider } from '@faceless-ui/css-grid'
import { ModalProvider, ModalContainer } from '@faceless-ui/modal';
import { Fragment } from 'react';
import { NextPage } from 'next';
import { Doc } from '@root/layout/Doc';
import { Versions as VersionsType } from '../providers/Versions';
import VersionsProvider from '@root/providers/Versions';
import { NotificationsProvider } from '@root/providers/Notifications';
import { WindowInfoProvider } from '@faceless-ui/window-info';
import { MouseInfoProvider } from '@faceless-ui/mouse-info';
import { ScrollInfoProvider } from '@faceless-ui/scroll-info';
import { JumplistProvider } from '@faceless-ui/jumplist';
import DarkModeProvider from '@root/providers/DarkMode';
import { CustomCursorProvider } from '@root/providers/CustomCursorProvider';
import { CustomCursor } from '@components/CustomCursor';
import cssVariables from '../../cssVariables';
import { GoogleAnalytics } from '@components/GoogleAnalytics';
import { OnRouteChange } from '@components/OnRouteChange';

import '../scss/app.scss';

type NextPageWithLayout = NextPage & {
  Layout?: typeof Doc
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout,
  versions: VersionsType
}

const FacelessApp = (appProps: AppPropsWithLayout): React.ReactElement => {
  const {
    Component,
    pageProps,
    versions
  } = appProps;

  const Layout = Component.Layout || Fragment;

  return (
    <DarkModeProvider>
      <MouseInfoProvider>
        <WindowInfoProvider
          breakpoints={{
            s: `(max-width: ${cssVariables.breakpoints.s}px)`,
            m: `(max-width: ${cssVariables.breakpoints.m}px)`,
            l: `(max-width: ${cssVariables.breakpoints.l}px)`,
            xl: `(max-width: ${cssVariables.breakpoints.xl}px)`,
          }}
        >
          <ScrollInfoProvider>
            <MouseInfoProvider>
              <NotificationsProvider>
                <JumplistProvider
                  rootMargin="-100px 0px 0px 0px"
                >
                  <ModalProvider
                    zIndex={99}
                    transTime={250}
                  >
                    <GridProvider
                      breakpoints={{
                        s: 500,
                        m: 768,
                        l: 1024,
                      }}
                      rowGap={{
                        s: '1rem',
                        m: '1rem',
                        l: '4rem',
                        xl: '4rem',
                      }}
                      colGap={{
                        s: '10px',
                        m: '10px',
                        l: '4rem',
                        xl: '4rem',
                      }}
                      cols={{
                        s: 8,
                        m: 8,
                        l: 14,
                        xl: 16,
                      }}
                    >
                      <VersionsProvider versions={versions}>
                        <CustomCursorProvider>
                          <Fragment>
                            <OnRouteChange />
                            <GoogleAnalytics />
                            <AppHead />
                            <Header />
                            <Layout>
                              {/* @ts-ignore TODO: fix this, its a typescript error */}
                              <Component {...pageProps} />
                            </Layout>
                            <ModalContainer />
                            <Footer />
                            <CustomCursor />
                          </Fragment>
                        </CustomCursorProvider>
                      </VersionsProvider>
                    </GridProvider>
                  </ModalProvider>
                </JumplistProvider>
              </NotificationsProvider>
            </MouseInfoProvider>
          </ScrollInfoProvider>
        </WindowInfoProvider>
      </MouseInfoProvider>
    </DarkModeProvider>
  )
}

export default FacelessApp;
