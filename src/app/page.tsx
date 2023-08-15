import Image from 'next/image';

export default function Home() {
  return (
    <div className='relative h-full overflow-hidden lg:h-[140vh]'>
      {/* <Header /> */}
      <main className='relative pb-24 pl-4 lg:pl-16'>
        <div className='flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12'>
          <div className='absolute left-0 top-0 -z-10 flex h-[95vh] w-screen flex-col bg-black'>
            <Image
              src='/banner.jpeg'
              alt='The Witcher'
              fill={true}
              className='h-[65vh] object-cover object-top lg:h-[95vh]'
            ></Image>
          </div>

          <h1 className='text-2xl font-bold md:text-4xl lg:text-7xl'>
            The Witcher
          </h1>

          <p className='max-w-xs text-xs drop-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>

          <div className='flex space-x-3'>
            <button className='md:text-xl; flex cursor-pointer items-center gap-x-2 rounded bg-white px-5 py-1.5 text-sm font-semibold text-black transition hover:opacity-75 md:py-2.5'>
              Play
            </button>
            <button className='md:text-xl; flex cursor-pointer items-center gap-x-2 rounded bg-gray-600 px-5 py-1.5 text-sm font-semibold text-black transition hover:opacity-75 md:py-2.5'>
              More Info
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
