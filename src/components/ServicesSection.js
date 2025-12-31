import React from 'react';
import { Sparkles, Target, TrendingUp, ChevronRight, Star } from 'lucide-react';

const ServicesSection = ({ scrollToSection }) => {
  const services = [
    {
      icon: Sparkles,
      title: 'Sparkles', // Lowest tier
      subtitle: 'Strategic Content Partnerships',
      price: '₦75K',
      period: '/month',
      description: 'Monthly strategy sessions, competitive intelligence, and content assets for growing brands.',
      features: [
        '3-month minimum commitment',
        'Monthly strategy sessions',
        '6-8 strategic content pieces'
      ],
      isPopular: false,
      bgColor: 'bg-white'
    },
    {
      icon: Target,
      title: 'Target', // Most popular
      subtitle: 'Brand Strategy Intensives',
      price: '₦180K',
      period: ' one-time',
      description: 'Deep strategic work for businesses ready to clarify their positioning and messaging.',
      features: [
        'Competitive intelligence audit',
        'Positioning framework',
        'Messaging playbook'
      ],
      isPopular: true,
      bgColor: 'bg-emerald-900' // Green middle card
    },
    {
      icon: TrendingUp,
      title: 'TrendingUp', // NGO related
      subtitle: 'Grant Writing',
      price: '₦60K',
      period: ' per proposal',
      description: 'For NGOs and social enterprises seeking funding. Proposal development and impact narratives.',
      features: [
        'Research & funder alignment',
        'Proposal development',
        'Impact narrative framing'
      ],
      isPopular: false,
      bgColor: 'bg-white'
    }
  ];

  return (
    <section id="services" className="py-20 px-6 bg-gray-50" aria-labelledby="services-heading">
      <div className="max-w-6xl mx-auto">
        <h2 id="services-heading" className="text-4xl font-bold text-gray-900 mb-4 text-center">Services</h2>
        <p className="text-xl text-gray-600 mb-16 text-center">Strategic positioning and content execution for brands that compete on expertise.</p>

        <div className="grid md:grid-cols-3 gap-8 items-start" role="region" aria-label="Available services">
          {services.map((service, index) => {
            const isGreenCard = service.bgColor === 'bg-emerald-900';
            
            return (
              <article 
                key={index} 
                className={`relative p-8 rounded-3xl shadow-xl transition-all hover:-translate-y-2 ${service.bgColor} ${isGreenCard ? 'text-white md:scale-105 z-10' : 'text-gray-900 border border-gray-100'}`}
                role="article"
              >
                {/* Custom Gold Most Popular Badge */}
                {service.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1 bg-[#FFD700] border border-yellow-500 rounded-lg shadow-md" role="status">
                    <Star size={14} className="fill-black text-black" />
                    <span className="text-black text-xs font-bold uppercase tracking-wider">Most Popular</span>
                  </div>
                )}

                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${isGreenCard ? 'bg-emerald-400/20' : 'bg-emerald-100'}`}>
                  <service.icon className={isGreenCard ? 'text-emerald-400' : 'text-emerald-600'} size={28} />
                </div>

                <div className="mb-2">
                  <h3 className={`text-2xl font-black tracking-tight ${isGreenCard ? 'text-emerald-400' : 'text-emerald-600'}`}>
                    {service.title}
                  </h3>
                  <p className={`text-sm font-semibold uppercase tracking-wide opacity-80`}>
                    {service.subtitle}
                  </p>
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-bold">{service.price}</span>
                  <span className={`text-sm ${isGreenCard ? 'text-emerald-200' : 'text-gray-500'}`}>{service.period}</span>
                </div>

                <p className={`mb-8 leading-relaxed ${isGreenCard ? 'text-emerald-100' : 'text-gray-600'}`}>
                  {service.description}
                </p>

                <ul className="space-y-4 mb-8" role="list">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <ChevronRight className={`flex-shrink-0 mt-1 ${isGreenCard ? 'text-emerald-400' : 'text-emerald-600'}`} size={18} />
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => scrollToSection('contact')}
                  className={`w-full py-4 rounded-xl font-bold transition-all shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 
                    ${isGreenCard 
                      ? 'bg-emerald-400 hover:bg-emerald-300 text-emerald-950 focus:ring-emerald-400' 
                      : 'bg-emerald-600 hover:bg-emerald-700 text-white focus:ring-emerald-600'}`}
                >
                  Get Started
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;