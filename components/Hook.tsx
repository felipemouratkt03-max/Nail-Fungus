
import React from 'react';

const Hook: React.FC = () => {
  return (
    <section className="bg-emerald-950 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 leading-tight">
          Why do Amazonian tribesmen, who walk barefoot in bacteria-filled mud daily, have perfectly healthy nails?
        </h2>
        <div className="w-24 h-1 bg-amber-500 mx-auto mb-10"></div>
        <div className="text-lg md:text-xl text-emerald-50/80 space-y-6 leading-relaxed">
          <p>
            The answer shocked researchers. It's not about what they avoid—it's about a microscopic <span className="text-amber-400 font-bold uppercase tracking-wider">"shield"</span> they possess.
          </p>
          <p>
            While modern science has focused on aggressive chemicals that destroy everything in their path, the Amazonian ritual works by <span className="italic">reinforcing</span> the natural microbiome that has protected humans for millennia.
          </p>
          <p className="font-bold text-white text-2xl mt-8">
            A shield you can replicate at home starting today.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hook;
