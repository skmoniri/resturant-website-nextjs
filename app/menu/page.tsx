import React from 'react'
import MenuList from '@/component/menuList'
import {menutext} from '@/Data'




const Page = () => {
  return (
    <>
    <div className='bg-red-500 h-[350px]'>
    <h1 className='font-bold text-9xl w-[400px] mx-auto pt-[160px] pr-[950px] pl-[20px]'>MENU</h1>
    </div>

{/*       <h1 className='flex items-end justify-center pl-7 h-[350px] font-bold text-9xl bg-red-500 pb-15 '>MENU</h1> */}

        <div className=' flex flex-row w-[1000px] flex-wrap justify-between mx-auto '> 
        {menutext.map((menudata, idx) => (
          <MenuList key={idx}  menudata={menudata} />
        ))}

        </div>
      
    </>
  )
}

export default Page
