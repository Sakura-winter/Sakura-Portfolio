
import React from 'react';
import { ACHIEVEMENTS } from '../../constants';

const Experience: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="flex items-center gap-4 mb-8">
        <span className="pixel-font text-xl text-green-400 glow"># ACHIEVEMENTS</span>
        <div className="flex-1 h-[2px] bg-green-400/30"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {ACHIEVEMENTS.map((ach, idx) => (
          <div 
            key={idx} 
            className="flex items-center gap-6 p-6 retro-border border-gray-700 bg-gray-900/50 hover:border-green-400 group transition-all"
          >
            <div className="shrink-0 w-20 h-20 flex items-center justify-center bg-gray-800 border-2 border-gray-700 group-hover:border-green-400 group-hover:shadow-[0_0_15px_rgba(74,222,128,0.2)] transition-all">
              <span className="text-4xl grayscale group-hover:grayscale-0 transition-all scale-100 group-hover:scale-110">🏆</span>
            </div>
            <div className="flex-1">
              <div className="pixel-font text-[10px] text-green-500 mb-2 font-bold">UNLOCKED: {ach.date}</div>
              <h4 className="font-mono text-lg font-bold text-white mb-1 leading-tight">{ach.title}</h4>
              <p className="font-mono text-sm text-gray-500 uppercase tracking-widest">{ach.issuer}</p>
            </div>
            <div className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="pixel-font text-[10px] text-green-400 animate-pulse font-bold">NEW!</span>
            </div>
          </div>
        ))}
      </div>

      {/* Experience Log */}
      <div className="mt-16 p-8 bg-gray-900/80 border-l-4 border-green-400 font-mono text-base space-y-8 shadow-xl">
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <span className="text-green-500 font-bold min-w-[150px] tracking-tighter">[JUN 2025 - AUG 2025]</span>
          <div>
            <h4 className="text-white font-bold text-lg uppercase">AlgoTutor - Technical Training</h4>
            <p className="text-gray-400 mt-3 leading-relaxed">
              Intensive 6-week training on C++ fundamentals, OOPs (Encapsulation, Polymorphism), and DSA.
              Solved 50+ coding problems optimizing Time and Space complexity.
            </p>
          </div>
        </div>
        <div className="h-px bg-gray-800 w-full"></div>
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <span className="text-green-500 font-bold min-w-[150px] tracking-tighter">[2023]</span>
          <div>
            <h4 className="text-white font-bold text-lg uppercase">SkyEsports - Operations Support</h4>
            <p className="text-gray-400 mt-3 leading-relaxed">
              Operations Support Team for MOGO National Inter-College Valorant Championship.
              Assisted with event operations, match coordination, backend support, and communication handling.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
