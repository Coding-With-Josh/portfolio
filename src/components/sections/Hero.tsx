'use client';

import { motion } from 'framer-motion';
import { TypewriterEffect } from '../ui/TypewriterEffect';

export function Hero() {
  return (
    <div className="flex flex-col items-center justify-center h-screen relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500 mb-6">
          Full Stack Developer
        </h1>
        <TypewriterEffect 
          words={["Web3 Development", "Mobile Apps", "Cloud Solutions", "Blockchain"]} 
          className="text-2xl md:text-3xl text-gray-300"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-10"
      >
        <div className="animate-bounce text-gray-400">
          Scroll Down ↓
        </div>
      </motion.div>
    </div>
  );
}
