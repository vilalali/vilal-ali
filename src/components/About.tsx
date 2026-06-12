import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import api from '../services/api';

interface ProfileData {
  name: string;
  title: string;
  bio: string;
  location: string;
  email: string;
  stats?: {
    projects: number;
    yearsExp: number;
    designs: number;
    webApps: number;
  };
  profileImage?: string;
  cvImage?: string;
}

export default function About() {
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await api.get('/profile');
        setProfile(data);
      } catch (err) {
        console.error('Error fetching profile', err);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  if (loading) {
    return (
      <section id="about" className="section bg-card/50 dark:bg-card/20 py-24 relative flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
      </section>
    );
  }

  if (!profile) return null;

  const stats = profile.stats ? [
    { label: 'Years of Experience', value: `${profile.stats.yearsExp}+` },
    { label: 'Projects Delivered', value: `${profile.stats.projects}+` },
    { label: 'System Designs', value: `${profile.stats.designs}+` },
    { label: 'Web Applications', value: `${profile.stats.webApps}+` },
  ] : [];

  return (
    <section id="about" className="section bg-card/50 dark:bg-card/20 py-24 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-heading mb-4"
          >
            About <span className="text-primary-500">Me</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "60px" }}
            viewport={{ once: true }}
            className="h-1 bg-primary-500 mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* About Image Area */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary-500 translate-x-4 translate-y-4 rounded-2xl -z-10 opacity-20 dark:opacity-40"></div>
              <div className="glass-card p-2 w-full aspect-[4/5] overflow-hidden rounded-2xl">
                 <div className="w-full h-full bg-gray-200 dark:bg-gray-800 rounded-xl flex items-center justify-center text-text-muted overflow-hidden">
                    <iframe 
                      src={`${api.defaults.baseURL ? api.defaults.baseURL : 'http://localhost:3001/api'}/cv/download#view=FitH`} 
                      title="Vilal Ali CV"
                      className="w-full h-full border-0 rounded-xl"
                    />
                 </div>
              </div>
            </div>
          </motion.div>

          {/* About Content Area */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold font-heading">
              A passionate <span className="text-primary-500">{profile.title}</span> based in {profile.location.split(',')[1]?.trim() || 'India'}.
            </h3>
            
            <div className="space-y-4 text-text-muted dark:text-gray-300 leading-relaxed text-lg whitespace-pre-wrap">
              {profile.bio}
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
              <li className="flex items-center gap-3">
                <span className="text-primary-500 font-bold">Name:</span> 
                <span className="text-text">{profile.name}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary-500 font-bold">Email:</span> 
                <a href={`mailto:${profile.email}`} className="text-text hover:text-primary-500 transition-colors">{profile.email}</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary-500 font-bold">Location:</span> 
                <span className="text-text">{profile.location}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary-500 font-bold">Availability:</span> 
                <span className="text-green-500 font-medium">Open to work</span>
              </li>
            </ul>

            {stats.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-border mt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <h4 className="text-3xl font-bold font-heading text-primary-500 mb-2">{stat.value}</h4>
                    <p className="text-sm text-text-muted uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>
            )}

          </motion.div>
        </div>
      </div>
    </section>
  );
}
