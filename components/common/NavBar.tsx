import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <nav className='flex justify-around '>
      <Link className='nav relative hover:text-white font-mono' href='/'>Home</Link>
      <Link className='nav relative' href='/about'>About</Link>
      <Link className='nav relative' href='/contact'>Contact</Link>
    </nav>
  )
}

export default NavBar