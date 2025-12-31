import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = ({ scrollToSection }) => {
  return (
    <section id="home" className="pt-32 pb-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900" aria-labelledby="hero-heading">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <div className="inline-block px-4 py-2 bg-emerald-600/20 rounded-full text-emerald-300 text-sm font-medium" role="status">
              Brand Strategist & Content Lead
            </div>
            <h1 id="hero-heading" className="text-5xl md:text-6xl font-bold leading-tight">
              Turning Strategic Thinking Into Market <span className="text-emerald-400">Positioning</span>
            </h1>
            <p className="text-xl text-gray-300">
              I help growing businesses think different, not just sound different. Strategic positioning + content execution for brands that compete on expertise, not price.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold transition-all flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                aria-label="Book a discovery call"
              >
                Book Discovery Call
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold transition-all backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
                aria-label="View services"
              >
                View Services
              </button>
            </div>
          </div>

          <div className="relative" role="img" aria-label="Professional headshot of Precious Ajayi">
            {/* Height changed to h-[500px] to give the subject more vertical room */}
            <div className="w-full h-[500px] rounded-2xl shadow-2xl overflow-hidden bg-gradient-to-br from-emerald-400 to-emerald-600">
              <img 
                src="/my-photo.jpg" 
                alt="Precious Ajayi - Brand Strategist in emerald green suit" 
                /* object-top ensures the head is prioritized in the crop */
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div class="text-white text-center px-8 flex items-center justify-center h-full">Photo not found. Please add my-photo.jpg to the public folder.</div>';
                }}
              />
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100" role="region" aria-label="Key achievement statistic">
              <div className="text-3xl font-bold text-gray-900">98%</div>
              <div className="text-sm text-gray-600 font-medium">First-Review Approval</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;