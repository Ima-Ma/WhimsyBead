import React from 'react';
import { IoStar, IoStarOutline, IoArrowForwardOutline, IoChatbubbleOutline } from "react-icons/io5";

const ReviewSection = () => {
  // Mock data for the "Gen-Z" aesthetic reviews
  const reviews = [
    { name: "Luna M.", handle: "@luna.verse", text: "literally the most dreamy necklace i own. the packaging was 10/10 vibes.", color: "bg-[#E2E8CE]" },
    { name: "Sloane Z.", handle: "@sloane_z", text: "the custom ring fits perfectly. i feel like a literal fairy wearing this.", color: "bg-[#D6E2D0]" },
    { name: "Jade P.", handle: "@jadep", text: "ships so fast and the sale pieces are actually high quality?? obsessed.", color: "bg-[#BCCEB2]" },
    { name: "Mika W.", handle: "@mika_vibes", text: "every time i wear the beaded dreamscape i get like 50 compliments.", color: "bg-[#A7C4A0]" },
  ];

  return (
    <section className="py-32 bg-[#FBFCFB] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- Header with Accent --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="relative">
            <span className="absolute -top-6 -left-4 text-[#FF6B35] opacity-20 text-6xl font-black italic select-none">"</span>
            <h2 className="text-5xl md:text-7xl font-serif italic leading-none tracking-tight">
              the <span className="text-[#FF6B35]">inner</span> circle.
            </h2>
            <p className="mt-4 text-[10px] uppercase tracking-[.4em] font-bold opacity-60">Real talk from our community</p>
          </div>
          
          <div className="flex items-center gap-4 group cursor-pointer">
            <span className="text-xs font-black uppercase tracking-widest border-b-2 border-[#2C3B30] pb-1">Read all 500+ love letters</span>
            <IoArrowForwardOutline className="group-hover:translate-x-2 transition-transform duration-300" />
          </div>
        </div>

        {/* --- Horizontal Scroll Slider --- */}
        <div className="flex gap-8 overflow-x-auto pb-12 snap-x no-scrollbar">
          {reviews.map((rev, i) => (
            <div 
              key={i} 
              className={`flex-shrink-0 w-[320px] md:w-[400px] snap-center p-10 ${rev.color} border border-black/5 flex flex-col justify-between h-[350px] shadow-[-10px_10px_0px_0px_rgba(44,59,48,0.05)] transition-transform hover:-translate-y-2 cursor-grab active:cursor-grabbing`}
            >
              <div>
                {/* Elite Star Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <IoStar key={i} className="text-[#FF6B35] size-4" />
                  ))}
                </div>
                
                {/* Review Text Skeleton Design */}
                <blockquote className="text-2xl font-serif italic leading-tight text-[#2C3B30] mb-4">
                  "{rev.text}"
                </blockquote>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-black/10">
                <div className="w-12 h-12 bg-white flex items-center justify-center">
                  <IoChatbubbleOutline className="text-[#8DA38D]" />
                </div>
                <div>
                  <p className="font-black uppercase text-[11px] tracking-tighter">{rev.name}</p>
                  <p className="text-[10px] italic text-[#8DA38D]">{rev.handle}</p>
                </div>
              </div>
            </div>
          ))}

          {/* --- Skeleton Review (The "Wait for more" card) --- */}
          <div className="flex-shrink-0 w-[320px] md:w-[400px] snap-center p-10 bg-white border-2 border-dashed border-[#D6E2D0] flex flex-col justify-between h-[350px] animate-pulse">
            <div>
              <div className="flex gap-1 mb-6 opacity-30">
                {[...Array(5)].map((_, i) => (
                  <IoStarOutline key={i} className="text-[#8DA38D] size-4" />
                ))}
              </div>
              <div className="space-y-3">
                <div className="h-6 w-full bg-[#F2F5F2]" />
                <div className="h-6 w-4/5 bg-[#F2F5F2]" />
                <div className="h-6 w-2/3 bg-[#F2F5F2]" />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#F2F5F2]" />
              <div className="space-y-2">
                <div className="h-3 w-20 bg-[#F2F5F2]" />
                <div className="h-2 w-12 bg-[#F2F5F2]" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Progress Bar Highlight */}
        <div className="w-full h-[1px] bg-[#E8EEE8] mt-8 relative">
          <div className="absolute top-0 left-0 h-full w-1/3 bg-[#FF6B35]" />
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default ReviewSection;