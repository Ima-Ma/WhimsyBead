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
      icon: <IoLogoInstagram size={18} />, 
      link: "https://www.instagram.com/whimsy_bead", 
      bgColor: "bg-[#E1306C]", 
      label: "Instagram" 
    },
    { 
      icon: <IoLogoFacebook size={18} />, 
      link: "https://www.facebook.com/profile.php?id=61560668793073&rdid=YpRbqK108DfLWXYy&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19U4nAgGWq%2F%3Futm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio#", 
      bgColor: "bg-[#1877F2]", 
      label: "Facebook" 
    },
    { 
      icon: <IoLogoTiktok size={18} />, 
      link: "https://www.tiktok.com/@whimsy_beads1?_r=1&_t=ZS-95qEELE4TGX&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGneCF6UdoxJOBkHkZUvJU3lHmLFS7kSB84u3ELxvZrG4LWl0BENnIvlD0aWMI_aem_6LN0O2tiajuaLy1VkdMQ1g", 
      bgColor: "bg-[#000000]", 
      label: "TikTok" 
    },
    { 
      icon: <IoLogoWhatsapp size={18} />, 
     link: "https://wa.me/923196976539?text=Hi!%20I%20want%20to%20order%20from%20Whimsy%20Beads",
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