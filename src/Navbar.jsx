import React, { useState } from 'react';
import { 
  IoBagOutline, 
  IoSearchOutline, 
  IoPersonOutline,
  IoChevronDown,
  IoMenuOutline,
  IoCloseOutline
} from "react-icons/io5";

const Navbar = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Smooth Scroll Function
  const scrollToSection = (e, id) => {
    e.preventDefault();
    setIsOpen(false); // Close mobile menu on click
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home', type: 'top' },
    { name: 'Shop', id: 'shop', type: 'scroll' },
    { name: 'Archive', id: 'archive', type: 'scroll' },
    { name: 'About', id: 'about', type: 'scroll' },
    { name: 'Contact', id: 'contact', type: 'scroll' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 font-sans">
      {/* --- Marquee Top Bar --- */}
      <div className="bg-[#79836B] text-[#F9F6F0] py-2 overflow-hidden border-b border-[#E8E4D9]">
        <div className="whitespace-nowrap flex animate-marquee">
          <div className="flex gap-12 items-center text-[10px] font-medium tracking-widest uppercase">
            <span>❤️ Handmade with love in Pakistan</span>
            <span>FREE shipping on orders above PKR 1500</span>
            <span>🚚 Cash on Delivery Available</span>
            {/* Repeat for seamless loop */}
            <span>❤️ Handmade with love in Pakistan</span>
            <span>FREE shipping on orders above PKR 1500</span>
            <span>🚚 Cash on Delivery Available</span>
          </div>
        </div>
      </div>

      {/* --- Main Navbar --- */}
      <nav className={`transition-all duration-500 px-6 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-[#FEFAF6]'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 relative">
          
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer z-20" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <img src="/translogo.png" className="h-10 md:h-16 object-contain" alt="Whimsy" />
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none">
            <div className="flex items-center gap-8 text-[12px] font-bold uppercase tracking-[0.2em] text-[#4A5D4A] pointer-events-auto">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  onClick={(e) => link.type === 'top' ? (e.preventDefault(), window.scrollTo({top: 0, behavior: 'smooth'})) : scrollToSection(e, link.id)}
                  className="hover:text-[#E89981] transition-colors flex items-center gap-1"
                >
                  {link.name} {link.name === 'Shop' && <IoChevronDown size={12} />}
                </a>
              ))}
            </div>
          </div>

          {/* Icons & Mobile Toggle */}
          <div className="flex items-center gap-4 z-20">
            {/* <IoSearchOutline className="hidden sm:block cursor-pointer" size={20} />
            <IoPersonOutline className="hidden sm:block cursor-pointer" size={20} />
            <IoBagOutline className="cursor-pointer" size={20} />
             */}
            {/* Mobile Menu Button */}
            <button className="md:hidden text-[#4A5D4A]" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <IoCloseOutline size={28} /> : <IoMenuOutline size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* --- Mobile Menu Drawer --- */}
      <div className={`fixed inset-0 bg-white z-40 transition-transform duration-300 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8 text-[18px] font-bold uppercase tracking-widest text-[#4A5D4A]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.id}`}
              onClick={(e) => link.type === 'top' ? (e.preventDefault(), window.scrollTo({top: 0, behavior: 'smooth'}), setIsOpen(false)) : scrollToSection(e, link.id)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

      {/* Add Marquee Animation in your Global CSS or a <style> tag */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </header>
  );
};

export default Navbar;