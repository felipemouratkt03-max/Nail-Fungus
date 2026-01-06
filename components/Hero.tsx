
import React, { useEffect, useState } from 'react';
import { generateHeroImage } from '../services/geminiService';
import { DESTINATION_LINK } from '../constants';

const Hero: React.FC = () => {
  const [heroImage, setHeroImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImage = async () => {
      const img = await generateHeroImage();
      setHeroImage(img);
      setLoading(false);
    };
    fetchImage();
  }, []);

  return (
    <section className="pt-24 pb-16 px-4 md:px-8 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-amber-100 text-amber-800 text-sm font-bold tracking-wide uppercase">
            Restores Nails Naturally
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-emerald-950 leading-tight mb-6">
            The 60-Second <span className="italic">"Amazonian Ritual"</span> That Fights Fungus From The Inside Out
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0">
            Stop masking the symptom. Discover the biological breakthrough that restores your nail's natural immunity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a 
              href={DESTINATION_LINK}
              className="bg-emerald-800 hover:bg-emerald-900 text-white px-8 py-4 rounded-xl text-xl font-bold shadow-xl shadow-emerald-900/20 transform hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group"
            >
              Watch The Private Presentation
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
          </div>
          <p className="mt-4 text-slate-400 text-sm flex items-center justify-center lg:justify-start gap-2">
            <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path></svg>
            Join 14,300+ Successful Transformations
          </p>
        </div>

        <div className="flex-1 w-full max-w-md lg:max-w-xl relative">
          <div className="absolute inset-0 bg-amber-400/10 rounded-3xl blur-3xl -z-10 transform rotate-6"></div>
          <div className="bg-white p-2 rounded-3xl shadow-2xl border border-slate-100 overflow-hidden aspect-square relative">
            {loading ? (
              <div className="w-full h-full bg-slate-100 animate-pulse flex flex-col items-center justify-center text-slate-400">
                <svg className="w-12 h-12 mb-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                <p className="font-medium">Visualizing the results...</p>
              </div>
            ) : heroImage ? (
              <img src={heroImage} alt="Amazonian Nail Ritual Result" className="w-full h-full object-cover rounded-2xl" />
            ) : (
              <img src="https://picsum.photos/seed/ritual/600/600" alt="Health Illustration" className="w-full h-full object-cover rounded-2xl" />
            )}
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-slate-200 flex items-center gap-4">
               <div className="flex -space-x-2">
                 {[1,2,3].map(i => <img key={i} src={`https://picsum.photos/seed/${i}/40/40`} className="w-8 h-8 rounded-full border-2 border-white" alt="user" />)}
               </div>
               <div className="text-xs">
                 <p className="font-bold text-emerald-950">"My nails are finally pink!"</p>
                 <p className="text-slate-500">Verified transformation</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
