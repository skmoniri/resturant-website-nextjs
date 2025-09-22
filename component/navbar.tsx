import React from 'react'
import Link from 'next/link'

const navbar = () => {
  return (
    <div className="bg-white fixed top-0 left-0 w-full z-50 h-[85px] flex items-center justify-between px-6">
      <p className="">img</p>
      <div className="flex gap-10">
        <Link href="/" className="border-2 rounded-full px-2">Home</Link>
        <Link href="/menu" className="border-2 rounded-full px-2">Menu</Link>
        <Link href="/#contact" className="border-2 rounded-full px-2">Contact</Link>
      </div>
    </div>
  )
}

export default navbar
