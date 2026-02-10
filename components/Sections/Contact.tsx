
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:sumitkum1819@gmail.com?subject=Portfolio Inquiry from ${form.name}&body=${encodeURIComponent(form.message)}%0D%0A%0D%0AFrom: ${form.name} (${form.email})`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="space-y-12">
      <div className="flex items-center gap-4 mb-8">
        <span className="pixel-font text-xl text-red-400 glow"># FINAL_CHECKPOINT</span>
        <div className="flex-1 h-[2px] bg-red-400/30"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="retro-border border-red-500/30 bg-red-500/5 p-8">
            <h3 className="pixel-font text-sm text-red-500 mb-8 uppercase text-center border-b border-red-500/20 pb-4">Save your progress</h3>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-3">
                <label className="block font-mono text-sm text-gray-400 font-bold uppercase tracking-widest">Player Name</label>
                <input 
                  type="text" 
                  value={form.name}
                  onChange={e => setForm({...form, name: e.target.value})}
                  required
                  placeholder="Enter your name..."
                  className="w-full bg-[#0b1320] border-2 border-gray-700 focus:border-red-500 p-4 outline-none font-mono text-lg text-green-400 placeholder:text-gray-800 transition-colors"
                />
              </div>
              <div className="space-y-3">
                <label className="block font-mono text-sm text-gray-400 font-bold uppercase tracking-widest">Return Address</label>
                <input 
                  type="email" 
                  value={form.email}
                  onChange={e => setForm({...form, email: e.target.value})}
                  required
                  placeholder="Enter your email..."
                  className="w-full bg-[#0b1320] border-2 border-gray-700 focus:border-red-500 p-4 outline-none font-mono text-lg text-green-400 placeholder:text-gray-800 transition-colors"
                />
              </div>
              <div className="space-y-3">
                <label className="block font-mono text-sm text-gray-400 font-bold uppercase tracking-widest">Message Log</label>
                <textarea 
                  rows={4}
                  value={form.message}
                  onChange={e => setForm({...form, message: e.target.value})}
                  required
                  placeholder="Type your message..."
                  className="w-full bg-[#0b1320] border-2 border-gray-700 focus:border-red-500 p-4 outline-none font-mono text-lg text-green-400 placeholder:text-gray-800 transition-colors resize-none"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full py-5 bg-red-500 hover:bg-red-600 text-[#0b1320] font-bold pixel-font text-sm shadow-[6px_6px_0_rgba(0,0,0,0.5)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all uppercase tracking-widest"
              >
                SEND TRANSMISSION
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col justify-between py-4 space-y-12">
          <div className="space-y-8">
            <h3 className="pixel-font text-sm text-gray-500 border-b border-gray-800 pb-2">QUICK_LINKS</h3>
            <div className="space-y-6">
              <a href="https://github.com/Sakura-winter" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                <div className="w-14 h-14 flex items-center justify-center bg-gray-800 border-2 border-gray-700 group-hover:border-green-400 transition-colors shadow-lg">
                  <span className="text-3xl">🐙</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-xs text-gray-600 uppercase font-bold mb-1">Source Code</span>
                  <span className="font-mono text-lg text-gray-300 group-hover:text-green-400 transition-colors">GitHub / Sakura-winter</span>
                </div>
              </a>
              <a href="https://linkedin.com/in/sumit-alexithymia" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                <div className="w-14 h-14 flex items-center justify-center bg-gray-800 border-2 border-gray-700 group-hover:border-cyan-400 transition-colors shadow-lg">
                  <span className="text-3xl">💼</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-xs text-gray-600 uppercase font-bold mb-1">Career Network</span>
                  <span className="font-mono text-lg text-gray-300 group-hover:text-cyan-400 transition-colors">LinkedIn / sumit-alexithymia</span>
                </div>
              </a>
              <a href="mailto:sumitkum1819@gmail.com" className="flex items-center gap-6 group">
                <div className="w-14 h-14 flex items-center justify-center bg-gray-800 border-2 border-gray-700 group-hover:border-pink-400 transition-colors shadow-lg">
                  <span className="text-3xl">📧</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-xs text-gray-600 uppercase font-bold mb-1">Electronic Mail</span>
                  <span className="font-mono text-lg text-gray-300 group-hover:text-pink-400 transition-colors">sumitkum1819@gmail.com</span>
                </div>
              </a>
            </div>
          </div>

          <div className="retro-border border-gray-800 p-8 bg-gray-900/30">
            <div className="pixel-font text-xs text-gray-500 mb-6 uppercase border-b border-gray-800 pb-2">SYSTEM_STATUS</div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-mono text-sm text-gray-500 font-bold uppercase">Connection</span>
                <span className="text-xs text-green-500 pixel-font animate-pulse">STABLE</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-mono text-sm text-gray-500 font-bold uppercase">Server Load</span>
                <span className="text-xs text-yellow-500 pixel-font">OPTIMAL</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-mono text-sm text-gray-500 font-bold uppercase">Sync Latency</span>
                <span className="text-xs text-cyan-500 pixel-font">12ms</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="pt-24 text-center pb-32">
        <p className="pixel-font text-[10px] text-gray-600 opacity-60 leading-relaxed max-w-md mx-auto">
          THANKS FOR EXPLORING THE TERMINAL.<br/>
          DESIGNED & CODED BY SUMIT KUMAR MEHTA.
        </p>
      </div>
    </div>
  );
};

export default Contact;
