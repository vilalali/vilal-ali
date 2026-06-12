import { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { id: '', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'publications', label: 'Publications' },
  { id: 'services', label: 'Services' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const handleLinkClick = () => {
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 glass border-b border-border shadow-md`}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            onClick={handleLinkClick}
            className="text-2xl font-bold font-heading flex items-center"
          >
            <span className="text-primary-500 text-3xl">V</span>ilal
            <span className="text-primary-500">.</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map(link => (
                <Link
                  key={link.id}
                  to={`/${link.id}`}
                  className={`text-sm font-medium transition-colors hover:text-primary-500 ${
                    (location.pathname === `/${link.id}` || (location.pathname === '/' && link.id === '')) ? 'text-primary-500' : 'text-text-muted dark:text-gray-300'
                  }`}
                  onClick={handleLinkClick}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            
            <div className="flex items-center space-x-4">
              <button 
                onClick={toggleTheme} 
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <a
                href="/assets/cv/Vilal-Ali_Lead-Platform-Architect-Principal_Engineer-26.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary px-5 py-2 text-sm"
              >
                Resume
              </a>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center space-x-4 lg:hidden">
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              className="p-2 text-text dark:text-gray-200"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden absolute top-full left-0 right-0 glass border-b border-border transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-[500px] opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <div className="container mx-auto px-6 flex flex-col space-y-4">
          {navLinks.map(link => (
            <Link
              key={link.id}
              to={`/${link.id}`}
              className={`text-base font-medium py-2 transition-colors ${
                (location.pathname === `/${link.id}` || (location.pathname === '/' && link.id === '')) ? 'text-primary-500' : 'text-text-muted dark:text-gray-300'
              }`}
              onClick={handleLinkClick}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/assets/cv/Vilal-Ali_Lead-Platform-Architect-Principal_Engineer-26.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary w-full justify-center mt-4"
          >
            Download Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
