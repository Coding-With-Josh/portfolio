"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";
import { IconChevronUpRight } from "@tabler/icons-react";
import { ArrowUpRight } from "lucide-react";
import { TimeLine2 } from "../ui/timeline2";

export function Journey() {
  return (
    <div className="px-[1.8rem] w-full flex flex-col items-start justify-center mt-[2.8rem]">
        <h2 className="head mb-[2rem]">My <span className="text-primary">Journey</span></h2>
      <TimeLine2 />
    </div>

    //     <CardContainer className="inter-var">
    //       <CardBody className="bg-card relative group/card  dark:hover:shadow-2xl hover:shadow-emerald-500/[0.1] border w-auto sm:w-[30rem] h-auto rounded-xl p-6">
    //         <CardItem
    //           translateZ="50"
    //           className="text-xl font-bold text-neutral-600 dark:text-white"
    //         >
    //           Make things float in air
    //         </CardItem>
    //         <CardItem
    //           as="p"
    //           translateZ="60"
    //           className="text-muted-foreground text-sm max-w-sm mt-2"
    //         >
    //           Hover over this card to unleash the power of CSS perspective
    //         </CardItem>
    //         <CardItem translateZ="100" className="w-full mt-4">
    //           <Image
    //             src={require("@/assets/images/app ui/ui3.png")}
    //             height="1000"
    //             width="1000"
    //             className="dark:block hidden h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
    //             alt="thumbnail"
    //           />
    //           <Image
    //             src={require("@/assets/images/app ui/ui3-light.png")}
    //             height="1000"
    //             width="1000"
    //             className="block dark:hidden h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
    //             alt="thumbnail"
    //           />
    //         </CardItem>
    //         <div className="flex justify-between items-center mt-20">
    //           <CardItem
    //             translateZ={20}
    //             as={Link}
    //             href="https://twist-engage.vercel.app"
    //             target="__blank"
    //             className="px-4 py-2 rounded-xl text-xs font-normal text-primary-foreground"
    //           >
    //             Try now →
    //           </CardItem>
    //           <CardItem
    //             translateZ={20}
    //             as="button"
    //             className="px-4 py-2 rounded-xl bg-primary text-foreground text-xs font-bold"
    //           >
    //             <IconChevronUpRight/>
    //           </CardItem>
    //         </div>
    //       </CardBody>
    //     </CardContainer>
  );
}
