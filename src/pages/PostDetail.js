import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { articles } from '../data/articles'; // Make sure this points to your new data
import { ChevronLeft, Clock, Calendar } from 'lucide-react';

const PostDetail = () => {
  const { slug } = useParams();
  const post = articles.find((a) => a.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bespoke-serif">
        <div className="text-center">
          <h2 className="text-3xl tanker-font uppercase mb-4">Article Not Found</h2>
          <Link to="/blog" className="text-emerald-600 underline">Back to Journal</Link>
        </div>
      </div>
    );
  }

  return (
    <article className="pt-32 pb-20 px-6 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto">
        <Link to="/blog" className="inline-flex items-center text-emerald-600 mb-12 font-bold uppercase tracking-widest text-sm group">
          <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Journal
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-6 text-gray-500 bespoke-serif mb-6 italic">
            <span className="flex items-center gap-1"><Calendar size={16}/> {post.date}</span>
            <span className="flex items-center gap-1"><Clock size={16}/> {post.readTime}</span>
          </div>
          <h1 className="text-5xl md:text-7xl tanker-font uppercase leading-[0.9] mb-8">
            {post.title}
          </h1>
          
          {/* Main Article Image */}
          {post.image && (
            <div className="my-12 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-auto object-cover"
              />
            </div>
          )}
        </header>

        <div className="bespoke-serif text-xl leading-relaxed text-gray-800 space-y-8">
          {/* This renders the content. Note: for complex formatting, we'd use a Markdown parser later */}
          {post.content}
        </div>
      </div>
    </article>
  );
};

export default PostDetail;