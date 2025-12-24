import React from 'react';

// Reusing the drop shadow filter concept for depth across all icons
const DefsAndFilters = () => (
  <defs>
    <filter id="shadow_depth" x="-20%" y="-20%" width="140%" height="140%" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="1.5"/>
      <feGaussianBlur stdDeviation="1.5"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
    </filter>
    
    {/* Solana Gradients */}
    <linearGradient id="sol_top" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00FFA3"/>
        <stop offset="1" stopColor="#03E1FF"/>
    </linearGradient>
    <linearGradient id="sol_mid" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
        <stop stopColor="#03E1FF"/>
        <stop offset="1" stopColor="#DC1FFF"/>
    </linearGradient>
    <linearGradient id="sol_bot" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
        <stop stopColor="#DC1FFF"/>
        <stop offset="1" stopColor="#9945FF"/>
    </linearGradient>

    <linearGradient id="base_grad" x1="16" y1="0" x2="16" y2="32" gradientUnits="userSpaceOnUse">
       <stop offset="0%" stopColor="#0052FF"/>
       <stop offset="100%" stopColor="#004AD9"/>
    </linearGradient>

    <linearGradient id="arb_grad" x1="16" y1="0" x2="16" y2="32" gradientUnits="userSpaceOnUse">
       <stop offset="0%" stopColor="#2D374B"/>
       <stop offset="100%" stopColor="#222a3a"/>
    </linearGradient>
  </defs>
);

export const EthLogo = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
    <g filter="url(#filter0_d_eth)">
      <path d="M16 2L15.7565 2.82736V20.8876L16 21.1306L24.8889 15.8776L16 2Z" fill="#627EEA"/>
      <path d="M16 2L7.11108 15.8776L16 21.1306V11.428V2Z" fill="#8A92B2"/>
      <path d="M16 22.2555V30.8715L16.2522 31.1818L24.8933 16.9976L16 22.2555Z" fill="#627EEA"/>
      <path d="M16 31.1818V22.2555L7.11108 16.9976L16 31.1818Z" fill="#8A92B2"/>
      <path d="M16 21.1306L24.8889 15.8776L16 11.428V21.1306Z" fill="#454A75"/>
      <path d="M7.11108 15.8776L16 21.1306V11.428L7.11108 15.8776Z" fill="#8A92B2" fillOpacity="0.5"/>
    </g>
    <defs>
      <filter id="filter0_d_eth" x="-4" y="0" width="40" height="40" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="2"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
      </filter>
    </defs>
  </svg>
);

export const SolLogo = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
    <DefsAndFilters />
    <g filter="url(#shadow_depth)">
        {/* Solana logo: 3 parallelograms with specific gradients and alternating directions */}
        {/* Top: Leans Right */}
        <path d="M8 7.5L28 7.5L24 11.5L4 11.5L8 7.5Z" fill="url(#sol_top)"/>
        {/* Middle: Leans Left */}
        <path d="M4 14L24 14L28 18L8 18L4 14Z" fill="url(#sol_mid)"/>
        {/* Bottom: Leans Right */}
        <path d="M8 20.5L28 20.5L24 24.5L4 24.5L8 20.5Z" fill="url(#sol_bot)"/>
    </g>
  </svg>
);

export const BscLogo = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
    <DefsAndFilters />
    <g filter="url(#shadow_depth)">
      <circle cx="16" cy="16" r="16" fill="#F3BA2F"/>
      {/* 
         Official Binance Geometry:
         Central Diamond + 4 Interlocking Chevrons
         Coordinates calculated for a 32x32 grid with consistent 1px axial gap (approx)
      */}
      <path fill="#12161C" d="
        M16 12.5 L19.5 16 L16 19.5 L12.5 16 Z
        M16 6 L20.5 10.5 L17.75 13.25 L16 11.5 L14.25 13.25 L11.5 10.5 Z
        M26 16 L21.5 20.5 L18.75 17.75 L20.5 16 L18.75 14.25 L21.5 11.5 Z
        M16 26 L11.5 21.5 L14.25 18.75 L16 20.5 L17.75 18.75 L20.5 21.5 Z
        M6 16 L10.5 11.5 L13.25 14.25 L11.5 16 L13.25 17.75 L10.5 20.5 Z
      " />
    </g>
    <circle cx="16" cy="16" r="15" stroke="white" strokeOpacity="0.1" strokeWidth="1" />
  </svg>
);

export const BaseLogo = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
    <DefsAndFilters />
    <g filter="url(#shadow_depth)">
      <circle cx="16" cy="16" r="16" fill="url(#base_grad)"/>
      {/* Thick white bar, accurately positioned */}
      <rect x="7" y="14" width="18" height="4" rx="2" fill="white"/>
    </g>
    {/* Subtle highlight/gloss on top half */}
    <path d="M16 0C7.16 0 0 7.16 0 16C0 16.5 0.04 17 0.1 17.5C0.5 9 7.5 2 16 2C24.5 2 31.5 9 31.9 17.5C31.96 17 32 16.5 32 16C32 7.16 24.84 0 16 0Z" fill="white" fillOpacity="0.1"/>
  </svg>
);

export const ArbitrumLogo = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
    <DefsAndFilters />
    <g filter="url(#shadow_depth)">
        {/* Hexagon Background */}
        <path d="M16 2.5L27.5 9V23L16 29.5L4.5 23V9L16 2.5Z" fill="#2B374B" stroke="#96BEDC" strokeWidth="2.5" />
        
        {/* Inner White Stripes and Blue Shape */}
        <g transform="translate(0, 1)">
           {/* First White Bar (Left) */}
           <path d="M10 22L13.5 22L17.5 10L14 10L10 22Z" fill="white"/>
           
           {/* Second White Bar (Middle) */}
           <path d="M15.5 22L19 22L23 10L19.5 10L15.5 22Z" fill="white"/>
           
           {/* Blue Triangle/Shape (Right) */}
           <path d="M21 22L24.5 22L25.5 19L22 19L21 22Z" fill="#28A0F0"/>
           {/* Note: The image shows a blue triangle-like shape. The above approximates the position relative to the stripes. 
               Let's adjust to be a proper triangle filling the corner if needed, but the cropped parallelogram fits the style. 
               Refining to look more like the 'fin'. */}
           <path d="M20.5 22L25 22L23 16L20.5 22Z" fill="#28A0F0" />
        </g>
    </g>
  </svg>
);

export const AtlaixLogo = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
    <defs>
      <linearGradient id="atlaix_grad" x1="16" y1="0" x2="16" y2="32" gradientUnits="userSpaceOnUse">
        <stop stopColor="#4ade80"/>
        <stop offset="1" stopColor="#22c55e"/>
      </linearGradient>
      <filter id="glow_a" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <path d="M16 3L4 27H9L16 11L23 27H28L16 3Z" fill="url(#atlaix_grad)" filter="url(#glow_a)"/>
    {/* Added inner shadow detail */}
    <path d="M16 11L12 21H20L16 11Z" fill="#000" fillOpacity="0.2"/>
  </svg>
);
