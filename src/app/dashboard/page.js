import React from 'react'
import { auth } from '../auth';
import { redirect } from 'next/navigation';
import Navbar2 from './components/navbar2'
import Main from './components/main';

const page = async () => {
      const session = await auth();
            if (!session) {
                redirect("/login");
            }
  return (
    <div className='w-full h-screen bg-gray-50'>
      <Navbar2 />
      <Main />
    </div>
  )
}

export default page