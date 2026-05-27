export default function Education() {
  return (
    <section className="max-w-7xl mx-auto px-6 w-full py-12 z-10 relative">
      <div className="group relative bg-black/60 border border-white/10 rounded-[32px] p-8 md:p-10 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-indigo-500/30 hover:shadow-[0_0_80px_rgba(99,102,241,0.2)]">
        
        {/* Градиентная подсветка при наведении */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[32px]" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
          <div className="flex items-center gap-6">
            <div className="p-4 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl text-indigo-400 group-hover:bg-indigo-500/20 transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white uppercase tracking-tight">Education</h2>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">Kyiv Aviation Institute — Software Development</p>
            </div>
          </div>
          <div className="px-6 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-bold tracking-widest text-white/70 group-hover:border-indigo-500/30 group-hover:text-white transition-all">
            4 YEARS
          </div>
        </div>
      </div>
    </section>
  );
}