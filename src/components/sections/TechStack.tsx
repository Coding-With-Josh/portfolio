'use client';

import { motion } from 'framer-motion';
import { TechCard } from '../ui/TechCard';

const technologies = [
  { name: 'React', icon: '⚛️', category: 'Frontend' },
  { name: 'Node.js', icon: '🟢', category: 'Backend' },
  { name: 'Solidity', icon: '📱', category: 'Web3' },
  { name: 'React Native', icon: '📱', category: 'Mobile' },
  { name: 'TypeScript', icon: '📘', category: 'Language' },
  { name: 'AWS', icon: '☁️', category: 'Cloud' },
];

export function TechStack() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-10">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500"
      >
        Tech Stack
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {technologies.map((tech, index) => (
          <TechCard key={index} {...tech} />
        ))}
      </div>
    </div>
  );
}
