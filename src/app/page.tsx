import { Hero } from "@/components/sections/Hero";
import { Navbar } from "@/components/sections/Navbar";
import {Journey} from "@/components/sections/Journey"
import Image from "next/image";
import { ArrowBigDownDash } from "lucide-react";

export default function Home() {
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen min-w-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <div className="relative flex flex-col items-center justify-items-center h-screen w-screen p-8 lg:px-[11rem] xl:px-[15rem] md:px-[3rem] pb-20 gap-16 sm:p-20">
      
      {/* <div className="flex flex-col items-center justify-center w-full h-full"> */}
        <Hero />
        <Journey/>
      {/* </div> */}
      <div>
        <ArrowBigDownDash/>
        <h2>Arrroww</h2>
      </div>
    </div>
  );
}
