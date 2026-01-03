import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { articles } from '../data/articles'; 
import { ChevronLeft, Clock, Calendar, ArrowRight } from 'lucide-react';

const PostDetail = () => {
  const { slug } = useParams();
  
  // Find current post
  const post = articles.find((a) => a.slug === slug);

  // Find other posts for the "Read Next" section (excludes current)
  const relatedPosts = articles
    .filter((a) => a.slug !== slug)
    .slice(0, 2);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]); // Scrolls to top when switching between articles

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bespoke-serif text-center px-6">
        <div>
          <h2 className="text-4xl tanker-font uppercase mb-4">Article Not Found</h2>
          <Link to="/blog" className="text-emerald-600 font-bold uppercase tracking-widest hover:underline">
            Back to Journal
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="pt-32 pb-20 px-6 bg-white min-h-screen animate-in">
      <div className="max-w-3xl mx-auto">
        {/* Navigation */}
        <Link to="/blog" className="inline-flex items-center text-emerald-600 mb-12 font-bold uppercase tracking-widest text-sm group">
          <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Journal
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-6 text-gray-500 bespoke-serif mb-6 italic">
            <span className="flex items-center gap-1"><Calendar size={16}/> {post.date}</span>
            <span className="flex items-center gap-1"><Clock size={16}/> {post.readTime}</span>
          </div>
          <h1 className="text-5xl md:text-7xl tanker-font uppercase leading-[0.9] mb-8">
            {post.title}
          </h1>
          
          {post.image && (
            <div className="my-12 rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-gray-50">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-auto object-cover max-h-[600px]"
              />
            </div>
          )}
        </header>

        {/* The Content Area - styled by the blog-content-area class in App.css */}
        <div 
          className="bespoke-serif text-xl leading-relaxed text-gray-800 blog-content-area"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />

        {/* Footer: Read Next Section */}
        {relatedPosts.length > 0 && (
          <footer className="mt-24 pt-16 border-t border-gray-100">
            <h3 className="tanker-font text-3xl uppercase mb-10">Continue Reading</h3>
            <div className="grid md:grid-cols-2 gap-10">
              {relatedPosts.map((related) => (
                <Link key={related.slug} to={`/blog/${related.slug}`} className="group">
                  <div className="aspect-video rounded-xl overflow-hidden bg-gray-100 mb-4">
                    <img 
                      src={related.image} 
                      alt={related.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  <h4 className="tanker-font text-xl uppercase group-hover:text-emerald-600 transition-colors">
                    {related.title}
                  </h4>
                  <div className="flex items-center gap-2 text-emerald-600 font-bold uppercase text-xs mt-2 tracking-widest">
                    Read Article <ArrowRight size={14} />
                  </div>
                </Link>
              ))}
            </div>
          </footer>
        )}
      </div>
    </article>
  );
};

export default PostDetail;