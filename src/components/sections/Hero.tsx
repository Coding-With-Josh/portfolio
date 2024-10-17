"use client";

import React from "react";
import { Spotlight } from "../ui/spotlight";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export const Hero = () => {
  return (
    <div>
      <Spotlight
        className="-top-200 left-0 md:left-60 md:-top-20"
        fill="#7733ee"
      />
      <div className="flex flex-col items-center w-full gap-[3rem] justify-center mt-[5rem] lg:mt-[5rem] xl:mt:[5rem]">
        <div className="py-1 px-3 bg-primary dark:bg-primary/35 min-w-fit min-h-fit mx-auto border border-primary flex rounded-full item-center justify-center opacity-50 text-gray-200">
          <span>⌘J to open command</span>
        </div>
        <div className="relative flex flex-col items-center w-full gap-[3rem] justify-center lg:flex-row lg:gap-[12rem] xl:gap-[12rem] lg:justify-between">
          {/* <div className="absolute z-0 w-[13rem] h-[13rem] border rounded-full bg-primary blur-[7rem]" /> */}
          <div className="">
            <h2 className="heading mb-3">Hi there👋</h2>
            <h2 className="subheading font-normal mb-[2.5rem]">
              I'm <Link href="https://google.com/joshua+idele" className="font-bold text-primary">Joshua Idele</Link>, a Software, Blockchain Developer currently residing in Nigeria.
              <br /> I major in developement of websites, webapps, mobile and desktop applications and Smart Contracts
            </h2>
            <Button>Get in touch</Button>
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
