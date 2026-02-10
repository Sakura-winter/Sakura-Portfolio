
import React, { useState, useEffect, useRef } from 'react';
import BootSequence from './components/BootSequence';
import Layout from './components/Layout';
import Navigation from './components/Navigation';
import TerminalInput from './components/TerminalInput';
import About from './components/Sections/About';
import Skills from './components/Sections/Skills';
import Projects from './components/Sections/Projects';
import Experience from './components/Sections/Experience';
import Resume from './components/Sections/Resume';
import Contact from './components/Sections/Contact';
import { SectionType } from './types';

const TAGLINES: string[] = [
  'Building the foundation of the digital world, one line of code at a time.',
  'Architecting high-availability realms and optimizing the mana flow of data.',
  'Automating the chaos, scaling the void, and ensuring 99.9% uptime for the kingdom.',
  'Guardian of the Cloud. Master of the API. Weaver of secure microservices.',
  'Turning infrastructure into reusable spells and deployments into single keystrokes.',
  'Designing fault-tolerant systems so failures become anecdotes, not incidents.',
  'Tuning databases and queues until latency feels like a rounding error.',
  'From bare metal to serverless, I orchestrate what runs where—and why.',
  'Shipping resilient backends that keep running while the frontend sleeps.',
  'Hardening pipelines so every commit marches straight into production with confidence.',
  'Converting business chaos into clean APIs, stable services, and clear logs.',
  'Logging, tracing, metrics, alerts—if it moves, I observe it.',
  'Refactoring monoliths into modular worlds connected by reliable contracts.',
  'Writing code that survives deploys, traffic spikes, and 3 a.m. pages.',
  'Scaling systems so growth is an engineering story, not a fire drill.',
  'Encoding best practices into CI/CD so good habits are automatic, not optional.',
  'Securing data paths so packets travel like ninjas—silent but unstoppable.',
  'Optimizing cloud bills without sacrificing performance or sanity.',
  'Treating servers like cattle, not pets—automated, replaceable, and always ready.',
  'Bridging dev and ops with tooling, empathy, and ridiculously detailed runbooks.',
  'Transforming requirements into endpoints, diagrams, and uptime dashboards.',
  'Running postmortems so every failure upgrades the entire system.'
];

const App: React.FC = () => {
  const [isBooted, setIsBooted] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionType>('home');
  const [terminalHistory, setTerminalHistory] = useState<string[]>([]);
  const [tagline] = useState<string>(() => TAGLINES[Math.floor(Math.random() * TAGLINES.length)]);
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: SectionType) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCommand = (cmd: string) => {
    const cleanCmd = cmd.toLowerCase().trim();
    setTerminalHistory(prev => [...prev, `guest@sumit:~$ ${cmd}`]);
    
    switch (cleanCmd) {
      case 'about':
      case 'skills':
      case 'projects':
      case 'resume':
      case 'contact':
      case 'experience':
        scrollToSection(cleanCmd as SectionType);
        break;
      case 'home':
        scrollToSection('home');
        break;
      case 'clear':
        setTerminalHistory([]);
        break;
      case 'help':
        setTerminalHistory(prev => [...prev, 'Available commands: about, skills, projects, resume, contact, experience, home, help, clear']);
        break;
      case 'ls':
        setTerminalHistory(prev => [...prev, 'about/  skills/  projects/  resume.txt  experience/']);
        break;
      default:
        setTerminalHistory(prev => [...prev, `Command not found: ${cleanCmd}. Type 'help' for options.`]);
    }
  };

  if (!isBooted) {
    return <BootSequence onComplete={() => setIsBooted(true)} />;
  }

  return (
    <Layout>
      <Navigation activeSection={activeSection} onNavClick={scrollToSection} />
      
      <main className="pt-24 pb-32 px-4 md:px-8 max-w-5xl mx-auto space-y-32">
        <section id="home" className="min-h-[60vh] flex flex-col justify-center items-center text-center">
          <div className="retro-border bg-[#1e293b]/50 p-8 md:p-12 animate-pulse-slow">
            <h1 className="pixel-font text-2xl md:text-4xl lg:text-5xl text-green-400 glow mb-6">
              SUMIT KUMAR MEHTA
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-4 uppercase tracking-widest">
              Backend Engineer | Cloud | DevOps
            </p>
            <div className="h-1 w-full bg-green-400/30 my-6"></div>
            <p className="text-gray-400 italic">"{tagline}"</p>
          </div>
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="resume">
          <Resume />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <TerminalInput 
        history={terminalHistory} 
        onCommand={handleCommand} 
      />
    </Layout>
  );
};

export default App;
