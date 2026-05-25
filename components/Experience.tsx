'use client';
import { motion } from 'framer-motion';
import { Briefcase, Zap, Code, Database } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 max-w-7xl mx-auto px-6 w-full text-white z-10 relative scroll-mt-20">
      
      <div className="mb-12 text-center lg:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Work Experience
        </h2>
      </div>

      {/* Основная карточка опыта - в стиле Projects */}
      <div className="bg-black/60 border border-white/10 rounded-[32px] p-8 md:p-12 flex flex-col lg:flex-row gap-8 items-center backdrop-blur-2xl hover:-translate-y-2 hover:border-cyan-500/30 hover:shadow-[0_0_80px_rgba(34,211,238,0.2)] transition-all duration-500 group relative overflow-hidden cursor-default">

        {/* Иннер-глоу (появляется при наведении) */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-transparent to-blue-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />

        {/* Декоративный фон-свечение */}
        <div className="absolute -left-20 -top-20 w-60 h-60 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-cyan-500/20 transition-all duration-500" />

        {/* Левая часть: Описание */}
        <div className="flex-1 space-y-6 relative z-10">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-xl group-hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-shadow">
              <Briefcase size={22} />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">Jan 2024 – Present</span>
          </div>

          <h3 className="text-3xl font-extrabold tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-300">
            Full-stack Web Developer
          </h3>

          <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
            Successfully managed freelance operations, delivering custom web solutions and high-performance Telegram bots to streamline workflows for end-users. Focused on bridging the gap between robust Python-driven backends and intuitive frontend interfaces to turn ideas into scalable digital products.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="flex items-start space-x-3">
              <Code className="text-emerald-400 mt-0.5 shrink-0" size={18} />
              <p className="text-sm text-gray-300">Custom web applications with focus on UI/UX</p>
            </div>
            <div className="flex items-start space-x-3">
              <Database className="text-blue-400 mt-0.5 shrink-0" size={18} />
              <p className="text-sm text-gray-300">Telegram automation & workflow engineering</p>
            </div>
          </div>
        </div>

        {/* Правая часть: Визуальный индикатор (как в Projects) */}
        <div className="w-full lg:w-[45%] h-64 sm:h-80 lg:h-96 rounded-2xl bg-gradient-to-tr from-cyan-900/30 to-blue-900/30 border border-white/5 flex flex-col justify-center items-center p-6 text-center relative overflow-hidden group-hover:border-cyan-500/40 transition-all duration-500 group-hover:shadow-[inset_0_0_40px_rgba(34,211,238,0.1)]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]" />
          <Zap className="text-cyan-400/60 mb-4 animate-pulse group-hover:text-cyan-300" size={48} />
          <h4 className="text-lg font-bold text-gray-100 z-10 drop-shadow-md group-hover:text-white">Freelance Expert</h4>
          <p className="text-xs text-gray-400 max-w-xs mt-1 z-10">Available for new challenges and complex development tasks.</p>
        </div>

      </div>
    </section>
  );
}