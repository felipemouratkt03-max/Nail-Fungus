
import React, { useEffect, useState } from 'react';
import { generateHeroImage } from '../services/geminiService';
import { DESTINATION_LINK } from '../constants';

const StoryLetter: React.FC = () => {
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

  const CTAButton = () => (
    <div className="my-12 flex justify-center">
      <a 
        href={DESTINATION_LINK}
        className="bg-[#FF5722] hover:bg-[#E64A19] text-white px-10 py-5 rounded-lg text-2xl font-black shadow-xl transform hover:scale-105 transition-all text-center font-sans tracking-tight"
      >
        Watch The Video Now
      </a>
    </div>
  );

  return (
    <article className="max-w-3xl mx-auto px-6 pt-32 pb-24">
      {/* Editorial Header */}
      <div className="border-b-2 border-slate-100 pb-4 mb-10 flex justify-between items-end">
        <div className="text-xs font-bold font-sans uppercase tracking-widest text-slate-400">
          Special Health Editorial &bull; {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </div>
        <div className="text-xs font-bold font-sans text-emerald-800">4 MIN READ</div>
      </div>

      {/* Main Headline */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-extrabold text-slate-900 leading-tight mb-8">
        I Was 24 Hours Away From Letting The Doctor Rip My Toenail Out...
      </h1>

      {/* Subheadline */}
      <h3 className="text-2xl md:text-3xl font-serif-body italic text-slate-700 leading-relaxed mb-10">
        Until I stumbled upon a bizarre "Amazonian Barefoot Ritual" that cleared my fungus, saved my nail, and gave me my life back.
      </h3>

      {/* Hero Image / Loading Placeholder */}
      <div className="my-10">
        {loading ? (
          <div className="w-full aspect-[4/3] bg-slate-50 flex items-center justify-center rounded-xl border border-slate-100 animate-pulse">
            <span className="text-slate-400 font-sans text-sm italic">Developing ritual imagery...</span>
          </div>
        ) : (
          <figure>
            <img 
              src={heroImage || "https://picsum.photos/seed/rainforest/800/600"} 
              alt="The Amazonian Secret" 
              className="w-full rounded-xl shadow-lg border border-slate-100" 
            />
            <figcaption className="mt-3 text-center text-xs text-slate-400 font-sans italic">
              Above: The biological mechanism that restores clear nail immunity naturally.
            </figcaption>
          </figure>
        )}
      </div>

      <CTAButton />

      {/* Body Copy Section 1 */}
      <div className="text-xl leading-relaxed space-y-8 text-slate-800 font-serif-body">
        <p>I still remember the look on my wife’s face when she saw my feet. It wasn’t disgust... it was pity. And that hurt worse.</p>
        
        <p>For 12 years, I hid my feet. I wore socks to the beach. I showered with the lights off. I tried every cream at the drugstore, painted on those expensive lacquers, and soaked my feet in vinegar until they burned. Nothing worked.</p>
        
        <p>The yellow, crumbling infection always came back. It was relentless.</p>
        
        <p>My podiatrist gave me two options: pills that could damage my liver, or surgery to permanently remove the nail. I was desperate, so I scheduled the surgery.</p>
        
        <p>But fate had other plans.</p>
        
        <p>Just days before the procedure, I met a researcher who had just returned from the Amazon rainforest. He told me something that sounded crazy at the time.</p>
        
        <p className="border-l-4 border-amber-400 pl-6 italic text-2xl text-slate-700">
          "Have you ever wondered," he asked, "why tribes who walk barefoot in mud and filth never get toe fungus?"
        </p>
        
        <p>The answer wasn't about being cleaner. It was about being "dirtier"—but in the right way.</p>

        <h2 className="text-3xl font-sans font-bold text-slate-900 pt-6 pb-2">The "Sterilization Trap"</h2>
        
        <p>He explained that modern medicine makes a fatal mistake. We use chemicals that kill <strong>everything</strong> on our feet—including the good bacteria that act as our natural defenders. When you sterilize your foot, you leave it defenseless. The fungus comes back because there is nothing there to stop it.</p>
        
        <p>The Amazonian secret wasn't a chemical. It was a specific blend of probiotics and herbal extracts that <em>fed</em> the nail bed.</p>
      </div>

      <CTAButton />

      {/* Body Copy Section 2 */}
      <div className="text-xl leading-relaxed space-y-8 text-slate-800 font-serif-body">
        <h2 className="text-3xl font-sans font-bold text-slate-900 pt-6 pb-2">The Ritual That Changed Everything</h2>
        
        <p>Skeptical but desperate, I tried the method he described. It was a simple 60-second routine after my shower.</p>
        
        <ul className="space-y-4 font-sans font-semibold text-emerald-900 ml-4">
          <li className="flex gap-3"><span className="text-amber-500">Day 1:</span> The itching stopped.</li>
          <li className="flex gap-3"><span className="text-amber-500">Day 7:</span> The smell was gone.</li>
          <li className="flex gap-3"><span className="text-amber-500">Day 30:</span> I saw clear, pink nail growth at the cuticle.</li>
        </ul>
        
        <p>Today, I walk barefoot on the beach with pride. My nails are strong, clear, and healthy. I didn't need the surgery. I didn't need the toxic pills.</p>
        
        <p>If you are suffering from thick, yellow, or brittle nails, you need to see this.</p>
        
        <p>I've put together a short video explaining exactly how this "Amazonian Ritual" works and how you can do it at home starting tonight.</p>
        
        <p className="font-bold">Don't let them pull your nail out before you watch this.</p>
      </div>

      <CTAButton />

      <div className="mt-20 pt-10 border-t border-slate-100 flex items-center gap-6">
        <div className="w-16 h-16 bg-slate-200 rounded-full overflow-hidden shrink-0">
          <img src="https://picsum.photos/seed/author/100/100" alt="Author" className="grayscale opacity-80" />
        </div>
        <div>
          <p className="font-sans font-bold text-slate-900">James Anderson</p>
          <p className="font-sans text-sm text-slate-500 uppercase tracking-widest">Medical Health Contributor</p>
        </div>
      </div>
    </article>
  );
};

export default StoryLetter;
