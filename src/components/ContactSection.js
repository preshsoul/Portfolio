import React from 'react';
import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ajayithewriter@gmail.com',
      href: 'mailto:ajayithewriter@gmail.com',
      ariaLabel: 'Send email to ajayithewriter@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+234 091 3162 3617',
      href: 'tel:+2349131623617',
      ariaLabel: 'Call +234 091 3162 3617'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: '/precious-ajayi-soul',
      href: 'https://www.linkedin.com/in/precious-ajayi-soul',
      ariaLabel: 'Visit LinkedIn profile'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Lagos, Nigeria',
      subtext: '(Available for remote work globally)',
      ariaLabel: 'Located in Lagos, Nigeria, available for remote work globally'
    }
  ];

  const steps = [
    {
      number: 1,
      title: 'Initial Contact',
      description: 'Reach out via email or phone'
    },
    {
      number: 2,
      title: 'Discovery Call',
      description: '15-minute call to assess fit'
    },
    {
      number: 3,
      title: 'Proposal',
      description: 'Custom proposal within 24 hours'
    },
    {
      number: 4,
      title: 'Let\'s Go',
      description: 'Agreement, deposit, and kickoff'
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-gray-50" aria-labelledby="contact-heading">
      <div className="max-w-4xl mx-auto">
        <h2 id="contact-heading" className="text-4xl font-bold text-gray-900 mb-4">Let's Work Together</h2>
        <p className="text-xl text-gray-600 mb-12">Currently taking on 2 Strategic Content Partnership clients for Q1 2025</p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6" role="region" aria-label="Contact information">
            {contactInfo.map((contact, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <contact.icon className="text-emerald-600" size={20} aria-hidden="true" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">{contact.label}</div>
                  {contact.href ? (
                    <a
                      href={contact.href}
                      target={contact.label === 'LinkedIn' ? '_blank' : undefined}
                      rel={contact.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                      className="text-emerald-600 hover:text-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                      aria-label={contact.ariaLabel}
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <div aria-label={contact.ariaLabel}>
                      <p className="text-gray-600">{contact.value}</p>
                      {contact.subtext && <p className="text-sm text-gray-500">{contact.subtext}</p>}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg" role="region" aria-label="Process overview">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">What to Expect</h3>
            <ol className="space-y-4" role="list">
              {steps.map((step, index) => (
                <li key={index} className="flex gap-3" role="listitem">
                  <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold" aria-label={`Step ${step.number}`}>
                    {step.number}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{step.title}</div>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-sm text-gray-600 italic" role="status">
              I reply within 24 hours to all inquiries
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;