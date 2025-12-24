import React from 'react';
import { ExternalLink, LogoIcon } from './Icons';

const Navbar: React.FC = () => {
  return (
    <>
      {/* Brand / Logo */}
      <div className="absolute top-[20px] left-[20px] md:top-[30px] md:left-[40px] z-50 flex items-center gap-3 cursor-pointer select-none">
        <LogoIcon />
        <span className="text-xl md:text-[22px] font-bold text-white tracking-tight">Atlaix</span>
      </div>

      {/* Sticky Action Button */}
      <div className="fixed top-[20px] right-[20px] md:top-[30px] md:right-[40px] z-50">
        <button className="flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-semibold text-white bg-bg-dark/40 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all shadow-lg active:scale-95">
          Launch App <ExternalLink />
        </button>
      </div>
    </>
  );
};

export default Navbar;