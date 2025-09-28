import React from 'react'
import MenuList from '@/component/menuList'
import {menutext} from '@/Data'




const Page = () => {
  return (
    <>
    <div className='bg-red-500 h-[350px]'>
    <h1 className='font-bold text-9xl w-[400px] mx-auto pt-[160px] pr-[950px] pl-[20px]'>MENU</h1>
    </div>
    <div className='bg-amber-50'>
      <div className=' flex flex-row w-[1000px] flex-wrap justify-between mx-auto '> 
        {menutext.map((menudata, idx) => (
          <MenuList key={idx}  menudata={menudata} />
        ))}

    </div>
    </div>
    
      
    </>
  )
}

export default Page
