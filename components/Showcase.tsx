import React from 'react';

// Using the exact images from the reference HTML for consistency
const techImages = [
  "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&q=80", // Bitcoin/Dark
  "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?w=400&q=80", // Abstract Lines
  "https://images.unsplash.com/photo-1620288627223-537a262d7454?w=400&q=80", // Hexagons
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80", // Chips
  "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=400&q=80", // Block chain
  "https://images.unsplash.com/photo-1605792657660-596af9009e82?w=400&q=80", // Data
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80"  // Analytics
];

const PhoneScreen = ({ index }: { index: number }) => {
  const imgSrc = techImages[index % techImages.length];
  return (
    <div className="relative w-full aspect-[9/16] bg-[#111] rounded-[14px] md:rounded-[24px] border-2 md:border-4 border-[#222] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
      <img 
        src={imgSrc} 
        alt="Screen" 
        className="w-full h-full object-cover block"
        loading="lazy"
      />
      {/* Gloss overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none opacity-50"></div>
    </div>
  );
};

const Showcase: React.FC = () => {
  return (
    <section className="py-24 w-full">
      <div className="text-center mb-16 px-5">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white">The all in one DeFi toolbox</h2>
        <p className="text-[#a1a1aa] text-base font-normal">Everything you need to level up</p>
      </div>

      {/* 
         GRID SETUP:
         items-stretch: Ensures all columns are the same height (defined by the tallest content).
         This is critical for the middle column to act as a long 'track' for the sticky element.
      */}
      <div className="grid grid-cols-3 md:grid-cols-5 gap-3 md:gap-5 max-w-[1200px] mx-auto px-2 md:px-5 items-stretch">
        
        {/* Col 1 (Desktop only) */}
        <div className="hidden md:flex flex-col gap-5">
          <PhoneScreen index={0} />
          <PhoneScreen index={1} />
          <PhoneScreen index={2} />
        </div>

        {/* Col 2 */}
        <div className="flex flex-col gap-5">
          <PhoneScreen index={3} />
          <PhoneScreen index={4} />
          <PhoneScreen index={5} />
        </div>

        {/* Col 3 (Sticky Center) */}
        {/* h-full ensures this container fills the grid cell height entirely */}
        <div className="relative h-full"> 
          {/* 
            sticky top calculation: 
            Centers the card in the viewport when it "sticks".
            - Mobile: Card height ~200px. Center = 50vh - 100px. We use 120px for visual balance/header.
            - Desktop: Card height ~400px. Center = 50vh - 200px.
          */}
          <div className="sticky top-[calc(50vh-120px)] md:top-[calc(50vh-200px)] w-full z-20">
            <PhoneScreen index={6} />
          </div>
        </div>

        {/* Col 4 */}
        <div className="flex flex-col gap-5">
          <PhoneScreen index={7} />
          <PhoneScreen index={8} />
          <PhoneScreen index={0} />
        </div>

        {/* Col 5 (Desktop only) */}
        <div className="hidden md:flex flex-col gap-5">
          <PhoneScreen index={1} />
          <PhoneScreen index={2} />
          <PhoneScreen index={3} />
        </div>
      </div>
    </section>
  );
};

export default Showcase;