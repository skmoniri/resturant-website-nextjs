import React from 'react'
import { MenuData } from '@/Data'

interface MenuDataProps {
  menudata : MenuData;
}

const menuList = ({menudata}: MenuDataProps) => {
  return (
    <div className='mx-10 min-w-[400px] max-w-[400px] my-[60px]'>
        <h1 className=' font-bold text-4xl mb-5'>{menudata.category_title}</h1>
        <div>
            {menudata.items.map(item => (
                <div key={item.item_id} className=' flex flex-col pt-3 border-t-2 border-red-500 mb-4'>
                    <div className='flex justify-between'>
                        <p className='text-xl font-bold pb-2'>{item.item_title}</p>
                        <p className='text-lg'>${item.item_price.toFixed(2)}</p>
                    </div>
                    {item.item_desc && (
                        <p className='max-w-[200px] break-all pb-3'>
                            {item.item_desc}
                        </p>
                    )}
                </div>
            ))}
        </div>
    </div>
  )
}

export default menuList
