import Link from 'next/link'
import React from 'react'

const FirstBlock = () => {
  return (
      <div className="bg-red-500 w-full h-[1000px]">
        <div className="pt-[200px] pl-[80px]">
          <p className="font-bold text-4xl text-white pb-[40px]">OPEN FOR DELIVERY & PICK UP</p>
          <h1 className="font-bold text-8xl w-[700px] text-white pb-[40px]">GET IT WHILE IT&apos;S HOT</h1>
          <Link href="/menu" className="w-[200px] h-[50px] text-white flex items-center justify-center border-2 py-1 px-2 hover:text-red-500 hover:bg-white hover:border-red-500 transition-colors duration-300" >Full Menu</Link>
        </div>
      </div>
  )
}

export default FirstBlock
