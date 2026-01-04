import React from 'react'
import Heading from './components/heading'
import About from './components/about'
import BestSeller from './components/best-seller'
import Features from './components/features'
import Client from './components/client'
import CallToAction from './components/call_to_action'
import Questions from './components/questions'

const page = () => {
  return (
    <div>
        <Heading />
        <About />
        <BestSeller />
        <Features />
        <Client />
        <CallToAction />
        <Questions />
    </div>
  )
}

export default page
