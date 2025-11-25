import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Team', href: '#team' },
    { name: 'About', href: '#about' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-boba-bg/90 backdrop-blur-md border-b border-white/10 py-3 shadow-lg' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-boba-primary to-boba-secondary flex items-center justify-center text-white">
              <Terminal size={18} />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              Boba<span className="text-boba-secondary">Tech</span>
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-white hover:text-boba-secondary transition-colors px-3 py-2 rounded-md text-sm font-medium"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-white/10 hover:bg-white/20 border border-white/10 text-white px-4 py-2 rounded-md text-sm font-medium transition-all hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]"
              >
                Book a Call
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-boba-card border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="text-boba-secondary block px-3 py-2 rounded-md text-base font-bold"
            >
              Book a Call
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;