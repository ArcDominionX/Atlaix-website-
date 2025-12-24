import React from 'react';
import { EthLogo, SolLogo, BscLogo, BaseLogo, ArbitrumLogo, AtlaixLogo } from './ChainIcons';

// Coordinates are in percentages (x: left%, y: top%)
const nodes = [
  // Top
  { id: 'eth', label: 'Ethereum', x: 50, y: 10, Icon: EthLogo, color: 'from-indigo-500/20 to-blue-500/20', borderColor: 'border-indigo-400/30' },
  // Top Left
  { id: 'sol', label: 'Solana', x: 15, y: 30, Icon: SolLogo, color: 'from-green-500/20 to-purple-500/20', borderColor: 'border-green-400/30' },
  // Top Right
  { id: 'bsc', label: 'BSC', x: 85, y: 30, Icon: BscLogo, color: 'from-yellow-600/20 to-yellow-400/20', borderColor: 'border-yellow-500/30' },
  // Bottom Left
  { id: 'base', label: 'Base', x: 25, y: 80, Icon: BaseLogo, color: 'from-blue-600/20 to-cyan-500/20', borderColor: 'border-blue-400/30' },
  // Bottom Right
  { id: 'arb', label: 'Arbitrum', x: 75, y: 80, Icon: ArbitrumLogo, color: 'from-blue-800/20 to-blue-600/20', borderColor: 'border-blue-400/30' },
  
  // Center (Atlaix)
  { id: 'atlaix', label: 'Atlaix', x: 50, y: 50, Icon: AtlaixLogo, color: 'from-green-500/20 to-emerald-500/20', borderColor: 'border-accent-green/50', isCenter: true },
];

// Define all connections (Center-to-Edge and Edge-to-Edge)
const connections = [
  // Star connections (Center to Outer)
  ['eth', 'atlaix'],
  ['sol', 'atlaix'],
  ['bsc', 'atlaix'],
  ['base', 'atlaix'],
  ['arb', 'atlaix'],

  // Ring connections (Outer to Outer)
  ['sol', 'eth'],   // Top Left -> Top
  ['eth', 'bsc'],   // Top -> Top Right
  ['bsc', 'arb'],   // Top Right -> Bottom Right
  ['arb', 'base'],  // Bottom Right -> Bottom Left
  ['base', 'sol'],  // Bottom Left -> Top Left
];

const ChainNetwork: React.FC = () => {
  return (
    <section className="relative w-full py-24 overflow-hidden flex flex-col items-center">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-green/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="relative z-10 text-center mb-16 px-5">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">Multi-Chain Intelligence</h2>
        <p className="text-[#a1a1aa] max-w-[500px] mx-auto">
           Aggregating real-time liquidity and volume data from every major ecosystem.
        </p>
      </div>

      {/* 3D Scene Container */}
      <div className="relative w-full max-w-[1000px] h-[450px] md:h-[550px] mx-auto perspective-container px-4">
        
        {/* The Tilted Plane */}
        <div 
          className="relative w-full h-full transform-style-3d"
          style={{ 
            transform: 'rotateX(30deg) rotateY(0deg)',
          }}
        >
          {/* Connection Lines (SVG Layer) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" style={{ transform: 'translateZ(-10px)' }}>
            <defs>
              <linearGradient id="lineBase" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(255, 255, 255, 0.05)" />
                <stop offset="100%" stopColor="rgba(255, 255, 255, 0.05)" />
              </linearGradient>
              <filter id="glow">
                {/* Increased deviation for softer glow */}
                <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            {connections.map(([startId, endId], idx) => {
              const start = nodes.find(n => n.id === startId);
              const end = nodes.find(n => n.id === endId);
              if (!start || !end) return null;

              return (
                <g key={`${startId}-${endId}`}>
                  {/* Static Base Line */}
                  <line
                    x1={`${start.x}%`}
                    y1={`${start.y}%`}
                    x2={`${end.x}%`}
                    y2={`${end.y}%`}
                    stroke="rgba(255,255,255,0.05)"
                    strokeWidth="2"
                  />
                  {/* Surging Data Packet Line */}
                  {/* We use strokeDasharray to create a 'packet' and animate the offset */}
                  <line
                    x1={`${start.x}%`}
                    y1={`${start.y}%`}
                    x2={`${end.x}%`}
                    y2={`${end.y}%`}
                    stroke="#86efac" /* Lighter green for better glow */
                    strokeWidth="3" /* Slightly thicker for more visible pulse */
                    strokeLinecap="round"
                    className="surge-line opacity-90"
                    filter="url(#glow)"
                    // Stagger animation based on index to create a random flow effect
                    style={{ animationDelay: `-${idx * 0.4}s` }}
                  />
                </g>
              );
            })}
          </svg>

          {/* Nodes (Cards) */}
          {nodes.map((node, idx) => (
            <div
              key={node.id}
              className={`absolute flex flex-col items-center justify-center p-4 rounded-[24px] 
                         backdrop-blur-xl bg-gradient-to-br ${node.color} border ${node.borderColor}
                         shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all duration-300
                         group hover:scale-110 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(74,222,128,0.2)]
                         cursor-pointer
                         ${node.isCenter ? 'w-24 h-24 md:w-36 md:h-36 z-20 shadow-[0_0_50px_rgba(74,222,128,0.15)]' : 'w-20 h-20 md:w-28 md:h-28 z-10'}`}
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                // Counter-rotate the node so it faces the user (billboard effect), cancelling the parent's rotateX(30deg)
                transform: `translate(-50%, -50%) translateZ(${node.isCenter ? '40px' : '20px'}) rotateX(-30deg)`,
              }}
            >
              {/* Gloss Reflection */}
              <div className="absolute inset-0 rounded-[24px] bg-gradient-to-br from-white/20 to-transparent opacity-50 pointer-events-none"></div>
              
              {/* Icon */}
              <div className={`${node.isCenter ? 'w-12 h-12 md:w-20 md:h-20' : 'w-10 h-10 md:w-14 md:h-14'} relative z-10 drop-shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                <node.Icon />
              </div>

              {/* 3D Thickness Simulation */}
              <div className="absolute inset-0 rounded-[24px] border-b-4 border-r-4 border-black/20 pointer-events-none"></div>
            </div>
          ))}

        </div>
      </div>
      
      {/* Styles for Animations */}
      <style>{`
        .perspective-container {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .surge-line {
          stroke-dasharray: 60 400; /* Increased packet size slightly */
          animation: surge 3s linear infinite; /* Slowed down from 1.5s to 3s */
        }
        @keyframes surge {
          to {
            stroke-dashoffset: -460; /* Adjusted for new packet size */
          }
        }
      `}</style>
    </section>
  );
};

export default ChainNetwork;