import Link from 'next/link'
import React from 'react'

const WeDeliver = () => {
  return (
      <div className="w-full h-[500px] bg-amber-50 flex justify-center">
        <div className=" bg-red-500 min-w-[1000px] w-[1800px] h-[500px] flex justify-end  mx-[70px] gap-[80px]">
          <div className=' w-[350px] mr-[120px]'>
            <h1 className='flex text-white justify-center font-bold text-4xl pt-20'>WE DELIVER</h1>
            <p className=' font-bold text-xl mx-auto text-center w-[300px] pt-7 text-white'>SATISFYING YOUR CRAVING JUST GOT EASIER</p>
            <p className='text-center w-[350px] mx-auto pt-7'> I&apos;m a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
            <Link href="/menu" className="flex justify-center w-[230px] py-4 mx-auto border-2 text-white hover:text-red-500 hover:bg-white hover:border-red-500 transition-colors duration-300 mt-5" >Order Online</Link>

          </div>
        </div>
      </div>
  )
}

export default WeDeliver
