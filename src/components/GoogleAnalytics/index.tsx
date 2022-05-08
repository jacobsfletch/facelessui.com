import React, { Fragment, useEffect } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';

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
      <Fragment>
        <Script
          strategy='lazyOnload'
          src={`https://www.googletagmanager.com/gtag/js?id=${gaID}`}
        />
        <Script
          strategy='lazyOnload'
          id="gtag-script"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaID}');`
          }}
        />
      </Fragment >
    );
  }
  return null;
};
