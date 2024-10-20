'use client'
import { useState } from "react";
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Service', href: '#service' },
  { name: 'About', href: '#about' },

]

export default function Nav(){
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return(
        <div className="bg-white">
            <header className="fixed top-0 left-1/2 transform -translate-x-1/2 mt-6 z-50 max-w-4xl bg-white/70 backdrop-blur rounded-[32px] outline outline-black outline-2 lg:max-w-4xl lg:w-[800px]  max-lg:w-[680px] max-[700px]:w-[600px] max-[640px]:w-[580px] max-[600px]:w-[500px] max-[510px]:w-[450px] max-[460px]:w-[380px] max-[380px]:w-[300px]">
            <nav aria-label="Global" className="flex justify-between items-center p-2 sm:p-4 lg:px-8">
                <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5 p-1 flex flex-row">
                        <span className="sr-only">Your Company</span>
                        <img alt="brandflow logo" src="/brandflow_black.svg" className="h-12 max-[500px]:h-14 w-auto" />
                        <div className="flex items-center pl-1 text-black text-lg font-bold max-[500px]:hidden">
                            brandflow
                        </div>
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
                    <a key={item.name} href={item.href} className="text-[14=6px] font-semibold leading-6 text-gray-900">
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
      </div>
    )
}