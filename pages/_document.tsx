// src/pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta httpEquiv='content-language' content='en-gb' />
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
          {/* Google tag (gtag.js) event - delayed navigation helper */}
          <Script id="gtag-event-script" strategy="afterInteractive">
            {`
              function gtagSendEvent(url) {
                var callback = function () {
                  if (typeof url === 'string') {
                    window.location = url;
                  }
                };
                gtag('event', 'ads_conversion_Form_1', {
                  'event_callback': callback,
                  'event_timeout': 2000,
                  // <event_parameters>
                });
                return false;
              }
            `}
          </Script>
        </Head>
        <body>
          {/* GTM Body Script */}
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=GTM-FVTRHFT6`}
              height="0"
              width="0"
              className="gtm-iframe"
            />
          </noscript>
          <Main />
          <NextScript />
          
          {/* HubSpot Embed Code */}
          <Script
            id="hs-script-loader"
            strategy="afterInteractive"
            src="//js.hs-scripts.com/40167629.js"
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
