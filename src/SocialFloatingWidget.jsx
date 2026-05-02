import React from 'react';
import { 
  IoLogoYoutube, 
  IoLogoInstagram, 
  IoLogoFacebook, 
  IoLogoTiktok, 
  IoLogoWhatsapp,
  IoLinkOutline 
} from "react-icons/io5";

const SocialFloatingWidget = () => {
  const socials = [
    { 
      icon: <IoLogoYoutube size={18} />, 
      link: "https://youtube.com", 
      bgColor: "bg-[#FF0000]", 
      label: "YouTube" 
    },
    { 
      icon: <IoLogoInstagram size={18} />, 
      link: "https://instagram.com", 
      bgColor: "bg-[#E1306C]", 
      label: "Instagram" 
    },
    { 
      icon: <IoLogoFacebook size={18} />, 
      link: "https://facebook.com", 
      bgColor: "bg-[#1877F2]", 
      label: "Facebook" 
    },
    { 
      icon: <IoLogoTiktok size={18} />, 
      link: "https://tiktok.com", 
      bgColor: "bg-[#000000]", 
      label: "TikTok" 
    },
    { 
      icon: <IoLogoWhatsapp size={18} />, 
      link: "https://wa.me/yournumber", 
      bgColor: "bg-[#25D366]", 
      label: "WhatsApp" 
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-3 items-center">
      {/* 
          Container for icons: 
          Removed 'opacity-0' and 'translate-y-4' so they are always visible.
      */}
      <div className="flex flex-col gap-3 transition-all duration-500">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className={`w-9 h-9 ${social.bgColor} text-white shadow-lg rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:brightness-110 active:scale-90`}
          >
            {social.icon}
          </a>
        ))}
      </div>

      {/* Main Anchor Button - Now using an icon instead of emoji */}
      <div className="w-11 h-11 bg-[#3a4d3a] text-white rounded-full shadow-2xl flex items-center justify-center cursor-pointer hover:bg-[#a3b8a3] transition-all duration-300 hover:rotate-12">
        <IoLinkOutline size={22} />
      </div>
    </div>
  );
};

export default SocialFloatingWidget;