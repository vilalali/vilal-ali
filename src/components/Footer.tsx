import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[var(--background)] border-t border-[var(--border)] py-8 text-center text-[var(--foreground)] opacity-70 w-full mt-auto relative z-10">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-text-muted">© {new Date().getFullYear()} Vilal Ali. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="https://github.com/vilal" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-[var(--primary)] transition-colors font-medium">GitHub</a>
          <a href="https://linkedin.com/in/vilal" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-[var(--primary)] transition-colors font-medium">LinkedIn</a>
          <a href="https://twitter.com/vilal" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-[var(--primary)] transition-colors font-medium">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
