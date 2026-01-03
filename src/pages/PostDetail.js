import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { articles } from '../data/articles'; 
import { ChevronLeft, Clock, Calendar } from 'lucide-react';

const PostDetail = () => {
  const { slug } = useParams();
  const post = articles.find((a) => a.slug === slug);

  // DEBUGGING: Check your console to see what is being loaded
  console.log("Current Post Data:", post);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Link to="/blog">Post not found. Return to Blog</Link>
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
            <span className="flex items-center gap-1"><Clock size={16}/> {post.readTime || "5 min read"}</span>
          </div>
          <h1 className="text-5xl md:text-7xl tanker-font uppercase leading-[0.9] mb-8">
            {post.title}
          </h1>
          
          {/* THE FIX: Ensure this matches the property name in articles.js */}
          {post.image ? (
            <div className="my-12 rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-gray-100">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-auto object-cover max-h-[600px]"
                onLoad={() => console.log("Image loaded successfully")}
                onError={(e) => console.error("Image failed to load:", e)}
              />
            </div>
          ) : (
            <p className="text-red-500">Debug: No image property found in articles.js for this post.</p>
          )}
        </header>

        <div 
          className="bespoke-serif text-xl leading-relaxed text-gray-800 blog-content-area"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />
      </div>
    </article>
  );
};

export default PostDetail;