import React from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../data/articles';
import { ArrowRight } from 'lucide-react';

const BlogSection = () => {
  // We only want to show the 3 most recent posts on the homepage
  const recentArticles = articles.slice(0, 3);

  return (
    <section id="blog" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-5xl md:text-7xl tanker-font uppercase mb-4">
              Latest <span className="text-emerald-600">Insights</span>
            </h2>
            <p className="text-xl bespoke-serif text-gray-600 max-w-xl">
              Strategic thoughts on positioning and brand authority.
            </p>
          </div>
          
          {/* This link takes them to your full BlogPage.js */}
          <Link 
            to="/blog" 
            className="group flex items-center gap-2 font-bold uppercase tracking-widest text-sm border-b-2 border-black pb-1 hover:text-emerald-600 hover:border-emerald-600 transition-all"
          >
            View All Articles <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {recentArticles.map((article) => (
            <Link key={article.slug} to={`/blog/${article.slug}`} className="group">
              <div className="overflow-hidden mb-6 bg-gray-100 aspect-video rounded-xl">
                {/* Optional: Add article images here later */}
                <div className="w-full h-full flex items-center justify-center text-gray-400 tanker-font text-2xl uppercase opacity-20">
                  {article.label || "Strategy"}
                </div>
              </div>
              <span className="text-emerald-600 font-bold text-xs uppercase tracking-widest">
                {article.date}
              </span>
              <h3 className="text-2xl tanker-font uppercase mt-2 group-hover:text-emerald-600 transition-colors">
                {article.title}
              </h3>
              <p className="mt-3 bespoke-serif text-gray-600 line-clamp-2">
                {article.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;