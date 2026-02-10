
import React from 'react';
import { SectionType } from '../types';

interface NavigationProps {
  activeSection: SectionType;
  onNavClick: (id: SectionType) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, onNavClick }) => {
  const navItems: { label: string; id: SectionType }[] = [
    { label: 'ABOUT', id: 'about' },
    { label: 'SKILLS', id: 'skills' },
    { label: 'PROJECTS', id: 'projects' },
    { label: 'EXP', id: 'experience' },
    { label: 'RESUME', id: 'resume' },
    { label: 'CONTACT', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4 md:p-6 bg-[#0b1320]/90 backdrop-blur-md border-b-2 border-green-400/30">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center text-[#0b1320] font-bold pixel-font text-lg shadow-[0_0_15px_rgba(74,222,128,0.5)] cursor-pointer" onClick={() => onNavClick('home')}>
            S
          </div>
          <div className="pixel-font text-xs text-cyan-400 hidden sm:block">
            LVL 24 BACKEND MAGE
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 md:gap-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavClick(item.id)}
              className={`pixel-font text-xs md:text-sm px-3 py-2 transition-all duration-200 border-2 ${
                activeSection === item.id 
                  ? 'text-green-400 bg-green-400/10 border-green-400 shadow-[0_0_10px_rgba(74,222,128,0.3)]' 
                  : 'text-gray-400 border-transparent hover:text-green-300 hover:border-green-400/20'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <div className="h-5 w-32 bg-gray-800 rounded-full overflow-hidden border-2 border-gray-700">
            <div className="h-full bg-green-500 w-[85%] animate-pulse"></div>
          </div>
          <span className="pixel-font text-[10px] text-green-500">HP: 85/100</span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
