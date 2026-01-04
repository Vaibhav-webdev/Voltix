import React from 'react'
import Link from 'next/link'

const heading = () => {
  return (
    <div className="text-center px-4 sm:px-10 md:px-20 lg:px-52 py-20 sm:py-28 md:py-22 shadow-xl">
  <div>
    <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-snug">
      Explore Our Latest Watch and Gadget Collection!
    </h2>
  </div>
  <div>
    <p className="text-black mt-5 sm:mt-7 text-base sm:text-lg md:text-lg opacity-70 px-2 sm:px-0 md:px-0">
      Welcome to our digital emporium, where style meets innovation in the realm of watches, gadgets, and cutting-edge technology. Discover a curated collection that transcends time, blending timeless elegance with the latest advancements.
    </p>
  </div>
  <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-3">
    <Link href={"/store"}>
      <button className="px-6 sm:px-7 py-3 sm:py-4 bg-black text-white text-sm sm:text-base font-semibold rounded-3xl border hover:bg-transparent hover:text-black transition-all ease-in-out duration-200">
        Explore Products
      </button>
    </Link>
    <Link href={"/about"}>
      <button className="border px-6 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-3xl hover:bg-gray-100 transition-all">
        About Us
      </button>
    </Link>
  </div>
</div>

  )
}

export default heading
