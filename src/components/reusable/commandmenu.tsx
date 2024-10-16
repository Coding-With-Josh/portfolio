"use client"

import * as React from "react"
import {
  CalendarIcon,
  EnvelopeClosedIcon,
  FaceIcon,
  GearIcon,
  PersonIcon,
  RocketIcon,
} from "@radix-ui/react-icons"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import Link from "next/link"
import { Mail, NotebookPen, PhoneCall } from "lucide-react"
import { IconBrandGithub, IconBrandX } from "@tabler/icons-react"

export function CommandDialogDemo() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <>
      {/* <p className="text-sm text-muted-foreground">
        Press{" "}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>J
        </kbd>
      </p> */}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <PhoneCall className="mr-2 h-4 w-4" />
              <span>(+234) 810 7198 205</span>
            </CommandItem>
            <CommandItem>
              <NotebookPen className="mr-2 h-4 w-4" />
              <span>Blog</span>
            </CommandItem>
            <CommandItem>
              <RocketIcon className="mr-2 h-4 w-4" />
              <span>Hire Me</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Socials">
            <CommandItem>
              <IconBrandX className="mr-2 h-4 w-4" />
              <Link href="https://x.com/josh_scriptz">X</Link>
              <CommandShortcut>⌘X</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <IconBrandGithub className="mr-2 h-4 w-4" />
              <Link href="https://github.com/Coding-With-Josh">Github</Link>
              <CommandShortcut>⌘G</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Mail className="mr-2 h-4 w-4" />
              <Link href="codewithjoshh@gmail.com">Mail</Link>
              <CommandShortcut>⌘M</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
