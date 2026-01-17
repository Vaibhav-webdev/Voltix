"use client"

import React, { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const Questions = () => {
  const [show, setShow] = useState(null)

  const faqs = [
    {
      q: "What membership plans do you offer for new members?",
      a: "We offer a variety of membership options to fit your fitness goals and lifestyle, including monthly, quarterly, and annual plans. Our pricing is competitive and transparent, with no hidden fees. Visit our Membership page for more information on pricing and benefits."
    },
    {
      q: "Do you provide personal training sessions at your gym?",
      a: "Yes, we provide one-on-one personal training sessions led by certified trainers who help you achieve your fitness goals safely and effectively. Personal training plans are customized according to your needs and experience level."
    },
    {
      q: "Are group workout classes included in the membership?",
      a: "Our membership includes access to a variety of group fitness classes such as yoga, strength training, cardio, and HIIT. Class schedules are flexible and designed to suit beginners as well as advanced members."
    },
    {
      q: "What are your gym opening and closing hours?",
      a: "Our gym is open seven days a week with extended hours to accommodate your schedule. We open early in the morning and close late at night, ensuring you can work out at a time that suits you best."
    },
    {
      q: "Is there a free trial available before joining?",
      a: "Yes, we offer a free trial for new visitors so you can explore our facilities, equipment, and classes before committing to a membership. Contact our front desk to schedule your trial session."
    }
  ]

  return (
    <div className="px-6 lg:px-0 pt-12 sm:pt-16 pb-16 sm:pb-20">
      <h2 className="text-center text-3xl text-gray-600 sm:text-4xl md:text-5xl font-bold">
        Frequently Asked Questions
      </h2>

      <div className="flex items-center gap-4 sm:gap-5 flex-col pt-8 sm:pt-12">
        {faqs.map((item, index) => (
          <div
            key={index}
            onClick={() => setShow(show === index ? null : index)}
            className="cursor-pointer bg-gray-100 w-[90vw] sm:w-[70vw] md:w-[60vw] transition-all duration-300 ease-in-out py-4 sm:py-5 px-4 sm:px-5 rounded-lg"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-black font-bold text-base sm:text-lg md:text-xl">
                {item.q}
              </h2>
              {show === index ? <ChevronUp /> : <ChevronDown />}
            </div>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${show === index ? "max-h-40 mt-4 sm:mt-6" : "max-h-0"
                }`}
            >
              <p className="text-gray-700 text-sm sm:text-base md:text-lg mt-2 sm:mt-3">
                {item.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>

  )
}

export default Questions
