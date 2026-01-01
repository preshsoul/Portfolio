import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = ({ scrollToSection }) => {
  const stats = [
    { 
      value: "200%", 
      label: "Revenue Growth", 
      slug: "revenue-growth",
      pos: "top-10 -left-12" 
    },
    { 
      value: "$30k", 
      label: "Grant Funding", 
      slug: "grant-success",
      pos: "top-1/2 -right-12" 
    },
    { 
      value: "180+", 
      label: "Global Clients", 
      slug: "audience-expansion",
      pos: "-bottom-6 left-10" 
    }
  ];

  return (
    <section id="home" className="pt-32 pb-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div className="text-white space-y-8">
            <div className="inline-block px-4 py-2 bg-emerald-600/20 rounded-full text-emerald-300 text-sm font-medium">
              Brand Strategist & Content Lead
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Turning Strategy Into <span className="text-emerald-400">Positioning</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              I help growing businesses think different, not just sound different. 
              Strategic positioning + content execution for brands that compete on expertise, not price.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold transition-all flex items-center gap-2 group shadow-lg shadow-emerald-900/20"
              >
                Book Discovery Call
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold transition-all backdrop-blur-sm border border-white/10"
              >
                View Services
              </button>
            </div>
          </div>

          {/* Right Column: Visual & Clickable Stats */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative z-10 w-full h-[520px] rounded-3xl shadow-2xl overflow-hidden border-4 border-white/5 bg-emerald-800">
              <img 
                src="/my-photo.jpg" 
                alt="Precious Ajayi" 
                className="w-full h-full object-cover object-top brightness-90 hover:brightness-100 transition-all duration-500"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div class="text-white/50 flex items-center justify-center h-full italic">Photo optimized for strategy</div>';
                }}
              />
            </div>

            {/* Floating Clickable Stat Cards */}
            {stats.map((stat, index) => (
              <Link 
                key={index}
                to={`/portfolio/${stat.slug}`}
                className={`absolute ${stat.pos} z-20 group hidden lg:block`}
              >
                <div className="bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-2xl border border-emerald-100 transition-all duration-300 group-hover:-translate-y-2 group-hover:border-emerald-500 group-hover:shadow-emerald-500/20">
                  <div className="flex items-center justify-between gap-4 mb-1">
                    <span className="text-2xl font-bold text-gray-900">{stat.value}</span>
                    <ExternalLink size={14} className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="text-xs font-bold text-emerald-600 uppercase tracking-widest">{stat.label}</div>
                  <div className="mt-2 text-[10px] text-gray-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity uppercase">
                    View Case Study
                  </div>
                </div>
              </Link>
            ))}

            {/* Mobile Stat Display (Simplified for smaller screens) */}
            <div className="grid grid-cols-3 gap-4 mt-8 lg:hidden">
              {stats.map((stat, index) => (
                <Link key={index} to={`/portfolio/${stat.slug}`} className="bg-white/10 p-4 rounded-xl text-center border border-white/5">
                  <div className="text-xl font-bold text-emerald-400">{stat.value}</div>
                  <div className="text-[10px] text-gray-400 uppercase font-bold tracking-tight">{stat.label}</div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;