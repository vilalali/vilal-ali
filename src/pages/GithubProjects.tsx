import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Code, ExternalLink, ArrowLeft } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import api, { BACKEND_URL } from '../services/api';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface Project {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const GithubProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await api.get('/project?featured=false');
        setProjects(data);
      } catch (err) {
        console.error('Error fetching projects', err);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen bg-transparent text-text font-sans relative">
      <Navbar />
      <main className="pt-20 flex-grow">
        <section className="section py-20 relative">
          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <div className="text-center mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold font-heading mb-4 text-text flex items-center justify-center gap-4"
              >
                <FaGithub className="text-primary-500 hidden md:block" size={40} />
                Full <span className="text-primary-500">GitHub Portfolio</span>
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
                {projects.map((project) => (
                  <Link
                    to={`/project/${project._id}`}
                    key={project._id}
                    className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 block h-full flex flex-col cursor-pointer"
                  >
                    <div className="h-48 overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent z-10"></div>
                      <img
                        src={project.imageUrl ? (project.imageUrl.startsWith('http') ? project.imageUrl : `${BACKEND_URL}${project.imageUrl}`) : `${BACKEND_URL}/project/default.webp`}
                        alt={project.title}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = `${BACKEND_URL}/project/default.webp`;
                        }}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    <div className="p-6 flex flex-col flex-grow z-20 -mt-6">
                      <h3 className="text-xl font-bold font-heading text-text mb-2 line-clamp-2">{project.title}</h3>
                      <p className="text-text-muted mb-4 line-clamp-3 text-sm flex-grow">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.slice(0, 3).map((tag, idx) => (
                          <span key={idx} className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary-600 dark:text-primary-400 rounded-md">
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="text-xs font-medium px-2 py-1 bg-gray-100 dark:bg-gray-800 text-text-muted rounded-md">
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>

                      <div className="flex gap-4 mt-auto pt-4 border-t border-border">
                        {project.githubUrl && project.githubUrl !== '#' && (
                          <span className="flex items-center gap-1 text-sm text-text-muted group-hover:text-primary-500 transition-colors">
                            <FaGithub size={16} /> Code
                          </span>
                        )}
                        {project.liveUrl && project.liveUrl !== '#' && (
                          <span className="flex items-center gap-1 text-sm text-text-muted group-hover:text-primary-500 transition-colors">
                            <ExternalLink size={16} /> Live
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GithubProjects;
