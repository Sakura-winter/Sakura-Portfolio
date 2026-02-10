
import React, { useState } from 'react';
import { PROJECTS } from '../../constants';
import { Project } from '../../types';

const Projects: React.FC = () => {
  const [fetchedProjects, setFetchedProjects] = useState<Project[]>([]);
  const [visibleCount, setVisibleCount] = useState<number>(PROJECTS.length);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasFetched, setHasFetched] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const loadMoreProjects = async () => {
    // If we haven't fetched from GitHub yet, do that first
    if (!hasFetched) {
      setIsLoading(true);
      try {
        const response = await fetch('https://api.github.com/users/Sakura-winter/repos?sort=updated&per_page=100', {
          headers: {
            // Helps ensure consistent GitHub API behavior (and enables topics in many cases)
            Accept: 'application/vnd.github+json',
            'X-GitHub-Api-Version': '2022-11-28',
          },
        });
        if (!response.ok) {
          // Common causes: rate limit (403) or blocked network/CORS.
          throw new Error(`GitHub API request failed (${response.status})`);
        }
        
        const data = await response.json();
        
        const mappedProjects: Project[] = data
          .map((repo: any) => ({
            id: repo.id.toString(),
            title: repo.name.replace(/[-_]/g, ' '),
            // Generate a "Level" based on project size/complexity mockup
            level: Math.min(Math.ceil(repo.size / 100) || 1, 99),
            description: repo.description || 'No detailed description available in archives.',
            // Use language and topics for stack
            stack: [repo.language, ...(repo.topics || [])]
              .filter((item: any): item is string => typeof item === 'string' && item.length > 0)
              // Store all tags, slice in view only
            ,
            githubUrl: repo.html_url || 'https://github.com/Sakura-winter'
          }));

        // Filter out projects that are already in the static list to avoid duplicates (fuzzy match by name)
        const staticTitles = PROJECTS.map(p => p.title.toLowerCase().replace(/[^a-z0-9]/g, ''));
        const uniqueFetched = mappedProjects.filter(p => 
          !staticTitles.includes(p.title.toLowerCase().replace(/[^a-z0-9]/g, ''))
        );

        setFetchedProjects(uniqueFetched);
        setHasFetched(true);

        // If we actually got new projects, reveal some.
        if (uniqueFetched.length > 0) {
          setVisibleCount(prev => prev + 6);
        }
      } catch (err) {
        console.error(err);
        // Graceful fallback:
        // - Keep showing static projects only.
        // - Hide the "load more" button to avoid confusing errors.
        setHasFetched(true);
      } finally {
        setIsLoading(false);
      }
    } else {
      // If we already fetched, just show more from the list
      setVisibleCount(prev => prev + 6);
    }
  };

  const allProjects = [...PROJECTS, ...fetchedProjects];
  const visibleProjects = allProjects.slice(0, visibleCount);
  const hasMore = !hasFetched || visibleCount < allProjects.length;

  return (
    <div className="space-y-12">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <span className="pixel-font text-xl text-cyan-400 glow"># LEVEL_SELECT</span>
          <div className="w-32 h-[2px] bg-cyan-400/30"></div>
        </div>
        <div className="text-gray-500 font-mono text-sm hidden sm:block">guest@sumit:~/projects$ ls -la</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {visibleProjects.map((project, index) => (
          <div 
            key={`${project.id}-${index}`} 
            onClick={() => setSelectedProject(project)}
            className="group relative flex flex-col retro-border border-cyan-400/30 bg-gray-900/40 hover:bg-cyan-400/5 transition-colors h-full cursor-pointer"
          >
            {/* Project Header */}
            <div className="p-4 bg-gray-800 border-b-2 border-cyan-400/20 flex justify-between items-center">
              <span className="pixel-font text-xs text-cyan-400">LVL.{project.level.toString().padStart(2, '0')}</span>
              <div className="flex gap-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className={`w-3 h-3 rounded-full border border-cyan-400/20 ${i <= (project.level % 3) + 1 ? 'bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]' : 'bg-gray-800'}`}></div>
                ))}
              </div>
            </div>

            {/* Project Body */}
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="pixel-font text-sm text-white mb-6 leading-relaxed group-hover:text-cyan-400 transition-colors uppercase truncate" title={project.title}>
                {project.title}
              </h3>
              <p className="font-mono text-base text-gray-400 mb-8 flex-1 leading-relaxed line-clamp-3">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.stack.slice(0, 4).map(tech => (
                  <span key={tech} className="text-xs px-2 py-1 bg-cyan-900/20 border border-cyan-400/40 text-cyan-400 font-mono font-bold">
                    {tech}
                  </span>
                ))}
                {project.stack.length > 4 && (
                    <span className="text-xs px-2 py-1 bg-gray-800 border border-gray-600 text-gray-500 font-mono">
                        +{project.stack.length - 4}
                    </span>
                 )}
                 {project.stack.length === 0 && (
                  <span className="text-xs px-2 py-1 bg-gray-800 border border-gray-600 text-gray-500 font-mono">
                    UNKNOWN
                  </span>
                )}
              </div>

              <div 
                className="w-full text-center py-3 border-2 border-cyan-400 pixel-font text-xs text-cyan-400 hover:bg-cyan-400 hover:text-[#0b1320] transition-all shadow-[0_0_10px_rgba(34,211,238,0.2)] mt-auto"
              >
                VIEW_DATA
              </div>
            </div>
            
            {/* Visual Glitch Decor */}
            <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center pt-8">
          <button 
            onClick={loadMoreProjects}
            disabled={isLoading}
            className="group relative px-8 py-4 bg-[#0b1320] border-2 border-cyan-400/50 hover:border-cyan-400 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div className="absolute inset-0 bg-cyan-400/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            <div className="flex items-center gap-3">
              {isLoading ? (
                <div className="w-4 h-4 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <span className="text-cyan-400 text-xl">⇩</span>
              )}
              <span className="pixel-font text-xs text-cyan-400 uppercase tracking-widest relative z-10">
                {isLoading ? 'ESTABLISHING_UPLINK...' : 'LOAD_MORE_ARCHIVES'}
              </span>
            </div>
          </button>
        </div>
      )}

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedProject(null)}>
            <div 
                className="bg-[#0b1320] border-2 border-cyan-400 p-1 max-w-2xl w-full shadow-[0_0_30px_rgba(34,211,238,0.15)] relative animate-in fade-in zoom-in duration-200" 
                onClick={e => e.stopPropagation()}
            >
                <div className="border-2 border-cyan-400/30 p-6 md:p-8 h-full bg-gray-900/95 relative overflow-hidden">
                    {/* Scanline bg for modal */}
                    <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-0 opacity-20 bg-[length:100%_4px,3px_100%]"></div>
                    
                    <div className="relative z-10">
                        {/* Header */}
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h2 className="pixel-font text-lg md:text-xl text-cyan-400 mb-2 uppercase break-words pr-8">
                                    {selectedProject.title}
                                </h2>
                                <div className="flex items-center gap-3">
                                    <div className="px-2 py-1 bg-cyan-900/30 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
                                        LVL.{selectedProject.level}
                                    </div>
                                    <div className="h-[1px] flex-1 bg-cyan-500/30 w-12"></div>
                                </div>
                            </div>
                            <button 
                                onClick={() => setSelectedProject(null)}
                                className="text-gray-500 hover:text-red-400 transition-colors pixel-font text-xl leading-none"
                            >
                                ×
                            </button>
                        </div>

                        {/* Content */}
                        <div className="font-mono text-gray-300 text-sm md:text-base leading-relaxed mb-8 max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
                            <p>{selectedProject.description}</p>
                            {selectedProject.description === 'No detailed description available in archives.' && (
                                <p className="mt-4 text-gray-500 italic text-xs">
                                    [SYSTEM NOTE]: This project was retrieved from deep storage. 
                                    Inspect source code for full functionality details.
                                </p>
                            )}
                        </div>

                        {/* Tech Stack */}
                        <div className="mb-8">
                            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {selectedProject.stack.length > 0 ? selectedProject.stack.map(tech => (
                                    <span key={tech} className="text-xs px-2 py-1 bg-cyan-900/20 border border-cyan-400/40 text-cyan-400 font-mono">
                                        {tech}
                                    </span>
                                )) : (
                                    <span className="text-gray-500 italic text-xs">Unknown technology signature</span>
                                )}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-700/50">
                            <a 
                                href={selectedProject.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-mono font-bold text-center transition-all shadow-lg flex items-center justify-center gap-2 group"
                            >
                                <span>INITIALIZE REPO</span>
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </a>
                            <button 
                                onClick={() => setSelectedProject(null)}
                                className="px-6 py-3 border-2 border-gray-600 text-gray-400 font-mono hover:bg-gray-800 transition-colors uppercase text-sm"
                            >
                                CLOSE
                            </button>
                        </div>
                    </div>
                </div>
                
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-400"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400"></div>
            </div>
            
            <style>{`
                .custom-scrollbar::-webkit-scrollbar { width: 6px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: rgba(0,0,0,0.2); }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(34,211,238,0.3); border-radius: 3px; }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(34,211,238,0.5); }
            `}</style>
        </div>
      )}
    </div>
  );
};

export default Projects;
