"use client";

import React from "react";
import {
  IconBrandGithub,
  IconNewSection,
  IconExchange,
  IconTerminal2,
  IconHome,
} from "@tabler/icons-react";
import { FloatingDock } from "../ui/floating-dock";
import { MessageCircle, NotebookPen, PanelsTopLeft } from "lucide-react";
import { IconBrandX } from "@tabler/icons-react";
import { ModeToggleIcon } from "../ui/mode-toggler";
import { isExternal } from "util/types";

export const Navbar = () => {
  const links = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full" />,
      href: "/",
    },

    {
      title: "Projects",
      icon: (
        <PanelsTopLeft className="h-full w-full text-gray-500 dark:text-gray-400" />
      ),
      href: "/projects",
    },
    {
      title: "Blog",
      icon: (
        <NotebookPen className="h-full w-full text-gray-500 dark:text-gray-400" />
      ),
      href: "/blog",
    },
    {
      title: "Changelog",
      icon: (
        <IconExchange className="h-full w-full text-gray-500 dark:text-gray-400" />
      ),
      href: "/changelog",
    },
    {
      title: "Contact",
      icon: (
        <MessageCircle className="h-full w-full text-gray-500 dark:text-gray-400" />
      ),
      href: "/contact",
    },
    {
      title: "X",
      icon: (
        <IconBrandX className="h-full w-full text-gray-500 dark:text-gray-400" />
      ),
      href: "https://x.com/josh_scriptz",
      isExternal: true,
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-gray-500 dark:text-gray-400" />
      ),
      href: "https://github.com/Coding-With-Josh",
      isExternal: true,
    },
    {
      title: "Theme",
      icon: <ModeToggleIcon />,
      href: "#",
    },
  ];
  return (
    <>
      <div className=" hidden fixed z-[5000] lg:flex md:flex items-center justify-center bottom-[3rem] w-full mx-auto">
        <div className="flex items-center justify-center">
          <FloatingDock items={links} />
        </div>
      </div>
      <div className="lg:hidden md:hidden fixed z-[5000] flex items-center justify-center right-[1.2rem] bottom-[1.2rem]">
        <div className="flex items-center justify-center">
          <FloatingDock items={links} />
        </div>
      </div>
    </>
  );
};
