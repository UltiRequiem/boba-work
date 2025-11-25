import React from 'react';
import { Mail, MessageSquare, ArrowRight } from 'lucide-react';
import FadeIn from './FadeIn';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-boba-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-boba-card to-black border border-white/10 rounded-3xl p-8 md:p-16 overflow-hidden relative">
          
          {/* Decorative glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-boba-primary/20 blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
            <FadeIn direction="right">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Let's Build Something<br/><span className="text-boba-secondary">Extraordinary</span>.</h2>
                <p className="text-gray-400 mb-8 text-lg">
                  Whether you need a high-converting landing page or a complex AI integration, we're ready to help.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center text-gray-300">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mr-4">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span>hello@bobatech.com</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mr-4">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <span>Free 15-minute introductory call</span>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-400">Name</label>
                    <input 
                      type="text" 
                      id="name"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-boba-secondary/50 focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-400">Email</label>
                    <input 
                      type="email" 
                      id="email"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-boba-secondary/50 focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-400">How can we help?</label>
                  <textarea 
                    id="message"
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-boba-secondary/50 focus:border-transparent transition-all"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button 
                  type="button"
                  className="w-full bg-white text-boba-bg font-bold py-4 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center group"
                >
                  Send Request
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </FadeIn>
          </div>
        </div>

        <div className="mt-20 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Boba Tech. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;