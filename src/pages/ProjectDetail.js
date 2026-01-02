import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, CheckCircle, ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  // Find the project based on the URL slug
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // If case study isn't found, show a helpful message and a back button
  if (!project) {
    return (
      <div className="pt-40 pb-20 text-center px-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Case Study not found.</h2>
        <p className="text-gray-600 mb-8">The project you are looking for might have been moved or renamed.</p>
        <Link to="/" className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
          <ChevronLeft size={20} className="mr-2" /> Return to Portfolio
        </Link>
      </div>
    );
  }

  const handleContactClick = () => {
    // Navigates to home and scrolls to contact
    navigate('/#contact');
    // If already on home, it will jump to the contact ID
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="pt-32 pb-16 px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center text-emerald-400 hover:text-emerald-300 mb-8 transition-colors group">
            <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Portfolio
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex-1">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
                {project.title}
              </h1>
              <div className="flex gap-6 text-gray-400">
                <div>
                  <span className="block text-xs uppercase font-bold text-emerald-500 tracking-wider">Client</span>
                  <span className="text-white font-medium">{project.client}</span>
                </div>
                <div>
                  <span className="block text-xs uppercase font-bold text-emerald-500 tracking-wider">Duration</span>
                  <span className="text-white font-medium">{project.duration}</span>
                </div>
              </div>
            </div>
            <div className="bg-emerald-600 p-8 rounded-2xl text-center min-w-[220px] shadow-lg shadow-emerald-900/40">
              <div className="text-5xl font-black">{project.stat}</div>
              <div className="text-sm font-bold uppercase tracking-widest mt-1 opacity-90">{project.label}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-12">
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-8 h-1 bg-emerald-500 rounded-full"></span> 
                The Challenge
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed italic">
                {project.challenge}
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-8 h-1 bg-emerald-500 rounded-full"></span> 
                The Strategy
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {project.strategy}
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="sticky top-32 bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h2 className="text-xl font-bold mb-6 text-gray-900">Key Outcomes</h2>
              <ul className="space-y-4">
                {project.results && project.results.map((result, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" size={18} />
                    <span className="text-gray-700 font-medium leading-snug">{result}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={handleContactClick}
                className="w-full mt-8 py-4 bg-gray-900 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-600 transition-all shadow-xl active:scale-95"
              >
                Get Similar Results <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;