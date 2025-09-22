import React from 'react'
import menuList from '@/component/menuList'

const page = () => {
  return (
    <>
      <h1 className='flex items-end pl-7 h-[350px] font-bold text-9xl bg-red-500 pb-15'>MENU</h1>
      <div>
          {menuList()}
      </div>
    </>
  )
}

export default page
