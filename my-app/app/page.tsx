import React from "react";
import HeroSection from '@/app/homepage/hero';
import StatsSection from './homepage/stats';
import Branding from './homepage/branding';
import WebDev from './homepage/webdev';
import CTA from './homepage/cta';
import FAQ from './homepage/faq';
import Footer from "./homepage/footer";

export default function Home() {
  return (
    <>
    <HeroSection/>
    <StatsSection/>
    <Branding />
    <WebDev />
    <CTA />
    <FAQ />
    <Footer />
    </>
  );
}
