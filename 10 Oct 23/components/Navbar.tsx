import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    < nav className="p-10 px-20 flex justify-between items-center" >
      <Link href="/">
        <img src="https://www.artimization.com/wp-content/themes/Artimization/assets/images/logo.svg" alt="" className='h-10' />
      </Link>
      
      <ul className="flex gap-3">
        <Link href="/About" className="text-sm font-bold">ABOUT</Link>
        <Link href="/Services" className="text-sm font-bold">SERVICES</Link>
        <Link href="/Pricing" className="text-sm font-bold">PRICING</Link>
        <Link href="/Portfolio" className="text-sm font-bold">PORTFOLIO</Link>
        <Link href="/Media" className="text-sm font-bold">MEDIA</Link>
        <Link href="/Contact" className="text-sm font-bold">CONTACT</Link>
      </ul>

      <ul className="flex gap-5">
        <button className="p-2 border-2 rounded">+12344567890</button>
        <button className="p-2 bg-red-500 px-5 rounded">QUOTE</button>
      </ul>
    </nav >

  )
}

export default Navbar