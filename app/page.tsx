import { UserButton } from '@clerk/nextjs'
import React from 'react'

const Home = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <h1 className='text-red-500 font-bold'>Dashboard</h1>
      <UserButton afterSignOutUrl='/'/>
    </div>
  )
}

export default Home