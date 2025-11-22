import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Sparkles } from 'lucide-react';
import { PROFILE } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Robust scrolling function to prevent routing errors
  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Certifications', id: 'certifications' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg shadow-primary-500/5 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-secondary-500 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:shadow-primary-500/50 transition-all duration-300 transform group-hover:rotate-12">
             <Sparkles size={20} />
          </div>
          <span className="font-extrabold text-2xl tracking-tight text-slate-900 group-hover:text-primary-600 transition-colors">
            Surendra<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500">Alla</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={() => scrollToSection(link.id)}
              className="text-sm font-bold text-slate-600 hover:text-primary-600 relative group transition-colors"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
          <div className="flex items-center gap-3 ml-4 pl-4 border-l border-slate-200">
             <a 
                href={PROFILE.socials.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 text-slate-500 hover:text-white hover:bg-gradient-to-r hover:from-slate-800 hover:to-slate-900 rounded-full transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-md"
              >
                <Github size={20} />
             </a>
             <a 
                href={PROFILE.socials.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 text-slate-500 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 rounded-full transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-md"
              >
                <Linkedin size={20} />
             </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-800 p-2 bg-white rounded-lg shadow-md hover:text-primary-600 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg border-t border-slate-100 shadow-2xl transition-all duration-300 ease-in-out">
          <div className="flex flex-col p-4 gap-3">
            {navLinks.map((link) => (
              <button 
                key={link.name} 
                onClick={() => scrollToSection(link.id)}
                className="text-left text-slate-700 font-bold p-4 hover:bg-primary-50 hover:text-primary-600 rounded-xl transition-all border border-transparent hover:border-primary-100"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;