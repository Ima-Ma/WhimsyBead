import React from 'react';
import { 
  IoHeartOutline, 
  IoLeafOutline, 
  IoCubeOutline, 
  IoSparklesOutline 
} from "react-icons/io5";

const BioSection = () => {
  return (
    <section className="py-16 px-6 bg-[#FEFAF6] max-w-6xl mx-auto rounded-[40px] border border-[#F4F1EA] overflow-hidden relative">
      
      {/* Decorative Doodles */}
      <div className="absolute top-10 right-10 text-orange-200 opacity-40 animate-pulse">
        <IoSparklesOutline size={20} />
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
        
        {/* Left: Rounded Studio Image */}
        <div className="w-full lg:w-1/2 relative group">
          <div className="aspect-[4/3] rounded-[32px] overflow-hidden border-8 border-white shadow-sm transition-transform duration-500 group-hover:scale-[1.02]">
             {/* Using the same.jpeg for the studio vibe */}
            <img 
              src="/main.jpeg" 
              alt="Handmade jewelry workspace" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Floating Heart Sticker */}
          <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center rotate-12">
             <IoHeartOutline className="text-[#E89981]" size={24} />
          </div>
        </div>

        {/* Right: Content & Values */}
        <div className="w-full lg:w-1/2 space-y-8">
          <div>
            <h2 className="text-5xl md:text-6xl font-serif font-medium leading-tight text-[#4A5D4A]">
              the <span className="text-[#E89981] italic">soul</span> <br /> 
              behind the craft.
            </h2>
            <p className="mt-4 text-xs md:text-sm text-[#6B7C6B] leading-relaxed max-w-md font-medium">
              Every piece is made by hand with patience, love, and a lot of little happy thoughts. 
              Thank you for supporting handmade! ♡
            </p>
            <button className="mt-6 bg-[#8DA38D] text-white px-8 py-2.5 rounded-xl text-[10px] font-bold tracking-widest uppercase hover:bg-[#7a8d7a] transition-all shadow-sm">
              Read Our Story
            </button>
          </div>

          {/* Value Props - Matching the circle icons in your reference */}
          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-white border border-[#F4F1EA] flex items-center justify-center shadow-sm group-hover:bg-[#FFF5E6] transition-colors">
                <IoHeartOutline className="text-[#E89981]" size={20} />
              </div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#A8B5A8]">
                Handmade with love
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-white border border-[#F4F1EA] flex items-center justify-center shadow-sm group-hover:bg-[#F1F5E9] transition-colors">
                <IoLeafOutline className="text-[#8DA38D]" size={20} />
              </div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#A8B5A8]">
                High quality materials
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-white border border-[#F4F1EA] flex items-center justify-center shadow-sm group-hover:bg-[#FDF6EC] transition-colors">
                <IoCubeOutline className="text-[#E89981]" size={20} />
              </div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#A8B5A8]">
                Safe & secure packaging
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Floral Accents */}
      <div className="absolute -bottom-10 -right-10 opacity-10 pointer-events-none">
        <svg width="200" height="200" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="40" stroke="#8DA38D" strokeWidth="0.5" strokeDasharray="4 4" />
          <path d="M50 20C50 20 55 35 70 35C85 35 80 50 80 50" stroke="#8DA38D" strokeWidth="0.5" />
        </svg>
      </div>
    </section>
  );
};

export default BioSection;