"use client"

import React from 'react'
import Create from './create'
import Content from './content'
import { useState } from 'react'

const main = () => {
  const [show, setshow] = useState(true)

  return (
    <div className='bg-gray-50'>
        <Create setshow={setshow} />
        <Content show={show} setshow={setshow} />
    </div>
  )
}

export default main