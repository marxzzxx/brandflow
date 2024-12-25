'use client';
import React from "react";
import { TrophyIcon, VideoCameraIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/20/solid";
import CalendlyWidget from "./calendly";

export default function Branding() {
  return (
    <div
      id="about"
      className="relative isolate overflow-hidden bg-[#fffcfa] px-6 py-14 sm:py-14 lg:overflow-visible lg:pt-36 lg:pb-16"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute left-[max(50%,25rem)] top-0 h-[60rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h1 className="mt-2 text-[60px] font-semibold tracking-tight text-[#1E3A8A] sm:text-5xl">Book your preferred time slot</h1>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <div className="w-[700px] max-w-none rounded-[20px] sm:w-[600px] sm:h-[450px]">
            <CalendlyWidget />
          </div>
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <div className="text-2xl mb-8">
                Schdule a 40-minute call with us!
              </div>
              <div className="bg-white rounded-2xl shadow-xl px-4 py-4 mb-8 border border-gray-200">
                <div className="text-xl mb-4">The scope of this meeting is to:</div>
                <li className="mb-2">Understand you and your business.</li>
                <li className="mb-2">Give you an overview of our creator-led content playbook.</li>
                <li className="mb-2">Decide if & how we can help you + provide as much value as possible regardlessly.</li>
              </div>
              <div className="mb-8">
                <p className="text-gray-500 mb-2 text-lg">Can't find a preferred time slot?</p>
                <a
                  href="brandflow.contactus@gmail.com"
                  className="text-[#1E3A8A] text-lg underline hover:text-[#1E3A8A]/50"
                >
                  Drop us an email and we'll get in touch!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
