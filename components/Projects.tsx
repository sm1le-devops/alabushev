'use client';

import { Terminal, ExternalLink, ShieldCheck, Cpu, Layers } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-20 max-w-7xl mx-auto px-6 w-full text-white z-10 relative scroll-mt-20">

      <div className="mb-12 text-center lg:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Completed Projects
        </h2>
      </div>

      {/* Main Project Card */}
      <div className="bg-black/60 border border-white/10 rounded-[32px] p-8 md:p-12 flex flex-col lg:flex-row gap-8 items-center backdrop-blur-2xl hover:-translate-y-2 hover:border-purple-500/30 hover:shadow-[0_0_80px_rgba(168,85,247,0.3)] transition-all duration-500 group relative overflow-hidden cursor-default">

        {/* Inner glow (appears on hover) */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-transparent to-blue-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />

        {/* Decorative background glow */}
        <div className="absolute -left-20 -top-20 w-60 h-60 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-blue-500/20 transition-all duration-500" />

        {/* Left side: Description and details */}
        <div className="flex-1 space-y-6 relative z-10">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 bg-purple-500/10 border border-purple-500/20 text-purple-400 rounded-xl group-hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-shadow">
              <Terminal size={22} />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-purple-400">Fullstack Development</span>
          </div>

          <h3 className="text-3xl font-extrabold tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300">
            Mason Project
          </h3>

          <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
            A full-featured web application designed to demonstrate the integration of server-side logic and a dynamic interface. Focus was placed on rapid prototyping and clean UI implementation, resulting in a highly responsive and maintainable codebase.
          </p>

          {/* Project Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="flex items-start space-x-3">
              <ShieldCheck className="text-emerald-400 mt-0.5 shrink-0" size={18} />
              <p className="text-sm text-gray-300">Robust MySQL database for secure data storage</p>
            </div>
            <div className="flex items-start space-x-3">
              <Cpu className="text-blue-400 mt-0.5 shrink-0" size={18} />
              <p className="text-sm text-gray-300">Python backend with high-performance API request handling</p>
            </div>
          </div>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 pt-4">
            {['Python', 'FastAPI', 'MySQL', 'JavaScript', 'Tailwind CSS', 'AI Tooling', 'Git'].map((tech) => (
              <span key={tech} className="text-xs bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl font-medium text-gray-300 group-hover:border-purple-500/40 transition-colors">
                {tech}
              </span>
            ))}
          </div>

          {/* Action Button */}
          <div className="pt-4 relative z-10">
            <a
              href="https://mason-qm1s.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white text-black font-semibold px-6 py-3.5 rounded-xl hover:bg-gray-200 transition active:scale-95 shadow-lg shadow-white/5 hover:shadow-cyan-500/20"
            >
              <span>Live Preview</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>

        {/* Right side: Interactive visual block */}
        <div className="w-full lg:w-[45%] h-64 sm:h-80 lg:h-96 rounded-2xl bg-gradient-to-tr from-purple-900/30 to-blue-900/30 border border-white/5 flex flex-col justify-center items-center p-6 text-center relative overflow-hidden group-hover:border-purple-500/40 transition-all duration-500 group-hover:shadow-[inset_0_0_40px_rgba(168,85,247,0.2)]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]" />
          <Layers className="text-blue-400/60 mb-4 animate-pulse group-hover:text-blue-300" size={48} />
          <h4 className="text-lg font-bold text-gray-100 z-10 drop-shadow-md group-hover:text-white">mason-qm1s.onrender.com</h4>
          <p className="text-xs text-gray-400 max-w-xs mt-1 z-10">Project successfully deployed to the cloud and available for real-time testing.</p>
        </div>

      </div>
    </section>
  );
}