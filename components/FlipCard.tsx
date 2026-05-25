'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import SlotMachine from './SlotMachine';

export default function FlipCard({ profile1 }: { profile1: React.ReactNode }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="w-full h-[500px] cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="w-full h-full relative"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Передняя сторона */}
        <div className="absolute inset-0" style={{ backfaceVisibility: "hidden" }}>
          {profile1}
        </div>

        {/* Задняя сторона */}
        <div
          className="absolute inset-0 bg-black/50"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            maskImage: 'url(/profile2.png)', 
            maskSize: 'contain',
            maskRepeat: 'no-repeat',
            maskPosition: 'center', 
          }}
        >
          <SlotMachine />
        </div>
      </motion.div>
    </div>
  );
}