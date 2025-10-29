import Link from 'next/link'
import React from 'react'

const AllTimeFav = () => {
  return (
      <div className=" w-full bg-amber-50 h-[700px] flex justify-center">
        <div className="min-w-[1000px] max-w-[1800px] w-full h-[600px] bg-white mx-[70px] ">
          <h1 className="mx-auto font-bold text-4xl w-[355px] pt-14">ALL TIME FAVORITES</h1>
          
          <div className="pt-16 flex justify-between mx-20">
            <div className="">
              <h1 className="flex justify-center border-2 p-20 font-bold text-white text-5xl bg-red-500">img</h1>
              <p className="flex justify-center font-bold text-2xl">CRISPY CHICKEN...</p>
            </div>
            <div className="">
              <h1 className="flex justify-center border-2 p-20 font-bold text-white text-5xl bg-red-500">img</h1>
              <p className="flex justify-center font-bold text-2xl">HOT & SPICY WINGS</p>
            </div>
            <div className="">
              <h1 className="flex justify-center border-2 p-20 font-bold text-white text-5xl bg-red-500">img</h1>
              <p className="flex justify-center font-bold text-2xl">FRENCH FRIES</p>
            </div>
          </div>

          <Link href="/menu" className="flex justify-center w-[230px] py-4 mt-20 mx-auto border-2 bg-red-500 text-white hover:text-red-500 hover:bg-white hover:border-red-500 transition-colors duration-300" >Full Menu</Link>

        </div> 
      </div>
  )
}

export default AllTimeFav
