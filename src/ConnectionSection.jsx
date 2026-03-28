import two_mobile from "./assets/two_mobile.png";

const ConnectionSection = () => {
  return (
    <section className="bg-[#f2f2f2]">

      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-12">

        {/* --- Left Side: Visuals --- */}
        <div className="relative w-full lg:w-1/2 flex justify-center items-center h-125">
          <img src={two_mobile} alt="two mobile" />
        </div>

        {/* --- Right Side: Content --- */}
        <div className="w-full lg:w-1/2 space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Where Every Click <br /> Sparks a Connection!
            </h2>
            <p className="text-gray-500 text-lg max-w-lg">
              A small act of kindness today can create a lifetime of impact for someone in need.
              Give from the heart and change a life!
            </p>
          </div>

          {/* Feature Cards */}
          <div className="space-y-8">
            <FeatureCard
              emoji="🎥"
              title="Short Videos & Reels"
              desc="Share engaging, bite-sized content that keeps everyone entertained."
            />
            <FeatureCard
              emoji="🔔"
              title="Smart Notifications"
              desc="Stay updated on what matters without the noise."
            />
            <FeatureCard
              emoji="👥"
              title="Interest-Based Communities"
              desc="Join groups and discussions that match your passion."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Sub-component for Feature Cards
const FeatureCard = ({ emoji, title, desc }) => (
  <div className="bg-[#f2f2f2] p-6 rounded-2xl shadow-[-3px_-3px_4px_rgba(255,255,255,1),8px_10px_3px_rgba(0,0,0,0.03)] border border-gray-50 flex items-start gap-4">
    <span className="text-2xl">{emoji}</span>
    <div>
      <h4 className="font-bold text-gray-900 text-lg">{title}</h4>
      <p className="text-gray-500 text-sm">{desc}</p>
    </div>
  </div>
);

export default ConnectionSection;