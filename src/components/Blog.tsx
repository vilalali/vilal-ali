import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import api, { BACKEND_URL } from '../services/api';

interface BlogPost {
  _id: string;
  title: string;
  excerpt: string;
  readTime: string;
  imageUrl?: string;
  createdAt: string;
}

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data } = await api.get('/blog');
        setBlogPosts(data);
      } catch (error) {
        console.error('Failed to fetch blogs', error);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <section id="blog" className="section py-20 bg-[var(--background)]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-heading mb-4"
          >
            Latest <span className="text-primary-500">Insights</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "60px" }}
            viewport={{ once: true }}
            className="h-1 bg-primary-500 mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(0, 3).map((post, index) => (
            <motion.div
              key={post._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass-card rounded-2xl overflow-hidden hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="h-48 overflow-hidden">
                <Link to={`/blog/${post._id}`}>
                  <img 
                    src={post.imageUrl ? (post.imageUrl.startsWith('http') ? post.imageUrl : `${BACKEND_URL}${post.imageUrl}`) : 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800'} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </Link>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center text-sm text-[var(--primary)] font-medium mb-3">
                  <span>{new Date(post.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric'})}</span>
                  <span>{post.readTime}</span>
                </div>
                <Link to={`/blog/${post._id}`}>
                  <h3 className="text-xl font-bold mb-3 hover:text-[var(--primary)] transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-text-muted text-sm line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="mt-6 pt-4 border-t border-[var(--border)]">
                  <Link to={`/blog/${post._id}`} className="text-sm font-semibold hover:text-[var(--primary)] transition-colors uppercase tracking-wider flex items-center gap-2">
                    Read Article &rarr;
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
           <Link to="/blog" className="btn btn-outline">View All Posts</Link>
        </div>
      </div>
    </section>
  );
}
