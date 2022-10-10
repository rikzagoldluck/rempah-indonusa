/* eslint-disable max-len */
// import type { NextPage } from 'next';

import About from '../components/content/About';
import Consumer from '../components/content/Consumer';
import Contact from '../components/content/Contact';
import FAQ from '../components/content/FAQ';
import Gallery from '../components/content/Gallery';
import Products from '../components/content/Products';
import Specials from '../components/content/Specials';
import WhyUs from '../components/content/WhyUs';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Topbar from '../components/Topbar';

// eslint-disable-next-line react/function-component-definition
export default function Home() {
  return (
    <>
      <Topbar />
      <Header />
      <Hero />

      <main id="main">
        <About />
        <WhyUs />
        {/* <Specials /> */}
        <Products />
        <FAQ />
        {/* <Gallery />
        <Consumer /> */}
        <Contact />
      </main>
      <Footer />

      <div id="preloader" />
      <a href="/#" className="back-to-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short" />
      </a>
    </>
  );
}
