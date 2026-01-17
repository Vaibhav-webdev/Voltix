import React from 'react'
import Link from 'next/link'

const CallToAction = () => {
  return (
    <div className="pt-16 sm:pt-20 flex justify-center items-center pb-16 sm:pb-20">
  <div className="bg-green-50 w-[90vw] sm:w-[85vw] md:w-[80vw] lg:w-[70vw] px-6 sm:px-16 md:px-28 py-12 sm:py-16 rounded-xl text-center">
    
    {/* Heading */}
    <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-800 font-bold">
      Explore Our Latest Watch and Gadget Collection!
    </h2>
    
    {/* Paragraph */}
    <p className="mt-6 sm:mt-8 text-sm sm:text-base md:text-lg text-gray-700">
      Where style meets innovation in the realm of watches, gadgets, and cutting-edge technology. Discover a curated collection that transcends time.
    </p>
    
    {/* Button */}
    <div className="flex justify-center mt-6 sm:mt-7">
      <Link href={"/dashboard"}>
        <button className="bg-green-600 hover:bg-transparent cursor-pointer transition-all ease-in-out duration-200 border hover:text-black text-center rounded-4xl px-5 sm:px-7 py-3 sm:py-4 font-semibold text-white text-sm sm:text-base">
          Get Started
        </button>
      </Link>
    </div>

  </div>
</div>

  )
}

export default CallToAction
