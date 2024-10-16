import React from "react";
import HeroSection from '@/app/homepage/hero';
import StatsSection from './homepage/stats';
import Branding from './homepage/branding';
import Process from "./homepage/process";
import CTA from './homepage/cta';
import Footer from "./homepage/footer";

export default function Home() {
  return (
    <>
    <HeroSection/>
    <StatsSection/>
    <Branding />
    <Process />
    <CTA />
    <Footer />
    </>
  );
}
