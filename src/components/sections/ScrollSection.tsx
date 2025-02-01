import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function ScrollSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.7]);

  return (
    <div ref={targetRef} className="relative h-[400vh] w-full transform-gpu">
      <motion.div 
        style={{ rotateX: rotate, y, scale }}
        className="fixed top-0 left-0 w-full h-screen flex items-center justify-center text-white"
      >
        <motion.div className="text-center space-y-8">
          <h1 className="text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
            Joshua Idele
          </h1>
          <p className="text-2xl text-gray-400">Full Stack Developer</p>
        </motion.div>
      </motion.div>
    </div>
  );
}