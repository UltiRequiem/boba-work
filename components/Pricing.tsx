import React from 'react';
import { Check } from 'lucide-react';
import FadeIn from './FadeIn';
import { PricingTier } from '../types';

const tiers: PricingTier[] = [
  {
    name: "Starter Landing Page",
    price: "$350",
    description: "Perfect for new products or personal portfolios.",
    features: [
      "Single Page Design",
      "Mobile Responsive",
      "Basic SEO Setup",
      "Contact Form",
      "Fast Delivery (3-5 Days)"
    ]
  },
  {
    name: "Multi-Page Website",
    price: "$850",
    description: "For established businesses needing more content.",
    features: [
      "1-5 Custom Pages",
      "CMS Integration",
      "Advanced SEO & Analytics",
      "Social Media Integration",
      "Animation Effects",
      "2 Weeks Support"
    ],
    highlight: true
  },
  {
    name: "Premium Experience",
    price: "$1,500+",
    description: "Top-tier design and functionality.",
    features: [
      "Unlimited Pages",
      "Custom Interactive 3D",
      "E-commerce Functionality",
      "User Authentication",
      "Custom Backend API",
      "1 Month Priority Support"
    ]
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-boba-bg relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-boba-primary/5 rounded-full blur-[128px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-boba-secondary/5 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-boba-secondary font-semibold tracking-wide uppercase text-sm mb-2">Investment</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">Transparent Pricing</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Start small and scale up. No hidden fees.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <FadeIn key={index} delay={index * 0.1} className="h-full">
              <div 
                className={`flex flex-col h-full p-8 rounded-2xl border transition-all duration-300 ${
                  tier.highlight 
                    ? 'bg-white/5 border-boba-primary/50 shadow-[0_0_30px_rgba(139,92,246,0.15)] relative transform md:-translate-y-4' 
                    : 'bg-boba-card border-white/5 hover:border-white/10'
                }`}
              >
                {tier.highlight && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-boba-secondary to-boba-primary text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-xl font-semibold text-white mb-2">{tier.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold text-white tracking-tight">{tier.price}</span>
                  {tier.price.includes('+') ? null : <span className="text-gray-500 ml-2">/project</span>}
                </div>
                <p className="text-gray-400 text-sm mb-6">{tier.description}</p>
                
                <div className="flex-grow space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-boba-accent shrink-0 mr-3" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <a 
                    href="#contact"
                    className={`w-full py-3 px-4 rounded-lg font-semibold text-sm transition-all text-center ${
                        tier.highlight
                        ? 'bg-boba-primary hover:bg-violet-600 text-white shadow-lg shadow-boba-primary/25'
                        : 'bg-white/10 hover:bg-white/20 text-white'
                    }`}
                >
                    Get Started
                </a>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-16 text-center space-y-4">
            <div className="p-6 bg-boba-card/50 border border-white/5 rounded-2xl max-w-3xl mx-auto backdrop-blur-sm">
                <h4 className="text-lg font-bold text-white mb-2">Need something more powerful?</h4>
                <div className="flex flex-col md:flex-row justify-center gap-8 text-sm text-gray-400">
                    <p>
                        <span className="block text-boba-secondary font-semibold text-base mb-1">Custom Apps & AI Systems</span>
                        Starting from $2,000+
                    </p>
                    <div className="hidden md:block w-px bg-white/10"></div>
                    <p>
                        <span className="block text-boba-primary font-semibold text-base mb-1">Team Augmentation</span>
                        $25 – $45 / hour
                    </p>
                </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Pricing;