import React from 'react';
import { Mail, Linkedin, Phone } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: Mail,
      href: 'mailto:ajayithewriter@gmail.com',
      ariaLabel: 'Send email to Precious Ajayi'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/precious-ajayi-soul',
      ariaLabel: 'Visit Precious Ajayi\'s LinkedIn profile'
    },
    {
      icon: Phone,
      href: 'tel:+2349131623617',
      ariaLabel: 'Call Precious Ajayi'
    }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12 px-6" role="contentinfo">
      <div className="max-w-6xl mx-auto text-center">
        <div className="text-2xl font-bold mb-4">
          Precious <span className="text-emerald-400">Ajayi</span>
        </div>
        <p className="text-gray-400 mb-6">Brand Strategist & Content Lead</p>
        <nav aria-label="Social media links">
          <ul className="flex justify-center gap-6 mb-8" role="list">
            {socialLinks.map((link, index) => (
              <li key={index} role="listitem">
                <a
                  href={link.href}
                  target={link.icon === Linkedin ? '_blank' : undefined}
                  rel={link.icon === Linkedin ? 'noopener noreferrer' : undefined}
                  className="hover:text-emerald-400 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-gray-900 p-2 rounded"
                  aria-label={link.ariaLabel}
                >
                  <link.icon size={24} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="text-gray-500 text-sm">
          © 2025 Precious Ajayi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;