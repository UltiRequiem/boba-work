import React from 'react';
import FadeIn from './FadeIn';
import { Terminal, Cloud, Award, Download } from 'lucide-react';

const stats = [
  { label: "OSS Downloads", value: "500k+", icon: Download },
  { label: "Years Experience", value: "10+", icon: Award },
  { label: "Technologies", value: "20+", icon: Terminal },
  { label: "Uptime Delivered", value: "99.9%", icon: Cloud },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-boba-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-boba-card/20 skew-y-3 origin-top-left scale-110 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <FadeIn direction="right">
            <div>
              <h2 className="text-boba-secondary font-semibold tracking-wide uppercase text-sm mb-2">About Boba Tech</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Built on Deep Engineering Expertise.</h3>
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                <p>
                  Boba Tech isn't just another agency. We are a team led by senior engineering talent with a proven track record in building enterprise backend systems and cutting-edge AI solutions.
                </p>
                <p>
                  Our founder brings extensive experience in <span className="text-white font-medium">Rust, Node.js, and Deno</span>, contributing to open-source software used by thousands of developers worldwide.
                </p>
                <p>
                  From cloud infrastructure automation (CI/CD) to training custom machine learning models, we don't just write code—we engineer outcomes.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="p-6 bg-boba-card border border-white/5 rounded-2xl hover:border-boba-secondary/30 transition-colors">
                  <stat.icon className="w-8 h-8 text-boba-secondary mb-4 opacity-80" />
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default About;