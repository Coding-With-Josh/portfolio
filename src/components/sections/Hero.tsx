"use client";

import React from "react";
import { Spotlight } from "../ui/spotlight";
import Image from "next/image";

export const Hero = () => {
  return (
    <div>
      <Spotlight
        className="-top-200 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="flex flex-col items-center w-full gap-[3rem] justify-center mt-[20rem]">
        <div className="py-1 px-3 bg-primary/55 dark:bg-primary/20 min-w-fit min-h-fit mx-auto border border-primary flex rounded-full item-center justify-center opacity-50 text-gray-200">
          <span>⌘J to open command</span>
        </div>
        <div className="relative flex items-center w-full gap-[12rem] justify-between">
          <div className="absolute z-0 w-[13rem] h-[13rem] border rounded-full bg-primary blur-[7rem]" />
          <div className="">
            <h2 className="heading">Hi there👋</h2>
            <h2 className="subheading font-normal">
              I'm a Software Developer currently residing in Nigeria.
              <br /> Believe me when I say I'm fit for the job😎
            </h2>
          </div>
          <div className="relative w-[13rem] h-[13rem] border rounded-full bg-primary/70">
            {/* <div className="absolute z-0 w-[13rem] h-[13rem] border rounded-full bg-primary blur-[7rem]"/> */}
            <Image
              src={require("@/assets/images/2.png")}
              width={400}
              height={400}
              className="h-[18rem] w-[18rem] rounded-full"
              alt="Picture"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
