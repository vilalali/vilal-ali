import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Edit3 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import api, { BACKEND_URL } from '../services/api';
import Navbar from '../components/Navbar';

interface Blog {
  _id: string;
  title: string;
  excerpt: string;
  content: string;
  readTime: string;
  imageUrl?: string;
  tags: string[];
  createdAt: string;
}

const BlogProfile = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [otherBlogs, setOtherBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const { data } = await api.get(`/blog/${id}`);
        setBlog(data);
        const { data: allBlogs } = await api.get('/blog');
        setOtherBlogs(allBlogs.filter((b: Blog) => b._id !== id).slice(0, 3));
      } catch (err) {
        console.error('Error fetching blog', err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-transparent text-text text-xl">Loading story...</div>;
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-transparent text-text">
        <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
        <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 bg-primary/10 hover:bg-primary/20 transition-colors px-4 py-2 rounded-full mt-4 font-medium">
          <ArrowLeft size={16} /> Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-transparent text-text pb-20 flex flex-col">
      <Navbar />
      
      {/* Header Image Area */}
      <div className="h-[40vh] md:h-[60vh] w-full relative mt-[72px]">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img 
          src={blog.imageUrl ? (blog.imageUrl.startsWith('http') ? blog.imageUrl : `${BACKEND_URL}${blog.imageUrl}`) : 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1600'} 
          alt={blog.title} 
          className="w-full h-full object-cover"
        />
        
        {/* Navigation */}
        <div className="absolute top-4 left-0 w-full p-6 z-20">
          <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 px-4 py-2 bg-black/40 hover:bg-primary-500 text-white rounded-full backdrop-blur-sm transition-colors font-medium">
            <ArrowLeft size={18} /> Back
          </button>
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 z-20 bg-gradient-to-t from-bg to-transparent">
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex flex-wrap gap-2 mb-4">
              {blog.tags.map((tag, i) => (
                <span key={i} className="px-3 py-1 bg-primary/20 text-primary-400 rounded-full text-xs font-bold uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-heading text-white mb-6 leading-tight">{blog.title}</h1>
            <div className="flex flex-wrap gap-6 items-center text-gray-300 font-medium">
              <span className="flex items-center gap-2"><Calendar size={18} /> {new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric'})}</span>
              <span className="flex items-center gap-2"><Clock size={18} /> {blog.readTime}</span>
              <span className="flex items-center gap-2"><Edit3 size={18} /> Vilal Ali</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content (Left Side) */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="prose prose-lg max-w-none text-text
                  prose-headings:font-heading prose-headings:font-bold prose-headings:text-text 
                  prose-p:text-text prose-p:leading-relaxed 
                  prose-a:text-primary-500 prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-text prose-strong:font-bold
                  prose-code:text-primary-500 prose-code:bg-primary/10 prose-code:px-1 prose-code:rounded
                  prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-4 prose-pre:rounded-xl
                  prose-li:text-text prose-ul:text-text prose-ol:text-text
                  prose-img:rounded-xl prose-img:shadow-lg">
                <ReactMarkdown>
                  {blog.content}
                </ReactMarkdown>
              </div>
            </div>
          </div>

          {/* Sidebar (Right Side) */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <h3 className="text-2xl font-bold font-heading mb-6 border-b border-[var(--border)] pb-4">Popular Posts</h3>
              <div className="flex flex-col gap-6">
                {otherBlogs.map(otherBlog => (
                  <Link 
                    key={otherBlog._id} 
                    to={`/blog/${otherBlog._id}`}
                    className="group flex gap-4 items-center p-3 -mx-3 rounded-xl hover:bg-[var(--card)] hover:shadow-md transition-all"
                  >
                    <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0">
                      <img 
                        src={otherBlog.imageUrl ? (otherBlog.imageUrl.startsWith('http') ? otherBlog.imageUrl : `${BACKEND_URL}${otherBlog.imageUrl}`) : 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800'} 
                        alt={otherBlog.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm line-clamp-2 group-hover:text-[var(--primary)] transition-colors">
                        {otherBlog.title}
                      </h4>
                      <div className="text-xs text-text-muted mt-2 flex gap-2">
                        <span>{new Date(otherBlog.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric'})}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BlogProfile;
