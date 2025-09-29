export default function Home() {
  return (
    <>
      <div className="bg-red-500 w-full h-[1000px]">
        <div className="pt-[200px] pl-[80px]">
          <p className="font-bold text-4xl text-white pb-[40px]">OPEN FOR DELIVERY & PICK UP</p>
          <h1 className="font-bold text-8xl w-[700px] text-white pb-[40px]">GET IT WHILE IT&apos;S HOT</h1>
          <div className="w-[200px] h-[50px] text-white flex items-center justify-center border-2 py-1 px-2 hover:text-red-500 hover:bg-white hover:border-red-500 transition-colors duration-300">Order Online</div>
        </div>
      </div>

      <div className="w-full bg-amber-50 h-[600px]">
        <div className="flex justify-evenly pt-[50px] mx-auto max-w-[1800px] gap-18 px-5">
          
          <div className="bg-white flex-col h-[425px] max-w-[500px] min-w-[200px] flex justify-center">
            <h1 className=" flex justify-center font-bold text-5xl pb-10">img</h1>
            <h1 className="font-bold text-xl flex justify-center pb-5 ">ORDER ON THE GO</h1>
            <p className="flex justify-center items-center mx-5 ">I&apos;m a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
          </div>

          <div className="bg-white flex-col h-[425px] max-w-[500px] min-w-[200px] flex justify-center">
            <h1 className=" flex justify-center font-bold text-5xl pb-10">img</h1>
            <h1 className="font-bold text-xl flex justify-center pb-5 ">ORDER ON THE GO</h1>
            <p className="flex justify-center items-center mx-5 ">I&apos;m a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
          </div>

          <div className="bg-white flex-col h-[425px] max-w-[500px] min-w-[200px] flex justify-center">
            <h1 className=" flex justify-center font-bold text-5xl pb-10">img</h1>
            <h1 className="font-bold text-xl flex justify-center pb-5 ">ORDER ON THE GO</h1>
            <p className="flex justify-center items-center mx-5 ">I&apos;m a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
          </div>
        </div>
      </div>
      
      <div className="w-full bg-amber-50 h-[300px]">
        <h1 className="text-red-500 font-bold text-7xl w-[600px] mx-auto text-center"> ORIGINAL RECIPE SINCE 2035</h1>
      </div>

      <div className=" w-full bg-red-50 h-[700px]">
        <h1>ALL TIME FAVORITES</h1>
      </div>
    </>
  );
}
