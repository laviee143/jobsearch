import React, { useState } from 'react';
import { Search, Filter, MapPin, ChevronDown, X, LayoutGrid, Briefcase, Users, Phone, Bookmark } from 'lucide-react';
import JobCard from './components/JobCard';
import Login from './components/Login';
import SignUp from './components/SignUp';
import JobDetail from './components/JobDetail';

/**
 * Sample Job Data
 */
const SAMPLE_JOBS = [
  {
    id: 1,
    title: "Product Design",
    company: "Binford Ltd.",
    type: "Full-time",
    salary: 1200,
    description: "Design intuitive and visually appealing user interfaces for web and mobile applications. Conduct user research and create wireframes, prototypes, and mockups to improve user experience. Work closely with developers to implement designs.",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=PD&backgroundColor=b39ddb",
    isBookMarked: false,
    location: "Remote",
    experienceLevel: "Intermediate",
    currency: "USD"
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Binford Ltd.",
    type: "Full-time",
    salary: 1200,
    description: "Develop and implement user-facing features using HTML, CSS, and JavaScript frameworks like React or Angular. Collaborate with UI/UX designers to ensure responsive and visually appealing web pages. Optimize applications for speed and scalability.",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=FD&backgroundColor=ffcc80",
    isBookMarked: true,
    location: "Remote",
    experienceLevel: "Intermediate",
    currency: "USD"
  },
  {
    id: 3,
    title: "Digital Marketing Specialist",
    company: "Big Kahuna Burger Ltd.",
    type: "Full-time",
    salary: 1200,
    description: "Create and execute digital marketing campaigns to drive online traffic and increase brand awareness. Utilize SEO, SEM, and social media strategies to engage target audiences. Analyze performance metrics to optimize campaigns.",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=DM&backgroundColor=90caf9",
    isBookMarked: false,
    location: "Remote",
    experienceLevel: "Intermediate",
    currency: "USD"
  },
  {
    id: 4,
    title: "Data Analyst",
    company: "Acme Co.",
    type: "Full-time",
    salary: 1200,
    description: "Interpret complex datasets to provide actionable insights. Use statistical tools to identify trends and patterns. Present data-driven reports to help guide business decision-making and strategy.",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=DA&backgroundColor=ef9a9a",
    isBookMarked: false,
    location: "Remote",
    experienceLevel: "Intermediate",
    currency: "USD"
  },
  {
    id: 5,
    title: "Software Engineer",
    type: "Full-time",
    salary: 95000,
    description: "Develop and maintain web applications. Build scalable backend services and integrate with modern frontend frameworks.",
    company: "Google",
    logo: "https://logo.clearbit.com/google.com",
    isBookMarked: true,
    location: "San Francisco, USA",
    experienceLevel: "Mid Level",
    currency: "USD"
  }
];

