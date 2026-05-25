'use client';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 max-w-7xl mx-auto px-6 w-full text-white">
      <div className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
          Experience
        </h2>
        <p className="text-gray-400 font-mono text-sm">Jan 2024 – Present</p>
      </div>

      <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 md:p-10 hover:border-cyan-500/30 transition-all duration-500">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h3 className="text-xl font-bold text-white">Full-stack Web Developer / Freelance</h3>
          </div>
          <div className="bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 px-4 py-1 rounded-full text-xs font-mono uppercase tracking-widest">
            Freelance
          </div>
        </div>

        <ul className="space-y-4 text-gray-300">
          <li className="flex gap-3">
            <span className="text-cyan-400">•</span>
            <span><strong>Custom Web Solutions:</strong> Designing and deploying responsive web applications for external clients, focusing on intuitive UX and high performance.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-cyan-400">•</span>
            <span><strong>Telegram Bot Development:</strong> Engineering custom Telegram bots for external users to automate workflows and provide interactive services (Tools: Python, Aiogram/Telebot, Webhooks, Data Parsers, Anti-bot protection bypass).</span>
          </li>
          <li className="flex gap-3">
            <span className="text-cyan-400">•</span>
            <span><strong>Mason Project:</strong> Developed a full-stack platform featuring REST API integration and database management. Managed deployment, ensuring reliable performance and scalability.</span>
          </li>
        </ul>
      </div>
    </section>
  );
}