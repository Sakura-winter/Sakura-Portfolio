
import React from 'react';
import { SKILL_CATEGORIES } from '../../constants';

const Skills: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="flex items-center gap-4 mb-8">
        <span className="pixel-font text-xl text-yellow-400 glow"># INVENTORY</span>
        <div className="flex-1 h-[2px] bg-yellow-400/30"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {SKILL_CATEGORIES.map((cat, idx) => (
          <div key={idx} className="retro-border border-yellow-400/30 p-6 bg-gray-900/60">
            <h3 className="pixel-font text-xs text-yellow-400 mb-8 text-center border-b border-yellow-400/20 pb-4">
              {cat.title}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {cat.skills.map((skill, sIdx) => (
                <div 
                  key={sIdx} 
                  className="relative group p-4 bg-gray-800/80 border-2 border-gray-700 hover:border-yellow-400 hover:shadow-[0_0_15px_rgba(250,204,21,0.4)] transition-all cursor-help flex flex-col items-center"
                >
                  <span className="text-3xl mb-3">{skill.icon}</span>
                  <span className="pixel-font text-[10px] text-gray-300 text-center leading-tight">{skill.name}</span>
                  
                  {/* Tooltip on hover */}
                  <div className="absolute -top-14 left-1/2 -translate-x-1/2 bg-gray-900 border-2 border-yellow-400 p-3 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none whitespace-nowrap shadow-xl">
                    <div className="flex flex-col items-center">
                      <span className="pixel-font text-[10px] mb-2 text-yellow-400">LEVEL: {skill.level}%</span>
                      <div className="w-24 h-2 bg-gray-800 border border-gray-700"><div className="h-full bg-yellow-400" style={{ width: `${skill.level}%` }}></div></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