export default function App() {
  const [view, setView] = useState('search'); // 'search', 'login', 'signup', 'detail'
  const [selectedJob, setSelectedJob] = useState(null);
  const [jobs, setJobs] = useState(SAMPLE_JOBS);
  const [savedJobs, setSavedJobs] = useState(SAMPLE_JOBS.filter(j => j.isBookMarked));
  const [searchQuery, setSearchQuery] = useState('');
  const [locationQuery, setLocationQuery] = useState('');
  const [appliedSearchQuery, setAppliedSearchQuery] = useState('');
  const [appliedLocationQuery, setAppliedLocationQuery] = useState('');

  const handleSearch = () => {
    setAppliedSearchQuery(searchQuery);
    setAppliedLocationQuery(locationQuery);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(appliedSearchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(appliedSearchQuery.toLowerCase());
    const matchesLocation = job.location.toLowerCase().includes(appliedLocationQuery.toLowerCase());
    return matchesSearch && matchesLocation;
  });

  const toggleBookmark = (id, isBookmarked) => {
    setJobs(prev => prev.map(job => job.id === id ? { ...job, isBookMarked: isBookmarked } : job));

    if (isBookmarked) {
      const jobToAdd = jobs.find(j => j.id === id);
      if (jobToAdd && !savedJobs.some(sj => sj.id === id)) {
        setSavedJobs(prev => [...prev, { ...jobToAdd, isBookMarked: true }]);
      }
    } else {
      setSavedJobs(prev => prev.filter(j => j.id !== id));
    }
  };

  const handleJobClick = (job) => {
    setSelectedJob(job);
    setView('detail');
  };

  const handleLogin = () => {
    setView('search');
  };

  const handleSignUp = () => {
    setView('search');
  };

  if (view === 'login') {
    return <Login onNavigate={setView} onLogin={handleLogin} />;
  }

  if (view === 'signup') {
    return <SignUp onNavigate={setView} onSignUp={handleSignUp} />;
  }

  if (view === 'detail' && selectedJob) {
    return (
      <div className="min-h-screen bg-[#f8f9fa] font-sans text-slate-900">
        <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex items-center gap-8">
                <div
                  className="cursor-pointer"
                  onClick={() => setView('search')}
                >
                  <img src="/src/Images/Logo.png" alt="JOBSPHERE Logo" className="h-10" />
                </div>
              </div>
            </div>
          </div>
        </nav>
        <JobDetail
          job={selectedJob}
          onBack={() => setView('search')}
          onToggleBookmark={toggleBookmark}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans text-slate-900">
      {/* Navbar */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div
              className="cursor-pointer flex-shrink-0"
              onClick={() => setView('search')}
            >
              <img src="/src/Images/Logo.png" alt="JOBSPHERE Logo" className="h-10" />
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex flex-1 justify-center items-center gap-8 text-sm font-semibold text-slate-500">
              <a href="#" className="text-[#0240d9] border-b-2 border-[#0240d9] pb-1">Job Search</a>
              <a href="#" className="hover:text-[#0240d9] border-b-2 border-transparent hover:border-[#0240d9] pb-1 transition-colors">My Applications</a>
              <a href="#" className="hover:text-[#0240d9] border-b-2 border-transparent hover:border-[#0240d9] pb-1 transition-colors">Companies</a>
              <a href="#" className="hover:text-[#0240d9] border-b-2 border-transparent hover:border-[#0240d9] pb-1 transition-colors">Contact Us</a>
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                onClick={() => setView('login')}
                className="px-6 py-2 text-sm font-bold text-white bg-[#0240d9] rounded-lg hover:bg-blue-800 transition-all font-sans"
              >
                Login
              </button>
              <button
                onClick={() => setView('signup')}
                className="px-6 py-2 text-sm font-bold text-[#0240d9] border border-[#0240d9] rounded-lg hover:bg-blue-50 transition-all font-sans"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Bar */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="bg-white p-2 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-2">
            <div className="flex-1 flex items-center gap-2 px-4 border-r border-slate-200">
              <Search className="w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Job title, Keywords, or Company name"
                className="w-full py-2 text-sm focus:outline-none text-slate-600"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>
            <div className="flex-1 flex items-center gap-2 px-4">
              <MapPin className="w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Location"
                className="w-full py-2 text-sm focus:outline-none text-slate-600"
                value={locationQuery}
                onChange={(e) => setLocationQuery(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>
            <button
              onClick={handleSearch}
              className="bg-blue-600 text-white px-8 py-2.5 rounded-xl font-bold hover:bg-blue-700 transition-all"
            >
              Search
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sidebar - Filter */}
          <aside className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 sticky top-24">
              <h2 className="text-xl font-bold mb-6 text-center">Filter</h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Date Posted</label>
                  <div className="relative">
                    <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500/20">
                      <option>Last 24 Hours</option>
                      <option>Last 7 Days</option>
                      <option>Last Month</option>
                    </select>
                    <ChevronDown className="w-4 h-4 absolute right-3 top-3 text-slate-400 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-3">Job Type</label>
                  <div className="space-y-2">
                    {['Full-time', 'Part-time', 'Internship', 'Contract', 'Volunteer'].map(type => (
                      <label key={type} className="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" defaultChecked={type === 'Full-time'} />
                        <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Location</label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Enter your location"
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Experience Level</label>
                  <div className="relative">
                    <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500/20">
                      <option>Intermediate</option>
                      <option>Entry Level</option>
                      <option>Senior Level</option>
                    </select>
                    <ChevronDown className="w-4 h-4 absolute right-3 top-3 text-slate-400 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-4">Salary Range</label>
                  <div className="px-2">
                    <input type="range" className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600" min="0" max="5000" />
                    <div className="flex justify-between mt-2 text-[10px] text-slate-400 font-bold">
                      <span>$0</span>
                      <span>$5,000</span>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <div>
                      <span className="text-[10px] text-slate-400 font-bold block mb-1">From</span>
                      <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded px-2 py-1 text-xs" placeholder="$" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 font-bold block mb-1">To</span>
                      <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded px-2 py-1 text-xs" placeholder="$" />
                    </div>
                  </div>
                </div>

                <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20">
                  Reset all filter
                </button>
              </div>
            </div>
          </aside>

          {/* Main Content - Job List */}
          <section className="lg:col-span-6">
            <div className="space-y-4">
              {filteredJobs.length > 0 ? (
                filteredJobs.map(job => (
                  <JobCard
                    key={job.id}
                    job={job}
                    onToggleBookmark={toggleBookmark}
                    onClick={handleJobClick}
                  />
                ))
              ) : (
                <div className="bg-white rounded-2xl p-12 border border-slate-200 text-center">
                  <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-slate-300" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">No jobs found</h3>
                  <p className="text-slate-500">Try adjusting your search or filters to find what you're looking for.</p>
                </div>
              )}
            </div>
          </section>

          {/* Right Sidebar - Saved Jobs */}
          <aside className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 sticky top-24">
              <h2 className="text-xl font-bold mb-6 text-center">Saved Jobs</h2>

              <div className="space-y-4">
                {savedJobs.length > 0 ? (
                  savedJobs.map(job => (
                    <div
                      key={job.id}
                      className="p-4 rounded-xl border border-slate-100 hover:border-blue-200 transition-all group relative cursor-pointer"
                      onClick={() => handleJobClick(job)}
                    >
                      <button
                        onClick={(e) => { e.stopPropagation(); toggleBookmark(job.id, false); }}
                        className="absolute top-2 right-2 p-1 text-slate-300 hover:text-red-500 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                      <h4 className="font-bold text-sm mb-1 pr-6">{job.title}</h4>
                      <p className="text-xs text-slate-500 mb-2">{job.company}</p>
                      <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400">
                        <span>{job.location}</span>
                        <span>•</span>
                        <span>${job.salary.toLocaleString()}</span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-10">
                    <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Bookmark className="w-6 h-6 text-slate-300" />
                    </div>
                    <p className="text-sm text-slate-400">No saved jobs yet</p>
                  </div>
                )}
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
