import type { AppProps } from 'next/app'
import { AppHead } from '../components/AppHead';
import { Footer } from '../layout/Footer';
import { Header } from '../layout/Header';
import { GridProvider } from '@faceless-ui/css-grid'
import { ModalProvider, ModalContainer } from '@faceless-ui/modal';
import { Fragment } from 'react';
import { NextPage } from 'next';
import GettingStarted from './docs/getting-started';

import '../scss/app.scss';

type NextPageWithLayout = NextPage & {
  Layout?: typeof GettingStarted
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function FacelessApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout || Fragment;

  return (
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
          l: '4rem',
          xl: '4rem',
        }}
        colGap={{
          s: '10px',
          m: '10px',
          l: 'columnWidth',
          xl: 'columnWidth',
        }}
        cols={{
          s: 8,
          m: 8,
          l: 14,
          xl: 14,
        }}
      >
        <AppHead />
        <Header />
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <ModalContainer />
        <Footer />
      </GridProvider>
    </ModalProvider>
  )
}

export default FacelessApp
