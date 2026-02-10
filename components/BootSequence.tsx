
import React, { useState, useEffect } from 'react';

interface BootSequenceProps {
  onComplete: () => void;
}

const BOOT_LINES = [
  "SYSTEM BOOTING...",
  "BIOS VERSION 8.12.95",
  "LOADING KERNEL MODULES...",
  "CPU: CORE-I9-INTEL-SUMIT",
  "RAM: 64GB DDR4 DETECTED",
  "NETWORK: ONLINE",
  "CONNECTING TO GITHUB: Sakura-winter...",
  "USER: SUMIT KUMAR MEHTA",
  "ROLE: BACKEND ENGINEER | CLOUD | DEVOPS",
  "STATUS: READY",
  "EXECUTING PORTFOLIO.EXE...",
];

const BootSequence: React.FC<BootSequenceProps> = ({ onComplete }) => {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < BOOT_LINES.length) {
      const timer = setTimeout(() => {
        setVisibleLines(prev => [...prev, BOOT_LINES[currentIndex]]);
        setCurrentIndex(prev => prev + 1);
      }, Math.random() * 300 + 100);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(onComplete, 1000);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, onComplete]);

  return (
    <div className="fixed inset-0 bg-[#0b1320] z-[999] p-8 md:p-16 flex flex-col font-mono">
      <div className="max-w-4xl">
        {visibleLines.map((line, i) => (
          <div key={i} className="mb-2 text-green-400 text-lg md:text-xl flex items-center">
            <span className="mr-4 text-green-800">[{i.toString().padStart(2, '0')}]</span>
            {line}
          </div>
        ))}
        {currentIndex < BOOT_LINES.length && (
          <div className="w-4 h-6 bg-green-400 animate-pulse ml-12"></div>
        )}
      </div>
      <div className="absolute bottom-8 right-8 pixel-font text-xs text-green-800 opacity-50">
        © 2024 SUMIT_OS v1.0.4
      </div>
    </div>
  );
};

export default BootSequence;
