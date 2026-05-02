import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Categories from './Categories';
import ReviewSection from './ReviewSection';
import { 
  IoStarOutline, 
  IoHeartOutline, 
  IoSparklesOutline, 
  IoCloudOutline,
  IoColorWandOutline 
} from "react-icons/io5";
import BioSection from './BioSection';

const Index = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FEFAF6] text-[#4A5D4A] selection:bg-[#F0E5D8] font-sans overflow-x-hidden">
      
      <Navbar scrolled={scrolled} />

      {/* --- Editorial Hero Section --- */}
      <header className="relative pt-28 pb-12 px-6 max-w-7xl mx-auto">
        
        {/* Aesthetic Floating Doodles */}
        <div className="absolute top-32 left-10 animate-bounce opacity-30 text-[#8DA38D]">
          <IoSparklesOutline size={28} />
        </div>
        <div className="absolute top-20 right-40 opacity-20 rotate-12 text-[#E89981]">
          <IoCloudOutline size={40} />
        </div>
        <div className="absolute bottom-40 left-1/3 animate-pulse opacity-25 text-[#E89981]">
          <IoHeartOutline size={24} />
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Side: Content */}
          <div className="lg:col-span-5 relative z-10 space-y-6">
            <div className="flex items-center gap-2">
               <div className="h-[1px] w-6 bg-[#A8B5A8]"></div>
               <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#A8B5A8]">
                 Est. 2026 Collection
               </span>
            </div>
            
            <h1 className="text-6xl md:text-[80px] font-serif font-medium leading-[0.85] text-[#4A5D4A]">
              Simply <br /> 
              <span className="text-[#8DA38D] italic">Whimsy.</span>
            </h1>
            
            <p className="max-w-xs text-sm text-[#6B7C6B] leading-relaxed font-medium">
              Bespoke jewelry and handcrafted treasures born from the intersection of nature and digital dreams.
            </p>
            
            <div className="pt-4 flex items-center gap-6">
              <button className="bg-[#E89981] text-white px-10 py-3 rounded-full text-[11px] font-bold tracking-widest uppercase shadow-md hover:bg-[#d88870] transition-all">
                Shop the Drop
              </button>
              <div className="hidden md:flex flex-col items-center opacity-40">
                <IoColorWandOutline size={20} className="rotate-45" />
                <span className="text-[8px] font-bold uppercase mt-1">Handmade</span>
              </div>
            </div>
          </div>

          {/* Right Side: Pinboard/Scrapbook */}
          <div className="lg:col-span-7 relative flex justify-center items-center h-[550px]">
            
            {/* Background "Pinboard" Card */}
            <div className="absolute inset-4 md:inset-10 bg-[#F4F1EA] border border-[#E8E4D9] rounded-3xl -rotate-1 opacity-50 shadow-inner"></div>

            {/* --- Mini Photo 1 (Top Left) --- */}
            <div className="absolute top-10 left-12 w-48 h-52 bg-white p-1.5 shadow-lg -rotate-12 z-20 border border-[#F0EAD6]">
               <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-6 bg-[#E89981]/20 backdrop-blur-sm rotate-12"></div>
               <img src="/main.jpg" className="w-full h-full object-cover rounded-sm grayscale-[30%]" alt="Mini 1" />
            </div>

            {/* --- Main Image (Center) --- */}
            <div className="relative w-[48%] aspect-[4/5] bg-white p-2 rounded-2xl shadow-2xl rotate-2 z-10 border border-[#F0EAD6]">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-28 h-9 bg-[#8DA38D]/30 backdrop-blur-sm -rotate-2 z-20 flex items-center justify-center border-x-2 border-dashed border-[#8DA38D]/20 shadow-sm">
                <span className="text-[7px] text-[#4A5D4A] font-black uppercase tracking-tighter opacity-40">Washy Tape</span>
              </div>
              <img src="/same.jpeg" className="w-full h-full object-cover rounded-xl" alt="Jewelry" />
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#FEFAF6] rounded-full flex items-center justify-center shadow-md border border-[#E8E4D9] rotate-12 z-20">
                <IoStarOutline size={18} className="text-orange-300" />
              </div>
            </div>

            {/* --- Mini Photo 2 (Bottom Right) --- */}
            <div className="absolute bottom-16 right-20 w-42 h-56 bg-white p-1.5 shadow-lg rotate-6 z-20 border border-[#F0EAD6]">
               <div className="absolute -top-2 right-4 w-10 h-5 bg-[#8DA38D]/20 backdrop-blur-sm -rotate-45"></div>
               <img src="/main.jpeg" className="w-full h-full object-cover rounded-sm grayscale-[20%]" alt="Mini 2" />
            </div>

            {/* Bear & Punchline Section */}
            <div className="absolute -right-6 bottom-4 w-44 md:w-76 z-30">
                <div className="relative mb-2 ml-10 bg-[#FFF9E3] px-3 py-2 rounded-xl rounded-bl-none shadow-sm border border-[#E8E4D9] rotate-2">
                    <p className="text-[9px] font-serif italic text-[#E89981] leading-tight">
                        "Tiny things that <br /> bring a big smile ♡"
                    </p>
                    <div className="absolute -bottom-1 left-0 w-2 h-2 bg-[#FFF9E3] border-l border-b border-[#E8E4D9] rotate-45"></div>
                </div>
                <img src="/bear.png" className="w-full h-auto drop-shadow-lg transform hover:scale-105 transition-transform duration-300" alt="Mascot" />
            </div>

            {/* Decorative Doodle Pin */}
            <div className="absolute top-20 right-1/4 w-3 h-3 bg-red-400 rounded-full shadow-inner border-t border-white/30 z-30"></div>
          </div>
        </div>
      </header>

      {/* --- Categories --- */}
      <div className="py-6">
       
        <Categories />
      </div>

      <BioSection />

      {/* --- Footer --- */}
      <footer className="bg-[#F9F6F0] py-10 px-6 border-t border-[#E8E4D9]">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <img className="h-10 mb-6 grayscale opacity-60" src="/translogo.png" alt="Logo" />
          <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-[#A8B5A8]">
            © 2026 WHIMSY BEADS | Created By Core Stack Technologies
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce {
          animation: bounce 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Index;