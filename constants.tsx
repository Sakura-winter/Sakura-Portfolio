
import React from 'react';
import { Project, SkillCategory, Achievement } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'cross-llm',
    title: 'Cross-LLM Validator',
    level: 3,
    description: 'GenAI tool using Python & Streamlit to cross-validate LLM outputs (OpenAI/Gemini). Automates response quality assessment to reduce hallucinations.',
    stack: ['Python', 'Streamlit', 'REST APIs', 'Prompt Eng.'],
    githubUrl: 'https://github.com/Sakura-winter'
  },
  {
    id: 'decor-ai',
    title: 'DecorAI Chatbot',
    level: 2,
    description: 'Serverless interior design chatbot using Flask & AWS Lambda. Integrates OpenRouter API for personalized decor recommendations with CORS security.',
    stack: ['Python', 'Flask', 'AWS Lambda', 'Bootstrap'],
    githubUrl: 'https://github.com/Sakura-winter'
  },
  {
    id: 'contact-mgmt',
    title: 'Contact Mgmt System',
    level: 1,
    description: 'Persistent C++ console app using File Streams & STL Vectors. Implements CRUD operations with a modular OOP architecture.',
    stack: ['C++', 'STL', 'File Handling', 'OOP'],
    githubUrl: 'https://github.com/Sakura-winter'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Languages',
    skills: [
      { name: 'C++', icon: '⚔️', level: 90 },
      { name: 'Python', icon: '🐍', level: 85 },
      { name: 'JavaScript', icon: '⚡', level: 80 },
      { name: 'Java', icon: '☕', level: 75 },
      { name: 'C', icon: '💾', level: 80 }
    ]
  },
  {
    title: 'Frameworks',
    skills: [
      { name: 'Flask', icon: '🧪', level: 75 },
      { name: 'HTML5', icon: '🌐', level: 90 },
      { name: 'CSS3', icon: '🎨', level: 85 }
    ]
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'AWS', icon: '☁️', level: 80 },
      { name: 'GitHub', icon: '🐙', level: 90 },
      { name: 'Linux', icon: '🐧', level: 85 },
      { name: 'MySQL', icon: '🗄️', level: 80 }
    ]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  { title: 'AWS Cloud Foundations', issuer: 'AWS Academy', date: 'May 2025' },
  { title: 'IoT (Elite)', issuer: 'IIT Kharagpur (NPTEL)', date: 'Apr 2025' },
  { title: 'DSA Training (C++)', issuer: 'AlgoTutor', date: 'Aug 2025' },
  { title: 'Software Dev Processes', issuer: 'Univ. of Minnesota', date: 'May 2024' },
  { title: 'Ops Support (Valorant)', issuer: 'SkyEsports', date: '2023' }
];
