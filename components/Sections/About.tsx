
import React from 'react';
import profileImg from '../../profile.jpg';

const About: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4 mb-8">
        <span className="pixel-font text-xl text-pink-500 glow"># WHO_AM_I</span>
        <div className="flex-1 h-[2px] bg-pink-500/30"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Character Card */}
        <div className="md:col-span-4 retro-border bg-gray-900/80 p-6 flex flex-col items-center">
          <div className="w-32 h-32 bg-gray-800 border-4 border-green-400 mb-6 overflow-hidden relative group">
            <img 
              src={profileImg} 
              alt="Profile" 
              className="w-full h-full object-cover pixelated opacity-80 group-hover:opacity-100 transition-opacity"
            />
            <div className="absolute inset-0 bg-green-400/10 pointer-events-none"></div>
          </div>
          <h2 className="pixel-font text-sm text-green-400 mb-2">SUMIT K. MEHTA</h2>
          <div className="text-xs pixel-font text-cyan-400 mb-6">CLASS: BACKEND ENG</div>
          
          <div className="w-full space-y-5">
            <div>
              <div className="flex justify-between pixel-font text-[10px] mb-2 uppercase">
                <span>INT</span>
                <span>88%</span>
              </div>
              <div className="h-3 bg-gray-800 rounded-sm border border-gray-700">
                <div className="h-full bg-cyan-500 w-[88%] shadow-[0_0_8px_rgba(6,182,212,0.6)]"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between pixel-font text-[10px] mb-2 uppercase">
                <span>STR</span>
                <span>75%</span>
              </div>
              <div className="h-3 bg-gray-800 rounded-sm border border-gray-700">
                <div className="h-full bg-red-500 w-[75%] shadow-[0_0_8px_rgba(239,68,68,0.6)]"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between pixel-font text-[10px] mb-2 uppercase">
                <span>AGI</span>
                <span>92%</span>
              </div>
              <div className="h-3 bg-gray-800 rounded-sm border border-gray-700">
                <div className="h-full bg-green-500 w-[92%] shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="md:col-span-8 flex flex-col justify-center space-y-6">
          <div className="retro-border border-cyan-400/50 p-6 bg-[#0b1320]/80">
            <h3 className="pixel-font text-sm text-cyan-400 mb-6 border-b border-cyan-400/20 pb-2">STATS & GUILD</h3>
            <div className="space-y-6 font-mono">
                <p className="text-gray-300 leading-relaxed text-base">
                  <span className="text-green-400 font-bold mr-2 tracking-tighter">[SYS_INFO]</span>
                  I am a passionate Backend Engineer focusing on Cloud Computing and DevOps. 
                  Currently pursuing B.Tech in CSE at Lovely Professional University, I spend most of my time optimizing 
                  server-side logic and building scalable cloud infrastructures.
                </p>
                <p className="text-gray-300 leading-relaxed text-base">
                  <span className="text-green-400 font-bold mr-2 tracking-tighter">[SYS_INFO]</span>
                  With a strong foundation in C++ and Python, I enjoy bridging the gap 
                  between complex backend services and automated deployment pipelines.
                </p>
            </div>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 border-2 border-gray-800 rounded bg-gray-900/50">
                <span className="block text-xs text-gray-500 mb-2 font-mono font-bold uppercase">GUILD</span>
                <span className="pixel-font text-xs text-yellow-400">LPU (B.TECH)</span>
              </div>
              <div className="p-4 border-2 border-gray-800 rounded bg-gray-900/50">
                <span className="block text-xs text-gray-500 mb-2 font-mono font-bold uppercase">LOCATION</span>
                <span className="pixel-font text-xs text-yellow-400">PUNJAB, INDIA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .pixelated { image-rendering: pixelated; }
      `}</style>
    </div>
  );
};

export default About;
