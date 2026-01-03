import React from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../data/articles'; // We will create this file

const Blog = () => {
  return (
    <div className="pt-32 pb-20 px-6 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl font-normal mb-4 tanker-font uppercase">The Strategy Journal</h1>
        <p className="text-xl text-gray-600 mb-12 italic bespoke-serif">Insights on positioning, brand authority, and content systems.</p>
        
        <div className="grid gap-12">
          {articles.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className="group block border-b border-gray-100 pb-8">
              <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm">{post.date}</span>
              <h2 className="text-3xl mt-2 group-hover:text-emerald-600 transition-colors tanker-font uppercase">{post.title}</h2>
              <p className="mt-4 text-gray-600 line-clamp-2 bespoke-serif">{post.excerpt}</p>
              <div className="mt-4 flex items-center gap-2 text-black font-bold text-sm uppercase">
                Read Article <span className="group-hover:translate-x-2 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;