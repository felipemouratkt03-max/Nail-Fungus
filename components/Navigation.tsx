
import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 px-4 py-3">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-slate-900 rounded-sm flex items-center justify-center text-white font-serif font-black text-lg">H</div>
          <span className="font-sans font-black text-sm tracking-tighter text-slate-900 uppercase">Health Journal</span>
        </div>
        <div className="flex gap-4 items-center">
          <span className="hidden sm:inline-block text-[10px] font-bold font-sans uppercase text-slate-400 border border-slate-200 px-2 py-1 rounded">Sponsored Story</span>
          <button 
            onClick={() => window.open('https://thekerabiotics.com/video.php?aff_id=11611', '_blank')}
            className="bg-[#FF5722] text-white px-4 py-1.5 rounded text-xs font-bold font-sans hover:bg-[#E64A19] transition-all shadow-sm uppercase tracking-wide"
          >
            Watch Video
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
