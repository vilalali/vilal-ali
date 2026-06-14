import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import MarkdownEditorField from './MarkdownEditorField';
import ImageUploadField from './ImageUploadField';
import { Save } from 'lucide-react';

const ProfileAdmin = () => {
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await api.get('/profile');
      if (res.data) {
        setProfile(res.data);
      } else {
        // Init empty profile
        setProfile({
          name: '', title: '', bio: '', location: '', email: '', profileImage: '', cvImage: '',
          socialLinks: { linkedin: '', github: '', twitter: '' },
          stats: { projects: 0, designs: 0, webApps: 0, yearsExp: 0 }
        });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field: string, value: any) => {
    setProfile((prev: any) => {
      if (field.includes('.')) {
        const [parent, child] = field.split('.');
        return { ...prev, [parent]: { ...prev[parent], [child]: value } };
      }
      return { ...prev, [field]: value };
    });
  };

  const handleSave = async () => {
    setSaving(true);
    setMessage('');
    try {
      await api.put('/profile', profile);
      setMessage('Profile saved successfully!');
      setTimeout(() => setMessage(''), 3000);
    } catch (err: any) {
      setMessage(err.response?.data?.message || 'Error saving profile');
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div>Loading profile...</div>;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-medium">Profile Information</h3>
        <button 
          onClick={handleSave} 
          disabled={saving}
          className="flex items-center gap-2 btn btn-primary text-sm px-4 py-2 disabled:opacity-50"
        >
          <Save size={18} /> {saving ? 'Saving...' : 'Save Profile'}
        </button>
      </div>

      {message && (
        <div className={`p-3 rounded-lg ${message.includes('success') ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
          {message}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ImageUploadField 
          label="Profile Image" 
          value={profile.profileImage} 
          onChange={(url) => handleChange('profileImage', url)} 
          className="col-span-1"
          folder="profile"
        />
        
        <ImageUploadField 
          label="CV Snapshot Image (About Section)" 
          value={profile.cvImage} 
          onChange={(url) => handleChange('cvImage', url)} 
          className="col-span-1"
          folder="profile"
        />

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Name</label>
          <input className="input-field" value={profile.name} onChange={e => handleChange('name', e.target.value)} />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Title</label>
          <input className="input-field" value={profile.title} onChange={e => handleChange('title', e.target.value)} />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Email</label>
          <input className="input-field" value={profile.email} onChange={e => handleChange('email', e.target.value)} />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Location</label>
          <input className="input-field" value={profile.location} onChange={e => handleChange('location', e.target.value)} />
        </div>

        <MarkdownEditorField 
          label="Bio" 
          value={profile.bio || ''} 
          onChange={(val) => handleChange('bio', val)} 
          className="col-span-1 md:col-span-2"
        />

        {/* Social Links */}
        <div className="col-span-1 md:col-span-2 border-t border-[var(--border)] pt-6">
          <h4 className="text-lg font-medium mb-4">Social Links</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">GitHub</label>
              <input className="input-field" value={profile.socialLinks?.github || ''} onChange={e => handleChange('socialLinks.github', e.target.value)} />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">LinkedIn</label>
              <input className="input-field" value={profile.socialLinks?.linkedin || ''} onChange={e => handleChange('socialLinks.linkedin', e.target.value)} />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Twitter</label>
              <input className="input-field" value={profile.socialLinks?.twitter || ''} onChange={e => handleChange('socialLinks.twitter', e.target.value)} />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="col-span-1 md:col-span-2 border-t border-[var(--border)] pt-6">
          <h4 className="text-lg font-medium mb-4">Stats</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Projects</label>
              <input type="number" className="input-field" value={profile.stats?.projects || 0} onChange={e => handleChange('stats.projects', Number(e.target.value))} />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Years Exp</label>
              <input type="number" className="input-field" value={profile.stats?.yearsExp || 0} onChange={e => handleChange('stats.yearsExp', Number(e.target.value))} />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Designs</label>
              <input type="number" className="input-field" value={profile.stats?.designs || 0} onChange={e => handleChange('stats.designs', Number(e.target.value))} />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Web Apps</label>
              <input type="number" className="input-field" value={profile.stats?.webApps || 0} onChange={e => handleChange('stats.webApps', Number(e.target.value))} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Global styles for generic input field to avoid repetition */}
      <style>{`
        .input-field {
          background: var(--background-alt);
          border: 1px solid var(--border);
          border-radius: 0.5rem;
          padding: 0.75rem;
          color: var(--foreground);
        }
      `}</style>
    </div>
  );
};

export default ProfileAdmin;
