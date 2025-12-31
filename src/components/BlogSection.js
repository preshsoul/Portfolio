import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/posts';

const BlogSection = () => {
  return (
    <section id="blog" className="py-20 px-6 bg-white" aria-labelledby="blog-heading">
      <div className="max-w-6xl mx-auto">
        <h2 id="blog-heading" className="text-4xl font-bold text-gray-900 mb-4">
          Latest Insights
        </h2>
        <p className="text-xl text-gray-600 mb-12">
          Strategic thinking on brand positioning and content
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.slug} 
              className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="text-sm text-emerald-600 font-semibold mb-2">
                  {post.category}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex justify-between items-center">
                  <time className="text-sm text-gray-500">{post.date}</time>
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="text-emerald-600 font-semibold hover:text-emerald-700 flex items-center gap-1 transition-colors"
                  >
                    Read More <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;