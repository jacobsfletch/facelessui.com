import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

declare global {
  interface Window { // eslint-disable-line no-unused-vars
    gtag: any;
  }
}

const gaID = process.env.NEXT_PUBLIC_GA_CONTAINER_ID
const appURL = process.env.NEXT_PUBLIC_APP_URL

export const GoogleAnalytics: React.FC = () => {
  const { asPath } = useRouter();

  useEffect(() => {
    if (asPath && appURL) {
      const sanitizedPath = asPath.replace(appURL, '');
      if (gaID && typeof window.gtag === 'function') {
        window.gtag('config', gaID, { page_path: encodeURIComponent(sanitizedPath) });
      }
    }
  }, [asPath]);

  if (gaID) {
    return (
      <Head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${gaID}`}
        />
        <script>
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaID}');`}
        </script>
      </Head>
    );
  }
  return null;
};
