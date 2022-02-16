import App, { AppContext, AppProps } from 'next/app';
import { AppHead } from '../components/AppHead';
import { Footer } from '../layout/Footer';
import { Header } from '../layout/Header';
import { GridProvider } from '@faceless-ui/css-grid'
import { ModalProvider, ModalContainer } from '@faceless-ui/modal';
import { Fragment } from 'react';
import { NextPage } from 'next';
import { Doc } from '@root/layout/Doc';
import { Versions as VersionsType } from '../providers/Versions';
import { getGitHubVersionNumber } from '@root/github-api';
import VersionsProvider from '@root/providers/Versions';
import { NotificationsProvider } from '@root/providers/Notifications';
import { WindowInfoProvider } from '@faceless-ui/window-info';
import { MouseInfoProvider } from '@faceless-ui/mouse-info';
import { ScrollInfoProvider } from '@faceless-ui/scroll-info';
import DarkModeProvider from '@root/providers/DarkMode';
import { CustomCursorProvider } from '@root/providers/CustomCursorProvider';
import { CustomCursor } from '@components/CustomCursor';
import cssVariables from '../../cssVariables';
import '../scss/app.scss';
import { ScrollToTopOnRouteChange } from '@components/ScrollToTopOnRouteChange';

type NextPageWithLayout = NextPage & {
  Layout?: typeof Doc
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout,
  versions: VersionsType
}

const FacelessApp = (appProps: AppPropsWithLayout) => {
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
                <ModalProvider
                  zIndex={99}
                  transTime={250}
                >
                  <GridProvider
                    breakpoints={{
                      s: 768,
                      m: 1024,
                      l: 1400,
                    }}
                    rowGap={{
                      s: '1rem',
                      m: '1rem',
                      l: '2rem',
                      xl: '2rem',
                    }}
                    colGap={{
                      s: '10px',
                      m: '10px',
                      l: '2rem',
                      xl: '2rem',
                    }}
                    cols={{
                      s: 8,
                      m: 8,
                      l: 14,
                      xl: 14,
                    }}
                  >
                    <VersionsProvider versions={versions}>
                      <CustomCursorProvider>
                        <Fragment>
                          <ScrollToTopOnRouteChange />
                          <AppHead />
                          <Header />
                          <Layout>
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
              </NotificationsProvider>
            </MouseInfoProvider>
          </ScrollInfoProvider>
        </WindowInfoProvider>
      </MouseInfoProvider>
    </DarkModeProvider>
  )
}

FacelessApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);

  const windowInfoVersion = await getGitHubVersionNumber('window-info');
  const scrollInfoVersion = await getGitHubVersionNumber('scroll-info');
  const mouseInfoVersion = await getGitHubVersionNumber('mouse-info');
  const sliderVersion = await getGitHubVersionNumber('slider');
  const cssGridVersion = await getGitHubVersionNumber('css-grid');
  const modalVersion = await getGitHubVersionNumber('modal');
  const collapsiblesVersion = await getGitHubVersionNumber('collapsibles');

  return {
    ...appProps,
    versions: {
      'window-info': windowInfoVersion,
      'scroll-info': scrollInfoVersion,
      'mouse-info': mouseInfoVersion,
      slider: sliderVersion,
      'css-grid': cssGridVersion,
      modal: modalVersion,
      collapsibles: collapsiblesVersion,
    }
  };
};

export default FacelessApp;
