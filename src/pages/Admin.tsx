import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import api from '../services/api';
import { LogOut, Eye, EyeOff } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProfileAdmin from '../components/admin/ProfileAdmin';
import ProjectsAdmin from '../components/admin/ProjectsAdmin';
import ExperienceAdmin from '../components/admin/ExperienceAdmin';
import SkillsAdmin from '../components/admin/SkillsAdmin';
import PublicationsAdmin from '../components/admin/PublicationsAdmin';
import CVUploadAdmin from '../components/admin/CVUploadAdmin';

const Admin = () => {
  const { isAuthenticated, login, logout, username } = useAuth();
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState('');
  
  // Dashboard state (simplified for example)
  const [activeTab, setActiveTab] = useState('Profile');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await api.post('/auth/login', loginForm);
      login(response.data.token, response.data.username, rememberMe);
      setError('');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[var(--background-alt)] text-text font-sans relative flex flex-col items-center justify-center">
        <main className="w-full max-w-md mx-4">
          <div className="bg-[var(--background)] p-8 rounded-2xl shadow-xl border border-[var(--border)] w-full">
            <div className="text-center mb-6">
              <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
                Admin <span className="text-primary-500">Login</span>
              </h2>
              <div className="h-1 bg-primary-500 mx-auto rounded-full w-[60px]" />
            </div>
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
                <div className="relative">
                  <input 
                    type={showPassword ? "text" : "password"}
                    className="w-full bg-[var(--background-alt)] border border-[var(--border)] rounded-lg p-3 text-[var(--foreground)]"
                    value={loginForm.password}
                    onChange={e => setLoginForm({...loginForm, password: e.target.value})}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[var(--primary)]"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="rememberMe"
                  className="mr-2 accent-[var(--primary)] w-4 h-4"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label htmlFor="rememberMe" className="text-sm cursor-pointer select-none">Remember Me</label>
              </div>
              <button type="submit" className="btn btn-primary w-full py-3 flex items-center justify-center gap-2">
                Login
              </button>
            </form>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--background-alt)] text-text font-sans relative flex flex-col">
      <main className="flex-grow p-6 md:p-10">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex justify-between items-center mb-8 border-b border-[var(--border)] pb-6">
          <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-text-muted">Welcome, {username}</span>
            <button onClick={logout} className="flex items-center gap-2 text-sm text-red-500 hover:text-red-400 bg-red-500/10 px-3 py-1.5 rounded-md transition-colors">
              <LogOut size={16} /> Logout
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full md:w-64 shrink-0 flex flex-col gap-1 sticky top-10 h-fit">
            <div className="text-xs font-semibold text-text-muted mb-2 px-3 uppercase tracking-wider">Management</div>
            {['Profile', 'Experience', 'Projects', 'Skills', 'Publications', 'Messages', 'CV Upload'].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-left px-3 py-2 text-sm rounded-md transition-colors flex items-center w-full ${activeTab === tab ? 'bg-primary-500 text-black font-medium shadow-sm' : 'hover:bg-[var(--card)] text-text-muted hover:text-text'}`}
              >
                {tab}
              </button>
            ))}
          </aside>

          {/* Main Content Area */}
          <div className="flex-1 min-w-0">
            <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-6 tracking-tight">{activeTab}</h2>
            
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
      </main>
    </div>
  );
};

export default Admin;
