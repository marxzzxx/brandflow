export default function Hero() {
  return (
    <div className="bg-white">

      {/* Background */}

      <div className="relative isolate overflow-hidden bg-[#fffcfa]">
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

        <div className="mx-auto max-w-7xl px-6 py-10 sm:pb-36 lg:flex lg:px-8 lg:pt-24 lg:pb-16">
          <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl">
            {/* <div className="mt-24 sm:mt-32 lg:mt-32">
              <a className="inline-flex space-x-6">
                <span className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-400 hover:ring-2 hover:text-blue-700 hover:ring-blue-700 hover:animate-pulse">
                {"Next Level Brand Development Solution"} 
                </span>
              </a>
            </div> */}
            <h1 className="mt-28 text-5xl font-semibold tracking-tight text-[#181818] sm:text-5xl lg:text-[60px]">
              Your Untold Stories, <span className="text-[#1E3A8A] animate-pulse">Reimagined</span>.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-500">
              From impactful personal branding to strategic content creation,<br/> we help founders & executives build their personal brands and create demand through content.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="/book-a-demo"
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
                className="w-[36rem] mt-8 rounded-[20px] bg-white/50 ring-1 ring-white/10 opacity-25 animate-[spin_15s_linear_infinite]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
