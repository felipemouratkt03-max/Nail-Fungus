
import React from 'react';
import { DESTINATION_LINK } from '../constants';

const Guarantee: React.FC = () => {
  return (
    <section id="cta" className="py-24 px-4 bg-emerald-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-200/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        <div className="w-24 h-24 mb-8">
           <svg viewBox="0 0 100 100" className="w-full h-full text-amber-500 drop-shadow-md">
             <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
             <path d="M50 15 L60 40 L85 40 L65 55 L75 80 L50 65 L25 80 L35 55 L15 40 L40 40 Z" fill="currentColor" />
             <text x="50" y="95" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#064e3b">CERTIFIED QUALITY</text>
           </svg>
        </div>
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-emerald-950 mb-6 italic">
          "Try it Risk-Free for 60 Days"
        </h2>
        <p className="text-lg text-slate-700 max-w-2xl mb-10 leading-relaxed">
          If you don't see your nails transform into healthy, clear, and pink works of art, we'll refund every single penny. No hassles. No questions asked.
        </p>
        <a 
          href={DESTINATION_LINK}
          className="bg-amber-500 hover:bg-amber-600 text-emerald-950 px-10 py-5 rounded-2xl text-2xl font-black shadow-2xl transform hover:scale-105 transition-all"
        >
          Watch The Private Presentation Now
        </a>
        <div className="mt-8 flex flex-wrap justify-center gap-8 opacity-60">
           <img src="https://img.icons8.com/color/48/000000/usa.png" alt="USA Made" className="h-8" title="Made in USA" />
           <img src="https://img.icons8.com/color/48/000000/natural-food.png" alt="Natural" className="h-8" title="Natural Ingredients" />
           <img src="https://img.icons8.com/color/48/000000/guarantee.png" alt="GMP" className="h-8" title="GMP Certified" />
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
