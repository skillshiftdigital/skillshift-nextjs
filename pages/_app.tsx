// pages/_app.tsx

import { useEffect } from 'react';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import './globals.scss';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import TagManager from 'react-gtm-module';
import { useRouter } from 'next/router';
import Head from 'next/head';

function Skillshiftapp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-FVTRHFT6' });

    const handleRouteChange = (url: string) => {
      TagManager.dataLayer({
        dataLayer: {
          event: 'pageview',
          page: url,
        },
      });
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/assets/images/logo/skillshift-favicon.svg" />
              </Head>
      <Provider store={store}>
        <Component {...pageProps} />
        <SpeedInsights />
        <Analytics />
      </Provider>
    </>
  );
}

export default Skillshiftapp;