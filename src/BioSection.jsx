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
      

      <div className="absolute top-10 right-10 text-orange-200 opacity-40 animate-pulse">
        <IoSparklesOutline size={20} />
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
        

        <div className="w-full lg:w-1/2 space-y-8">


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