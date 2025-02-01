'use client';

import { motion } from 'framer-motion';
import { TechCard } from '../ui/TechCard';

const technologies = [
  { 
    name: 'Smart Contracts', 
    icon: '⚡', 
    category: 'Web3',
    skills: ['Solidity', 'Hardhat', 'ERC Standards'],
    experience: '3 years'
  },
  { 
    name: 'Frontend', 
    icon: '🎨', 
    category: 'Development',
    skills: ['React', 'Next.js', 'Three.js'],
    experience: '4 years'
  },
  { 
    name: 'Blockchain', 
    icon: '🔗', 
    category: 'Web3',
    skills: ['Ethereum', 'Layer 2', 'DeFi'],
    experience: '2 years'
  },
  // Add more comprehensive tech entries...
];

export function TechStack() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl">
        {technologies.map((tech, index) => (
          <TechCard 
            key={index} 
            {...tech} 
            custom={index}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: (i: any) => ({
                opacity: 1,
                y: 0,
                transition: { delay: i * 0.1 }
              })
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}
