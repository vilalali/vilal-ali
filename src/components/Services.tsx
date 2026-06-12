import { motion } from 'framer-motion';
import { Monitor, Code, Smartphone, Database, PenTool, Globe, Cpu, Server, Layers } from 'lucide-react';
import { useEffect, useState } from 'react';
import api from '../services/api';

interface ServiceData {
  _id: string;
  title: string;
  description: string;
  iconName: string;
}

const IconMap: { [key: string]: any } = {
  Monitor: <Monitor className="w-10 h-10 text-primary-500" />,
  Code: <Code className="w-10 h-10 text-primary-500" />,
  Smartphone: <Smartphone className="w-10 h-10 text-primary-500" />,
  Database: <Database className="w-10 h-10 text-primary-500" />,
  PenTool: <PenTool className="w-10 h-10 text-primary-500" />,
  Globe: <Globe className="w-10 h-10 text-primary-500" />,
  Cpu: <Cpu className="w-10 h-10 text-primary-500" />,
  Server: <Server className="w-10 h-10 text-primary-500" />,
  Layers: <Layers className="w-10 h-10 text-primary-500" />
};

export default function Services() {
  const [services, setServices] = useState<ServiceData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const { data } = await api.get('/service');
        setServices(data);
      } catch (err) {
        console.error('Error fetching services', err);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  if (loading) {
    return (
      <section id="services" className="section bg-card/50 dark:bg-card/20 py-24 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
      </section>
    );
  }

  return (
    <section id="services" className="section bg-card/50 dark:bg-card/20 py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-heading mb-4"
          >
            My <span className="text-primary-500">Services</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "60px" }}
            viewport={{ once: true }}
            className="h-1 bg-primary-500 mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={service._id || idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 group hover:-translate-y-2 transition-all duration-300"
            >
              <div className="mb-6 p-4 inline-block bg-primary-500/10 rounded-2xl group-hover:bg-primary-500/20 transition-colors">
                {IconMap[service.iconName] || <Code className="w-10 h-10 text-primary-500" />}
              </div>
              <h3 className="text-2xl font-bold font-heading text-text mb-4">{service.title}</h3>
              <p className="text-text-muted leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
