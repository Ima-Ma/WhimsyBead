import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Categories from './Categories';
import { 
  IoStarOutline, 
  IoHeartOutline, 
  IoSparklesOutline, 
  IoCloudOutline,
  IoColorWandOutline,
  IoLogoInstagram,
  IoLogoTiktok,
  IoLogoFacebook,
  IoLogoPinterest,
  IoHeart
} from "react-icons/io5";

const Index = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FEFAF6] text-[#4A5D4A] selection:bg-[#F0E5D8] font-sans overflow-x-hidden scroll-smooth">
      
      <Navbar scrolled={scrolled} />

      {/* --- Home Section --- */}
      <header id="home" className="relative pt-32 md:pt-40 pb-12 px-6 max-w-7xl mx-auto">
        
        {/* Aesthetic Floating Doodles - Hidden on very small screens for clarity */}
        <div className="absolute top-32 left-4 md:left-10 animate-bounce opacity-30 text-[#8DA38D]">
          <IoSparklesOutline size={24} />
        </div>
        <div className="absolute top-20 right-10 md:right-40 opacity-20 rotate-12 text-[#E89981]">
          <IoCloudOutline size={30} md:size={40} />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Content */}
          <div className="lg:col-span-5 relative z-10 space-y-6 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2">
               <div className="h-[1px] w-6 bg-[#A8B5A8]"></div>
               <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#A8B5A8]">
                 Created Collection 2026
               </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-[80px] font-serif font-medium leading-[0.9] text-[#4A5D4A]">
              Whimsy <br /> 
              <span className="text-[#8DA38D] italic">Beads.</span>
            </h1>
            
            <div className="hidden lg:block h-[1px] w-6 bg-[#A8B5A8]"></div>
            
            <p className="max-w-xs mx-auto lg:mx-0 text-sm md:text-base text-[#6B7C6B] leading-relaxed font-medium">
              Bringing warmth and handmade moments to you through our collection of cute beaded jewelry.
            </p>
            
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <a href="#shop" className="w-full sm:w-auto text-center bg-[#E89981] text-white px-10 py-4 rounded-full text-[11px] font-bold tracking-widest uppercase shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                Shop the Drop
              </a>
              <div className="flex items-center gap-2 opacity-50">
                <IoColorWandOutline size={20} className="rotate-45 text-[#8DA38D]" />
                <span className="text-[9px] font-bold uppercase tracking-widest">Handmade with Love</span>
              </div>
            </div>
          </div>

          {/* Right Side: Pinboard/Scrapbook */}
          <div className="lg:col-span-7 relative flex justify-center items-center h-[450px] md:h-[600px] mt-10 lg:mt-0">
            
            {/* Background Paper Effect */}
            <div className="absolute inset-2 md:inset-10 bg-[#F4F1EA] border border-[#E8E4D9] rounded-3xl -rotate-1 opacity-50 shadow-inner"></div>

            {/* Left Small Photo */}
            <div className="absolute top-4 left-4 md:left-12 w-32 md:w-48 h-40 md:h-52 bg-white p-1.5 shadow-lg -rotate-12 z-20 border border-[#F0EAD6]">
               <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-6 bg-[#E89981]/20 backdrop-blur-sm rotate-12"></div>
               <img src="/main.jpg" className="w-full h-full object-cover rounded-sm" alt="Mini 1" />
            </div>

            {/* Main Center Photo */}
            <div className="relative w-[60%] md:w-[48%] aspect-[4/5] bg-white p-2 rounded-2xl shadow-2xl rotate-2 z-10 border border-[#F0EAD6]">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-20 md:w-28 h-7 md:h-9 bg-[#8DA38D]/30 backdrop-blur-sm -rotate-2 z-20 flex items-center justify-center border-x-2 border-dashed border-[#8DA38D]/20">
                <span className="text-[6px] md:text-[7px] text-[#4A5D4A] font-black uppercase tracking-tighter opacity-40">Washi Tape</span>
              </div>
              <img src="/same.jpeg" className="w-full h-full object-cover rounded-xl" alt="Jewelry" />
            </div>

            {/* Bottom Photo */}
            <div className="absolute bottom-10 right-10 md:right-20 w-32 md:w-42 h-44 md:h-56 bg-white p-1.5 shadow-lg rotate-6 z-20 border border-[#F0EAD6] hidden sm:block">
               <div className="absolute -top-2 right-4 w-10 h-5 bg-[#8DA38D]/20 backdrop-blur-sm -rotate-45"></div>
               <img src="/main.jpeg" className="w-full h-full object-cover rounded-sm" alt="Mini 2" />
            </div>

            {/* Bear Mascot & Message */}
            <div className="absolute -right-4 bottom-0 w-32 md:w-64 z-30 pointer-events-none">
                <div className="relative mb-2 ml-6 md:ml-10 bg-[#FFF9E3] px-3 py-2 rounded-xl rounded-bl-none shadow-md border border-[#E8E4D9] rotate-2">
                    <p className="text-[8px] md:text-[10px] font-serif italic text-[#E89981] leading-tight">
                        "Tiny things that <br /> bring a big smile ♡"
                    </p>
                </div>
                <img src="/bear.png" className="w-full h-auto drop-shadow-xl" alt="Mascot" />
            </div>
          </div>
        </div>
      </header>

      {/* --- Shop Section --- */}
      <section id="shop" className="py-12 px-6 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center mb-10">
                <h2 className="text-3xl font-serif text-[#4A5D4A]">Our Categories</h2>
                <div className="h-1 w-12 bg-[#E89981] mt-2 rounded-full"></div>
            </div>
            <Categories />
        </div>
      </section>

      {/* --- Archive / Social Section --- */}
      <section id="archive" className="py-16 bg-[#F9F6F0] border-y border-[#E8E4D9] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#8DA38D] mb-4">Follow the Whimsy</h3>
            <p className="text-1xl font-serif italic mb-8">https://www.instagram.com/whimsy_bead</p>
            {/* You can add a small grid of Insta photos here later */}
        </div>
      </section>

      {/* --- Footer --- */}
      <footer id="contact" className="bg-[#79836B] text-[#F9F6F0] py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
          
          <div className="flex flex-col items-center gap-4">
             <img src="/translogo.png" className="h-12 brightness-200" alt="Whimsy" />
             <p className="text-[11px] opacity-70 tracking-widest uppercase">Handmade Beads • Sustainable Joy</p>
          </div>

          <div className="flex items-center gap-8">
            <a href="https://www.instagram.com/whimsy_bead" className="hover:text-[#FADADD] transition-colors"><IoLogoInstagram size={22} /></a>
            <a href="https://www.tiktok.com/@whimsy_beads1?_r=1&_t=ZS-95qEELE4TGX&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnBKKGEs0Z-bpX-BgUoDd35toMpK6sA0CsQE-RdCRmt__TA7GSpz-A604Qy5o_aem_pMTq74wNNJam24Mf3J3yZQ" className="hover:text-[#FADADD] transition-colors"><IoLogoTiktok size={20} /></a>
            <a href="https://www.facebook.com/profile.php?id=61560668793073&rdid=HWiT3T5DqmkqVmy7&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19U4nAgGWq%2F%3Futm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio#" className="hover:text-[#FADADD] transition-colors"><IoLogoFacebook size={22} /></a>
          </div>

          <div className="w-full h-[1px] bg-white/10"></div>

          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4 text-[10px] md:text-[11px] font-medium opacity-80 tracking-wide">
            <div>© 2026 Whimsy. All rights reserved.</div>
            <div className="flex items-center gap-1.5">
              Made By Core Stack Technologies
            </div>
          </div>
        </div>
      </footer>

      {/* Added some global polish animations */}
      <style jsx>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-bounce {
          animation: bounce 4s ease-in-out infinite;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default Index;