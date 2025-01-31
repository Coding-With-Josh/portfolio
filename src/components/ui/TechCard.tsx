'use client';

import { motion } from 'framer-motion';

interface TechCardProps {
  name: string;
  icon: string;
  category: string;
}

export function TechCard({ name, icon, category }: TechCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-[#1a1a1a] p-6 rounded-xl border border-gray-800 hover:border-purple-500 transition-all"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
      <p className="text-gray-400">{category}</p>
    </motion.div>
  );
}
