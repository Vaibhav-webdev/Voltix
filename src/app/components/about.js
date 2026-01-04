import Image from "next/image";
import React from 'react'
import Link from "next/link";

const about = () => {
  return (
    <div className="text-center pt-16 sm:pt-20 shadow-xl pb-12">
  <div className="px-4 sm:px-10 md:px-20 lg:px-32">
    <div>
      <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold">About Us</h2>
    </div>
    <div className="mt-4">
      <p className="text-base sm:text-lg md:text-lg">
        Welcome to our digital emporium, where style meets innovation in the realm of watches, gadgets, and cutting-edge technology. Discover a curated collection that transcends time.
      </p>
    </div>
  </div>

  {/* First Section */}
  <div className="flex flex-col lg:flex-row px-4 sm:px-10 md:px-20 py-10 gap-6 lg:gap-8">
    <div className="w-full lg:w-1/2 object-cover">
      <Image
        src="/about-1.png"
        alt="Profile picture"
        width={1900}
        height={1700}
        className="w-full h-auto rounded-xl"
      />
    </div>
    <div className="bg-gray-100 rounded-2xl w-full lg:w-1/2">
      <div>
        <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-left mt-8 sm:mt-20 px-4">
          Explores Tomorrow's Watches Today!
        </h2>
      </div>
      <div className="px-4 mt-4 sm:mt-6">
        <p className="font-semibold text-left text-gray-500 text-sm sm:text-base md:text-base">
          Welcome to our emporium, where style meets innovation in the realm of watches, gadgets, and cutting-edge technology. Discover a curated collection that transcends time.
        </p>
      </div>
      <div className="flex justify-start px-4 py-4 sm:py-6">
        <Link href={"/store"}>
          <button className="bg-black hover:bg-transparent cursor-pointer transition-all ease-in-out duration-200 border hover:text-black text-center rounded-3xl px-5 sm:px-6 py-2 sm:py-3 font-semibold text-white text-sm sm:text-sm">
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  </div>

  {/* Second Section */}
  <div className="flex flex-col lg:flex-row-reverse px-4 sm:px-10 md:px-20 py-10 gap-6 lg:gap-8">
    <div className="bg-gray-100 rounded-2xl w-full lg:w-1/2">
      <div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-left mt-8 sm:mt-20 px-4">
          Evaluate Your Life Style With Our Range Of High-Tech Watches And Gadgets!
        </h2>
      </div>
      <div className="px-4 mt-4 sm:mt-6">
        <p className="font-semibold text-left text-gray-500 text-sm sm:text-base md:text-base">
          Welcome to our emporium, where style meets innovation in the realm of watches, gadgets, and cutting-edge technology. Discover a curated collection that transcends time.
        </p>
      </div>
      <div className="flex justify-start px-4 py-4 sm:py-6">
        <Link href={"/store"}>
          <button className="bg-black hover:bg-transparent cursor-pointer transition-all ease-in-out duration-200 border hover:text-black text-center rounded-3xl px-5 sm:px-6 py-2 sm:py-3 font-semibold text-white text-sm sm:text-sm">
            Shop Now
          </button>
        </Link>
      </div>
    </div>
    <div className="w-full lg:w-1/2 object-cover">
      <Image
        src="/about-2.png"
        alt="Profile picture"
        width={950}
        height={1700}
        className="w-full h-auto rounded-xl"
      />
    </div>
  </div>
</div>

  )
}

export default about
