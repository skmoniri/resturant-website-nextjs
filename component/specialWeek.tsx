import React from 'react'

const SpecialWeek = () => {
  return (
      <div className="w-full h-[600px] bg-amber-50 flex justify-center">
        <div className="min-w-[1000px] max-w-[1800px] h-[500px] flex justify-between mx-[70px] gap-[80px]">
        <div className='bg-white w-[850px] '>
          <h1 className='flex justify-center text-center font-bold text-4xl w-[200px] mx-auto pt-30'>SPECIAL OF THE WEEK</h1>
          <p className='flex justify-center font-bold text-xl pt-10' >YOUR NEW GUILTY PLEASURE</p>
          <p className='flex justify-center text-center pt-10 mx-auto w-[350px]'>I&apos;m a paragraph. Click here to add your own text and edit me. It is easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
        </div>
        <div className='bg-white border-2 flex justify-center items-center font-bold text-5xl w-[850px] '>img</div>
        </div>
      </div>
  )
}

export default SpecialWeek
