const posts = [
    {
      id: 1,
      title: '1. Book a Discovery Call',
      alt: 'An image of an ongoing discovery call with Brandflow',
      description:
        'In a one-on-one chat, we’ll explore your story and branding goals. If we’re a match, we’ll proceed with onboarding.',
      imageUrl:
        '/discovery_call.svg',
    },
    {
      id: 2,
      title: '2. Initialize Brand Accelator',
      alt: 'A image of a meeting for brand setup sprint',
      description:
        'During this phase, we’ll host an in-depth strategy session to map out your personalized branding framework and identify key milestones.',
      imageUrl:
        '/brand_accelerator.svg',
    },
    {
      id: 3,
      title: '3. Advance to Content Engine',
      alt: 'A image of a meeting in talks of content engine and the process to execute',
      description:
        'With the foundation set, we’ll enter an ongoing content creation process, helping you consistently grow your brand with your strategist’s support.',
      imageUrl:
        '/advance_content_engine.svg',
    },
    // More posts...
  ]
  
  export default function Process() {
    return (
      <div className="bg-white pt-24 sm:pt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="relative isolate px-6 pt-0 lg:px-8">
                <div className="mx-auto max-w-2xl pb-4 sm:pb-2 lg:pb-4">
                    <div className="mb-8 sm:mb-8 sm:flex sm:justify-center flex justify-center items-center grid grid-cols-2 gap-2 max-[390px]:w-[200px]">
                        <div className="relative rounded rounded-[14px] px-2 font-semibold bg-[#1E3A8A] text-lg leading-6 text-black">
                            <img 
                                alt="brandflow logo" 
                                src="/logo_what_we_do_white.svg" 
                                className="flex h-[56px] w-auto justify-center item-center max-[500px]:w-[150px]"
                            />
                        </div>
                        <div className="relative flex justify-center item-center rounded rounded-[14px] px-6 py-4 font-semibold bg-gray-200 text-lg leading-6 text-gray-900 max-[500px]:w-[150px] max-[500px]:text-[15px]">
                            How We Start
                        </div>
                    </div>
                    <div className="text-center">
                        <h1 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                            We ensure that brands are built on steady foundation
                        </h1>
                        <p className="mt-6 text-xl leading-8 text-gray-900">
                            Here is how we kick off with every client project:
                        </p>
                    </div>
                </div>
            </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 ">
            {posts.map((post) => (
              <article key={post.id} className="flex flex-col items-start gap-8 border border-2 border-black p-4 rounded-[22px]">
                <div className="relative w-full ">
                  <img
                    src={post.imageUrl}
                    alt={post.alt}
                    className="aspect-[16/9] w-full rounded-2xl bg-white object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="max-w-xl">
                  <div className=" flex items-center gap-x-4 text-xs"></div>
                  <div className="group relative">
                    <h2 className=" text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <div>
                        <span className="absolute inset-0" />
                        {post.title}
                      </div>
                    </h2>
                    <p className="mt-5 mb-5 line-clamp-7 text-base leading-6 text-[#193765]">{post.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    )
  }