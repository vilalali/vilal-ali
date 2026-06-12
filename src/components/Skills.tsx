import { motion } from 'framer-motion';

export default function Skills() {
  const skillCategories = [
    {
      title: "AI/ML Skills",
      skills: [
        { name: "Machine Learning / Deep Learning", level: 85 },
        { name: "NLP & Large Language Models", level: 80 },
        { name: "PyTorch / TensorFlow", level: 75 },
      ]
    },
    {
      title: "Architect and Lead",
      skills: [
        { name: "System Architecture", level: 90 },
        { name: "Technical Leadership", level: 85 },
        { name: "Agile & Project Management", level: 90 },
      ]
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "React / React Native", level: 90 },
        { name: "JavaScript / TypeScript", level: 85 },
        { name: "HTML5 / Tailwind CSS / Bootstrap", level: 95 },
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js / Express", level: 80 },
        { name: "RESTful APIs", level: 85 },
        { name: "Python", level: 90 },
      ]
    },
    {
      title: "Database & Cloud",
      skills: [
        { name: "MongoDB / MySQL", level: 80 },
        { name: "AWS (EC2, S3)", level: 70 },
        { name: "Docker", level: 65 },
      ]
    },
    {
      title: "Design & Tools",
      skills: [
        { name: "Figma / Adobe XD", level: 85 },
        { name: "Git & GitHub", level: 90 },
        { name: "UI/UX Principles", level: 85 },
      ]
    }
  ];

  return (
    <section id="skills" className="section py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-heading mb-4"
          >
            My <span className="text-primary-500">Skills</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "60px" }}
            viewport={{ once: true }}
            className="h-1 bg-primary-500 mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {skillCategories.map((category, catIdx) => (
            <motion.div 
              key={catIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.1 }}
              className="glass-card p-8"
            >
              <h3 className="text-2xl font-bold font-heading mb-8 text-primary-500">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-text">{skill.name}</span>
                      <span className="text-text-muted">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-primary-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
