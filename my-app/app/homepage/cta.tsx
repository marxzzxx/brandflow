'use client';
import { useState } from "react";

export default function CTA() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
      <div id='cta-section' className="bg-white pt-24 max-[500px]:pt-12">
        <div className="mx-auto grid max-[500px]:max-w-[380px] max-w-[1220px] grid-cols-1 lg:grid-cols-12 gap-10 p-6 lg:p-12 border-2 border-grey rounded-3xl py-12 bg-[#1E3A8A]">
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <h2 className="inline sm:block lg:inline xl:block font-semibold text-[20px] text-white">
              Interested in leveraging personal branding to your advantage?
            </h2>
          </div>
          <div className="max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:col-span-7 lg:text-right max-[500px]:text-lg">  
            <a
              href="mailto:brandflow.contactus@gmail.com"
              className="transition-transform duration-300 hover:scale-105 hover:-translate-y-2 border border-gray-600 rounded-[16px] bg-white px-10 py-4 text-sm font-semibold text-[#1E3A8A] shadow-sm hover:bg-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E3A8A]"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
      
    )
  }
  