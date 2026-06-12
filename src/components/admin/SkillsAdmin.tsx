import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { Plus, Edit2, Trash2, Save, X } from 'lucide-react';

const SkillsAdmin = () => {
  const [skills, setSkills] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<any>(null);

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      const res = await api.get('/skill');
      setSkills(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddNew = () => {
    setEditingId('new');
    setFormData({
      name: '', category: '', level: 50
    });
  };

  const handleEdit = (skill: any) => {
    setEditingId(skill._id);
    setFormData({ ...skill });
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this skill?')) return;
    try {
      await api.delete(`/skill/${id}`);
      fetchSkills();
    } catch (err) {
      console.error(err);
    }
  };

  const handleSave = async () => {
    try {
      if (editingId === 'new') {
        await api.post('/skill', formData);
      } else {
        await api.put(`/skill/${editingId}`, formData);
      }
      setEditingId(null);
      fetchSkills();
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <div>Loading skills...</div>;

  if (editingId) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-medium">{editingId === 'new' ? 'Add Skill' : 'Edit Skill'}</h3>
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
            <label className="text-sm font-medium">Skill Name</label>
            <input className="input-field" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Category</label>
            <input className="input-field" value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} />
          </div>

          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-sm font-medium">Proficiency Level (0-100): {formData.level}%</label>
            <input type="range" min="0" max="100" value={formData.level} onChange={e => setFormData({...formData, level: Number(e.target.value)})} className="w-full accent-[var(--primary)]" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-medium">Skills Management</h3>
        <button onClick={handleAddNew} className="flex items-center gap-2 bg-[var(--primary)] text-black px-4 py-2 rounded-lg hover:opacity-90">
          <Plus size={18} /> Add Skill
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map(skill => (
          <div key={skill._id} className="border border-[var(--border)] rounded-xl p-4 flex flex-col bg-[var(--background-alt)]">
             <div className="flex justify-between items-center mb-2">
                 <h4 className="font-semibold text-lg">{skill.name}</h4>
                 <div className="flex gap-2">
                  <button onClick={() => handleEdit(skill)} className="p-1 hover:bg-[var(--background)] rounded-lg text-blue-400">
                    <Edit2 size={16} />
                  </button>
                  <button onClick={() => handleDelete(skill._id)} className="p-1 hover:bg-[var(--background)] rounded-lg text-red-400">
                    <Trash2 size={16} />
                  </button>
               </div>
             </div>
             <p className="text-sm text-gray-400 mb-2">{skill.category}</p>
             <div className="w-full bg-[var(--background)] rounded-full h-2">
                <div className="bg-[var(--primary)] h-2 rounded-full" style={{ width: `${skill.level}%` }}></div>
             </div>
          </div>
        ))}
        {skills.length === 0 && <p className="text-gray-400 col-span-full">No skills found.</p>}
      </div>
    </div>
  );
};

export default SkillsAdmin;
