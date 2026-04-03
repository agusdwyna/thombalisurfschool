import React from 'react';
import { MessageCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-end px-6 pb-24 pt-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          className="w-full h-full object-cover" 
          src="hero.jpeg    " 
          alt="Surf Bali"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#fcf9f2] via-[#fcf9f2]/40 to-transparent"></div>
      </div>
      
      <div className="relative z-10 space-y-6 max-w-2xl">
        <span className="inline-block bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
          Kuta Beach, Bali
        </span>
        <h1 className="text-5xl font-extrabold tracking-tight text-[#1c1c18] leading-[1.1]">
          Learn to Surf in Bali the <span className="text-[#00672c]">Easy & Fun</span> Way!
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed max-w-md">
          Beginner-friendly lessons at Bali's best surf spots with certified local guides.
        </p>
        <a 
          href="https://wa.me/628123456789"
          className="inline-flex items-center justify-center gap-3 bg-[#00672c] hover:bg-emerald-700 text-white py-5 px-8 rounded-xl font-bold transition-all active:scale-[0.98] shadow-lg shadow-emerald-900/20"
        >
          <MessageCircle fill="currentColor" size={20} />
          Chat on WhatsApp Now
        </a>
      </div>
    </section>
  );
};

export default Hero;