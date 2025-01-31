'use client';

import { motion } from 'framer-motion';

export function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-10">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500"
      >
        Get In Touch
      </motion.h2>

      <motion.form 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="w-full max-w-lg space-y-6"
      >
        <div className="group">
          <input type="text" placeholder="Name" 
            className="w-full bg-[#1a1a1a] rounded-lg p-4 border border-gray-700 focus:border-purple-500 transition-all" 
          />
        </div>
        <div className="group">
          <input type="email" placeholder="Email" 
            className="w-full bg-[#1a1a1a] rounded-lg p-4 border border-gray-700 focus:border-purple-500 transition-all" 
          />
        </div>
        <div className="group">
          <textarea placeholder="Message" rows={4}
            className="w-full bg-[#1a1a1a] rounded-lg p-4 border border-gray-700 focus:border-purple-500 transition-all" 
          />
        </div>
        <button 
          className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold py-4 px-8 rounded-lg hover:opacity-90 transition-all"
        >
          Send Message
        </button>
      </motion.form>
    </div>
  );
}
