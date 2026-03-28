
const Testimonials = () => {
  // 6 cards ka data
  const reviews = [
    { name: "Emily R", country: "USA", text: "This platform changed the way I stay in touch with my friends and family. The interface is smooth, and I love how easy it is to share my moments!" },
    { name: "Amit K", country: "India", text: "Finally, a social network that understands what I need! The privacy features are a game-changer, and I feel safer sharing my life online" },
    { name: "Sophie M", country: "UK", text: "I joined just to explore, but now I can't imagine my day without it. The real-time chat and engaging communities make every interaction special!" },
    { name: "Javier L", country: "Spain", text: "Running my small business has never been easier! This platform helped me connect with customers, promote my products, and grow my brand" },
    { name: "Lucas T", country: "Brazil", text: "The perfect blend of fun and functionality! Whether I want to go live, discover trending content, or just catch up with friends, everything is right here!" },
    { name: "Nora S", country: "Canada", text: "This platform brings people closer in the best way possible! From reconnecting with old friends to making new ones, every moment here feels special" },
    { name: "Javier L", country: "Spain", text: "A social network that actually listens to its users! The design is sleek, the features are powerful, and the experience is seamless. I’m hooked!" },
    { name: "Lucas T", country: "Brazil", text: "The perfect blend of fun and functionality! Whether I want to go live..." },
    { name: "Nora S", country: "Canada", text: "I've tried many social platforms, but this one truly stands out! The experience..." },
  ];

  return (
    <section className="bg-[#f2f2f2]">
      <div className='py-20 px-6 max-w-7xl mx-auto text-center'>

        <h2 className="text-4xl font-bold mb-12">What Our Users Say</h2>

        {/* Main Relative Container */}
        <div className="relative max-h-187.5 overflow-hidden">

          {/* Grid of Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((item, index) => (
              <div
                key={index}
                className="bg-[#f2f2f2] p-8 rounded-[2.5rem] text-left shadow-[-2px_-2px_6px_rgba(255,255,255,1),5px_5px_3px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col justify-between"
              >
                <div>
                  <div className="text-yellow-400 text-xl mb-4">★★★★★</div>
                  <p className="text-gray-700 leading-relaxed mb-6">{item.text}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                    {/* Avatar Placeholder */}
                    <img src={`https://i.pravatar.cc/150?u=${index}`} alt={item.name} loading="lazy" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{item.name}</h4>
                    <p className="text-gray-400 text-xs">{item.country}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* --- Blur/Fade Overlay --- */}
          <div className="absolute bottom-0 left-0 right-0 h-87.5 rounded-2xl bg-linear-to-t from-[#f2f2f2] via-[#f2f2f2]/90 to-transparent z-20 flex items-end justify-center pb-10">

            {/* See More Button */}
            <button className="bg-white text-red-500 font-semibold px-12 py-4 rounded-2xl shadow-xl border border-gray-100 hover:scale-105 transition-transform">
              See More
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

