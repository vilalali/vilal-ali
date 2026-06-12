import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Services from './components/Services';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import Admin from './pages/Admin';
import ProjectProfile from './pages/ProjectProfile';
import PublicationProfile from './pages/PublicationProfile';
import GithubProjects from './pages/GithubProjects';
import ParticleBackground from './components/ParticleBackground';

import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import ExperiencePage from './pages/ExperiencePage';
import EducationPage from './pages/EducationPage';
import ServicesPage from './pages/ServicesPage';
import TestimonialsPage from './pages/TestimonialsPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import AllPublicationsPage from './pages/AllPublicationsPage';
import BlogProfile from './pages/BlogProfile';
import VisitorCounter from './components/VisitorCounter';

function Portfolio() {
  return (
    <div className="min-h-screen bg-transparent text-text transition-colors duration-300 font-sans relative flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Publications />
        <Blog />
        <VisitorCounter />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <ParticleBackground />
        <Router>
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/publications" element={<AllPublicationsPage />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/project/:id" element={<ProjectProfile />} />
            <Route path="/projects" element={<GithubProjects />} />
            <Route path="/publication/:id" element={<PublicationProfile />} />
            <Route path="/blog/:id" element={<BlogProfile />} />
          </Routes>
          <ChatWidget />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
