import React, { useState, useEffect } from 'react';
import api, { BACKEND_URL } from '../../services/api';
import MarkdownEditorField from './MarkdownEditorField';
import ImageUploadField from './ImageUploadField';
import { Plus, Edit2, Trash2, Save, X } from 'lucide-react';

const ProjectsAdmin = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<any>(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await api.get('/project');
      setProjects(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddNew = () => {
    setEditingId('new');
    setFormData({
      title: '', description: '', imageUrl: '', tags: [], githubUrl: '', liveUrl: '', featured: false
    });
  };

  const handleEdit = (project: any) => {
    setEditingId(project._id);
    setFormData({ ...project });
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this project?')) return;
    try {
      await api.delete(`/project/${id}`);
      fetchProjects();
    } catch (err) {
      console.error(err);
    }
  };

  const handleSave = async () => {
    try {
      if (editingId === 'new') {
        await api.post('/project', formData);
      } else {
        await api.put(`/project/${editingId}`, formData);
      }
      setEditingId(null);
      fetchProjects();
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <div>Loading projects...</div>;

  if (editingId) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-medium">{editingId === 'new' ? 'Add New Project' : 'Edit Project'}</h3>
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
            label="Project Cover Image" 
            value={formData.imageUrl} 
            onChange={(url) => setFormData({...formData, imageUrl: url})} 
            className="col-span-1 md:col-span-2"
            folder="project"
          />

          <div className="flex flex-col gap-2 col-span-1 md:col-span-2">
            <label className="text-sm font-medium">Title</label>
            <input className="input-field" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} />
          </div>

          <MarkdownEditorField 
            label="Description" 
            value={formData.description || ''} 
            onChange={(val) => setFormData({...formData, description: val})} 
            className="col-span-1 md:col-span-2"
          />

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Tags (comma separated)</label>
            <input className="input-field" value={formData.tags?.join(', ')} onChange={e => setFormData({...formData, tags: e.target.value.split(',').map((t: string) => t.trim())})} />
          </div>

          <div className="flex flex-col gap-2 justify-center">
             <label className="flex items-center gap-2 cursor-pointer mt-6">
               <input type="checkbox" checked={formData.featured} onChange={e => setFormData({...formData, featured: e.target.checked})} className="w-5 h-5 accent-[var(--primary)]" />
               <span className="text-sm font-medium">Featured Project</span>
             </label>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">GitHub URL</label>
            <input className="input-field" value={formData.githubUrl} onChange={e => setFormData({...formData, githubUrl: e.target.value})} />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Live URL</label>
            <input className="input-field" value={formData.liveUrl} onChange={e => setFormData({...formData, liveUrl: e.target.value})} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-medium">Projects Management</h3>
        <button onClick={handleAddNew} className="flex items-center gap-2 bg-[var(--primary)] text-black px-4 py-2 rounded-lg hover:opacity-90">
          <Plus size={18} /> Add Project
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map(project => (
          <div key={project._id} className="border border-[var(--border)] rounded-xl p-4 flex flex-col bg-[var(--background-alt)]">
             {project.imageUrl && (
               <img src={project.imageUrl.startsWith('http') ? project.imageUrl : `${BACKEND_URL}${project.imageUrl}`} alt={project.title} className="w-full h-32 object-cover rounded-lg mb-4" />
             )}
             <h4 className="font-semibold text-lg mb-2">{project.title}</h4>
             <p className="text-sm text-gray-400 line-clamp-2 mb-4 flex-1">{project.description}</p>
             <div className="flex justify-end gap-2 mt-auto">
                <button onClick={() => handleEdit(project)} className="p-2 hover:bg-[var(--background)] rounded-lg text-blue-400">
                  <Edit2 size={16} />
                </button>
                <button onClick={() => handleDelete(project._id)} className="p-2 hover:bg-[var(--background)] rounded-lg text-red-400">
                  <Trash2 size={16} />
                </button>
             </div>
          </div>
        ))}
        {projects.length === 0 && <p className="text-gray-400 col-span-full">No projects found.</p>}
      </div>
    </div>
  );
};

export default ProjectsAdmin;
