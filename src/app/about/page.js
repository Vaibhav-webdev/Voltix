import Image from 'next/image'
import React from 'react'
import { Truck } from "lucide-react"
import Link from 'next/link'
import { CreditCard } from 'lucide-react'
import Client from '../components/client'
import { Package } from 'lucide-react'
import { Gem } from 'lucide-react'

const page = () => {
  return (
    <div className='mt-8 md:mt-16 px-5 sm:px-8 lg:px-20 pb-20'>
      <div className=''>
        <div>
          <h2 className='text-center lg:text-left text-3xl sm:text-4xl lg:text-6xl leading-tight font-bold'>The Story of Innovation, Style, and the Soul of Our Store.</h2>
        </div>
        <div>
          <p className='pt-4 text-center lg:text-left text-gray-600 text-base sm:text-lg'>Welcome to our digital emporium, where style meets innovation in the realm of watches, gadgets, and cutting-edge technology. Discover a curated collection that transcends time, blending timeless elegance with the latest advancements. From sleek smartwatches that seamlessly integrate with your lifestyle to futuristic gadgets that redefine convenience, our store is your gateway to a world where form and function coalesce. Explore the intersection of fashion and technology, and immerse yourself in a realm of endless possibilities. Elevate your everyday with our meticulously selected range—because time is precious, and so is staying ahead in the world of gadgets and tech. Welcome to the future of wristwear and beyond.Established with a vision to redefine the world of watches, gadgets, and technology, our journey is a testament to a relentless pursuit of excellence. We curate collections that transcend the ordinary, seamlessly blending the allure of classic timepieces with the cutting-edge allure of modern technology. Committed to providing a personalized shopping experience, we guide you through a realm of possibilities, ensuring every product resonates with your unique taste. Our story is one of crafting tomorrow's classics, a tale where gears meet dreams, and where the ticking of time harmonizes with the pulse of innovation. Join us on this odyssey as we continue to pioneer the future, one wrist at a time. Welcome to a world where sophistication meets innovation—welcome to our story.</p>
        </div>
      </div>
      <div className='flex flex-col lg:flex-row gap-6 mt-16'>
        <div className='bg-gray-100 py-6 px-6 rounded-lg'>
          <div>
            <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold'>Our Vision</h2>
          </div>
          <div>
            <p className='mt-3 text-gray-700'>
              Our journey is a testament to a relentless pursuit of excellence. We curate collections that transcend the ordinary, seamlessly blending the allure of classic timepieces with the cutting-edge allure of modern technology. Committed to providing a personalized shopping experience, we guide you through a realm of possibilities, ensuring every product resonates with your unique taste. Our story is one of crafting tomorrow's classics</p>
          </div>
        </div>
        <div className='bg-gray-100 rounded-lg py-6 px-6'>
          <div>
            <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold'>Our Approch</h2>
          </div>
          <div>
            <p className='mt-3 text-gray-700'>
              We guide you through a realm of possibilities, ensuring every product resonates with your unique taste. Our story is one of crafting tomorrow's classics, a tale where gears meet dreams, and where the ticking of time harmonizes with the pulse of innovation. Join us on this odyssey as we continue to pioneer the future, one wrist at a time. Welcome to a world where sophistication meets innovation—welcome to our story.</p>
          </div>
        </div>
      </div>
      <div className='grid pt-18 grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-14 lg:gap-8 py-12'>
        <div className='flex flex-col items-center'>
          <div>
            <h2 className='text-6xl lg:text-5xl font-bold'>+12M</h2>
          </div>
          <div>
            <p className='text-center text-gray-700'>Tot  al Users</p>
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <div>
            <h2 className='text-6xl lg:text-5xl font-bold'>80K</h2>
          </div>
          <div>
            <p className=' text-gray-700'>Star Customers</p>
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <div>
            <h2 className='text-6xl lg:text-5xl font-bold'>+25</h2>
          </div>
          <div>
            <p className=' text-gray-700'>Collections</p>
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <div>
            <h2 className='text-6xl lg:text-5xl font-bold'>2025</h2>
          </div>
          <div>
            <p className=' text-gray-700'>Year Founded</p>
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <div>
            <h2 className='text-6xl lg:text-5xl font-bold'>+460</h2>
          </div>
          <div>
            <p className=' text-gray-700'>Total Products</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row py-10 gap-8">
        <div className="object-cover">
          <Image
            src="/about-1.png"
            alt="Profile picture"
            width={1900}
            height={1700}
          />
        </div>
        <div className="bg-gray-100 rounded-2xl">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-left mt-6 lg:mt-20 px-4">Explores Tommorow's Watches Today!</h2>
          </div>
          <div className="px-4">
            <p className="font-semibold text-left mt-6 text-gray-500 ">Welcome to our emporium, whese style meets innovation in the realm of watches, gadgets, and cutting-edge technology. Discover a curated collection that transcends time.</p>
          </div>
          <div className="flex justify-start px-4 py-6">
            <Link href={"/store"}><button className="bg-black hover:bg-transparent cursor-pointer transition-all ease-in-out duration-200 border hover:text-black text-center rounded-3xl px-6 py-3 font-semibold text-white text-sm">Shop Now</button></Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row py-10 gap-8">
        <div className="bg-gray-100 rounded-2xl">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-8 leading-tight px-5">Evaluate Your Life Style With Our Range Of High-Tech Watches And Gadgets!</h2>
          </div>
          <div className="px-5">
            <p className="font-semibold text-left mt-6 text-gray-500 ">Welcome to our emporium, whese style meets innovation in the realm of watches, gadgets, and cutting-edge technology. Discover a curated collection that transcends time.</p>
          </div>
          <div className="flex justify-start px-4 py-6">
            <Link href={"/store"}><button className="bg-black hover:bg-transparent cursor-pointer transition-all ease-in-out duration-200 border hover:text-black text-center rounded-3xl px-6 py-3 font-semibold text-white text-sm">Shop Now</button></Link>
          </div>
        </div>
        <div>
          <Image
            src="/about-2.png"
            alt="Profile picture"
            width={950}
            height={1700}
          />
        </div>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-18 pb-10'>
        <div className='flex flex-col items-center'>
          <div className='bg-gray-100 flex justify-center items-center w-20 h-20 rounded-lg'>
            <Truck width={40} height={40} />
          </div>
          <div>
            <h2 className='font-bold text-lg sm:text-xl lg:text-2xl mt-6 text-center'>Free shipping</h2>
          </div>
          <div>
            <p className='text-gray-600 text-center mt-2'>Elevate your casual style with our Men's Hoodie</p>
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <div className='bg-gray-100 flex justify-center items-center w-20 h-20 rounded-lg'>
            <CreditCard width={40} height={40} />
          </div>
          <div>
            <h2 className='font-bold text-lg sm:text-xl lg:text-2xl mt-6 text-center'>Secure payments</h2>
          </div>
          <div>
            <p className='text-gray-600 text-center mt-2'>Elevate your casual style with our Men's Hoodie</p>
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <div className='bg-gray-100 flex justify-center items-center w-20 h-20 rounded-lg'>
            <Package width={40} height={40} />
          </div>
          <div>
            <h2 className='font-bold text-lg sm:text-xl lg:text-2xl mt-6 text-center'>7 days free return</h2>
          </div>
          <div>
            <p className='text-gray-600 text-center mt-2'>Elevate your casual style with our Men's Hoodie</p>
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <div className='bg-gray-100 flex justify-center items-center w-20 h-20 rounded-lg'>
            <Gem width={40} height={40} />
          </div>
          <div>
            <h2 className='font-bold text-lg sm:text-xl lg:text-2xl mt-6 text-center'>Curated collections</h2>
          </div>
          <div>
            <p className='text-gray-600 text-center mt-2'>Elevate your casual style with our Men's Hoodie</p>
          </div>
        </div>
      </div>
      <div className='pt-22 px-5 sm:px-8 lg:px-20 pb-10'>
        <div>
          <h2 className='text-center text-3xl sm:text-4xl lg:text-5xl font-bold'>What our clients says</h2>
        </div>
        <div className='flex'>
          <div className="max-w-[1100px] mx-auto overflow-hidden py-16">
            <div className="flex gap-8 w-max scroll-animation">

              {/* Review 1 */}
              <div className="w-[300px] sm:w-[420px] lg:w-[520px] bg-gray-50 rounded-2xl p-6 sm:p-8 shadow-md">
                <div className="flex items-center gap-4">
                  <Image
                    src="/testimonials-2.jpg"
                    alt="John Doe"
                    width={56}
                    height={56}
                    className="rounded-full"
                  />
                  <h3 className="text-lg font-semibold">John Doe</h3>
                </div>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  As a tech enthusiast, I’m always searching for reliable gadgets.
                  This store exceeded my expectations with premium quality,
                  detailed descriptions, and lightning-fast delivery.
                </p>

                <div className="mt-3 text-yellow-400 text-lg">★★★★★</div>
              </div>

              {/* Review 2 */}
              <div className="w-[300px] sm:w-[420px] lg:w-[520px] bg-gray-50 rounded-2xl p-6 sm:p-8 shadow-md">
                <div className="flex items-center gap-4">
                  <Image
                    src="/testimonials-3.jpg"
                    alt="Robert Alderson"
                    width={56}
                    height={56}
                    className="rounded-full"
                  />
                  <h3 className="text-lg font-semibold">Robert Alderson</h3>
                </div>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  I’ve been collecting gadgets for years, and this website
                  stands out. The product accuracy, modern design, and
                  customer support are absolutely top-notch.
                </p>

                <div className="mt-3 text-yellow-400 text-lg">★★★★★</div>
              </div>

              {/* Review 3 */}
              <div className="w-[300px] sm:w-[420px] lg:w-[520px] bg-gray-50 rounded-2xl p-6 sm:p-8 shadow-md">
                <div className="flex items-center gap-4">
                  <Image
                    src="/testimonials-4.jpg"
                    alt="Alex Martin"
                    width={56}
                    height={56}
                    className="rounded-full"
                  />
                  <h3 className="text-lg font-semibold">Alex Martin</h3>
                </div>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  What I love most is the transparency. Every product is
                  explained clearly, images are accurate, and the checkout
                  process is super smooth.
                </p>

                <div className="mt-3 text-yellow-400 text-lg">★★★★★</div>
              </div>

              {/* Duplicate (smooth loop) */}
              <div className="w-[300px] sm:w-[420px] lg:w-[520px] bg-gray-50 rounded-2xl p-6 sm:p-8 shadow-md">
                <div className="flex items-center gap-4">
                  <Image
                    src="/testimonials-2.jpg"
                    alt="John Doe"
                    width={56}
                    height={56}
                    className="rounded-full"
                  />
                  <h3 className="text-lg font-semibold">John Doe</h3>
                </div>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  As a tech enthusiast, I’m always searching for reliable gadgets.
                  This store exceeded my expectations with premium quality.
                </p>

                <div className="mt-3 text-yellow-400 text-lg">★★★★★</div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
