"use client"

import Image from 'next/image';
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react';
import React from 'react'
import { useAppContext } from '../../context/AppContext';
import { useSelector } from 'react-redux';

const Page = () => {
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


  const router = useRouter()
  const { cart, setCart } = useAppContext()

  return (
    <div className='mt-12 px-20 pb-20'>
      <div>
        <div className='flex'>
          <h2 className={`cursor-pointer text-left font-bold text-4xl relative before:content-[''] before:absolute before:left-1 before:-bottom-2 before:h-1 before:w-4 before:bg-black before:transition-all before:duration-300 hover:before:w-30`}>Store</h2>
        </div>
        <div className='pt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {products2.map(product => (
            <div onClick={() => {
              router.push(
                `/products?name=${encodeURIComponent(product.name)}&desc=${encodeURIComponent(product.description2)}&price=${product.price}&reviews=${product.reviews}&not_price=${product.not_price}&id=${product.id}&image=${encodeURIComponent(product.image)}`
              )
            }} key={product.id} className='w-68 hover:shadow-lg transition bg-gray-100 pb-5 rounded-lg px-4'>
              <div className='w-full h-50 flex justify-center items-center object-cover'>
                <Image src={product.image} alt="Image" objectFit='cover' width={220} height={200}></Image>
              </div>
              <div className='font-bold text-xl mt-7'>{product.name}</div>
              <div className='text-gray-600 pt-2'>{product.description}</div>
              <div className='font-bold text-2xl mt-5'>${product.price}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Page
