import { Hero } from "@/components/sections/Hero";
import { Navbar } from "@/components/sections/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen min-w-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <Hero />
      </div>
    </div>
  );
}
