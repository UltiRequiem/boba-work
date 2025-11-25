import React from 'react';
import HeroScene from './3d/HeroScene';
import FadeIn from './FadeIn';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center bg-boba-bg">
      <HeroScene />
      
      {/* Overlay gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-boba-bg via-boba-bg/80 to-transparent z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-3xl">
          <FadeIn direction="up" delay={0.2}>
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-boba-secondary/30 bg-boba-secondary/10 backdrop-blur-sm mb-6">
              <span className="flex h-2 w-2 rounded-full bg-boba-secondary mr-2 animate-pulse"></span>
              <span className="text-xs md:text-sm font-medium text-boba-secondary uppercase tracking-wider">
                Accepting New Projects
              </span>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Modern Software Engineering, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-boba-secondary via-boba-primary to-boba-accent">
                High-End Websites
              </span>, <br />
              and AI Systems.
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl leading-relaxed">
              We build the future of digital experiences with precision code and advanced intelligence. Delivered fast, designed to scale.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.5}>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-boba-primary font-pj rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-boba-primary hover:bg-violet-700"
              >
                Book a Call
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <div className="absolute -inset-3 rounded-xl bg-boba-primary/20 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-200" />
              </a>
              <a 
                href="#portfolio"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-gray-300 transition-all duration-200 bg-transparent border border-gray-700 rounded-lg hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
              >
                View Portfolio
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
      
      {/* Decorative glows */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-boba-primary/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-20 right-20 w-32 h-32 bg-boba-secondary/10 blur-[80px] rounded-full pointer-events-none" />
    </div>
  );
};

export default Hero;