import { useState } from 'react';
import { X, Download, Eye } from 'lucide-react';
import api from '../services/api';

const CVViewer = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Base URL for the backend CV
  const cvUrl = api.defaults.baseURL ? `${api.defaults.baseURL}/cv/download` : 'http://localhost:3001/api/cv/download';

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 border-2 border-primary text-primary hover:bg-primary hover:text-white"
      >
        <Eye size={20} />
        View Resume
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4 sm:p-8 animate-fade-in">
          <div className="bg-[var(--background)] w-full max-w-5xl h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-slide-up border border-[var(--border)]">
            
            {/* Header */}
            <div className="px-6 py-4 border-b border-[var(--border)] flex justify-between items-center bg-[var(--background-alt)]">
              <h3 className="text-xl font-bold gradient-text">Vilal Ali - CV</h3>
              <div className="flex items-center gap-4">
                <a 
                  href={cvUrl} 
                  download 
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-[var(--primary)] hover:opacity-80 transition-opacity font-medium"
                >
                  <Download size={20} /> Download
                </a>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-[var(--background)] rounded-full transition-colors text-[var(--foreground)]"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* PDF iframe */}
            <div className="flex-1 w-full bg-gray-100 dark:bg-gray-800">
              <iframe 
                src={`${cvUrl}#view=FitH`} 
                title="Vilal Ali CV"
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CVViewer;
