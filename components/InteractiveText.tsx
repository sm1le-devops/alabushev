'use client';

import { motion } from 'framer-motion';

export default function InteractiveText({ text }: { text: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative p-6 cursor-default group"
    >
      {/* Эффект свечения при наведении */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-xl rounded-2xl" />
      
      <p className="text-gray-300 text-lg leading-relaxed relative z-10">
        {text}
      </p>
    </motion.div>
  );
}