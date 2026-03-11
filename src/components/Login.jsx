import React, { useState } from 'react';
import { Mail, Lock } from 'lucide-react';

export default function Login({ onNavigate, onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onLogin) onLogin();
  };

  return (
    <div className="min-h-screen bg-[#1c1c1c] flex items-center justify-center p-4 sm:p-8 font-sans">
      <div className="w-full max-w-[1000px] h-[600px] flex rounded-xl overflow-hidden shadow-2xl bg-white border border-[#2d2d2d]">

        {/* Left Side - Image */}
        <div className="hidden md:flex w-1/2 bg-[#f4f8ff] border-r-2 border-blue-500 items-center justify-center p-8">
          <img
            src="/src/Images/rafiki.png"
            alt="Login Illustration"
            className="w-full max-w-sm object-contain"
          />
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-8 sm:px-16 py-8">

          {/* Logo */}
          <div className="mb-8">
            <img src="/src/Images/Logo.png" alt="JOBSPHERE Logo" className="h-10" />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            Log in to your account
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>

            {/* Email Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-slate-400" />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full pl-10 pr-3 py-2.5 border border-slate-200 rounded-lg placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0240d9] focus:border-transparent text-sm"
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-slate-400" />
              </div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full pl-10 pr-3 py-2.5 border border-slate-200 rounded-lg placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0240d9] focus:border-transparent text-sm"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full flex justify-center py-2.5 px-4 rounded-lg shadow-sm text-sm font-semibold text-white bg-[#0240d9] hover:bg-blue-700 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0240d9]"
              >
                Login
              </button>
            </div>

            {/* OR Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-slate-500 font-medium">OR</span>
              </div>
            </div>

            {/* Social Logins */}
            <div className="grid grid-cols-4 gap-3">
              <button type="button" className="flex justify-center items-center py-2 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="h-5 w-5" alt="Google" />
              </button>
              <button type="button" className="flex justify-center items-center py-2 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" className="h-5 w-5" alt="Apple" />
              </button>
              <button type="button" className="flex justify-center items-center py-2 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" className="h-5 w-5" alt="Facebook" />
              </button>
              <button type="button" className="flex justify-center items-center py-2 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                <img src="https://www.svgrepo.com/show/448234/linkedin.svg" className="h-5 w-5" alt="LinkedIn" />
              </button>
            </div>

            {/* Bottom Link */}
            <div className="text-center mt-6">
              <p className="text-sm text-slate-600 font-medium">
                Don't have an account?{' '}
                <button
                  type="button"
                  onClick={() => onNavigate('signup')}
                  className="font-bold text-[#0240d9] hover:text-blue-700 transition-colors"
                >
                  Create account
                </button>
              </p>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
