import React from 'react';
import { WalletIcon, MegaIcon, AIIcon, ShieldIcon } from './Icons';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white/[0.03] backdrop-blur-md border border-white/[0.08] rounded-3xl p-6 md:p-10 flex flex-col justify-start hover:-translate-y-1 transition-transform duration-300">
      <div className="mb-5 w-12 h-12 bg-accent-green/10 rounded-xl flex items-center justify-center text-accent-green">
        {icon}
      </div>
      <h3 className="text-lg md:text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-[15px] leading-relaxed text-[#a1a1aa] whitespace-pre-line">
        {description}
      </p>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <section className="w-full relative z-10 py-20 px-5 flex flex-col items-center">
      <h2 className="text-2xl md:text-4xl font-bold mb-10 text-center text-white">
        Our All-in-One Solution Provides
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-[1000px] w-full">
        
        <FeatureCard 
          icon={<WalletIcon />}
          title="Smart Money & Copy Trading"
          description="Don't guess, follow the money. Track profitable whales and institutional wallets in real-time. See their entries, exits, and PnL before the market reacts."
        />

        <FeatureCard 
          icon={<MegaIcon />}
          title="Virality Prediction Engine"
          description="Catch the next 100x before CT does. Our AI analyzes KOL feeds and social sentiment across different platforms to flag viral tokens and trends instantly."
        />

        <FeatureCard 
          icon={<AIIcon />}
          title="AI Chatbot & Heatmaps"
          description="Your personal 24/7 crypto analyst. Ask our AI Chatbot anything, visualize market data with Token Heatmaps, and set custom alerts so you never miss a move."
        />

        <FeatureCard 
          icon={<ShieldIcon />}
          title="Rug-Proof Safe Scan"
          description="Trade with confidence. Our Safe Scan technology detects honeypots, malicious contracts, and high-risk anomalies to protect your capital."
        />

      </div>
    </section>
  );
};

export default Features;