import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../context/AuthContext';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const { user, logout } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      alert('Login failed: ' + error.message);
    } else {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md relative shadow-lg">
        <button onClick={onClose} className="absolute top-3 right-4 text-slate-500 font-bold text-xl">&times;</button>
        {user ? (
          <div>
            <h3 className="text-xl font-bold mb-2">Admin Active</h3>
            <p className="text-slate-600 mb-4">Logged in as {user.email}</p>
            <button onClick={() => { logout(); onClose(); }} className="w-full bg-slate-200 text-slate-800 py-2 rounded font-semibold hover:bg-slate-300">
              Log Out
            </button>
          </div>
        ) : (
          <form onSubmit={handleLogin} className="space-y-4">
            <h3 className="text-xl font-bold text-slate-900">Admin Login</h3>
            <input type="email" placeholder="Admin Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-3 border border-slate-300 rounded-md" required />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-3 border border-slate-300 rounded-md" required />
            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700">
              Log In
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
