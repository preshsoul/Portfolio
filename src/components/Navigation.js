import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, FileDown } from 'lucide-react';

const Navigation = ({ isMenuOpen, setIsMenuOpen, activeSection, scrollToSection }) => {
  const navItems = ['home', 'about', 'services', 'blog', 'contact'];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50" role="navigation" aria-label="Main navigation">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          
          {/* Brand Name - Link to Home */}
          <Link 
            to="/" 
            className="text-2xl tanker-font uppercase tracking-tight text-gray-900"
            onClick={() => window.scrollTo(0, 0)}
          >
            Precious <span className="text-emerald-600">Ajayi</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((section) => {
              // CHANGE: If it's the blog, use Link instead of button
              if (section === 'blog') {
                return (
                  <Link
                    key={section}
                    to="/blog"
                    className="capitalize bespoke-serif font-medium text-lg text-gray-600 hover:text-emerald-600 transition-colors"
                  >
                    {section}
                  </Link>
                );
              }

              return (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize bespoke-serif font-medium transition-colors text-lg ${
                    activeSection === section ? 'text-emerald-600' : 'text-gray-600 hover:text-emerald-600'
                  }`}
                  aria-current={activeSection === section ? 'page' : undefined}
                >
                  {section}
                </button>
              );
            })}
            
            <a 
              href="/Precious_Ajayi_CV.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full font-bold hover:bg-emerald-600 hover:text-white transition-all duration-300 shadow-sm"
            >
              <FileDown size={18} />
              Resume
            </a>
          </div>

          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-6 space-y-4 animate-in slide-in-from-top duration-300" role="menu">
            {navItems.map((section) => {
              // CHANGE: Apply the same Link logic for Mobile
              if (section === 'blog') {
                return (
                  <Link
                    key={section}
                    to="/blog"
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full text-left capitalize py-2 bespoke-serif font-medium text-xl text-gray-600"
                  >
                    {section}
                  </Link>
                );
              }

              return (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left capitalize py-2 bespoke-serif font-medium text-xl ${
                    activeSection === section ? 'text-emerald-600' : 'text-gray-600'
                  }`}
                >
                  {section}
                </button>
              );
            })}
            
            <div className="pt-2 border-t border-gray-100">
              <a 
                href="/Precious_Ajayi_CV.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-4 bg-emerald-600 text-white rounded-xl font-bold"
                onClick={() => setIsMenuOpen(false)}
              >
                <FileDown size={20} />
                Download CV
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;