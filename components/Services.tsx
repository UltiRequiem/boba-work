import React from 'react';
import { Globe, Layers, Cpu, Users } from 'lucide-react';
import FadeIn from './FadeIn';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: "Custom Websites",
    description: "High-performance marketing sites and landing pages built to convert. SEO-optimized and pixel-perfect.",
    icon: Globe,
    color: "text-boba-secondary"
  },
  {
    title: "Full-Stack Applications",
    description: "Robust web applications with secure backends, real-time databases, and scalable cloud infrastructure.",
    icon: Layers,
    color: "text-boba-primary"
  },
  {
    title: "AI Development",
    description: "Integration of LLMs, chatbots, and predictive models into your business workflows to automate intelligence.",
    icon: Cpu,
    color: "text-boba-accent"
  },
  {
    title: "Engineering Support",
    description: "Augment your existing team with senior engineering talent. We handle tough architectural challenges.",
    icon: Users,
    color: "text-pink-500"
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-boba-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-boba-secondary font-semibold tracking-wide uppercase text-sm mb-2">What We Do</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">Engineering Excellence</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From concept to deployment, we provide end-to-end technical solutions tailored to your specific needs.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="group h-full p-6 bg-boba-card border border-white/5 rounded-xl hover:border-white/10 transition-all duration-300 hover:bg-white/5 hover:-translate-y-1 relative overflow-hidden">
                <div className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500`}>
                  <service.icon size={100} />
                </div>
                
                <div className={`w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 ${service.color}`}>
                  <service.icon size={24} />
                </div>
                
                <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 bg-gradient-to-br from-transparent to-${service.color.replace('text-', '')}/5`} />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;