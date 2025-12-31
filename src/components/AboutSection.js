import React from 'react';
import { TrendingUp, Target, Zap } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: '200%',
      label: 'Brand Visibility Growth',
      ariaLabel: 'Achieved 200 percent brand visibility growth'
    },
    {
      icon: Target,
      value: '$30K+',
      label: 'Grant Funding Secured',
      ariaLabel: 'Secured over 30 thousand dollars in grant funding'
    },
    {
      icon: Zap,
      value: '180+',
      label: 'Content Assets Delivered',
      ariaLabel: 'Delivered over 180 content assets'
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-white" aria-labelledby="about-heading">
      <div className="max-w-4xl mx-auto">
        <h2 id="about-heading" className="text-4xl font-bold text-gray-900 mb-8">About Me</h2>
        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
          <p>
            I'm a brand strategist and content consultant who helps growing businesses develop strategic positioning that differentiates them in crowded markets. I don't believe in templates or "best practices"—I believe in eccentric thinking, deep research, and strategic narratives that make brands impossible to ignore.
          </p>
          <p>
            I work at the intersection of brand strategy and content execution. Most strategists don't write. Most writers don't strategize. I do both—which means clients get strategic positioning frameworks AND the content that brings those frameworks to life. My work has secured $30,000+ in funding for social enterprises, grown brand visibility by 200% during product launches, and improved content operations efficiency by 30% for consultancies.
          </p>
          <p>
            I specialize in working with funded startups, mission-driven organizations, and service businesses that compete on expertise (not price). If your brand sounds like everyone else in your space, if your content is consistent but not converting, if you're posting but not positioning—that's where I come in. I currently take on 2-4 clients at a time through Strategic Content Partnerships, ensuring each receives the strategic attention and custom thinking their business deserves.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12" role="region" aria-label="Key achievements and statistics">
          {stats.map((stat, index) => (
            <div key={index} className="p-6 bg-emerald-50 rounded-xl" role="article" aria-label={stat.ariaLabel}>
              <stat.icon className="text-emerald-600 mb-3" size={32} aria-hidden="true" />
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;