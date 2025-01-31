'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Hero } from '@/components/sections/Hero';
import { Projects } from '@/components/sections/Projects';
import { TechStack } from '@/components/sections/TechStack';
import { Contact } from '@/components/sections/Contact';
import { Navbar } from '@/components/sections/Navbar';

export default function Home() {
  return (
    <main className="relative bg-[#0a0a0a] w-full">
      {/* <div className="fixed w-full z-50">
        <Navbar />
      </div> */}
      
      <div className="relative w-full">
        <section className="min-h-screen w-full">
          <Hero />
        </section>

        <motion.section 
          className="min-h-screen w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <TechStack />
        </motion.section>

        <motion.section 
          className="min-h-screen w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Projects />
        </motion.section>

        <motion.section 
          className="min-h-screen w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Contact />
        </motion.section>
      </div>

      {/* Gradient Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] -z-10" />
      
      {/* Animated Grid Background */}
      <div className="fixed inset-0 opacity-20 -z-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#232323_1px,transparent_1px),linear-gradient(to_bottom,#232323_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>
    </main>
  );
}
