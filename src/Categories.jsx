import React from 'react';
import { 
  IoFilterOutline, 
  IoSparklesOutline, 
  IoHeartOutline, 
  IoStarOutline,
  IoLeafOutline,
} from "react-icons/io5";
import BioSection from './BioSection';

const Categories = () => {
  const themeImages = [
    { id: 1, name: "Basic Rings", price: 100, img: "/public/whimsy/10.webp" },
    { id: 2, name: "Magnetic Butterfly", price: 120, img: "/public/whimsy/100 (each).webp" },
    { id: 3, name: "Beaded Necklace", price: 150, img: "/public/whimsy/100(24 pcs).webp" },
    { id: 4, name: "Jade Bracelet", price: 150, img: "/public/whimsy/11.webp" },
    { id: 5, name: "Black Bead Set", price: 200, img: "/public/whimsy/120 (each).webp" },
    { id: 6, name: "Flower Keychain", price: 200, img: "/public/whimsy/14.webp" },
    { id: 7, name: "Coquette Bow - Green", price: 300, img: "/public/whimsy/50 (2).webp" },
    { id: 8, name: "Coquette Bow - Pink", price: 300, img: "/public/whimsy/150 (2).webp" },
    { id: 9, name: "Pearl Heart Necklace", price: 350, img: "/public/whimsy/1500.webp" },
    { id: 10, name: "Flower Charm Bracelet", price: 400, img: "/public/whimsy/16.webp" },
    { id: 11, name: "Customized Box", price: 2000, img: "/public/whimsy/200 (2).webp" },
    { id: 12, name: "Handmade Pearl Bag", price: 3500, img: "/public/whimsy/500.webp" }
  ];

  // Reverted to your previous static image imports for categories
  const categories = [
    { 
      name: 'Key Chains', 
      img: '/chains.jpg', 
      icon: <IoHeartOutline className="text-orange-300" size={14} />,
      style: 'bg-[#FFF5E6] font-serif italic', 
      rotation: '-rotate-1' 
    },
    { 
      name: 'Bracelet', 
      img: '/bracelet.jpg',
      icon: <IoStarOutline size={14} className="text-yellow-400" />,
      style: 'bg-[#FAF3E0] font-serif italic', 
      rotation: 'rotate-1' 
    },
    { 
      name: 'Custom Gifts', 
      img: '/custom.jpg',
      sub: 'made for you',
      icon: <IoLeafOutline size={14} className="text-green-300" />,
      style: 'bg-[#FDF6EC] font-serif', 
      rotation: '-rotate-1' 
    },
    { 
      name: ' Crochet', 
      img: '/crochet.jpg',
      icon: <IoSparklesOutline size={14} className="text-orange-200 animate-pulse" />,
      style: 'bg-[#F1F5E9] font-serif italic', 
      rotation: 'rotate-2' 
    }
  ];

  return (
    <div className="bg-[#FEFAF6] min-h-screen text-[#4A5D4A] p-4 lg:p-8 font-sans">
      
      {/* --- Korean Aesthetic Categories Section --- */}
      <section className="mb-24 max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-10">
          <div className="flex items-center gap-2 mb-2">
            <IoHeartOutline className="text-[#E89981] opacity-40" size={12} />
            <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#A8B5A8]">Shop by Category</h2>
            <IoHeartOutline className="text-[#E89981] opacity-40" size={12} />
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <div 
              key={i}
              className={`${cat.style} ${cat.rotation} h-24 flex items-center gap-4 px-4 rounded-[24px] transition-all hover:scale-105 cursor-pointer shadow-sm border border-white group`}
            >
              <div className="relative w-14 h-14 shrink-0 rounded-2xl overflow-hidden border-2 border-white shadow-inner transform group-hover:rotate-3 transition-transform">
                <img 
                  src={cat.img} 
                  alt={cat.name} 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                <div className="absolute -bottom-1 -right-1 bg-white/90 rounded-full p-1 shadow-sm">
                  {cat.icon}
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <span className="text-base md:text-lg block leading-none">{cat.name}</span>
                {cat.sub && (
                  <span className="text-[7px] uppercase tracking-tighter opacity-60 font-sans font-bold leading-tight mt-1">
                    {cat.sub}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

    
      {/* --- Main Shop Layout --- */}
      <div className="flex flex-col md:flex-row gap-12 max-w-6xl mx-auto">
        
        {/* --- Sidebar Filter --- */}
        <aside className="w-full md:w-56 space-y-10 shrink-0">
          <div className="bg-white/50 p-6 rounded-3xl border border-[#E8E4D9]">
            <h3 className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest mb-6 border-b border-[#E8E4D9] pb-3">
              <IoFilterOutline className="text-[#E89981]" /> Filter
            </h3>
            
            <ul className="space-y-3 text-[11px] font-bold uppercase tracking-tighter text-[#8DA38D]">
              <li className="flex items-center gap-2 hover:text-[#E89981] cursor-pointer">
                 <div className="w-1 h-1 bg-current rounded-full" /> Coquette Core
              </li>
              <li className="flex items-center gap-2 hover:text-[#E89981] cursor-pointer">
                 <div className="w-1 h-1 bg-current rounded-full" /> Cyber-Organic
              </li>
              <li className="flex items-center gap-2 hover:text-[#E89981] cursor-pointer">
                 <div className="w-1 h-1 bg-current rounded-full" /> Minimalist
              </li>
            </ul>

            <div className="mt-8 p-4 bg-[#FFF9E3] rounded-2xl rotate-2 shadow-sm border border-[#F0EAD6]">
              <p className="text-[8px] uppercase font-black mb-1 text-[#E89981]">Flash Sale</p>
              <p className="text-sm font-serif italic text-[#4A5D4A]">Under 500 PKR Treasures</p>
            </div>
          </div>
        </aside>

        {/* --- Product Grid Linked to .webp Array --- */}
        <main className="flex-1">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6">
            {themeImages.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-[4/5] bg-white rounded-[32px] relative overflow-hidden border border-[#E8E4D9] shadow-sm group-hover:shadow-md transition-all duration-500">
                  <div className="absolute top-4 left-4 z-10 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <IoHeartOutline size={16} className="text-[#E89981]" />
                  </div>
                  
                  <img 
                    src={product.img} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute -top-1 right-6 w-10 h-5 bg-[#E89981]/30 -rotate-12 backdrop-blur-sm border-x border-white/20 z-10" />
                </div>

                <div className="mt-4 px-2 text-center">
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4A5D4A] mb-1">
                    {product.name}
                  </h3>
                  <p className="text-sm font-serif italic text-[#8DA38D]">
                    {product.price} PKR
                  </p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Categories;