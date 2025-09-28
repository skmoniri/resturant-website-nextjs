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
        <div className="flex justify-between pt-[50px] mx-auto w-[1800px] ">
          <div className="bg-white flex-col h-[400px] max-w-[550px]">
            <h1 className=" flex justify-center">img</h1>
            <h1 className="font-bold flex justify-center">ORDER ON THE GO</h1>
            <p className="flex justify-center">I&apos;m a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
          </div>
          <div className="bg-white flex-col h-[400px] max-w-[550px]">
            <h1 className=" flex justify-center">img</h1>
            <h1 className="font-bold flex justify-center">ORDER ON THE GO</h1>
            <p className="flex justify-center">I&apos;m a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
          </div>
          <div className="bg-white flex-col h-[400px] max-w-[550px]">
            <h1 className=" flex justify-center">img</h1>
            <h1 className="font-bold flex justify-center">ORDER ON THE GO</h1>
            <p className="flex justify-center">I&apos;m a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
          </div>
        </div>
      </div>
    </>
  );
}
