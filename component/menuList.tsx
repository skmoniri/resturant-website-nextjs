import React from 'react'

const menuList = () => {
  return (
    <div className=' mx-10 max-w-[400px] my-[60px]'>
        <h1 className='font-bold text-4xl mb-5'>CHICKEN SANDWICH</h1>
        <div>
            <div className='flex justify-between pt-3 border-t-2 border-red-500'>
                <p className='text-xl font-bold pb-2'>Classic Chicken Sandwich</p>
                <p className='text-lg'>$4.00</p>
            </div>
            <p className='max-w-[200px] break-all pb-3'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quibusdam reiciendis     
            </p>
        </div>

    </div>
  )
}

export default menuList
