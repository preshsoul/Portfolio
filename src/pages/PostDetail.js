import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { articles } from '../data/articles'; 
import { ChevronLeft, Clock, Calendar } from 'lucide-react';

const PostDetail = () => {
  const { slug } = useParams();
  
  // Find the post matching the URL slug
  const post = articles.find((a) => a.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bespoke-serif text-center px-6">
        <div>
          <h2 className="text-4xl tanker-font uppercase mb-4">Article Not Found</h2>
          <p className="mb-8 bespoke-serif text-gray-600">The page you're looking for doesn't exist or has been moved.</p>
          <Link to="/blog" className="px-8 py-3 bg-emerald-600 text-white font-bold uppercase tracking-widest rounded-full hover:bg-emerald-700 transition-all">
            Back to Journal
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="pt-32 pb-20 px-6 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto">
        {/* Navigation Back */}
        <Link to="/blog" className="inline-flex items-center text-emerald-600 mb-12 font-bold uppercase tracking-widest text-sm group">
          <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Journal
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center gap-6 text-gray-500 bespoke-serif mb-6 italic">
            <span className="flex items-center gap-1"><Calendar size={16}/> {post.date}</span>
            <span className="flex items-center gap-1"><Clock size={16}/> {post.readTime || "5 min read"}</span>
          </div>
          <h1 className="text-5xl md:text-7xl tanker-font uppercase leading-[0.9] mb-8">
            {post.title}
          </h1>
          
          {/* Main Article Image */}
          {post.image && (
            <div className="my-12 rounded-2xl overflow-hidden shadow-xl border border-gray-100">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-auto object-cover max-h-[500px]"
              />
            </div>
          )}
        </header>

        {/* Article Content - Rendered as HTML */}
        <div 
          className="bespoke-serif text-xl leading-relaxed text-gray-800 blog-content-area"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />
        
        {/* Footer Call to Action */}
        <footer className="mt-20 pt-12 border-t border-gray-100 text-center">
          <h3 className="tanker-font text-3xl uppercase mb-4">Enjoyed this perspective?</h3>
          <p className="bespoke-serif text-gray-600 mb-8">Let's discuss how we can apply these strategies to your brand.</p>
          <Link to="/#contact" className="inline-block px-10 py-4 bg-black text-white font-bold uppercase tracking-widest hover:bg-emerald-600 transition-colors">
            Work With Me
          </Link>
        </footer>
      </div>
    </article>
  );
};

export default PostDetail;