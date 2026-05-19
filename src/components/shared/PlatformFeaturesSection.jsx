import React from 'react';
import { FaShieldAlt, FaSyncAlt, FaLayerGroup, FaUserShield, FaDoorOpen, FaTv, FaUserAlt, FaUsers } from 'react-icons/fa';

const PlatformFeaturesSection = () => {
  // Converted summer care tips into core StudyNook application mechanics
  const perks = [
    {
      title: "Conflict Detection",
      description: "Smart booking architecture automatically validates incoming time slots against existing reservations to block double-bookings.",
      icon: <FaSyncAlt className="text-[#09A1A1]" />
    },
    {
      title: "Secure JWT Cookies",
      description: "State-of-the-art authentication tokens stored securely in HTTP-Only cookies to protect user session states against XSS attacks.",
      icon: <FaShieldAlt className="text-[#1E3A8A]" />
    },
    {
      title: "Granular Controls",
      description: "A centralized dashboard environment built tailored for room creators to effortlessly publish, update, and manage workspace slots.",
      icon: <FaUserShield className="text-[#09A1A1]" />
    },
    {
      title: "Fluid Design Layout",
      description: "Fully responsive, optimized web viewport built specifically to showcase robust full-stack project competencies to engineering recruiters.",
      icon: <FaLayerGroup className="text-[#1E3A8A]" />
    }
  ];

  // Converted cosmetic brands into library study space categories
  const classifications = [
    {
      name: "Private Suites",
      capacity: "4-6 Attendees",
      badge: "Most Popular",
      description: "Soundproof spaces equipped with presentation panels and glass whiteboards perfect for group sprints."
    },
    {
      name: "Solo Focus Pods",
      capacity: "1 Attendee",
      badge: "Silent Sector",
      description: "Ergonomic isolated booths configured with noise-mitigation acoustics optimized for deep work blocks."
    },
    {
      name: "Collaborative Hubs",
      capacity: "8-12 Attendees",
      badge: "Media Equipped",
      description: "Expansive environments detailing dual screen casting rigs and modular desks for active workshop runs."
    },
    {
      name: "Research Cells",
      capacity: "1-2 Attendees",
      badge: "Postgrad Stacks",
      description: "Premium alcoves positioned inside historical book sectors granting direct proximity to physical reference volumes."
    }
  ];

  return (
    // Replaced sky-300 beach background with your main dark design layout
    <section className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8 border-t border-b border-gray-800">
      <div className="max-w-7xl mx-auto">
        
        {/* --- SECTION 1: Platform Capabilities --- */}
        <div className="mb-20">
          <header className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl tracking-tight">
              Platform Engineering Highlights
            </h2>
            <div className="mt-3 h-1 w-20 bg-[#09A1A1] mx-auto rounded"></div>
          </header>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map((perk, index) => (
              <div key={index} className="p-6 bg-slate-800/40 rounded-xl border border-gray-800 hover:border-gray-700 hover:bg-slate-800/80 transition-all group duration-200">
                <div className="text-3xl mb-4 block transform group-hover:scale-110 transition-transform duration-200">
                  {perk.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{perk.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{perk.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* --- SECTION 2: Space Classifications --- */}
        <div>
          <header className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl tracking-tight">
              Explore Specialized Spaces
            </h2>
            <p className="text-gray-400 mt-2 text-xs uppercase tracking-widest font-semibold">
              Tailored Ecosystems For Production Focus
            </p>
          </header>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {classifications.map((item, index) => (
              <div key={index} className="group bg-slate-800/20 p-6 rounded-xl border border-gray-800 hover:border-[#09A1A1] transition-all shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-white bg-[#1E3A8A] px-2.5 py-1 rounded-md uppercase tracking-wider shadow-sm">
                    {item.badge}
                  </span>
                  <h3 className="text-xl font-extrabold text-white mt-4 group-hover:text-[#09A1A1] transition-colors">
                    {item.name}
                  </h3>
                  
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 mt-1 mb-4">
                    <FaUsers className="text-slate-500" />
                    <span>{item.capacity}</span>
                  </div>
                  
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-800/60 flex items-center justify-between text-xs font-bold text-[#09A1A1] group-hover:translate-x-1 transition-transform cursor-pointer">
                  <span>Browse Category</span>
                  <span>→</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default PlatformFeaturesSection;
