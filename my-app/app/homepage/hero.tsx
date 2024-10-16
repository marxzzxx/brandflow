'use client'
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Services', href: '#tempt-service-section' },
  { name: 'About', href: '#tempt-about-section' },

]

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      <header className="fixed top-0 left-1/2 transform -translate-x-1/2 mt-6 z-50 max-w-4xl bg-white/70 backdrop-blur rounded-[32px] outline outline-black outline-2 lg:max-w-4xl lg:w-[800px]  max-lg:w-[680px] max-[700px]:w-[600px] max-[640px]:w-[580px] max-[600px]:w-[500px] max-[510px]:w-[450px] max-[460px]:w-[380px] max-[380px]:w-[300px]">
        <nav aria-label="Global" className="flex justify-between items-center p-2 sm:p-4 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1 ">
              <span className="sr-only">Your Company</span>
              <img alt="brandflow logo" src="/brandflow_black.svg" className="h-14 w-auto" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 -ml-12 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 py-1.5">
                <span className="sr-only">Your Company</span>
                <img alt="brandflow logo" src="/brandflow_black.svg" className="h-8 w-auto" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)} 
                  >
                    {item.name}
                  </a>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
                  
      {/* Background */}

      <div className="relative isolate overflow-hidden bg-white">
        <svg
          aria-hidden="true"
          className="absolute inset-0 -z-10 h-full w-full stroke-black/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-400/20">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" width="100%" height="100%" strokeWidth={0} />
        </svg>
        <div
          aria-hidden="true"
          className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
        >
        </div>

        {/* Hero Content */}

        <div className="mx-auto max-w-7xl px-6 pb-14 pt-10 sm:pb-32 lg:flex lg:px-8 lg:pt-24 lg:pb-2">
          <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl">
            {/* <div className="mt-24 sm:mt-32 lg:mt-32">
              <a className="inline-flex space-x-6">
                <span className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-400 hover:ring-2 hover:text-blue-700 hover:ring-blue-700 hover:animate-pulse">
                {"Next Level Brand Development Solution"} 
                </span>
              </a>
            </div> */}
            <h1 className="mt-28 text-5xl font-bold tracking-tight text-black sm:text-5xl lg:text-[56px]">
              Building <span className="text-[#2563EB] animate-pulse">Brands</span> in the Digital Landscape
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-500">
              From impactful personal branding to strategic content creation, we equip entrepreneurs with the tools and expertise to elevate their online presence and captivate their audience.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#join"
                className="transition-transform duration-300 hover:scale-105 hover:-translate-y-2 border border-gray-600 rounded-[16px] bg-[#1E3A8A] px-10 py-4 text-sm font-semibold text-white shadow-sm hover:bg-[#1E3A8A]/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E3A8A]"
              >
                Work with us
              </a>
              {/* <a
                  href="/"
                  className="border border-gray-600 rounded-[16px] bg-blue-900 px-4 py-4 text-sm font-semibold text-white shadow-sm hover:bg-[#193765] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#193765]"
                  >
                  Check out our other APIs! <span aria-hidden="true"></span>
                </a> */}
            </div>
          </div>
          <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-4 lg:max-w-none lg:flex-none xl:ml-32 max-lg:hidden">
            <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none ">
              <img
                alt="A image of Brandflow logo rotating"
                src="/hero_logo.svg"
                className="w-[48rem] rounded-[20px] bg-white/50 ring-1 ring-white/10 opacity-25"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
