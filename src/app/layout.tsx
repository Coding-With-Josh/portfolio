import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import localFont from "next/font/local";
import {Afacad, Poppins} from "next/font/google";
import "./globals.css";
import { CommandDialogDemo } from "@/components/reusable/commandmenu";
import { Navbar } from "@/components/sections/Navbar";

const font = localFont({
  src: "./fonts/AfacadFlux-Regular.ttf",
  variable: "--font-geist-sans",

});

export const metadata: Metadata = {
  title: "Joshua Idele",
  description: "The Journey Begins...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={font.className}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* <CommandDialogDemo/> */}
          {/* <Navbar/> */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
