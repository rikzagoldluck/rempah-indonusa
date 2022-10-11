import '../styles/vendor/animate.css/animate.min.css';
import '../styles/vendor/bootstrap/css/bootstrap.min.css';
import '../styles/vendor/bootstrap-icons/bootstrap-icons.css';
import '../styles/vendor/boxicons/css/boxicons.min.css';
import '../styles/vendor/glightbox/css/glightbox.min.css';
import '../styles/vendor/swiper/swiper-bundle.min.css';

import '../styles/css/style.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      // once: true,
      mirror: false,
    });

    const preloader = document.querySelector('#preloader');
    if (preloader) {
      setTimeout(() => {
        preloader.remove();
      }, 100);
    }
  }, []);
  function addProductJsonLD() {
    return {
      __html: `{
        "@context": "https://0.0.0.0/",
        "@type": "Product",
        "name": "Spice",
        "image": [
          "https://0.0.0.0/img/asam-kandis.png",
          "https://0.0.0.0/img/clove.png",
          "https://0.0.0.0/img/nutmeg.png"
         ],
        "description": "IndoNusa Spices & Coco is an international trading company headquartered in Indonesia which is engaged in agricultural commodities. We work closely with experienced local farmers and factories to produce high quality and competitively priced products to benefit our good customers. To earn their valuable trust, we also strive to implement the best quality.",
        "sku": "0446310786",
        "mpn": "925872",
        "brand": {
          "@type": "Brand",
          "name": "IndoNusa Spices & Coco"
        },
        "review": {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "4",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "IndoNusa Spices & Coco"
          }
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.4",
          "reviewCount": "89"
        },
        "offers": {
          "@type": "Offer",
          "url": "https://0.0.0.0/",
          "priceCurrency": "USD",
          "price": "119.99",
          "priceValidUntil": "2020-11-20",
          "itemCondition": "https://schema.org/UsedCondition",
          "availability": "https://schema.org/InStock"
        }
      }
    `,
    };
  }
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>IndoNusa Spices & Coco - Offers various types of spices with the best quality</title>
        <meta
          content="IndoNusa Spices & Coco is an international trading company headquartered in Indonesia which is engaged in agricultural commodities. We work closely with experienced local farmers and factories to produce high quality and competitively priced products to benefit our good customers. To earn their valuable trust, we also strive to implement the best quality."
          name="description"
          key="desc"
        />
        <meta property="og:title" content="Spice, Ingredients, Seasoning, Condiment" />
        <meta property="og:description" content="Rempah IndoNusa Offers various types of spices with the best quality and at the best prices in its class so that people get products with good quality and affordable prices." />
        <meta httpEquiv="Content-Language" content="en" />
        <meta content="Spice, Ingredients, Seasoning, Condiment" key="kwrds" name="keywords" />
        <meta property="og:image" content="https://0.0.0.0/img/logo.png" />
        {/* <!-- Favicons --> */}
        <link rel="icon" sizes="96x96" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="57x57" href="/fav/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/fav/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/fav/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/fav/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/fav/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/fav/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/fav/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/fav/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/fav/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/fav/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/fav/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/fav/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/fav/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="google" content="nositelinkssearchbox" key="sitelinks" />

        {/* eslint-disable-next-line react/no-danger */}
        <script type="application/ld+json" dangerouslySetInnerHTML={addProductJsonLD()} key="product-jsonld" />
      </Head>
      <Script strategy="beforeInteractive" src="/vendor/bootstrap/js/bootstrap.bundle.min.js" />
      <Script strategy="beforeInteractive" src="/vendor/glightbox/js/glightbox.min.js" />
      <Script strategy="beforeInteractive" src="/vendor/isotope-layout/isotope.pkgd.min.js" />
      <Script strategy="beforeInteractive" src="/vendor/php-email-form/validate.js" />
      <Script strategy="beforeInteractive" src="/vendor/swiper/swiper-bundle.min.js" />
      <Script strategy="afterInteractive" src="/js/main.js" />
      <Script strategy="afterInteractive" src="/js/form.js" />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
