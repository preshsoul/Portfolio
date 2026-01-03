import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, FileDown } from 'lucide-react';

const Navigation = ({ isMenuOpen, setIsMenuOpen, activeSection, scrollToSection }) => {
  // 1. REMOVE 'blog' from this array
  const scrollItems = ['home', 'about', 'services', 'contact'];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          
          <Link to="/" className="text-2xl tanker-font uppercase text-gray-900" onClick={() => window.scrollTo(0, 0)}>
            Precious <span className="text-emerald-600">Ajayi</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {scrollItems.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize bespoke-serif font-medium transition-colors text-lg ${
                  activeSection === section ? 'text-emerald-600' : 'text-gray-600 hover:text-emerald-600'
                }`}
              >
                {section}
              </button>
            ))}

            {/* 2. ADD 'blog' as a separate Link here */}
            <Link 
              to="/blog" 
              className="capitalize bespoke-serif font-medium text-lg text-gray-600 hover:text-emerald-600 transition-colors"
            >
              Blog
            </Link>
            
            <a href="/Precious_Ajayi_CV.pdf" target="_blank" className="flex items-center gap-2 px-5 py-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full font-bold hover:bg-emerald-600 hover:text-white transition-all">
              <FileDown size={18} /> Resume
            </a>
          </div>

          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-6 space-y-4">
            {scrollItems.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block w-full text-left capitalize py-2 bespoke-serif font-medium text-xl text-gray-600"
              >
                {section}
              </button>
            ))}
            
            {/* 3. ADD 'blog' as a separate Link for Mobile */}
            <Link 
              to="/blog" 
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-left capitalize py-2 bespoke-serif font-medium text-xl text-gray-600"
            >
              Blog
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;