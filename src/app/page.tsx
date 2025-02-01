"use client";

import React from "react";
import { Spotlight } from "@/components/ui/spotlight-new";
import { BentoGridThirdDemo } from "@/components/sections/grid";
import { Hero } from "@/components/sections/Hero";

function Page() {
  return (
    <div className="min-h-screen w-full flex flex-col gap-4 md:gap-10 py-4 md:py-10 px-4 md:px-6 bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-x-hidden">
      <Spotlight />
      <div className="container mx-auto">
        <Hero />
      </div>
      <div className="container mx-auto">
        <BentoGridThirdDemo />
      </div>
    </div>
  );
}

export default Page;