"use client"
import React, { useEffect, useState } from "react";

const StatsSection: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="about-section" >
      <section className="px-4 py-8 pt-28 md:px-8 lg:px-16 bg-white">
        {/* Header Section */}
        <div className="text-left max-w-2xl mx-left mb-20 px-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            We visualize branding as something that adds value into your life, your business and the world.
          </h2>
          <p className="text-lg text-gray-500">
          Without effective branding, you remain unknown in the digital space and lacking the correct tools limits your opportunities to expand your online presence and attract your target audience.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-20">
          {/* Card 1 */}
          <div
            className={`transition-transform duration-500 ease-in-out transform ${
              scrolled ? "-translate-y-4 scale-100" : "translate-y-0 scale-90"
            } hover:scale-105 hover:-translate-y-2 border border-black bg-[#ffffff] text-black p-6 rounded-lg shadow-xl text-center`}
          >
            <h3 className="text-4xl font-bold">83%</h3>
              <p className="mt-4">
              of consumers report that social media presence impacts their trust in the brand
              ​</p>
          </div>

          {/* Card 2 */}
          <div
            className={`transition-transform duration-500 ease-in-out transform ${
              scrolled ? "-translate-y-4 scale-100" : "translate-y-0 scale-90"
            } hover:scale-105 hover:-translate-y-2 bg-gray-900 text-white p-6 rounded-lg shadow-xl text-center`}
          >
            <h3 className="text-4xl font-bold">3x</h3>
            <p className="mt-4">
              Leaders with personal brands generate <br/><span className="font-semibold underline">3x</span> more leads for their businesses​
            </p>
          </div>

          {/* Card 3 */}
          <div
            className={`transition-transform duration-500 ease-in-out transform ${
              scrolled ? "-translate-y-4 scale-100" : "translate-y-0 scale-90"
            } hover:scale-105 hover:-translate-y-2 bg-blue-700 text-white p-6 rounded-lg shadow-xl text-center`}
          >
            <h3 className="text-4xl font-bold">74%</h3>
            <p className="mt-4">of customers will buy from a brand they feel is personally aligned with their values​</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StatsSection;
