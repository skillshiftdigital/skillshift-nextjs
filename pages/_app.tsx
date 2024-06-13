// pages/_app.tsx

import { useEffect } from 'react';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import './globals.scss';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import TagManager from 'react-gtm-module';
import Script from 'next/script';
import { useRouter } from 'next/router';

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
    <Provider store={store}>
      {/* GTM Head Script */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-FVTRHFT6');
          `,
        }}
      />
      <Component {...pageProps} />
      <SpeedInsights />
      <Analytics />
    </Provider>
  );
}

export default Skillshiftapp;
