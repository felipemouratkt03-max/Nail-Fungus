
import React from 'react';

const ScienceSection: React.FC = () => {
  return (
    <section id="science" className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-emerald-950 mb-4">The Science of the Probiotic Shield</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Most treatments fail because they only scratch the surface. Here is why this biological breakthrough is different.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.618.309a6 6 0 01-3.86.517l-2.388-.477a2 2 0 00-1.022.547l-1.16 1.16a2 2 0 002.828 2.828l1.16-1.16a2 2 0 00.547-1.022l.477-2.387a6 6 0 00-.517-3.86l-.309-.618a6 6 0 01-.517-3.86l.477-2.388a2 2 0 00-.547-1.022l-1.16-1.16a2 2 0 00-2.828 2.828l1.16 1.16z"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-emerald-950 mb-3">Microbiome Restoration</h3>
            <p className="text-slate-600 leading-relaxed">It reintroduces specific beneficial bacteria that act as natural predators to harmful fungal spores, creating a permanent defensive perimeter.</p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-2xl shadow-emerald-900/5 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-3 bg-amber-500 text-white text-[10px] font-bold uppercase tracking-widest rounded-bl-xl">Core Mechanism</div>
            <div className="w-12 h-12 bg-amber-100 text-amber-800 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-emerald-950 mb-3">Keratin Fortification</h3>
            <p className="text-slate-600 leading-relaxed">By optimizing the pH levels of the nail bed, the new growth emerges thicker, clearer, and structurally resistant to invasion.</p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-emerald-950 mb-3">Rapid Cellular Flush</h3>
            <p className="text-slate-600 leading-relaxed">The active ingredients accelerate the natural shedding of damaged tissue, revealing healthy, pink nail growth in record time.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScienceSection;
