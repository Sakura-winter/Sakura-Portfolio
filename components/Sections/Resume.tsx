
import React from 'react';
import resumePdf from '../../resume.pdf';

const Resume: React.FC = () => {

  const downloadStaticPdf = () => {
    const link = document.createElement('a');
    link.href = resumePdf;
    link.download = 'Sumit_Kumar_Mehta_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-12">
      <div className="flex items-center gap-4 mb-8">
        <span className="pixel-font text-xl text-gray-400 glow"># CAT RESUME.TXT</span>
        <div className="flex-1 h-[2px] bg-gray-700"></div>
      </div>

      <div className="bg-[#0b1320] p-6 md:p-10 border-2 border-gray-700 relative group overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-30"></div>
        
        <div className="font-mono text-sm text-gray-400 leading-relaxed space-y-8">
          {/* Header */}
          <div className="text-center border-b border-gray-800 pb-8">
            <div className="text-green-400 font-bold text-2xl mb-2">SUMIT KUMAR MEHTA</div>
            <div>Bathinda, Punjab | +91-9714043692</div>
            <div className="text-cyan-400 mt-1">sumitkum1819@gmail.com</div>
            <div className="text-xs text-gray-500 mt-2 space-x-2">
              <a href="https://linkedin.com/in/sumit-alexithymia" className="hover:text-cyan-400">LinkedIn</a>
              <span>|</span>
              <a href="https://github.com/Sakura-winter" className="hover:text-cyan-400">GitHub</a>
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="text-green-500 font-bold mb-4 uppercase tracking-wider">01. EDUCATION</div>
            <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-4 mb-4">
              <span className="text-gray-600">Aug 2023 - Present</span>
              <div>
                <div className="text-white font-bold">Lovely Professional University</div>
                <div className="italic">B.Tech - Computer Science & Engineering (CGPA: 7.52)</div>
                <div className="text-xs text-gray-600">Punjab, India</div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-4 mb-4">
              <span className="text-gray-600">Apr 2021 - Mar 2023</span>
              <div>
                <div className="text-white font-bold">Kendriya Vidyalaya No. 4</div>
                <div className="italic">Intermediate (79.8%)</div>
                <div className="text-xs text-gray-600">Bathinda, Punjab</div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-4">
              <span className="text-gray-600">Apr 2018 - Mar 2019</span>
              <div>
                <div className="text-white font-bold">Army Public School</div>
                <div className="italic">Matriculation (75%)</div>
                <div className="text-xs text-gray-600">Bathinda, Punjab</div>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div>
            <div className="text-green-500 font-bold mb-4 uppercase tracking-wider">02. CORE_SKILLS</div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="border border-gray-800 p-2">
                <span className="text-green-400 block mb-1">PROG</span>
                <span>C++, Python, JS, Java, C</span>
              </div>
              <div className="border border-gray-800 p-2">
                <span className="text-green-400 block mb-1">CLOUD</span>
                <span>AWS, Docker, Linux</span>
              </div>
              <div className="border border-gray-800 p-2">
                <span className="text-green-400 block mb-1">WEB</span>
                <span>Flask, HTML, CSS</span>
              </div>
              <div className="border border-gray-800 p-2">
                <span className="text-green-400 block mb-1">SOFT</span>
                <span>Leadership, Adaptability</span>
              </div>
            </div>
          </div>
          
          <div className="pt-8 flex justify-center">
            <button 
              onClick={downloadStaticPdf}
              className="px-6 py-3 bg-gray-800 hover:bg-green-600 hover:text-white transition-all border-2 border-green-500/50 flex items-center gap-3 group cursor-pointer text-green-400"
            >
              <span className="pixel-font text-xs">DOWNLOAD_RESUME.EXE</span>
              <span className="animate-bounce">💾</span>
            </button>
          </div>
        </div>

        {/* CRT Lines Effect inside the box */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-white/5 to-transparent h-20 opacity-10 animate-scanline"></div>
      </div>
    </div>
  );
};

export default Resume;
