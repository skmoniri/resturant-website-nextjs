import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className="bg-red-500 w-full h-[1000px]">
        <div className="pt-[200px] pl-[80px]">
          <p className="font-bold text-4xl text-white pb-[40px]">OPEN FOR DELIVERY & PICK UP</p>
          <h1 className="font-bold text-8xl w-[700px] text-white pb-[40px]">GET IT WHILE IT&apos;S HOT</h1>
          <Link href="/menu" className="w-[200px] h-[50px] text-white flex items-center justify-center border-2 py-1 px-2 hover:text-red-500 hover:bg-white hover:border-red-500 transition-colors duration-300" >Full Menu</Link>
        </div>
      </div>



      <div className="w-full bg-amber-50 h-[600px] flex justify-center">
        <div className="flex justify-between pt-[50px] mx-[70px] max-w-[1800px] gap-18 px-5">
          
          <div className="bg-white flex-col h-[425px] max-w-[500px] min-w-[300px] flex justify-center">
            <h1 className=" flex justify-center font-bold text-5xl pb-10">img</h1>
            <h1 className="font-bold text-xl flex justify-center pb-5 ">ORDER ON THE GO</h1>
            <p className="flex justify-center items-center mx-5 text-center ">I&apos;m a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
          </div>

          <div className="bg-white flex-col h-[425px] max-w-[500px] min-w-[300px] flex justify-center">
            <h1 className=" flex justify-center font-bold text-5xl pb-10">img</h1>
            <h1 className="font-bold text-xl flex justify-center pb-5 ">ORDER ON THE GO</h1>
            <p className="flex justify-center items-center mx-5 text-center ">I&apos;m a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
          </div>

          <div className="bg-white flex-col h-[425px] max-w-[500px] min-w-[300px] flex justify-center">
            <h1 className=" flex justify-center font-bold text-5xl pb-10">img</h1>
            <h1 className="font-bold text-xl flex justify-center pb-5 ">ORDER ON THE GO</h1>
            <p className="flex justify-center items-center mx-5 text-center ">I&apos;m a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
          </div>
        </div>
      </div>


      
      <div className="w-full bg-amber-50 h-[300px]">
        <h1 className="text-red-500 font-bold text-7xl w-[600px] mx-auto text-center"> ORIGINAL RECIPE SINCE 2035</h1>
      </div>



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

      <div className="w-full h-[550px] bg-amber-50 flex justify-center">
        <div className=" bg-red-500 min-w-[1000px] w-[1800px] h-[500px] flex justify-end  mx-[70px] gap-[80px]">
          <div className=' w-[350px] mr-[120px]'>
            <h1 className='flex text-white justify-center font-bold text-4xl pt-20'>WE DELIVER</h1>
            <p className=' font-bold text-xl mx-auto text-center w-[300px] pt-7 text-white'>SATISFYING YOUR CRAVING JUST GOT EASIER</p>
            <p className='text-center w-[350px] mx-auto pt-7'> I&apos;m a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
            <Link href="/menu" className="flex justify-center w-[230px] py-4 mx-auto border-2 text-white hover:text-red-500 hover:bg-white hover:border-red-500 transition-colors duration-300 mt-5" >Order Online</Link>

          </div>
        </div>
      </div>


    </>
  );
}
