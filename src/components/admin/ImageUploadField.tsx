import React, { useState } from 'react';
import { Upload } from 'lucide-react';
import api from '../../services/api';

interface ImageUploadFieldProps {
  label: string;
  value?: string;
  onChange: (url: string) => void;
  className?: string;
  folder?: string;
}

const ImageUploadField: React.FC<ImageUploadFieldProps> = ({ label, value, onChange, className = '', folder = 'images' }) => {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState('');

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    setError('');

    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await api.post(`/upload/${folder}/image`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      onChange(response.data.fileUrl);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to upload image');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label className="text-sm font-medium">{label}</label>
      <div className="flex items-center gap-4">
        {value ? (
          <div className="relative w-24 h-24 rounded-lg overflow-hidden border border-[var(--border)] group">
            <img src={value.startsWith('http') ? value : `${(api.defaults.baseURL || 'http://localhost:3001/api').replace('/api', '')}${value}`} alt="Uploaded preview" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
               <label className="cursor-pointer text-white text-xs">
                 Change
                 <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} disabled={isUploading} />
               </label>
            </div>
          </div>
        ) : (
          <label className="flex flex-col items-center justify-center w-24 h-24 rounded-lg border-2 border-dashed border-[var(--border)] cursor-pointer hover:bg-[var(--background-alt)] transition-colors">
            {isUploading ? (
              <span className="text-xs text-gray-400">Uploading...</span>
            ) : (
              <>
                <Upload size={20} className="text-gray-400 mb-1" />
                <span className="text-xs text-gray-400">Upload</span>
              </>
            )}
            <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} disabled={isUploading} />
          </label>
        )}
        <div className="flex-1">
          <input 
            type="text" 
            placeholder="Or enter image URL directly"
            className="w-full bg-[var(--background-alt)] border border-[var(--border)] rounded-lg p-2 text-[var(--foreground)] text-sm"
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
          />
        </div>
      </div>
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
};

export default ImageUploadField;
