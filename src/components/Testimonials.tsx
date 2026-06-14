import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, User } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Prof. Krishna Reddy P.",
      designation: "Professor | IIIT Hyderabad",
      content: "I highly recommend Vilal Ali. During his time at IIIT Hyderabad, he has consistently demonstrated exceptional skills as a Software Engineer. His ability to tackle complex problems and design robust solutions is commendable.",
      image: "assets/img/team/prof-krishna.png" // Placeholder path
    },
    {
      name: "Mohd Hozaifa Khan (PhD)",
      designation: "https://github.com/Khanitachi",
      content: "Vilal's technical expertise and problem-solving abilities are remarkable. He consistently delivers high-quality work and is a great asset to any team.",
      image: "assets/img/team/hozaifa.png" // Placeholder path
    },
    {
      name: "Rashid Ahmaed",
      designation: "CEO | eBhashasetu Pvt. Ltd.",
      content: "Working with Vilal has been an absolute pleasure. His dedication, technical prowess, and innovative mindset have significantly contributed to our success.",
      image: "assets/img/team/rashid.png" // Placeholder path
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-heading mb-4"
          >
            What <span className="text-primary-500">People Say</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "60px" }}
            viewport={{ once: true }}
            className="h-1 bg-primary-500 mx-auto rounded-full"
          />
        </div>

        <div className="relative">
          <div className="absolute -top-6 -left-6 md:-top-10 md:-left-10 text-primary-500/20 z-0">
            <Quote size={120} className="rotate-180" />
          </div>

          <div className="glass-card p-8 md:p-12 relative z-10 min-h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <p className="text-lg md:text-2xl text-text leading-relaxed mb-8 font-medium italic">
                  "{testimonials[currentIndex].content}"
                </p>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-primary-500/20 mb-4 overflow-hidden border-2 border-primary-500 flex items-center justify-center text-primary-500/50">
                    <User size={32} />
                  </div>
                  <h4 className="text-xl font-bold font-heading text-primary-500">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-text-muted text-sm">
                    {testimonials[currentIndex].designation}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-4 mt-8 relative z-20">
            <button
              onClick={prev}
              className="p-3 rounded-full glass hover:bg-primary-500 hover:text-black transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${idx === currentIndex ? 'bg-primary-500 w-8' : 'bg-border'
                    }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-3 rounded-full glass hover:bg-primary-500 hover:text-black transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
