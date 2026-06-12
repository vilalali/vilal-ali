import { ArrowRight, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import api from '../services/api';
import CVViewer from './CVViewer';

interface ProfileData {
  name: string;
  title: string;
  bio: string;
  email: string;
  socialLinks?: {
    github: string;
    linkedin: string;
    twitter: string;
  };
  profileImage?: string;
}

export default function Hero() {
  const [profile, setProfile] = useState<ProfileData | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await api.get('/profile');
        setProfile(data);
      } catch (err) {
        console.error('Error fetching profile', err);
      }
    };
    fetchProfile();
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-6 text-center lg:text-left"
          >
            <h2 className="text-primary-500 font-semibold tracking-wider uppercase text-sm md:text-base">
              Welcome to my world
            </h2>
            
            <h1 className="text-5xl md:text-7xl font-bold font-heading leading-tight">
              Hi, I'm <span className="text-primary-500">{profile?.name || 'Vilal Ali'}</span>
              <br />
              <span className="text-text-muted dark:text-gray-400 text-3xl md:text-5xl block mt-2">
                {profile?.title || 'Lead Software Engineer'}
              </span>
            </h1>
            
            <p className="text-lg text-text-muted dark:text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {profile?.bio ? profile.bio.split('.')[0] + '.' : "I specialize in building exceptional digital experiences."}
            </p>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <a href="#contact" className="btn btn-primary group">
                Let's Talk
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <CVViewer />
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-6 pt-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-text-muted">Find me on</p>
              <div className="flex gap-4">
                <a href={profile?.socialLinks?.github || "https://github.com/vilalali"} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full glass hover:-translate-y-1 transition-all text-text hover:text-primary-500">
                  <FaGithub size={20} />
                </a>
                <a href={profile?.socialLinks?.linkedin || "https://linkedin.com/in/vilal-ali/"} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full glass hover:-translate-y-1 transition-all text-text hover:text-primary-500">
                  <FaLinkedin size={20} />
                </a>
                <a href={`mailto:${profile?.email || 'vilal.ali@research.iiit.ac.in'}`} className="p-2 rounded-full glass hover:-translate-y-1 transition-all text-text hover:text-primary-500">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="w-[400px] h-[500px] mx-auto relative rounded-3xl overflow-hidden glass-card p-4 before:absolute before:inset-0 before:bg-gradient-to-tr before:from-primary-500/20 before:to-transparent before:z-10">
               {/* Replace with actual image later, using placeholder style for now */}
               <div className="w-full h-full bg-gray-200 dark:bg-gray-800 rounded-2xl flex items-center justify-center text-text-muted">
                 <img src={profile?.profileImage ? (profile.profileImage.startsWith('http') ? profile.profileImage : `${(api.defaults.baseURL || 'http://localhost:3001/api').replace('/api', '')}${profile.profileImage}`) : "https://images.unsplash.com/photo-1555952517-2e8af104f81e?auto=format&fit=crop&q=80"} alt="Hero" className="w-full h-full object-cover rounded-xl opacity-80" />
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
