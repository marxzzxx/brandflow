'use Client';
import React, { useEffect } from 'react';
import Head from 'next/head';
import HeroSection from '@/app/homepage/hero';
import StatsSection from './homepage/stats';
import Branding from './homepage/branding';
import WebDev from './homepage/webdev';
import CTA from './homepage/cta';
import FAQ from './homepage/faq';
import Footer from "./homepage/footer";

export default function Home() {
  useEffect(() => {
    // Inject Google Tag Manager noscript iframe into the body
    const noscript = document.createElement('noscript');
    noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-557DS9CN"
    height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
    document.body.appendChild(noscript);
  }, []);

  return (
    <>
      <Head>
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-557DS9CN');`
        }} />
        {/* End Google Tag Manager */}
      </Head>

      <HeroSection />
      <StatsSection />
      <Branding />
      <WebDev />
      <CTA />
      <FAQ />
      <Footer />
    </>
  );
}
