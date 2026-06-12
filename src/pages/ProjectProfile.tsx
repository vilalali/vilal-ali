import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Calendar, Code, Layout } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import api, { BACKEND_URL } from '../services/api';
import Navbar from '../components/Navbar';

interface Project {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  createdAt: string;
}

const ProjectProfile = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const { data } = await api.get(`/project/${id}`);
        setProject(data);
      } catch (err) {
        console.error('Error fetching project', err);
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-transparent">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-transparent text-text">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
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
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img 
          src={project.imageUrl ? (project.imageUrl.startsWith('http') ? project.imageUrl : `${BACKEND_URL}${project.imageUrl}`) : `${BACKEND_URL}/project/default.webp`} 
          alt={project.title} 
          onError={(e) => {
            (e.target as HTMLImageElement).src = `${BACKEND_URL}/project/default.webp`;
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
            <h1 className="text-4xl md:text-6xl font-bold font-heading text-white mb-4">{project.title}</h1>
            <div className="flex flex-wrap gap-4 items-center text-gray-300">
              <span className="flex items-center gap-2"><Calendar size={18} /> {new Date(project.createdAt).getFullYear()}</span>
              <span className="flex items-center gap-2"><Layout size={18} /> Full Stack Development</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-text flex items-center gap-2">
                <Code className="text-primary-500" /> Project Overview
              </h2>
              <p className="text-lg text-text-muted leading-relaxed">
                {project.description}
              </p>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Tech Stack */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-bold mb-4 text-text">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 bg-primary/10 text-primary-600 dark:text-primary-400 rounded-md text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-bold mb-4 text-text">Links</h3>
              <div className="space-y-3">
                {project.githubUrl && project.githubUrl !== '#' && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 w-full p-3 bg-bg border border-border hover:border-primary-500 rounded-lg transition-colors group"
                  >
                    <FaGithub size={20} className="group-hover:text-primary-500" />
                    <span>View Source Code</span>
                  </a>
                )}
                {project.liveUrl && project.liveUrl !== '#' && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 w-full p-3 bg-bg border border-border hover:border-primary-500 rounded-lg transition-colors group"
                  >
                    <ExternalLink size={20} className="group-hover:text-primary-500" />
                    <span>View Live Demo</span>
                  </a>
                )}
                {(!project.githubUrl || project.githubUrl === '#') && (!project.liveUrl || project.liveUrl === '#') && (
                  <p className="text-text-muted text-sm italic">Internal / Confidential Project</p>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectProfile;
