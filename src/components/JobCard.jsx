import React, { useState } from 'react';
import { Bookmark, Share2, MapPin, Briefcase, Clock, DollarSign } from 'lucide-react';

/**
 * JobCard Component
 * 
 * Displays job details in a clean, modern card format as seen in the UI.
 * Supports bookmark toggling and responsive layout.
 */
const JobCard = ({ job, onToggleBookmark, onClick }) => {
  const [isBookmarked, setIsBookmarked] = useState(job.isBookMarked);

  const handleBookmarkClick = (e) => {
    e.stopPropagation();
    const newState = !isBookmarked;
    setIsBookmarked(newState);
    if (onToggleBookmark) {
      onToggleBookmark(job.id, newState);
    }
  };

  return (
    <div 
      onClick={() => onClick && onClick(job)}
      className="bg-white rounded-2xl border border-slate-100 p-6 mb-4 hover:shadow-lg transition-all duration-300 cursor-pointer group relative"
    >
      <div className="flex items-start gap-4">
        {/* Company Logo */}
        <div className="w-14 h-14 rounded-xl bg-slate-50 flex items-center justify-center overflow-hidden border border-slate-100 flex-shrink-0">
          {job.logo ? (
            <img 
              src={job.logo} 
              alt={job.company} 
              className="w-10 h-10 object-contain"
              referrerPolicy="no-referrer"
            />
          ) : (
            <Briefcase className="w-6 h-6 text-slate-400" />
          )}
        </div>

        {/* Job Info */}
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                {job.title}
              </h3>
              <p className="text-slate-500 font-medium mb-3">{job.company}</p>
            </div>
            
            {/* Actions */}
            <div className="flex gap-2">
              <button 
                onClick={handleBookmarkClick}
                className={`p-2 rounded-full transition-colors ${isBookmarked ? 'text-blue-600 bg-blue-50' : 'text-slate-400 hover:bg-slate-100'}`}
                title={isBookmarked ? "Remove Bookmark" : "Bookmark Job"}
              >
                <Bookmark className={`w-5 h-5 ${isBookmarked ? 'fill-current' : ''}`} />
              </button>
              <button className="p-2 rounded-full text-slate-400 hover:bg-slate-100 transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-semibold flex items-center gap-1">
              <MapPin className="w-3 h-3" /> {job.location.split(',')[0]}
            </span>
            <span className="px-3 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-semibold flex items-center gap-1">
              <Clock className="w-3 h-3" /> {job.type}
            </span>
            <span className="px-3 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-semibold flex items-center gap-1">
              <DollarSign className="w-3 h-3" /> 
              {job.salary.toLocaleString()} {job.currency}
            </span>
          </div>

          {/* Description */}
          <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
            {job.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
