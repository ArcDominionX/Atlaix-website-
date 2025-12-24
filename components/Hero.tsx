import React from 'react';
import { ArrowRight, ChevronDown } from './Icons';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center pt-32 pb-16 px-5 z-10 max-w-7xl mx-auto">
      
      {/* Text Content */}
      <div className="text-center max-w-[800px] mb-8 animate-fade-in-up">
        <h1 className="text-[32px] sm:text-5xl md:text-[68px] font-extrabold leading-[1.1] tracking-tight uppercase mb-4 bg-gradient-to-br from-white via-white to-[#86efac] bg-clip-text text-transparent">
          Automate Your <br />
          Crypto Research
        </h1>
        <p className="text-[15px] md:text-base text-[#a1a1aa] leading-relaxed max-w-[500px] mx-auto font-normal opacity-90">
          The ultimate unfair advantage. Track smart money and spot whales before they move.
        </p>
      </div>

      {/* Hero Image / Abstract Visualization */}
      <div className="w-full flex justify-center items-center h-[35vh] md:h-[40vh] mb-8 relative animate-fade-in-up-delay">
        {/* Abstract Glowing Orb Simulation using CSS/SVG */}
        <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full bg-accent-green/20 blur-[60px] animate-pulse-glow"></div>
            <svg viewBox="0 0 200 200" className="w-full h-full animate-[spin_20s_linear_infinite] opacity-80 drop-shadow-[0_0_15px_rgba(74,222,128,0.5)]">
                <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#4ade80" stopOpacity="0.1" />
                        <stop offset="100%" stopColor="#4ade80" stopOpacity="0.8" />
                    </linearGradient>
                </defs>
                <circle cx="100" cy="100" r="90" stroke="url(#grad1)" strokeWidth="1" fill="none" />
                <circle cx="100" cy="100" r="70" stroke="url(#grad1)" strokeWidth="2" fill="none" strokeDasharray="10 5" />
                <circle cx="100" cy="100" r="50" stroke="#4ade80" strokeWidth="1" fill="none" opacity="0.5" />
                <path d="M100 10 L100 190 M10 100 L190 100" stroke="url(#grad1)" strokeWidth="1" opacity="0.3" />
                <circle cx="100" cy="100" r="20" fill="#4ade80" opacity="0.8" />
            </svg>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-accent-green font-mono text-xs tracking-widest uppercase">
                Alpha Core
            </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-3 w-full mb-10 animate-fade-in-up-delay-2">
        <button className="flex items-center justify-center gap-2 px-8 py-4 rounded-full text-[15px] font-semibold bg-white/5 border border-white/10 backdrop-blur-md text-white hover:bg-white/10 hover:-translate-y-px transition-all duration-300 min-w-[150px]">
          See More
        </button>
        <button className="flex items-center justify-center gap-2 px-8 py-4 rounded-full text-[15px] font-semibold bg-accent-green/10 border border-accent-green/25 backdrop-blur-md text-white hover:bg-accent-green/20 hover:shadow-[0_0_20px_rgba(74,222,128,0.2)] hover:-translate-y-px transition-all duration-300 min-w-[150px]">
          Launch App <ArrowRight />
        </button>
      </div>

      {/* Scroll Hint */}
      <div className="mt-auto pb-5 text-white/50 animate-float">
        <ChevronDown />
      </div>

    </section>
  );
};

export default Hero;