import React from 'react'
import Image from 'next/image'
import "../components/styles/testimonial.css";

const client = () => {
    return (
        <div className='pt-18 px-10 lg:px-30 pb-20 shadow-xl'>
            <div>
                <h2 className='text-center text-5xl font-bold'>What our clients says</h2>
            </div>
            <div className='flex'>
                <div className="max-w-[1100px] mx-auto overflow-hidden py-16">
                    <div className="flex gap-8 w-max scroll-animation">

                        {/* Review 1 */}
                        <div className="w-[520px] bg-gray-50 rounded-2xl p-8 shadow-md">
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
                        <div className="w-[520px] bg-gray-50 rounded-2xl p-8 shadow-md">
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
                        <div className="w-[520px] bg-gray-50 rounded-2xl p-8 shadow-md">
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
                        <div className="w-[520px] bg-gray-50 rounded-2xl p-8 shadow-md">
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
    )
}

export default client
