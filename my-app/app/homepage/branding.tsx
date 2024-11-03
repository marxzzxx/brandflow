import { TrophyIcon, VideoCameraIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/20/solid'

export default function branding() {
  return (
    <div id="about" className="relative isolate overflow-hidden bg-white px-6 py-14 sm:py-14 lg:overflow-visible lg:px-0">
      <div className="relative isolate px-6 pb-16 lg:px-8">
                <div className="mx-auto max-w-2xl pb-28 sm:pb-36 lg:pb-20">
                    <div className="mb-8 sm:mb-8 sm:flex sm:justify-center flex justify-center items-center grid grid-cols-2 gap-2 max-[390px]:w-[200px]">
                        <div className="relative rounded rounded-[14px] px-2 font-semibold bg-[#1E3A8A] text-lg leading-6 text-black">
                            <img 
                                alt="brandflow logo" 
                                src="/logo_what_we_do_white.svg" 
                                className="flex h-[56px] w-auto justify-center item-center max-[500px]:w-[150px] animate-[spin_15s_linear_infinite]"
                            />
                        </div>
                        <div className="relative flex justify-center item-center rounded rounded-[14px] px-6 py-4 font-semibold bg-gray-200 text-lg leading-6 text-gray-900 max-[500px]:w-[150px] max-[500px]:text-[15px]">
                            What We do
                        </div>
                    </div>
                    <div className="text-center">
                        <h1 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                            We Are Your B2B Brand Builders
                        </h1>
                        <p className="mt-6 text-xl leading-8 text-gray-600">
                            Reach your audience with our content strategists <br/> and branding specialists
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a
                                href="mailto:brandflow.contactus@gmail.com"
                                className="transition-transform duration-300 hover:scale-105 hover:-translate-y-2 border border-gray-600 rounded-[16px] bg-[#1E3A8A] px-10 py-4 text-sm font-semibold text-white shadow-sm hover:bg-[#1E3A8A]/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E3A8A]"
                            >
                                Get started
                            </a>
                        </div>
                    </div>
                </div>
      </div>
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
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl">Building Brands That Resonate</h1>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt="An personal branding image of social media growth and demand generation"
            src="/branding_image.webp"
            className="w-[700px] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[850px]"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                We believe that personal branding is more than just a trend; it&apos;s an essential strategy for standing out in today&apos;s competitive market.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600 ">
                <li className="flex gap-x-3 bg-[#FEFEFE] py-4 px-6 rounded rounded-[22px] shadow-lg border border-gray-400/10  h-[180px] max-[330px]:h-[350px] max-[380px]:h-[280px] max-[400px]:h-[350px] max-[550px]:h-[250px] ">
                  <TrophyIcon aria-hidden="true" className="mt-1 h-8 w-8 flex-none text-blue-700" />
                  <span>
                    <strong className="font-semibold text-gray-900">Brand Accelerator</strong><br/>We craft a personalized branding strategy, establish key messaging themes, and identify your target audience to transform your social media profiles into engaging, conversion-driven hubs.
                  </span>
                </li>
                <li className="flex gap-x-3 bg-[#FEFEFE] py-4 px-6 rounded rounded-[22px] shadow-lg border border-gray-400/10 h-[180px] max-[330px]:h-[350px] max-[380px]:h-[280px] max-[400px]:h-[350px] max-[550px]:h-[250px]">
                  <VideoCameraIcon aria-hidden="true" className="mt-1 h-8 w-8 flex-none text-blue-700" />
                  <span>
                    <strong className="font-semibold text-gray-900">Content Engine</strong><br/>We repurpose your meetings, podcasts, and voice memos into compelling bite-sized content, distributing it across the platforms where your audience is most active, ensuring maximum visibility.
                  </span>
                </li>
                <li className="flex gap-x-3 bg-[#FEFEFE] py-4 px-6 rounded rounded-[22px] shadow-lg border border-gray-400/10 h-[180px] max-[330px]:h-[350px] max-[380px]:h-[280px] max-[400px]:h-[350px] max-[550px]:h-[250px]">
                  <ChatBubbleLeftRightIcon aria-hidden="true" className="mt-1 h-8 w-8 flex-none text-blue-700" />
                  <span>
                    <strong className="font-semibold text-gray-900">Visibility Booster</strong><br/>We drive conversions by nurturing your community, managing engagement, and implementing data-backed paid campaigns to reach and resonate with your ideal market.
                  </span>
                </li>
              </ul>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">No experience? No problem.</h2>
              <p className="mt-6">
                Embarking on a personal branding journey can feel daunting, but you don&apos;t need prior experience to make a significant impact as we will be the ones guiding you through every singe step along this journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
