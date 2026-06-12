import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import api from '../services/api';

interface ExperienceData {
  _id: string;
  title: string;
  company: string;
  period: string;
  description: string;
}

export default function Experience() {
  const [experiences, setExperiences] = useState<ExperienceData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const { data } = await api.get('/experience');
        setExperiences(data);
      } catch (err) {
        console.error('Error fetching experiences', err);
      } finally {
        setLoading(false);
      }
    };
    fetchExperiences();
  }, []);

  if (loading) {
    return (
      <section id="experience" className="section bg-card/50 dark:bg-card/20 py-24 relative flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
      </section>
    );
  }

  return (
    <section id="experience" className="section bg-card/50 dark:bg-card/20 py-24 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-heading mb-4"
          >
            My <span className="text-primary-500">Experience</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "60px" }}
            viewport={{ once: true }}
            className="h-1 bg-primary-500 mx-auto rounded-full"
          />
        </div>

        <div className="relative border-l-2 border-border ml-3 md:ml-0">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={exp._id || idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="mb-12 pl-8 md:pl-12 relative"
            >
              {/* Timeline Dot */}
              <div className="absolute w-6 h-6 bg-primary-500 rounded-full -left-[13px] top-1 border-4 border-bg shadow-[0_0_10px_rgba(239,210,54,0.5)]"></div>
              
              <div className="glass-card p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold font-heading text-text">{exp.title}</h3>
                    <h4 className="text-lg text-primary-500 font-medium">{exp.company}</h4>
                  </div>
                  <span className="inline-block mt-2 md:mt-0 px-4 py-1 bg-primary-500/10 text-primary-500 rounded-full text-sm font-semibold whitespace-nowrap border border-primary-500/20">
                    {exp.period}
                  </span>
                </div>
                
                <p className="text-text-muted font-medium whitespace-pre-wrap">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
