"use client"

import React from 'react'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image'
import { useSelector } from "react-redux";
import { MoveRight } from 'lucide-react';

const bestSeller = () => {
  const router = useRouter()

  const [products2, setproducts2] = useState([])

  useEffect(() => {
    async function getProducts() {
      const res = await fetch("/api/products", {
        cache: "no-store",
      });
      const data = await res.json();
      console.log(data)
      setproducts2(data)
    }
    getProducts()
  }, [])

  return (
    <div className='pt-18 px-14 lg:px-26 shadow-xl pb-18'>
      <div className='flex justify-between'>
        <div>
          <h2 className='font-bold text-4xl'>Best Sellers</h2>
        </div>
        <div className='hidden lg:flex'>
          <Link href={"/store"} className='flex'>
            <h2 className='text-lg transition-all ease-in-out duration-200 font-semibold mr-2 hover:underline cursor-pointer hover:text-gray-600'>Browse All Products</h2>
            <MoveRight width={30} height={30} />
          </Link>
        </div>
      </div>
      <div>
        <p className='mt-4 font-semibold text-gray-500'>browse favorite sale styles and brands</p>
      </div>
      <div className='grid sm:grid-cols-2 lg:grid-cols-4 pt-10 gap-8'>
        {products2.slice(0, 4).map(product => (
          <div
            onClick={() => {
              router.push(
                `/products?name=${encodeURIComponent(product.name)}&desc=${encodeURIComponent(product.description2)}&price=${product.price}&id=${product.id}&image=${encodeURIComponent(product.image)}`
              )
            }}
            key={product.id}
            className='w-68 bg-gray-100 pb-5 rounded-lg px-4 cursor-pointer hover:shadow-lg transition'
          >
            <div className='w-full h-50 flex justify-center items-center object-cover'>
              <Image
                src={product.image}
                alt="Image"
                objectFit='cover'
                width={220}
                height={200}
              />
            </div>
            <div className='font-bold text-xl mt-7'>{product.name}</div>
            <div className='text-gray-600 pt-2'>{product.description}</div>
            <div className='font-bold text-2xl mt-5'>${product.price}</div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default bestSeller