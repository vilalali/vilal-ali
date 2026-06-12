import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import MarkdownEditorField from './MarkdownEditorField';
import { Plus, Edit2, Trash2, Save, X } from 'lucide-react';

const ExperienceAdmin = () => {
  const [experiences, setExperiences] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<any>(null);

  useEffect(() => {
    fetchExperiences();
  }, []);

  const fetchExperiences = async () => {
    try {
      const res = await api.get('/experience');
      setExperiences(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddNew = () => {
    setEditingId('new');
    setFormData({
      company: '', title: '', period: '', description: ''
    });
  };

  const handleEdit = (exp: any) => {
    setEditingId(exp._id);
    setFormData({ ...exp });
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this experience?')) return;
    try {
      await api.delete(`/experience/${id}`);
      fetchExperiences();
    } catch (err) {
      console.error(err);
    }
  };

  const handleSave = async () => {
    try {
      if (editingId === 'new') {
        await api.post('/experience', formData);
      } else {
        await api.put(`/experience/${editingId}`, formData);
      }
      setEditingId(null);
      fetchExperiences();
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <div>Loading experiences...</div>;

  if (editingId) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-medium">{editingId === 'new' ? 'Add Experience' : 'Edit Experience'}</h3>
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
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Company</label>
            <input className="input-field" value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Job Title</label>
            <input className="input-field" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} />
          </div>

          <div className="flex flex-col gap-2 col-span-1 md:col-span-2">
            <label className="text-sm font-medium">Period (e.g. Jan 2020 - Present)</label>
            <input className="input-field" value={formData.period} onChange={e => setFormData({...formData, period: e.target.value})} />
          </div>

          <MarkdownEditorField 
            label="Description" 
            value={formData.description || ''} 
            onChange={(val) => setFormData({...formData, description: val})} 
            className="col-span-1 md:col-span-2"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-medium">Experience Management</h3>
        <button onClick={handleAddNew} className="flex items-center gap-2 bg-[var(--primary)] text-black px-4 py-2 rounded-lg hover:opacity-90">
          <Plus size={18} /> Add Experience
        </button>
      </div>

      <div className="space-y-4">
        {experiences.map(exp => (
          <div key={exp._id} className="border border-[var(--border)] rounded-xl p-4 flex flex-col bg-[var(--background-alt)]">
             <div className="flex justify-between items-start mb-2">
               <div>
                 <h4 className="font-semibold text-lg">{exp.title}</h4>
                 <p className="text-[var(--primary)]">{exp.company} • {exp.period}</p>
               </div>
               <div className="flex gap-2">
                  <button onClick={() => handleEdit(exp)} className="p-2 hover:bg-[var(--background)] rounded-lg text-blue-400">
                    <Edit2 size={16} />
                  </button>
                  <button onClick={() => handleDelete(exp._id)} className="p-2 hover:bg-[var(--background)] rounded-lg text-red-400">
                    <Trash2 size={16} />
                  </button>
               </div>
             </div>
             <p className="text-sm text-gray-400 line-clamp-2 mt-2">{exp.description}</p>
          </div>
        ))}
        {experiences.length === 0 && <p className="text-gray-400">No experiences found.</p>}
      </div>
    </div>
  );
};

export default ExperienceAdmin;
