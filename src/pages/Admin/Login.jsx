import React, { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { Lock, User, AlertCircle } from 'lucide-react';
import { login, checkAuth } from '../../services/db';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // If already authenticated, redirect to dashboard
  if (checkAuth()) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Client side validation
    if (!username.trim() || !password.trim()) {
      setError('Please fill in all fields.');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const success = login(username.trim(), password.trim());
      setLoading(false);

      if (success) {
        navigate('/admin/dashboard');
      } else {
        setError('Invalid username or password. Please try again.');
      }
    }, 600); // Small delay for premium feedback feel
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAF6F0] px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white border border-[#E8DDD0] p-8 sm:p-10 shadow-sm rounded-sm">
        
        {/* Brand header */}
        <div className="text-center">
          <div className="w-12 h-12 rounded bg-[#3E0F12] flex items-center justify-center text-[#E6B747] font-serif font-bold text-2xl mx-auto mb-4">P</div>
          <h2 className="font-serif text-3xl font-bold text-[#2D0B0C] tracking-wide uppercase leading-none">Prabhukul</h2>
          <p className="text-[11px] uppercase tracking-widest text-[#C8922A] font-semibold mt-2">Admin Panel Login</p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 p-3 text-[12px] flex items-start gap-2.5 rounded-sm">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            
            {/* Username */}
            <div className="space-y-1">
              <label htmlFor="username-address" className="text-[10px] uppercase tracking-wider text-[#5C534E] font-bold">
                Username
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <User className="h-4 w-4 text-[#9E9087]" />
                </div>
                <input
                  id="username-address"
                  name="username"
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter username"
                  className="appearance-none block w-full pl-10 pr-3 py-2.5 border border-[#D4A64A]/30 text-[13px] text-[#2D0B0C] placeholder-[#9E9087] bg-white rounded-sm focus:outline-none focus:border-[#3E0F12] transition-colors"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1">
              <label htmlFor="password" className="text-[10px] uppercase tracking-wider text-[#5C534E] font-bold">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <Lock className="h-4 w-4 text-[#9E9087]" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="appearance-none block w-full pl-10 pr-3 py-2.5 border border-[#D4A64A]/30 text-[13px] text-[#2D0B0C] placeholder-[#9E9087] bg-white rounded-sm focus:outline-none focus:border-[#3E0F12] transition-colors"
                />
              </div>
            </div>

          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-[12px] font-bold tracking-widest uppercase bg-[#3E0F12] text-white hover:bg-[#2D0B0C] focus:outline-none transition-colors disabled:opacity-50 rounded-sm"
            >
              {loading ? 'Authenticating...' : 'Sign In'}
            </button>
          </div>
        </form>

        <div className="text-center pt-2">
          <p className="text-[11px] text-[#9E9087]">
            Demo Sandbox Defaults: <strong className="text-[#2D0B0C]">admin</strong> / <strong className="text-[#2D0B0C]">prabhukul1985</strong>
          </p>
        </div>

      </div>
    </div>
  );
}
