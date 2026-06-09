'use client';

import { useState, useEffect } from 'react';
import InteractiveText from '@/components/InteractiveText';
import SkillsBento from '@/components/SkillsBento';
import Projects from '@/components/Projects';
import Background from '@/components/Background';
import Experience from '@/components/Experience';
import ScrollToTop from '@/components/ScrollToTop';
import Education from '@/components/Education';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Mail, Phone, Cpu, Layers, Briefcase } from 'lucide-react';
import FlipCard from '@/components/FlipCard';

export default function Home() {
  const [showBubble, setShowBubble] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBubble(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen text-white flex flex-col relative overflow-hidden selection:bg-cyan-500/30">
      <Background />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none -z-10 mix-blend-screen" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none -z-10 mix-blend-screen" />

      {/* HERO SECTION */}
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 items-center min-h-screen pt-28 pb-12 lg:py-0 gap-12 relative z-10">

        {/* Левая колонка */}
        <div className="flex flex-col space-y-8 text-center lg:text-left justify-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full w-fit mx-auto lg:mx-0 mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-bold tracking-wider text-white uppercase">Available</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-4 leading-tight uppercase">
              Hey, I'm <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-5xl sm:text-7xl">
                Vladislav (sm1le)
              </span>
            </h1>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="bg-white/[0.01] border border-white/5 p-2 rounded-2xl backdrop-blur-md shadow-2xl">
            <InteractiveText text="Backend engineer focused on building scalable, data-driven systems with Python and robust relational database design. Prioritizing performance, reliability, and security, with working knowledge of frontend development." />
          </motion.div>

          {/* Кнопка */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="flex justify-center lg:justify-start -mt-5">
            <a href="#skills" className="group relative px-10 py-4 bg-white/10 border border-white/20 rounded-full overflow-hidden backdrop-blur-md transition-all duration-300 hover:border-cyan-400 hover:bg-white/20 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10 font-bold tracking-widest uppercase text-white flex items-center gap-2 text-sm drop-shadow-md">
                My Skills
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </a>
          </motion.div>
        </div>

        {/* Правая колонка с навигацией и фото */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative w-full flex flex-col justify-center items-center lg:items-end gap-8"
        >
          {/* Навигация */}
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            style={{ willChange: 'backdrop-filter' }}
            className="mb-8 flex gap-1 bg-white/[0.03] border border-white/10 p-1.5 rounded-2xl backdrop-blur-xl shadow-2xl w-fit"
          >
            {[
              { name: 'Skills', href: '#skills', icon: <Cpu size={14} /> },
              { name: 'Exp', href: '#experience', icon: <Briefcase size={14} /> },
              { name: 'Project', href: '#projects', icon: <Layers size={14} /> },
              { name: 'Contacts', href: '#contacts', icon: <Mail size={14} /> }
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                <span className="opacity-70 group-hover:opacity-100 transition-opacity">
                  {item.icon}
                </span>
                {item.name}
              </a>
            ))}
          </motion.nav>

          {/* Единый контейнер для Карточки и Строки */}
          <motion.div
            animate={{ y: [-12, 12, -12], rotateZ: [-0.5, 0.5, -0.5] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full max-w-[500px] flex flex-col"
          >
            <AnimatePresence>
              {showBubble && (
                <motion.div initial={{ opacity: 0, x: 20, scale: 0.8 }} animate={{ opacity: 1, x: 0, scale: 1 }} exit={{ opacity: 0 }} className="absolute -top-12 -left-12 z-30 w-48 pointer-events-none">
                  <img src="/click-bubble.png" alt="Click me" className="w-full h-auto" />
                </motion.div>
              )}
            </AnimatePresence>

            <div onClick={() => setShowBubble(false)} className="cursor-pointer">
              <FlipCard profile1={<img src="/profile.png" alt="Vladislav" className="w-full h-full object-contain" />} />
            </div>

            <div className="w-full mt-3 overflow-hidden bg-orange-500/10 border border-orange-500/30 rounded-full py-2 backdrop-blur-md shadow-[0_0_15px_rgba(249,115,22,0.1)]">
              <motion.div
                className="whitespace-nowrap flex text-orange-500 font-bold text-sm tracking-widest uppercase"
                animate={{ x: ["100%", "-100%"] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <span>• Available for new projects! • Available for new projects! • Available for new projects!</span>
              </motion.div>
            </div>
          </motion.div>

        </motion.div>
      </div>
      <Education />
      <SkillsBento />
      <Experience />
      <Projects />

      {/* Контакты */}
      <section id="contacts" className="max-w-7xl mx-auto px-6 w-full py-24 z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 uppercase">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Creating </span>
            <span className="text-white"> tools that solve real problems. </span>
          </h2>
          <p className="text-white/90 font-medium drop-shadow-md">Get in touch with me right</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
          {[
            { label: 'Location', val: 'Chomutov, Czechia', icon: <MapPin size={24} />, link: '#' },
            { label: 'Email', val: 'alabushev.vladislav@gmail.com', icon: <Mail size={24} />, link: 'mailto:alabushev.vladislav@gmail.com' },
            { label: 'Phone', val: '+420 723 542 205', icon: <Phone size={24} />, link: 'tel:+420720542205' },
            {
              label: 'GitHub',
              val: 'sm1le-devops',
              icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>,
              link: 'https://github.com/sm1le-devops'
            }
          ].map((item) => (
            <motion.a whileHover={{ y: -5, scale: 1.02 }} key={item.label} href={item.link} target="_blank" rel="noopener noreferrer" className="group relative p-8 bg-white/[0.06] border border-white/20 rounded-3xl backdrop-blur-2xl transition-all hover:bg-white/[0.1] hover:border-cyan-400/50">
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center mb-6 text-cyan-300">{item.icon}</div>
                <div className="text-gray-500 uppercase text-[10px] tracking-[0.2em] font-bold mb-2">{item.label}</div>
                <div className="text-gray-200 font-medium text-base">{item.val}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/5 bg-black/60 backdrop-blur-md py-8 z-10 relative">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-500 text-sm font-medium">© 2026 sm1le.devops - Investing in the future</div>
          <div className="text-gray-600 text-sm">High speed, clean code ⚡</div>
        </div>
      </footer>
      <ScrollToTop />
    </main>
  );
}