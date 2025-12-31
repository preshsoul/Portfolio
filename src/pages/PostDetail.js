import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { blogPosts } from '../data/posts';

const PostDetail = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} - Precious Ajayi`;
    }
    window.scrollTo(0, 0);
  }, [slug, post]);

  if (!post) {
    return (
      <div className="pt-40 pb-20 px-6 text-center min-h-screen">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Post Not Found</h2>
        <p className="text-gray-600 mb-8">Sorry, this blog post doesn't exist.</p>
        <Link 
          to="/" 
          className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold"
        >
          <ChevronLeft size={20} /> Return to Home
        </Link>
      </div>
    );
  }

  return (
    <article className="pt-32 pb-20 px-6 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto">
        <Link 
          to="/#blog" 
          className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8 font-medium transition-colors"
        >
          <ChevronLeft size={20} /> Back to Blog
        </Link>
        
        <header className="mb-12">
          <div className="text-emerald-600 font-bold uppercase tracking-wider text-sm mb-4">
            {post.category}
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            {post.title}
          </h1>
          <time className="text-gray-500 border-l-4 border-emerald-500 pl-4 block">
            {post.date}
          </time>
        </header>

        <div 
          className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link 
            to="/#blog" 
            className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold transition-colors"
          >
            <ChevronLeft size={20} /> Back to All Posts
          </Link>
        </div>
      </div>
    </article>
  );
};

export default PostDetail;