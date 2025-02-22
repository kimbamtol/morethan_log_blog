import Script from 'next/script'

const Scripts = () => (
  <>
    {/* Google Analytics 4 (GA4) Script */}
    <Script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=G-BHZ2WJKLVL`}
    />
    <Script id="ga" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-BHZ2WJKLVL', {
          page_path: window.location.pathname,
        });
      `}
    </Script>
  </>
)

export default Scripts
