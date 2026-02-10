
import React, { useState, useRef, useEffect } from 'react';

interface TerminalInputProps {
  history: string[];
  onCommand: (cmd: string) => void;
}

const TerminalInput: React.FC<TerminalInputProps> = ({ history, onCommand }) => {
  const [input, setInput] = useState('');
  const historyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (historyRef.current) {
      historyRef.current.scrollTop = historyRef.current.scrollHeight;
    }
  }, [history]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onCommand(input);
      setInput('');
    }
  };

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-[60] bg-[#0b1320]/95 border-t-2 border-green-400/50 p-4 font-mono text-sm md:text-base cursor-text"
      onClick={() => inputRef.current?.focus()}
    >
      <div 
        ref={historyRef}
        className="max-w-5xl mx-auto h-24 overflow-y-auto mb-2 space-y-1 text-green-300 scrollbar-hide"
      >
        <div className="text-gray-500 italic opacity-60">Type 'help' to see commands...</div>
        {history.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </div>
      
      <form onSubmit={handleSubmit} className="max-w-5xl mx-auto flex items-center">
        <span className="text-cyan-400 mr-2 shrink-0">guest@sumit:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoFocus
          className="bg-transparent border-none outline-none text-green-400 w-full p-0"
        />
        <div className="w-2 h-5 bg-green-400 animate-blink shrink-0"></div>
      </form>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .animate-blink { animation: blink 1s step-end infinite; }
        @keyframes blink { 
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default TerminalInput;
