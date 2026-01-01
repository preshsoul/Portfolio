import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, CheckCircle, ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) return <div className="pt-40 text-center">Case Study not found.</div>;

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="pt-32 pb-16 px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center text-emerald-400 hover:text-emerald-300 mb-8 transition-colors">
            <ChevronLeft size={20} /> Back to Portfolio
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">{project.title}</h1>
              <div className="flex gap-6 text-gray-400">
                <div><span className="block text-xs uppercase font-bold text-emerald-500">Client</span>{project.client}</div>
                <div><span className="block text-xs uppercase font-bold text-emerald-500">Duration</span>{project.duration}</div>
              </div>
            </div>
            <div className="bg-emerald-600 p-8 rounded-2xl text-center min-w-[200px]">
              <div className="text-5xl font-black">{project.stat}</div>
              <div className="text-sm font-bold uppercase tracking-widest mt-1">{project.label}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-12">
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="w-8 h-1 bg-emerald-500"></span> The Challenge
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">{project.challenge}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="w-8 h-1 bg-emerald-500"></span> The Strategy
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">{project.strategy}</p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-3xl h-fit border border-gray-100">
            <h2 className="text-xl font-bold mb-6">Key Outcomes</h2>
            <ul className="space-y-4">
              {project.results.map((result, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700 font-medium">{result}</span>
                </li>
              ))}
            </ul>
            <button className="w-full mt-8 py-4 bg-gray-900 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-black transition-all">
              Get Similar Results <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;