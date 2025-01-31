'use client';

import { motion } from 'framer-motion';
import { ProjectCard } from '../ui/ProjectCard';

const projects = [
  {
    title: "Web3 DApp",
    description: "Decentralized application with smart contracts",
    image: "/project1.png",
    tags: ["Solidity", "React", "Ethers.js"],
    link: "#"
  },
  {
    title: "Mobile App",
    description: "Cross-platform mobile application",
    image: "/project2.png",
    tags: ["React Native", "Firebase", "Redux"],
    link: "#"
  },
  // Add more projects...
];

export function Projects() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-10">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500"
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
