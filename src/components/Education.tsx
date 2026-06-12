import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import api from '../services/api';

interface EducationData {
  _id: string;
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export default function Education() {
  const [educations, setEducations] = useState<EducationData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEducations = async () => {
      try {
        const { data } = await api.get('/education');
        setEducations(data);
      } catch (err) {
        console.error('Error fetching educations', err);
      } finally {
        setLoading(false);
      }
    };
    fetchEducations();
  }, []);

  if (loading) {
    return (
      <section id="education" className="section py-24 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
      </section>
    );
  }

  return (
    <section id="education" className="section py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-heading mb-4"
          >
            My <span className="text-primary-500">Education</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "60px" }}
            viewport={{ once: true }}
            className="h-1 bg-primary-500 mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educations.map((edu, idx) => (
            <motion.div 
              key={edu._id || idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-primary-500/10 text-primary-500 rounded-full text-xs font-bold mb-4">
                    {edu.period}
                  </span>
                  <h3 className="text-xl font-bold font-heading text-text mb-2 line-clamp-2" title={edu.degree}>
                    {edu.degree}
                  </h3>
                  <h4 className="text-sm text-primary-500 font-medium mb-4 h-10">
                    {edu.institution}
                  </h4>
                </div>
                <p className="text-text-muted mt-auto">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
