import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Showcase from './components/Showcase';
import Features from './components/Features';
import ChainNetwork from './components/ChainNetwork';

const App: React.FC = () => {
  return (
    <div className="bg-gradient-mesh min-h-screen w-full relative text-white font-sans selection:bg-accent-green/30 selection:text-white">
      {/* Background Pulse Animation Layer */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-transparent animate-pulse-glow"></div>
      </div>

      <Navbar />
      
      <main className="relative z-10 flex flex-col w-full">
        <Hero />
        <Showcase />
        <Features />
        <ChainNetwork />
      </main>

      <div className="h-24"></div>
    </div>
  );
};

export default App;