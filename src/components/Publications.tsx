import { useEffect, useState } from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import api, { BACKEND_URL } from '../services/api';

interface Publication {
  _id: string;
  title: string;
  authors: string[];
  conference: string;
  link: string;
  date?: string;
  imageUrl?: string;
}

const Publications = () => {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        const { data } = await api.get('/publications');
        setPublications(data);
      } catch (err) {
        console.error('Error fetching publications', err);
      } finally {
        setLoading(false);
      }
    };
    fetchPublications();
  }, []);

  if (!loading && publications.length === 0) return null;

  return (
    <section id="publications" className="section py-20 bg-background-alt relative">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-heading mb-4"
          >
            Academic <span className="text-primary-500">Publications</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "60px" }}
            viewport={{ once: true }}
            className="h-1 bg-primary-500 mx-auto rounded-full"
          />
        </div>

        {loading ? (
          <div className="flex justify-center p-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {publications.slice(0, 3).map((pub) => (
              <Link 
                to={`/publication/${pub._id}`} 
                key={pub._id}
                className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 block h-full flex flex-col cursor-pointer"
              >
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent z-10"></div>
                  <img 
                    src={pub.imageUrl ? (pub.imageUrl.startsWith('http') ? pub.imageUrl : `${BACKEND_URL}${pub.imageUrl}`) : `${BACKEND_URL}/publications/default.webp`} 
                    alt={pub.title} 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `${BACKEND_URL}/publications/default.webp`;
                    }}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6 flex flex-col flex-grow z-20 -mt-6">
                  <h3 className="text-xl font-bold font-heading text-text mb-2 line-clamp-3">{pub.title}</h3>
                  <p className="text-text-muted mb-4 text-sm flex-grow italic line-clamp-2">
                    {pub.authors.join(', ')}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary-600 dark:text-primary-400 rounded-md">
                      {pub.conference}
                    </span>
                    {pub.date && (
                      <span className="text-xs font-medium px-2 py-1 bg-gray-100 dark:bg-gray-800 text-text-muted rounded-md">
                        {pub.date}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-4 mt-auto pt-4 border-t border-border">
                    {pub.link && pub.link !== '#' && (
                      <span className="flex items-center gap-1 text-sm text-text-muted group-hover:text-primary-500 transition-colors">
                        <ExternalLink size={16} /> Read Paper
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <Link 
            to="/publications" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
          >
            <BookOpen size={20} />
            View All Publications
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Publications;
