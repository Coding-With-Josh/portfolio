'use client';

import { motion } from 'framer-motion';

interface TechCardProps {
  name: string;
  icon: string;
  category: string;
  skills: string[];
  experience: string;
  custom: number;
  variants: any;
}

export function TechCard({ name, icon, category, skills, experience, custom, variants }: TechCardProps) {
  return (
    <motion.div
      custom={custom}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="bg-[#1a1a1a]/50 backdrop-blur-sm p-4 rounded-xl border border-gray-800 hover:border-purple-500 transition-all"
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="text-2xl">{icon}</span>
        <div>
          <h3 className="text-lg font-bold text-white">{name}</h3>
          <p className="text-purple-400 text-sm">{category}</p>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, i) => (
            <span key={i} className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full">
              {skill}
            </span>
          ))}
        </div>
        <p className="text-gray-400 text-sm">{experience}</p>
      </div>
    </motion.div>
  );
}
