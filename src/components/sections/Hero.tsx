'use client';

import { motion } from 'framer-motion';
import { TypewriterEffect } from '../ui/TypewriterEffect';
import { Github, Twitter, XIcon } from 'lucide-react';
import { DiscordLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';

export function Hero() {
  return (
    <div className="flex flex-col items-center justify-center relative top-[0.9rem] h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
         <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Joshua Idele <br /> <TypewriterEffect 
          words={[ "Web Developer.", "Mobile Developer.", "Blockchain Developer.", "Web3 Creator."]} 
          className="text-3xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
        />
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Web Developer. Mobile Developer. Blockchain Developer. Web3 Creator.
        </p>
      </motion.div> 

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 0.5 }}
        className="mt-9 flex items-center gap-4 opacity-100"
      >
        <div className='hover:scale-110 cursor-pointer transition-all duration-300 h-fit w-fit pr-1 rounded-full relative bg-muted border border-black/20 flex items-center gap-2'>
          <div className='size-fit p-1 bg-purple-500 rounded-full'>
            <Github size={20} color='white' />
          </div>
          <p className='text-white'>GitHub</p>
        </div>
        <div className='hover:scale-110 cursor-pointer transition-all duration-300 h-fit w-fit pr-1 rounded-full relative bg-muted border border-black/20 flex items-center gap-2'>
          <div className="size-fit p-1 bg-green-500 rounded-full">
            <Twitter size={20} color='white' />
          </div>
          <p className='text-white'>X</p>
        </div>
        <div className='hover:scale-110 cursor-pointer transition-all duration-300 h-fit w-fit pr-1 rounded-full relative bg-muted border border-black/20 flex items-center gap-2'>
          <div className='size-fit p-1 bg-orange-500 rounded-full'>     
            <DiscordLogoIcon  color='white' />
          </div>
          <p className='text-white'>Discord</p>
        </div>
          
        {/* <div className="animate-bounce text-gray-400">
          Scroll Down ↓
        </div> */}
        
      </motion.div>
    </div>
  );
}
