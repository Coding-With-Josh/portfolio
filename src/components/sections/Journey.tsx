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
  );
}
