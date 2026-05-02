import React from 'react';
import { 
  IoBagOutline, 
  IoSearchOutline, 
  IoHeartOutline,
  IoPersonOutline,
  IoChevronDown
} from "react-icons/io5";

const Navbar = ({ scrolled }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 font-sans">
      {/* --- Soft Cream Top Bar --- */}
      <div className="bg-[#F9F6F0] text-[#7A8B7A] py-2 border-b border-[#E8E4D9]">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-[10px] font-medium tracking-wider uppercase">
          <div className="flex items-center gap-2">
            <span>❤️ Handmade with love in Pakistan</span>
          </div>
          <div className="hidden md:block">
            FREE shipping on orders above PKR 1500
          </div>
          <div className="flex items-center gap-2">
            <span>🚚 Cash on Delivery Available</span>
          </div>
        </div>
      </div>

      {/* --- Main Navbar --- */}
      <nav className={`transition-all duration-500 px-6 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-[#FEFAF6]'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src="/translogo.png" className="h-14 md:h-16 object-contain" alt="Whimsy" />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8 text-[12px] font-bold uppercase tracking-[0.2em] text-[#4A5D4A]">
            <a href="#" className="text-[#E89981] border-b-2 border-[#E89981] pb-1">Home</a>
            <a href="#" className="flex items-center gap-1 hover:text-[#E89981] transition-colors">
              Shop <IoChevronDown size={12} />
            </a>
            <a href="#" className="hover:text-[#E89981] transition-colors">Archive</a>
            <a href="#" className="hover:text-[#E89981] transition-colors">About</a>
            <a href="#" className="hover:text-[#E89981] transition-colors">Contact</a>
          </div>

          {/* Utility Icons */}
          <div className="flex items-center gap-5 text-[#4A5D4A]">
            <IoSearchOutline size={22} className="cursor-pointer hover:text-[#E89981]" />
            <IoPersonOutline size={22} className="hidden sm:block cursor-pointer hover:text-[#E89981]" />
            <div className="relative cursor-pointer group">
              <IoBagOutline size={22} className="group-hover:text-[#E89981]" />
              <span className="absolute -top-1 -right-2 bg-[#E89981] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                0
              </span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;