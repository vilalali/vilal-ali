import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, ExternalLink, Users, Calendar, Award } from 'lucide-react';
import api, { BACKEND_URL } from '../services/api';
import Navbar from '../components/Navbar';

interface Publication {
  _id: string;
  title: string;
  authors: string[];
  conference: string;
  link: string;
  date?: string;
  abstract?: string;
  imageUrl?: string;
}

const PublicationProfile = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [publication, setPublication] = useState<Publication | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPublication = async () => {
      try {
        const { data } = await api.get(`/publications/${id}`);
        setPublication(data);
      } catch (err) {
        console.error('Error fetching publication', err);
      } finally {
        setLoading(false);
      }
    };
    fetchPublication();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  if (!publication) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-bg text-text">
        <h1 className="text-3xl font-bold mb-4">Publication Not Found</h1>
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
      <div className="h-[40vh] md:h-[50vh] w-full relative mt-[72px]">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img 
          src={publication.imageUrl ? (publication.imageUrl.startsWith('http') ? publication.imageUrl : `${BACKEND_URL}${publication.imageUrl}`) : `${BACKEND_URL}/publications/default.webp`} 
          alt={publication.title} 
          onError={(e) => {
            (e.target as HTMLImageElement).src = `${BACKEND_URL}/publications/default.webp`;
          }}
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
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-4xl md:text-6xl font-bold font-heading text-white mb-4 leading-tight">{publication.title}</h1>
            <div className="flex flex-wrap gap-4 items-center text-gray-300">
              <span className="flex items-center gap-2"><Award size={18} /> Publication</span>
              {publication.date && (
                <span className="flex items-center gap-2"><Calendar size={18} /> {publication.date}</span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            {publication.abstract && (
              <section>
                <h2 className="text-2xl font-bold mb-4 text-text flex items-center gap-2 border-b border-border pb-4">
                  Abstract
                </h2>
                <p className="text-lg text-text-muted leading-relaxed whitespace-pre-line">
                  {publication.abstract}
                </p>
              </section>
            )}
            
            <section>
              <h2 className="text-2xl font-bold mb-4 text-text flex items-center gap-2 border-b border-border pb-4">
                Authors
              </h2>
              <div className="flex flex-wrap gap-2">
                {publication.authors.map((author, i) => (
                  <span key={i} className={`px-4 py-2 rounded-lg ${author.includes('Vilal') ? 'bg-primary/20 text-primary-500 font-bold border border-primary/30' : 'bg-card border border-border text-text'}`}>
                    {author}
                  </span>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Conference Info */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-4 text-text flex items-center gap-2">
                <BookOpen className="text-primary-500" size={20} /> Venue
              </h3>
              <p className="text-lg text-text font-medium">
                {publication.conference}
              </p>
            </div>

            {/* Links */}
            {publication.link && publication.link !== '#' && (
              <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-bold mb-4 text-text">Actions</h3>
                <a 
                  href={publication.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full p-3 bg-primary text-black font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <ExternalLink size={20} /> Read Full Paper
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicationProfile;
