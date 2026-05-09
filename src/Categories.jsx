
import React, { useState, useMemo } from 'react';
import { 
  IoSparklesOutline, 
  IoHeartOutline, 
  IoStarOutline,
  IoLeafOutline,
  IoCubeOutline,
  IoChevronForwardOutline,
  IoStar,
  IoSyncOutline,
  IoCarOutline,
  IoHeart
} from "react-icons/io5";

const Categories = () => {
  const [showAll, setShowAll] = useState(false);
  const [copiedStatus, setCopiedStatus] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("all");

  const INSTA_URL = "https://www.instagram.com/whimsy_bead?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
  // Your WhatsApp base URL
  const WA_NUMBER = "923196976539";


  const initialProducts = [
    { id: 1, name: "Handmade Bracelet", price: 450, img: "/whimsy/10.webp", badge: "BESTSELLER", category: "Bracelet" },
    { id: 2, name: "Beada bracelet", price: 550, img: "/whimsy/100 (each).webp", badge: "NEW", category: "Bracelet" },
    { id: 3, name: "Sunflower beads", price: 650, img: "/whimsy/100(24 pcs).webp", badge: "BESTSELLER", category: "Necklace" },
    { id: 4, name: "Crochet flower keychain", price: 499, img: "/whimsy/11.webp", badge: "SALE", category: "Key Chains" },
  ];

  const additionalProducts = [
    { id: 5, name: "Magnetic Butterfly", price: 120, img: "/whimsy/120 (each).webp", badge: "SALE", category: "Bracelet" },
    { id: 6, name: "Baby necklace set", price: 150, img: "/whimsy/150 (2).webp", badge: "NEW", category: "Necklace" },
    { id: 7, name: "Bracelet", price: 150, img: "/whimsy/150.webp", badge: "BESTSELLER", category: "Bracelet" },
    { id: 8, name: "4 bracelets + 1 ring", price: 200, img: "/whimsy/200 (2).webp", badge: null, category: "Custom Gifts" },
    { id: 16, name: "scrunchie headband", price: 250, img: "/whimsy/250 (2).webp", badge: "SALE", category: "Custom Gifts" },
    { id: 17, name: "flowernecklace", price: 250, img: "/whimsy/250 (3).webp", badge: "NEW", category: "Necklace" },
    { id: 18, name: "Heart Necklace Chain", price: 250, img: "/whimsy/250.webp", badge: "BESTSELLER", category: "Necklace" },
    { id: 19, name: "HairBows", price: 300, img: "/whimsy/300 (2).webp", badge: null, category: "Custom Gifts" },
    { id: 21, name: "Beads necklaces", price: 300, img: "/whimsy/300 (4).webp", badge: "NEW", category: "Necklace" },
    { id: 22, name: "Purple Bracelets", price: 300, img: "/whimsy/300.webp", badge: null, category: "Bracelet" },
    { id: 23, name: "Daisy beads bracelet", price: 350, img: "/whimsy/350 (2).webp", badge: "BESTSELLER", category: "Bracelet" },
    { id: 24, name: "Pearl bow beads keychain", price: 350, img: "/whimsy/350 (3).webp", badge: "SALE", category: "Key Chains" },
    { id: 25, name: "Crochet tulip keychain", price: 350, img: "/whimsy/350.webp", badge: "NEW", category: "Key Chains" },
    { id: 26, name: "Phone Pookie Charm", price: 400, img: "/whimsy/400 (2).webp", badge: null, category: "Crochet" },
    { id: 27, name: "sea green bead bracelet", price: 400, img: "/whimsy/400 (3).webp", badge: "SALE", category: "Bracelet" },
    { id: 28, name: "beads flower bracelet", price: 400, img: "/whimsy/400 (pair).webp", badge: null, category: "Bracelet" },
    { id: 29, name: "Handmade Beads", price: 400, img: "/whimsy/400.webp", badge: "SALE", category: "Anklet" },
    { id: 30, name: "Butterfly couple bracelet", price: 500, img: "/whimsy/500.webp", badge: "BESTSELLER", category: "Bracelet" },
    { id: 31, name: "Spider couple bracelet", price: 600, img: "/whimsy/600 (2).webp", badge: "NEW", category: "Bracelet" },
    { id: 33, name: "Trio bracelet", price: 800, img: "/whimsy/800.webp", badge: null, category: "Bracelet" },
    { id: 34, name: "Snacks bouquet", price: 1500, img: "/whimsy/1500.webp", badge: "NEW", category: "Custom Gifts" },
    { id: 36, name: "Fur yarn bag", price: 3000, img: "/whimsy/3000 (2).webp", badge: null, category: "Crochet" },
    { id: 37, name: "Soft yarn Customized bag", price: 3000, img: "/whimsy/3000.webp", badge: "BESTSELLER", category: "Crochet" },
    { id: 38, name: "Beads pearl bag", price: 3500, img: "/whimsy/3500.webp", badge: "SALE", category: "Custom Gifts" },
    { id: 39, name: "Glass beads ring", price: 50, img: "/whimsy/50 (2).webp", badge: "NEW", category: "Ring" },
    { id: 40, name: "beadsring", price: 50, img: "/whimsy/50.webp", badge: "SALE", category: "Ring" },
    { id: 42, name: "greenandwhite Bracelet", price: 200, img: "/whimsy/200 (5).webp", badge: "BESTSELLER", category: "Bracelet" },
    { id: 43, name: "Crochet flower keychain", price: 200, img: "/whimsy/200 (eac).webp", badge: null, category: "Key Chains" },
  ];

  const filteredProducts = useMemo(() => {
    let list = showAll ? [...initialProducts, ...additionalProducts] : initialProducts;
    if (selectedPriceRange === 'under500') return list.filter(p => p.price < 500);
    if (selectedPriceRange === '500to1000') return list.filter(p => p.price >= 500 && p.price <= 1000);
    if (selectedPriceRange === 'above1000') return list.filter(p => p.price > 1000);
    return list;
  }, [showAll, selectedPriceRange]);

  // UPDATED: WhatsApp Redirect Logic
  const handleBuyNow = (product) => {
    const category = product.category || "Handmade Accessories";
    const message = `✨ *ORDER REQUEST* ✨\n\n🛍️ *Product:* ${product.name}\n📂 *Category:* ${category}\n💰 *Price:* ${product.price} PKR\n\n_I would like to order this. Please share details._`;
    
    // Create formatted WhatsApp link
    const whatsappLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
    
    // Redirect to WhatsApp
    window.open(whatsappLink, '_blank');
  };
  const categories = [
    { name: 'Key Chains', img: '/chains.jpg', icon: <IoHeartOutline className="text-orange-300" size={14} />, style: 'bg-[#FFF5E6] font-serif italic', rotation: '-rotate-1' },
    { name: 'Bracelet', img: '/bracelet.jpg', icon: <IoStarOutline size={14} className="text-yellow-400" />, style: 'bg-[#FAF3E0] font-serif italic', rotation: 'rotate-1' },
    { name: 'Custom Gifts', img: '/custom.jpg', sub: 'made for you', icon: <IoLeafOutline size={14} className="text-green-300" />, style: 'bg-[#FDF6EC] font-serif', rotation: '-rotate-1' },
    { name: ' Crochet', img: '/crochet.jpg', icon: <IoSparklesOutline size={14} className="text-orange-200 animate-pulse" />, style: 'bg-[#F1F5E9] font-serif italic', rotation: 'rotate-2' }
  ];

  const reviews = [
    { id: 1, name: "Alina", text: "Honestly the most dreamy bracelets I own. The packaging was 10/10 too!", img: "https://icon-icons.com/download-file?file=https%3A%2F%2Fimages.icon-icons.com%2F2643%2FPNG%2F512%2Favatar_female_woman_person_people_white_tone_icon_159360.png&id=159360&pack_or_individual=pack" },
    { id: 2, name: "Komal", text: "The quality is amazing and so pretty. I wear mine every single day!", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYJvvPvloxCsztWWVQCfFh9XAq9RXd7ei4rw&s" },
    { id: 3, name: "Laiba", text: "Whimsy really has the cutest designs. Super happy with my order!", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRadpE3izilNNrKR5uPLaZ6zC8AUkoXH3bfaQ&s" },
  ];

return (
  <div className="bg-[#FEFAF6] min-h-screen text-[#4A5D4A] font-sans overflow-x-hidden">
    
    {/* Premium Copied Alert */}
    {copiedStatus && (
      <div className="fixed top-10 left-1/2 -translate-x-1/2 z-[100] bg-white text-[#4A5D4A] px-8 py-4 rounded-full text-[11px] font-bold uppercase tracking-widest shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-[#E89981] animate-in fade-in slide-in-from-top-4">
        {copiedStatus}
      </div>
    )}

    {/* Categories Grid */}
    <section className="mt-8 md:mt-12 mb-10 md:mb-16 max-w-6xl mx-auto px-4">
      <div className="flex flex-col items-center mb-6 md:mb-10">
        <div className="flex items-center gap-2 mb-2">
          <IoHeartOutline className="text-[#E89981] opacity-40" size={12} />
          <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#A8B5A8]">Shop by Category</h2>
          <IoHeartOutline className="text-[#E89981] opacity-40" size={12} />
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {categories.map((cat, i) => (
          <div key={i} className={`${cat.style} ${cat.rotation} h-20 md:h-24 flex items-center gap-3 md:gap-4 px-3 md:px-4 rounded-[24px] border border-white shadow-sm hover:scale-105 transition-all cursor-pointer group`}>
            <div className="relative w-10 h-10 md:w-14 md:h-14 shrink-0 rounded-2xl overflow-hidden border-2 border-white shadow-inner transform group-hover:rotate-3 transition-transform">
              <img src={cat.img} alt={cat.name} className="w-full h-full object-cover" />
              <div className="absolute -bottom-1 -right-1 bg-white/90 rounded-full p-1 shadow-sm">{cat.icon}</div>
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-sm md:text-lg block leading-none">{cat.name}</span>
              {cat.sub && <span className="text-[7px] uppercase tracking-tighter opacity-60 font-bold mt-1 hidden md:block">{cat.sub}</span>}
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Story Section */}
    <section className="mb-12 md:mb-20 w-full">
      <div className="relative bg-[#F2F4E8]/60 py-10 md:py-16 px-4 md:px-20 flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12 border-y border-white/50 overflow-hidden shadow-sm">
        <div className="max-w-[1300px] w-full flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-10">
          <div className="relative w-full max-w-[340px] md:max-w-[380px] h-[200px] md:h-[260px] shrink-0">
            <div className="w-full h-full rounded-[25px] md:rounded-[30px] overflow-hidden border-[4px] md:border-[6px] border-white shadow-lg">
              <img src="/whimsy/10.webp" alt="Handmade Art" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-2 -left-2 w-10 h-10 md:w-12 md:h-12 bg-[#FADADD] rounded-2xl flex items-center justify-center rotate-[-15deg] shadow-md border-2 border-white">
              <IoHeart className="text-white" size={20} />
            </div>
          </div>

          <div className="flex-1 text-center lg:text-left max-w-md">
            <h2 className="text-3xl md:text-5xl font-serif text-[#4A5D4A] leading-[1.1] mb-4 md:mb-5">
              the <span className="text-[#E89981] italic font-light">soul</span> <br className="hidden md:block" /> behind the craft.
            </h2>
            <div className="space-y-3 mb-6 text-[#6B7C6B]">
              <p className="text-[12px] md:text-[13px] font-medium leading-relaxed">Every piece is made by hand with patience, love and happy thoughts.</p>
              <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-[#4A5D4A]">Thank you for supporting handmade! ♡</p>
            </div>
            <button className="bg-[#8DA38D] text-white px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all shadow-md hover:bg-[#7A8E7A] cursor-pointer">
              Read Our Story
            </button>
          </div>

          <div className="flex flex-row lg:flex-col gap-4 md:gap-6 shrink-0 justify-center">
            {[{ icon: <IoHeartOutline className="text-[#E89981]" />, label: "Handmade\nwith love" },
              { icon: <IoLeafOutline className="text-[#8DA38D]" />, label: "High quality\nmaterials" },
              { icon: <IoCubeOutline className="text-[#BCA37F]" />, label: "Safe & secure\npackaging" }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col lg:flex-row items-center gap-2 md:gap-4 group text-center lg:text-left">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm"> {item.icon} </div>
                <span className="text-[7px] md:text-[9px] font-black uppercase tracking-wider text-[#4A5D4A] whitespace-pre-line leading-tight">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Filtered Product Display */}
    <div className="max-w-[1300px] mx-auto px-2 md:px-4 pb-20">
      <div className="flex items-center justify-center gap-4 mb-10 md:mb-12">
          <div className="w-8 h-[1px] bg-[#4A5D4A]/20"></div>
          <h2 className="text-[9px] md:text-xs font-black uppercase tracking-[0.4em] text-[#4A5D4A] flex items-center gap-3">
              Shop Our Favorites <IoHeartOutline className="text-[#E89981]" size={14} />
          </h2>
          <div className="w-8 h-[1px] bg-[#4A5D4A]/20"></div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
        <aside className="w-full md:w-64 shrink-0">
          <div className="bg-white border border-[#F0EBE3] p-6 md:p-8 rounded-2xl sticky top-4 shadow-sm">
            <h3 className="text-[12px] font-bold uppercase tracking-widest text-[#4A5D4A] mb-4">Shop by Filters</h3>
            <div className="w-full h-[1px] bg-[#F0EBE3] mb-6"></div>
            
            <h4 className="text-[9px] font-bold uppercase tracking-widest text-[#A8B5A8] mb-4">Price Range</h4>
            <ul className="space-y-4">
              {[{ id: 'all', label: 'All Products' }, { id: 'under500', label: 'Under 500 PKR' }, { id: '500to1000', label: '500 - 1000 PKR' }, { id: 'above1000', label: 'Above 1000 PKR' }].map((range) => (
                <li key={range.id} onClick={() => setSelectedPriceRange(range.id)} className="flex items-center gap-3 cursor-pointer group">
                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${selectedPriceRange === range.id ? 'border-[#E89981]' : 'border-[#E8E4D9] group-hover:border-[#E89981]'}`}>
                    {selectedPriceRange === range.id && <div className="w-2 h-2 rounded-full bg-[#E89981]"></div>}
                  </div>
                  <span className={`text-[11px] font-medium transition-colors ${selectedPriceRange === range.id ? 'text-[#4A5D4A] font-bold' : 'text-[#6B7C6B] group-hover:text-[#4A5D4A]'}`}>
                    {range.label}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-4 rounded-xl bg-[#FFF0E8] border border-[#FFE0D3] relative overflow-hidden group cursor-pointer">
               <p className="text-[8px] font-black text-[#E89981] uppercase tracking-widest mb-1">Today's Pick</p>
               <h5 className="text-lg font-serif italic text-[#4A5D4A] leading-tight">Under 500 PKR<br/>Treasures ♡</h5>
               <img src="https://cdn-icons-png.flaticon.com/512/3069/3069172.png" className="w-10 h-10 absolute -bottom-1 -right-1 opacity-20" alt="deco" />
            </div>
          </div>
        </aside>

        <main className="flex-1">
          <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white border border-[#F0EBE3] rounded-xl md:rounded-2xl p-1.5 md:p-3 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="relative aspect-square rounded-lg md:rounded-xl overflow-hidden mb-2 md:mb-4 bg-[#F9F7F2]">
                    {product.badge && (
                      <span className={`absolute top-1 left-1 z-10 px-1.5 py-0.5 rounded md:px-3 md:py-1 md:rounded-lg text-[6px] md:text-[8px] font-black text-white shadow-sm ${product.badge === 'SALE' ? 'bg-[#F2A490]' : 'bg-[#E89981]'}`}>
                        {product.badge}
                      </span>
                    )}
                    <img src={product.img} alt={product.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="px-0.5 mb-2">
                    <h3 className="text-[7.5px] md:text-[12px] font-bold text-[#4A5D4A] mb-0.5 line-clamp-1">{product.name}</h3>
                    <p className="text-[8px] md:text-[11px] font-black text-[#8DA38D]">{product.price} PKR</p>
                  </div>
                </div>
                {/* Updated Button: Added cursor-pointer and hover effect */}
                <button 
                  onClick={() => handleBuyNow(product)} 
                  className="w-full py-2 md:py-3 bg-[#E89981] text-white text-[7px] md:text-[9px] font-black uppercase rounded-lg md:rounded-xl transition-all active:scale-95 cursor-pointer hover:opacity-90"
                >
                  Order
                </button>
              </div>
            ))}
          </div>

          {/* Show More / Show Less Work */}
          <div className="mt-12 flex justify-center">
            <button 
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 px-10 py-4 border-2 border-[#E8E4D9] rounded-full text-[10px] font-black uppercase tracking-widest text-[#4A5D4A] hover:bg-[#4A5D4A] hover:text-white transition-all cursor-pointer"
            >
              {showAll ? "Show Less" : "View All Collection"}
              <IoChevronForwardOutline className={showAll ? "-rotate-90 transition-transform" : "rotate-90 transition-transform"} />
            </button>
          </div>
        </main>
      </div>
    </div>

    {/* Reviews Section */}
    <section className="bg-[#FAF9F6] py-12 md:py-16 border-t border-[#E8E4D9]/40">
      <div className="max-w-6xl mx-auto px-2 md:px-4">
        <h2 className="text-xl md:text-4xl font-serif text-[#4A5D4A] mb-8 text-center md:text-left">the <span className="text-[#E89981] italic font-light">inner</span> circle.</h2>
        <div className="grid grid-cols-3 md:grid-cols-3 gap-2 md:gap-6">
          {reviews.map((rev) => (
            <div key={rev.id} className="bg-[#F4F6EB]/50 border border-white/60 p-2.5 md:p-7 rounded-xl md:rounded-3xl flex flex-col justify-between">
              <div>
                <div className="flex gap-0.5 mb-2">
                  {[...Array(5)].map((_, i) => <IoStar key={i} className="text-[#E89981]" size={6} />)}
                </div>
                <p className="text-[7px] md:text-[13px] text-[#6B7C6B] leading-tight italic mb-3 line-clamp-4">"{rev.text}"</p>
              </div>
              <div className="flex items-center gap-1.5 md:gap-3 border-t border-white/50 pt-2">
                <div className="w-5 h-5 md:w-9 md:h-9 rounded-full overflow-hidden border border-white shadow-sm shrink-0">
                  <img src={rev.img} alt={rev.name} className="w-full h-full object-cover" />
                </div>
                <span className="text-[6px] md:text-[11px] font-bold text-[#4A5D4A] truncate">— {rev.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);
};

export default Categories;


