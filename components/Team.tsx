import React from 'react';
import FadeIn from './FadeIn';
import { TeamMember } from '../types';
import { User, Code, Palette, Server } from 'lucide-react';

const team: (TeamMember & { icon: any })[] = [
  {
    role: "Founder & Senior AI Engineer",
    description: "Leading technical strategy and AI implementation.",
    icon: User
  },
  {
    role: "Senior Software Developers",
    description: "Full-stack experts building robust architectures.",
    icon: Code
  },
  {
    role: "UI/UX Specialist",
    description: "Crafting intuitive and accessible user interfaces.",
    icon: Palette
  },
  {
    role: "Engineering Support",
    description: "DevOps and QA ensuring 24/7 reliability.",
    icon: Server
  }
];

const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-boba-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-boba-secondary font-semibold tracking-wide uppercase text-sm mb-2">Who We Are</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">The Team</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A specialized collective of engineering talent dedicated to shipping high-quality software.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="bg-boba-card/50 border border-white/5 rounded-xl p-6 text-center hover:bg-white/5 transition-colors group">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-gray-800 to-black rounded-full flex items-center justify-center mb-4 ring-2 ring-white/5 group-hover:ring-boba-primary/50 transition-all">
                    <member.icon className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-lg font-bold text-white mb-1">{member.role}</h4>
                <p className="text-sm text-gray-500">{member.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;