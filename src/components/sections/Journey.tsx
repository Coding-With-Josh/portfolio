"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";
import { IconChevronUpRight } from "@tabler/icons-react";
import { ArrowUpRight } from "lucide-react";

export function Journey() {
  return (
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
    <ol className="relative border-s border-border">
      <li className="mb-10 ms-9 hover:ms-13">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -start-3 ring-8 ring-primary/20">
          <svg
            className="w-[1.1rem] h-[1.1rem] text-indigo-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="m3 2 1.578 17.824L12 22l7.467-2.175L21 2H3Zm14.049 6.048H9.075l.172 2.016h7.697l-.626 6.565-4.246 1.381-4.281-1.455-.288-2.932h2.024l.16 1.411 2.4.815 2.346-.763.297-3.005H7.416l-.562-6.05h10.412l-.217 2.017Z" />
          </svg>
        </span>
        <h3 className="flex items-center mb-1 text-lg font-semibold text-foreground">
          Learning the backbones{" "}
          <span className="bg-primary text-white text-sm font-medium me-2 min-w-fit px-2.5 py-0.5 rounded ms-3">
            HTML, CSS
          </span>
        </h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
           July 13th, 2021
        </time>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          Life is hard... But not harder that learning how to code.
          Learning HTML and CSS was kind of difficult for me because I was not in the tech space yet.
        </p>
        <Link
          href="#"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-indigo-200 border rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
        >
          See projects <ArrowUpRight size={20} />
        </Link>
      </li>
      <li className="mb-10 ms-9 hover:ms-13">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -start-3 ring-8 ring-primary/20">
          <svg
            className="w-[1.1rem] h-[1.1rem] text-indigo-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
          </svg>
        </span>
        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
          Dealing with JavaScript and its frameworks
        </h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          December 7th, 2022
        </time>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
          And I thought HTML was hard... 😐 
          JavaScript, having much syntax and concepts became an issue for me... 
          but as the enthusiastic 14-year old developer I am (was... 🙄), I eventually got a hang of it
        </p>
      </li>
      <li className="ms-9 hover:ms-13">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -start-3 ring-8 ring-primary/20">
          <svg
            className="w-[1.1rem] h-[1.1rem] text-indigo-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
          </svg>
        </span>
        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
          Becoming a Full-Stack
        </h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          May 2nd, 2023
        </time>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
          There... Python was, waiting or me. Python can actuall be consdered as the simplest programming language ever made.
          Learning how to utilize Python (Django) for backend developemnt didn't take time 
          since I already mastered how to use APIs... Quite the childhood I had
        </p>
      </li>
    </ol>
  );
}
