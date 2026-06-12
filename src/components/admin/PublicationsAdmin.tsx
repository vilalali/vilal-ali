import React, { useState, useEffect } from 'react';
import api, { BACKEND_URL } from '../../services/api';
import ImageUploadField from './ImageUploadField';
import DocumentUploadField from './DocumentUploadField';
import { Plus, Edit2, Trash2, Save, X, ExternalLink } from 'lucide-react';

const PublicationsAdmin = () => {
  const [publications, setPublications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<any>(null);

  useEffect(() => {
    fetchPublications();
  }, []);

  const fetchPublications = async () => {
    try {
      const res = await api.get('/publications');
      setPublications(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddNew = () => {
    setEditingId('new');
    setFormData({ title: '', authors: [], conference: '', link: '', imageUrl: '', date: '', paperFile: '', paperLink: '' });
  };

  const handleEdit = (pub: any) => {
    setEditingId(pub._id);
    setFormData({ ...pub });
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this publication?')) return;
    try {
      await api.delete(`/publications/${id}`);
      fetchPublications();
    } catch (err) {
      console.error(err);
    }
  };

  const handleSave = async () => {
    try {
      if (editingId === 'new') {
        await api.post('/publications', formData);
      } else {
        await api.put(`/publications/${editingId}`, formData);
      }
      setEditingId(null);
      fetchPublications();
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <div>Loading publications...</div>;

  if (editingId) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-medium">{editingId === 'new' ? 'Add Publication' : 'Edit Publication'}</h3>
          <div className="flex gap-2">
            <button onClick={() => setEditingId(null)} className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--border)] hover:bg-[var(--background-alt)]">
              <X size={18} /> Cancel
            </button>
            <button onClick={handleSave} className="flex items-center gap-2 bg-[var(--primary)] text-black px-4 py-2 rounded-lg hover:opacity-90">
              <Save size={18} /> Save
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ImageUploadField 
            label="Publication Cover Image" 
            value={formData.imageUrl} 
            onChange={(url) => setFormData({ ...formData, imageUrl: url })} 
            className="mb-4"
            folder="publication"
          />
          <DocumentUploadField 
            label="Paper PDF File" 
            value={formData.paperFile} 
            onChange={(url) => setFormData({ ...formData, paperFile: url })} 
            className="mb-4"
            folder="publication"
          />

          <div className="flex flex-col gap-2 col-span-1 md:col-span-2">
            <label className="text-sm font-medium">Title</label>
            <input className="input-field" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Authors (comma separated)</label>
            <input className="input-field" value={Array.isArray(formData.authors) ? formData.authors.join(', ') : formData.authors} onChange={e => setFormData({...formData, authors: e.target.value.split(',').map((t: string) => t.trim())})} />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Conference / Journal</label>
            <input className="input-field" value={formData.conference} onChange={e => setFormData({...formData, conference: e.target.value})} />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4 col-span-1 md:col-span-2">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Link</label>
              <input className="input-field" placeholder="e.g., https://doi.org/..." value={formData.link} onChange={e => setFormData({ ...formData, link: e.target.value })} />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Alternative Paper Link</label>
              <input className="input-field" placeholder="e.g., https://arxiv.org/abs/..." value={formData.paperLink} onChange={e => setFormData({ ...formData, paperLink: e.target.value })} />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Date (e.g. 2025)</label>
            <input className="input-field" value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-medium">Publications Management</h3>
        <button onClick={handleAddNew} className="flex items-center gap-2 bg-[var(--primary)] text-black px-4 py-2 rounded-lg hover:opacity-90">
          <Plus size={18} /> Add Publication
        </button>
      </div>

      <div className="space-y-4">
        {publications.map(pub => (
          <div key={pub._id} className="border border-[var(--border)] rounded-xl p-4 flex gap-4 bg-[var(--background-alt)]">
             {pub.imageUrl && (
               <div className="w-24 h-24 shrink-0 rounded-lg overflow-hidden hidden sm:block">
                 <img src={pub.imageUrl.startsWith('http') ? pub.imageUrl : `${BACKEND_URL}${pub.imageUrl}`} alt="" className="w-full h-full object-cover" />
               </div>
             )}
             <div className="flex-1">
               <div className="flex justify-between items-start mb-2">
                 <div>
                   <h4 className="font-semibold text-lg">{pub.title}</h4>
                   <p className="text-sm text-gray-400">{Array.isArray(pub.authors) ? pub.authors.join(', ') : pub.authors}</p>
                 </div>
                 <div className="flex gap-2">
                    <button onClick={() => handleEdit(pub)} className="p-2 hover:bg-[var(--background)] rounded-lg text-blue-400">
                      <Edit2 size={16} />
                    </button>
                    <button onClick={() => handleDelete(pub._id)} className="p-2 hover:bg-[var(--background)] rounded-lg text-red-400">
                      <Trash2 size={16} />
                    </button>
                 </div>
               </div>
               <p className="text-[var(--primary)] text-sm">{pub.conference} {pub.date ? `• ${pub.date}` : ''}</p>
              <div className="mt-2 flex items-center gap-4 text-sm">
                <a href={pub.link} target="_blank" rel="noreferrer" className="text-[var(--primary)] hover:underline flex items-center gap-1">
                  <ExternalLink size={14} /> DOI / Link
                </a>
                {pub.paperFile && (
                  <a href={pub.paperFile.startsWith('http') ? pub.paperFile : `${(api.defaults.baseURL || 'http://localhost:3001/api').replace('/api', '')}${pub.paperFile}`} target="_blank" rel="noreferrer" className="text-[var(--primary)] hover:underline flex items-center gap-1">
                    <ExternalLink size={14} /> View PDF
                  </a>
                )}
                {pub.paperLink && (
                  <a href={pub.paperLink} target="_blank" rel="noreferrer" className="text-[var(--primary)] hover:underline flex items-center gap-1">
                    <ExternalLink size={14} /> Alt Link
                  </a>
                )}
              </div>
             </div>
          </div>
        ))}
        {publications.length === 0 && <p className="text-gray-400">No publications found.</p>}
      </div>
    </div>
  );
};

export default PublicationsAdmin;
