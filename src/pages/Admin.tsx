import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import api from '../services/api';
import { LogOut } from 'lucide-react';
import ProfileAdmin from '../components/admin/ProfileAdmin';
import ProjectsAdmin from '../components/admin/ProjectsAdmin';
import ExperienceAdmin from '../components/admin/ExperienceAdmin';
import SkillsAdmin from '../components/admin/SkillsAdmin';
import PublicationsAdmin from '../components/admin/PublicationsAdmin';
import CVUploadAdmin from '../components/admin/CVUploadAdmin';

const Admin = () => {
  const { isAuthenticated, login, logout, username } = useAuth();
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  
  // Dashboard state (simplified for example)
  const [activeTab, setActiveTab] = useState('Profile');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await api.post('/auth/login', loginForm);
      login(response.data.token, response.data.username);
      setError('');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen pt-24 pb-12 flex items-center justify-center bg-[var(--background-alt)]">
        <div className="bg-[var(--background)] p-8 rounded-2xl shadow-xl border border-[var(--border)] w-full max-w-md">
          <h2 className="text-3xl font-bold text-center mb-6 gradient-text">Admin Login</h2>
          {error && <div className="bg-red-500/10 text-red-500 p-3 rounded-lg mb-4 text-center">{error}</div>}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Username</label>
              <input 
                type="text" 
                className="w-full bg-[var(--background-alt)] border border-[var(--border)] rounded-lg p-3 text-[var(--foreground)]"
                value={loginForm.username}
                onChange={e => setLoginForm({...loginForm, username: e.target.value})}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input 
                type="password" 
                className="w-full bg-[var(--background-alt)] border border-[var(--border)] rounded-lg p-3 text-[var(--foreground)]"
                value={loginForm.password}
                onChange={e => setLoginForm({...loginForm, password: e.target.value})}
                required
              />
            </div>
            <button type="submit" className="w-full bg-[var(--primary)] text-black p-3 rounded-lg font-medium hover:bg-[var(--primary)]/90 transition-colors">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 md:px-8 bg-[var(--background-alt)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold gradient-text">Admin Dashboard</h1>
          <div className="flex items-center gap-4">
            <span>Welcome, {username}</span>
            <button onClick={logout} className="flex items-center gap-2 text-red-500 hover:text-red-400 bg-red-500/10 px-4 py-2 rounded-lg transition-colors">
              <LogOut size={18} /> Logout
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="col-span-1 flex flex-col gap-2">
            {['Profile', 'Experience', 'Projects', 'Skills', 'Publications', 'Messages', 'CV Upload'].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-left px-4 py-3 rounded-xl transition-all ${activeTab === tab ? 'bg-[var(--primary)]/20 text-[var(--primary)] font-medium border border-[var(--primary)]/30' : 'bg-[var(--background)] border border-[var(--border)] hover:bg-[var(--background-alt)]'}`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Main Content Area */}
          <div className="col-span-1 md:col-span-3 bg-[var(--background)] border border-[var(--border)] rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-6">{activeTab} Management</h2>
            
            {activeTab === 'Profile' && <ProfileAdmin />}
            {activeTab === 'Experience' && <ExperienceAdmin />}
            {activeTab === 'Projects' && <ProjectsAdmin />}
            {activeTab === 'Skills' && <SkillsAdmin />}
            {activeTab === 'Publications' && <PublicationsAdmin />}
            {activeTab === 'CV Upload' && <CVUploadAdmin />}

            {activeTab === 'Messages' && (
              <p className="text-gray-400">List of contact form messages goes here. Hook to GET /api/message.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
