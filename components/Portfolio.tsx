import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import FadeIn from './FadeIn';
import { PortfolioItem } from '../types';

const projects: PortfolioItem[] = [
  {
    title: "CompileStrength",
    category: "SaaS Platform",
    description: "An AI-powered workout tracking application that optimizes lifting routines using progressive overload algorithms.",
    tech: ["React", "Node.js", "OpenAI API"]
  },
  {
    title: "Sergif",
    category: "Search Engine",
    description: "A specialized GIF search engine utilizing semantic vector search for more accurate emotion-based results.",
    tech: ["Next.js", "Python", "Vector DB"]
  },
  {
    title: "Jokes API",
    category: "Microservice",
    description: "High-performance REST API serving curated programming humor with 99.9% uptime and low latency.",
    tech: ["Go", "Redis", "Docker"]
  },
  {
    title: "Open Source Libraries",
    category: "Community",
    description: "Various contributions to the ecosystem including optimized data structures and developer tooling CLI.",
    tech: ["Rust", "TypeScript", "WASM"]
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-boba-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-boba-secondary font-semibold tracking-wide uppercase text-sm mb-2">Our Work</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-white">Selected Projects</h3>
            </div>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center text-gray-400 hover:text-white transition-colors">
              <Github className="w-5 h-5 mr-2" />
              See more on GitHub
            </a>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="group relative bg-boba-card rounded-2xl overflow-hidden border border-white/5 hover:border-boba-primary/30 transition-colors duration-300">
                {/* Placeholder Image Area */}
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 relative flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 z-10" />
                    <img 
                      src={`https://picsum.photos/seed/${project.title.replace(/\s/g, '')}/800/450`} 
                      alt={project.title} 
                      className="object-cover w-full h-full opacity-60 group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="px-4 py-2 bg-black/50 backdrop-blur-md rounded-full text-white text-sm font-medium border border-white/20">
                            View Project
                        </span>
                    </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-bold text-boba-primary uppercase tracking-wider">{project.category}</span>
                    <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-boba-secondary transition-colors">{project.title}</h4>
                  <p className="text-gray-400 mb-6 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-2 py-1 bg-white/5 rounded text-xs text-gray-300 border border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;