import { TrophyIcon, VideoCameraIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/20/solid'

export default function branding() {
  return (
    <div id='branding-section' className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
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
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-blue-700">Branding</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Building Brands That Resonate</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Crafting Compelling Personal Brands Through Strategic Content Creation
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt=""
            src="/branding_image.webp"
            className="w-[700px] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[850px]"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                We believe that personal branding is more than just a trend; it's an essential strategy for standing out in today's competitive market. We empower our clients to define their unique narratives, aligning their values and aspirations with their online presence. Our tailored approach ensures that your personal brand resonates with your target audience, fostering deeper connections and increasing your influence.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <TrophyIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-blue-700" />
                  <span>
                    <strong className="font-semibold text-gray-900">Personalized Branding Strategies.</strong> Work with our team to develop tailored branding strategies that align with your unique vision, helping you define your niche and create a cohesive identity.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <VideoCameraIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-blue-700" />
                  <span>
                    <strong className="font-semibold text-gray-900">Engaging Content Creation.</strong> Create captivating visuals, compelling copy, and engaging videos that connect with your audience and enhance your online presence.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ChatBubbleLeftRightIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-blue-700" />
                  <span>
                    <strong className="font-semibold text-gray-900">Ongoing Support & Resources.</strong> Enjoy continuous access to valuable resources, tutorials, and coaching, empowering you to refine your brand and adapt in the digital landscape.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                Our expertise in content creation complements your personal branding journey. From engaging social media posts to compelling blogs and videos, we craft content that not only reflects your brand's identity but also engages your audience effectively. Let us help you tell your story and cultivate a powerful online presence that attracts opportunities and drives success.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">No experience? No problem.</h2>
              <p className="mt-6">
              Embarking on a personal branding journey can feel daunting, but you don’t need prior experience to make a significant impact. At Brandflow, we cater to all skill levels, providing guidance and resources to help you grow and succeed. Our user-friendly approach ensures that you’ll feel confident and empowered as you build your brand from the ground up. Let's transform your ideas into reality!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
