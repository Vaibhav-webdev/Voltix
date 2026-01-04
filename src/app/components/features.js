import React from 'react'
import { Truck } from "lucide-react"
import { CreditCard } from 'lucide-react'
import { Package } from 'lucide-react'
import { Gem } from 'lucide-react'

const features = () => {
  return (
    <div className="pt-16 sm:pt-18 px-4 sm:px-10 md:px-20 lg:px-30 pb-16 sm:pb-20 shadow-xl">
  <div className="w-full">
    {/* Heading */}
    <div>
      <h2 className="text-center font-black text-3xl sm:text-4xl">Our Features</h2>
    </div>

    {/* Description */}
    <div className="px-2 sm:px-10 md:px-20 lg:px-40 mt-4 sm:mt-7 text-gray-500 text-sm sm:text-lg text-center">
      <p>
        Welcome to our digital emporium, where style meets innovation in the realm of watches, gadgets, and cutting-edge technology. Discover a curated collection that transcends time.
      </p>
    </div>

    {/* Features Grid */}
    <div className="pt-12 sm:pt-20 w-full gap-6 flex flex-wrap justify-center sm:justify-between">
      {/* Feature Card */}
      <div className="flex flex-col items-center w-full sm:w-[45%] md:w-[22%] mb-8">
        <div className="bg-gray-100 flex justify-center items-center w-16 h-16 sm:w-20 sm:h-20 rounded-lg">
          <Truck width={40} height={40} />
        </div>
        <h2 className="font-bold text-xl sm:text-2xl mt-4 sm:mt-6 text-center">Free shipping</h2>
        <p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base text-center">
          Elevate your casual style with our Men's Hoodie
        </p>
      </div>

      <div className="flex flex-col items-center w-full sm:w-[45%] md:w-[22%] mb-8">
        <div className="bg-gray-100 flex justify-center items-center w-16 h-16 sm:w-20 sm:h-20 rounded-lg">
          <CreditCard width={40} height={40} />
        </div>
        <h2 className="font-bold text-xl sm:text-2xl mt-4 sm:mt-6 text-center">Secure payments</h2>
        <p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base text-center">
          Elevate your casual style with our Men's Hoodie
        </p>
      </div>

      <div className="flex flex-col items-center w-full sm:w-[45%] md:w-[22%] mb-8">
        <div className="bg-gray-100 flex justify-center items-center w-16 h-16 sm:w-20 sm:h-20 rounded-lg">
          <Package width={40} height={40} />
        </div>
        <h2 className="font-bold text-xl sm:text-2xl mt-4 sm:mt-6 text-center">7 days free return</h2>
        <p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base text-center">
          Elevate your casual style with our Men's Hoodie
        </p>
      </div>

      <div className="flex flex-col items-center w-full sm:w-[45%] md:w-[22%] mb-8">
        <div className="bg-gray-100 flex justify-center items-center w-16 h-16 sm:w-20 sm:h-20 rounded-lg">
          <Gem width={40} height={40} />
        </div>
        <h2 className="font-bold text-xl sm:text-2xl mt-4 sm:mt-6 text-center">Curated collections</h2>
        <p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base text-center">
          Elevate your casual style with our Men's Hoodie
        </p>
      </div>
    </div>
  </div>
</div>

  )
}

export default features
