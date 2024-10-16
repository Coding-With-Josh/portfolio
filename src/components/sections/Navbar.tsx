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
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-gray-500 dark:text-gray-400" />
      ),
      href: "https://github.com/Coding-With-Josh",
    },
    {
      title: "Theme",
      icon: <ModeToggleIcon />,
      href: "#",
    },
  ];
  return (
    <div className="absolute z-[5000] backdrop-blur-md flex items-center justify-center bottom-[3rem] w-full mx-auto">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
};
