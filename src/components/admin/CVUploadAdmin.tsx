import React, { useState } from 'react';
import api from '../../services/api';

const CVUploadAdmin = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [message, setMessage] = useState('');

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.type !== 'application/pdf') {
      setMessage('Only PDF files are allowed.');
      return;
    }

    setIsUploading(true);
    setMessage('');

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await api.post('/cv/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage(response.data.message || 'CV uploaded successfully!');
    } catch (err: any) {
      setMessage(err.response?.data?.message || 'Failed to upload CV');
    } finally {
      setIsUploading(false);
      // reset file input
      e.target.value = '';
    }
  };

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-medium">CV Upload</h3>
      
      {message && (
        <div className={`p-3 rounded-lg ${message.includes('success') ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
          {message}
        </div>
      )}

      <div className="border-2 border-dashed border-[var(--border)] rounded-xl p-10 text-center hover:bg-[var(--background-alt)] transition-colors">
        <p className="mb-4 text-gray-400">Select a PDF file to update your CV.</p>
        <label className="bg-[var(--primary)] text-black px-6 py-2 rounded-lg cursor-pointer hover:opacity-90 inline-block">
          {isUploading ? 'Uploading...' : 'Choose PDF File'}
          <input type="file" accept=".pdf" className="hidden" onChange={handleFileChange} disabled={isUploading} />
        </label>
      </div>

      <div className="mt-8 p-4 bg-[var(--background-alt)] rounded-lg border border-[var(--border)]">
        <p className="text-sm text-gray-300">
          <strong>Note:</strong> Uploading a new CV will replace the existing one. The CV will be accessible at <a href="http://localhost:3001/api/cv/download" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">/api/cv/download</a>.
        </p>
      </div>
    </div>
  );
};

export default CVUploadAdmin;
