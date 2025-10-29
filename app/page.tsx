import Link from 'next/link'
import FirstBlock from '@/component/firstBlock';
import Paragraph from '@/component/paragraph';
import AllTimeFav from '@/component/allTimeFav';
import SpecialWeek from '@/component/specialWeek';
import WeDeliver from '@/component/weDeliver';

export default function Home() {
  return (
    <>  
      <FirstBlock/>
      <Paragraph/>

      <div className="w-full bg-amber-50 h-[300px]">
        <h1 className="text-red-500 font-bold text-7xl w-[600px] mx-auto text-center"> ORIGINAL RECIPE SINCE 2035</h1>
      </div>

      <AllTimeFav/>
      <SpecialWeek/>
      <WeDeliver/>



    </>
  );
}
