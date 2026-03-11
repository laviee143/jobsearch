import React from 'react';
import { Mail, Lock, LayoutGrid, Github, Facebook, Linkedin, Chrome, User } from 'lucide-react';

const SignUp = ({ onNavigate, onSignUp }) => {
  return (
    <div className="min-h-screen flex bg-white">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12">
        <div className="w-full max-w-md">
          <div className="flex items-center gap-2 bg-blue-600 text-white px-3 py-1.5 rounded-lg font-bold italic w-fit mb-8 cursor-pointer" onClick={() => onNavigate('search')}>
            <LayoutGrid className="w-5 h-5" />
            JOBSPHERE
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mb-2">Create your account</h2>
          <p className="text-slate-500 mb-8">Join our community and find your dream job.</p>

          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onSignUp(); }}>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <User className="w-5 h-5 absolute left-3 top-3.5 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="First name" 
                  className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                  required
                />
              </div>
              <div className="relative">
                <User className="w-5 h-5 absolute left-3 top-3.5 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Last name" 
                  className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                  required
                />
              </div>
            </div>

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
            <div className="relative">
              <Lock className="w-5 h-5 absolute left-3 top-3.5 text-slate-400" />
              <input 
                type="password" 
                placeholder="Confirm Password" 
                className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                required
              />
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20">
              Create account
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
            Already have an account?{' '}
            <button 
              onClick={() => onNavigate('login')}
              className="text-blue-600 font-bold hover:underline"
            >
              Login
            </button>
          </p>
        </div>
      </div>

      {/* Right Side - Illustration */}
      <div className="hidden lg:flex lg:w-1/2 bg-slate-50 items-center justify-center p-12">
        <div className="max-w-md text-center">
          <img 
            src="https://illustrations.popsy.co/blue/work-from-home.svg" 
            alt="Sign Up Illustration" 
            className="w-full mb-8"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
