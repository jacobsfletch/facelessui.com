import { AppProps } from 'next/app';
import { AppHead } from '../components/AppHead';
import { Footer } from '../layout/Footer';
import { Header } from '../layout/Header';
import { GridProvider } from '@faceless-ui/css-grid'
import { ModalProvider } from '@faceless-ui/modal';
import { Fragment } from 'react';
import { NextPage } from 'next';
import { Doc } from '@root/layout/Doc';
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
import { MDXProvider } from '@mdx-js/react'
import { mdxComponents } from '@root/mdx';
import { SearchProvider } from '@root/search/SearchProvider';
import { MobileNav } from '@root/layout/FixedBottomNav';

import '../scss/app.scss';
import { ModalContainer } from '@root/layout/ModalContainer';
import { MobileNavModal } from '@root/layout/MobileNavModal';
import { SearchModal } from '@root/layout/SearchModal';

type NextPageWithLayout = NextPage & {
  Layout?: typeof Doc
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout,
}

const FacelessApp = (appProps: AppPropsWithLayout): React.ReactElement => {
  const {
    Component,
    pageProps,
  } = appProps;

  const Layout = Component.Layout || Fragment;

  return (
    <SearchProvider threshold={3}>
      <MDXProvider components={mdxComponents}>
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
                            s: cssVariables.breakpoints.s,
                            m: cssVariables.breakpoints.m,
                            l: cssVariables.breakpoints.l,
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
                            l: '3rem',
                            xl: '3rem',
                          }}
                          cols={{
                            s: 8,
                            m: 8,
                            l: 14,
                            xl: 16,
                          }}
                        >
                          <VersionsProvider>
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
                                <MobileNav />
                                <MobileNavModal />
                                <SearchModal />
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
      </MDXProvider>
    </SearchProvider>
  )
}

export default FacelessApp;
