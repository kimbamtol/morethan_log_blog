import Document, { Html, Head, Main, NextScript } from "next/document";
import { CONFIG } from "site.config";

class MyDocument extends Document {
  render() {
    return (
      <Html lang={CONFIG.lang}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="192x192"
            href="/apple-touch-icon.png"
          />
          <link
            rel="alternate"
            type="application/rss+xml"
            title="RSS 2.0"
            href="/feed"
          />
          
          {/* Google Tag Manager - Head */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-PR9BNH5S');
              `,
            }}
          />
          
          {/* Google Search Console */}
          {CONFIG.googleSearchConsole.enable === true && (
            <meta
              name="google-site-verification"
              content={CONFIG.googleSearchConsole.config.siteVerification}
            />
          )}
          
          {/* Naver Search Advisor */}
          {CONFIG.naverSearchAdvisor.enable === true && (
            <meta
              name="naver-site-verification"
              content={CONFIG.naverSearchAdvisor.config.siteVerification}
            />
          )}
        </Head>
        
        <body>
          {/* Google Tag Manager - Body */}
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-PR9BNH5S"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
