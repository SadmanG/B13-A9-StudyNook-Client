import React from 'react';

const SummerCareSection = () => {
  const tips = [
    {
      title: "Layer Your Hydration",
      description: "Apply water-based serums to damp skin, then seal with a lightweight moisturizer to prevent water loss.",
      icon: "💧"
    },
    {
      title: "Internal Electrolytes",
      description: "Water isn't enough in high heat. Use electrolyte mixes to replace essential minerals lost through sweat.",
      icon: "🥤"
    },
    {
      title: "Antioxidant Shield",
      description: "Use Vitamin C in the morning. It supercharges your sunscreen and fights UV-induced free radicals.",
      icon: "🛡️"
    },
    {
      title: "Cooling Recovery",
      description: "Keep skin calm with Aloe Vera or cooling gel masks after sun exposure to reduce inflammation.",
      icon: "❄️"
    }
  ];

  const brands = [
    {
      name: "La Roche-Posay",
      specialty: "Sun Protection",
      tag: "Dermatologist Favorite",
      description: "Leading the market with Anthelios high-protection, non-greasy sunscreens."
    },
    {
      name: "The Ordinary",
      specialty: "Active Serums",
      tag: "Affordable Science",
      description: "Best for targeted summer treatments like Niacinamide and Hyaluronic Acid."
    },
    {
      name: "Supergoop!",
      specialty: "SPF Innovation",
      tag: "Daily Essential",
      description: "Specializes in invisible, makeup-friendly sunscreens for every skin tone."
    },
    {
      name: "Liquid I.V.",
      specialty: "Hydration Science",
      tag: "Internal Health",
      description: "The industry leader for electrolyte powders to maintain hydration levels."
    }
  ];

  return (
    <section className="bg-sky-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Summer Care Tips --- */}
        <div className="mb-16">
          <header className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Summer Care Tips</h2>
            <div className="mt-2 h-1 w-20 bg-yellow-400 mx-auto rounded"></div>
          </header>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {tips.map((tip, index) => (
              <div key={index} className="p-6 bg-blue-50 rounded-xl border border-blue-100 hover:bg-blue-100 transition-colors">
                <span className="text-3xl mb-4 block">{tip.icon}</span>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{tip.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* --- Top Brands --- */}
        <div>
          <header className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Top Brands</h2>
            <p className="text-gray-500 mt-2 text-sm uppercase tracking-widest">Industry Leaders</p>
          </header>
          
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {brands.map((brand, index) => (
              <div key={index} className="group bg-white p-6 rounded-lg border-2 border-gray-100 hover:border-blue-500 transition-all shadow-sm">
                <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded uppercase">
                  {brand.tag}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mt-3 group-hover:text-blue-600 transition-colors">
                  {brand.name}
                </h3>
                <p className="text-xs font-medium text-gray-400 mb-3">{brand.specialty}</p>
                <p className="text-gray-600 text-sm">{brand.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SummerCareSection;
