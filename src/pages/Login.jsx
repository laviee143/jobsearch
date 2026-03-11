import React from 'react';
import { Mail, Lock, LayoutGrid, Github, Facebook, Linkedin, Chrome } from 'lucide-react';

const Login = ({ onNavigate, onLogin }) => {
  return (
    <div className="min-h-screen flex bg-white">
      {/* Left Side - Illustration */}
      <div className="hidden lg:flex lg:w-1/2 bg-slate-50 items-center justify-center p-12">
        <div className="max-w-md text-center">
          <img 
            src="https://illustrations.popsy.co/blue/searching-for-a-job.svg" 
            alt="Login Illustration" 
            className="w-full mb-8"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12">
        <div className="w-full max-w-md">
          <div className="flex items-center gap-2 bg-blue-600 text-white px-3 py-1.5 rounded-lg font-bold italic w-fit mb-8 cursor-pointer" onClick={() => onNavigate('search')}>
            <LayoutGrid className="w-5 h-5" />
            JOBSPHERE
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mb-2">Log in to your account</h2>
          <p className="text-slate-500 mb-8">Welcome back! Please enter your details.</p>

          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
            <div className="relative">
              <Mail className="w-5 h-5 absolute left-3 top-3.5 text-slate-400" />
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                required
              />
            </div>
            <div className="relative">
              <Lock className="w-5 h-5 absolute left-3 top-3.5 text-slate-400" />
              <input 
                type="password" 
                placeholder="Password" 
                className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                required
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                <span className="text-slate-600">Remember me</span>
              </label>
              <a href="#" className="text-blue-600 font-semibold hover:underline">Forgot password?</a>
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20">
              Login
            </button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-slate-500 font-medium uppercase tracking-wider">OR</span>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 mb-8">
            <button className="flex items-center justify-center p-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-all">
              <Chrome className="w-6 h-6 text-slate-600" />
            </button>
            <button className="flex items-center justify-center p-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-all">
              <Github className="w-6 h-6 text-slate-600" />
            </button>
            <button className="flex items-center justify-center p-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-all">
              <Facebook className="w-6 h-6 text-blue-600" />
            </button>
            <button className="flex items-center justify-center p-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-all">
              <Linkedin className="w-6 h-6 text-blue-700" />
            </button>
          </div>

          <p className="text-center text-sm text-slate-600">
            Don't have an account?{' '}
            <button 
              onClick={() => onNavigate('signup')}
              className="text-blue-600 font-bold hover:underline"
            >
              Create account
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
