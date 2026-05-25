'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

const SYMBOLS = ['🍇', '🍒', '🍋', '🔔', '💎'];

export default function SlotMachine() {
    const [reels, setReels] = useState(['🍒', '🍋', '🔔']);
    const [spinningStates, setSpinningStates] = useState([false, false, false]);
    const [isSpinning, setIsSpinning] = useState(false);

    const spin = async (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsSpinning(true);
        setSpinningStates([true, true, true]);

        const finalResults = [
            SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
            SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
            SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)]
        ];

        for (let i = 0; i < 3; i++) {
            await new Promise(resolve => setTimeout(resolve, 600));
            setReels(prev => {
                const next = [...prev];
                next[i] = finalResults[i];
                return next;
            });
            setSpinningStates(prev => {
                const next = [...prev];
                next[i] = false;
                return next;
            });
        }
        setIsSpinning(false);
    };

    const spinReel = [...SYMBOLS, ...SYMBOLS, ...SYMBOLS];

    return (
        // Добавляем relative для контейнера, чтобы внутри можно было позиционировать абсолютно
        <div className="relative w-full h-full">

            {/* Контейнер игры: абсолютное позиционирование, прижат к низу */}
            <div className="absolute bottom-7 left-0 w-full flex flex-col items-center">

                {/* Надпись */}
                <div className="mb-4">
                    <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-100 to-yellow-500 font-black text-[10px] tracking-[0.4em] uppercase drop-shadow-[0_0_8px_rgba(255,215,0,0.6)]">
                        Mini Game
                    </h2>
                </div>

                {/* Слоты */}
                <div className="flex gap-2 mb-3">
                    {reels.map((finalSymbol, i) => (
                        <div key={i} className="w-16 h-16 bg-gradient-to-br from-gray-800 to-black rounded-lg flex items-center justify-center text-4xl border border-yellow-500/30 shadow-[0_0_10px_rgba(0,0,0,0.5)] overflow-hidden relative">
                            {spinningStates[i] ? (
                                <motion.div
                                    animate={{ y: [0, -192] }}
                                    transition={{ repeat: Infinity, duration: 0.2, ease: "linear" }}
                                    className="flex flex-col"
                                >
                                    {spinReel.map((s, idx) => (
                                        <div key={idx} className="h-16 flex items-center justify-center">{s}</div>
                                    ))}
                                </motion.div>
                            ) : (
                                <div className="text-4xl">{finalSymbol}</div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Кнопка */}
                <button
                    onClick={spin}
                    disabled={isSpinning}
                    className="w-14 h-14 mt-1 rounded-full bg-gradient-to-br from-red-400 via-red-600 to-red-900 border-4 border-red-950 shadow-[0_0_15px_3px_rgba(255,0,0,0.6),inset_0_-3px_3px_rgba(0,0,0,0.3)] flex items-center justify-center transition-all active:scale-90 hover:scale-105 cursor-pointer"
                >
                </button>
            </div>
        </div>
    );
}