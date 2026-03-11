import React from 'react';
import { MapPin, Briefcase, Clock, DollarSign, ChevronLeft, Bookmark, Share2, Star } from 'lucide-react';

const JobDetail = ({ job, onBack, onToggleBookmark }) => {
  const [isBookmarked, setIsBookmarked] = React.useState(job.isBookMarked);

  const handleBookmarkClick = () => {
    const newState = !isBookmarked;
    setIsBookmarked(newState);
    if (onToggleBookmark) {
      onToggleBookmark(job.id, newState);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      {/* Back Button */}
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors mb-8 font-medium"
      >
        <ChevronLeft className="w-5 h-5" />
        Back
      </button>

      <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
          <div className="flex items-start gap-6">
            {/* Company Logo */}
            <div className="w-20 h-20 rounded-2xl bg-slate-50 flex items-center justify-center overflow-hidden border border-slate-100 flex-shrink-0">
              <img 
                src={job.logo} 
                alt={job.company} 
                className="w-14 h-14 object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">{job.title}</h1>
              <div className="flex items-center gap-2 text-slate-500 font-medium">
                <span>{job.company}</span>
                <div className="flex items-center gap-0.5 text-yellow-400">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 text-slate-300" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="flex gap-2 mr-2">
              <button 
                onClick={handleBookmarkClick}
                className={`p-3 rounded-xl border transition-all ${isBookmarked ? 'text-blue-600 bg-blue-50 border-blue-200' : 'text-slate-400 border-slate-200 hover:bg-slate-50'}`}
              >
                <Bookmark className={`w-6 h-6 ${isBookmarked ? 'fill-current' : ''}`} />
              </button>
              <button className="p-3 rounded-xl border border-slate-200 text-slate-400 hover:bg-slate-50 transition-all">
                <Share2 className="w-6 h-6" />
              </button>
            </div>
            <button className="flex-1 md:flex-none bg-blue-600 text-white px-10 py-3.5 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20">
              Apply now
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Sidebar Info */}
          <div className="md:col-span-4 space-y-8">
            <div>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Job type:</h3>
              <div className="flex items-center gap-3 text-slate-700 font-semibold">
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-blue-600" />
                </div>
                {job.type}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Location:</h3>
              <div className="flex items-center gap-3 text-slate-700 font-semibold">
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                {job.location}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Experience:</h3>
              <div className="flex items-center gap-3 text-slate-700 font-semibold">
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-blue-600" />
                </div>
                {job.experienceLevel}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Salary:</h3>
              <div className="flex items-center gap-3 text-slate-700 font-semibold">
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-blue-600" />
                </div>
                {job.salary.toLocaleString()} {job.currency}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-8 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Job description</h2>
              <p className="text-slate-600 leading-relaxed">
                {job.description}
              </p>
              <p className="text-slate-600 mt-4 leading-relaxed">
                We are seeking a highly skilled and creative {job.title} to join our dynamic team. You will play a crucial role in designing and implementing high-quality solutions. You will collaborate closely with cross-functional teams, including product managers, developers, and stakeholders, to bring innovative ideas to life and ensure a seamless user journey.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Key Responsibilities</h2>
              <ul className="space-y-3">
                {[
                  "Design and develop user-centric interfaces for web and mobile applications.",
                  "Conduct user research, usability testing, and gather feedback to improve designs.",
                  "Create wireframes, prototypes, and high-fidelity designs using modern tools.",
                  "Collaborate with product managers and developers to ensure design consistency.",
                  "Stay updated with the latest industry trends and best practices.",
                  "Lead and mentor junior members in the team, providing guidance and support."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
