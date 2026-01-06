
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-24 px-4 text-center">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-6 h-6 bg-emerald-800 rounded-full flex items-center justify-center text-amber-400 text-[10px] font-bold">A</div>
          <span className="font-serif font-bold text-sm tracking-widest text-emerald-950 uppercase">Amazonian Secret</span>
        </div>
        
        <p className="text-xs text-slate-400 max-w-2xl mx-auto mb-8 uppercase tracking-widest leading-loose">
          The information provided on this site is for educational purposes only. Always consult with a qualified health professional before beginning any new ritual or supplement. Results may vary depending on individual biology.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 text-xs font-semibold text-slate-500 mb-12 uppercase tracking-widest">
          <a href="#" className="hover:text-emerald-800">Privacy Policy</a>
          <a href="#" className="hover:text-emerald-800">Terms of Service</a>
          <a href="#" className="hover:text-emerald-800">Contact Us</a>
          <a href="#" className="hover:text-emerald-800">Disclaimer</a>
        </div>
        
        <p className="text-[10px] text-slate-300">
          &copy; {new Date().getFullYear()} Amazonian Ritual. All rights reserved.
        </p>
      </div>

      {/* Sticky Footer CTA for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 p-4 md:hidden bg-white/95 backdrop-blur-md border-t border-slate-100 z-40">
        <a 
          href="https://thekerabiotics.com/video.php?aff_id=11611"
          className="block w-full bg-emerald-800 text-white text-center py-4 rounded-xl font-bold shadow-lg"
        >
          Watch The Presentation
        </a>
      </div>
    </footer>
  );
};

export default Footer;
