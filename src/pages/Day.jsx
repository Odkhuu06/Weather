import { Ellipse21 } from "@/Componenets/Ellipse21";
import Image from "next/image";
export const Day = () => {
  return (
    <div className=" relative w-[800px] h-[1200px] bg-[#F3F4F6]">
      <div className="pl-[40px] pt-[40px]">
        <input
          placeholder="Search"
          className="w-lg h-20 bg-stone-50 min-w-xs text-zinc-950 shadow-lg"
        />
      </div>
      <div className="absolute top-[216px] left-[193px] z-20 w-[414px] h-[832px] rounded-10.5 rounded-4xl overflow-hidden shadow-lg bg-[#FFFFFF]/75 backdrop-blur-md">
      <div>
       <Image
          src="/ellip.png" // public дотор байгаа зураг
          alt="ellipse"
          width={100}
          height={100}
        />
      </div>
      </div>
      
    </div>
  );
};
