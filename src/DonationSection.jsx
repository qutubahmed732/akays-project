import body1 from "./assets/Body1.png";
import body2 from "./assets/Body2.png";

const DonationSection = () => {
  return (
    <section className="bg-[#f2f2f2]">
      {/* --- Main Red Container --- */}
      <div className="pb-10 md:py-16 px-6 max-w-7xl mx-auto ">

        <div className="
        bg-[#ff5349] rounded-[3rem] 
        flex flex-col lg:flex-row items-center gap-10 
        relative overflow-hidden
        ">

          {/* Subtle Background Texture Layer (Optional) */}
          {/* <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('/subtle-pattern.svg')", backgroundRepeat: 'repeat' }}></div> */}

          {/* --- Left Column: Content --- */}
          <div className="space-y-6 text-white p-12 lg:p-16 relative z-10 w-full lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight max-w-lg">
              Be the Reason Someone Smiles Today!
            </h2>
            <p className="text-white text-opacity-80 text-lg max-w-xl">
              Your generosity can change lives every donation brings hope, support, and a brighter future. Give today and make a difference!
            </p>

            {/* White 'Donate Now' Button */}
            <button className="bg-white text-red-600 font-semibold px-10 py-4 rounded-xl text-lg hover:bg-opacity-90 shadow-md">
              Donate Now
            </button>
          </div>

          {/* --- Right Column: Visuals (Do Overlapping Phones) --- */}
          <div className="hidden
          w-full lg:w-1/2 h-87.5 lg:h-125
          lg:flex justify-center items-end 
          relative z-10 
          translate-y-12 lg:translate-y-20 // offset down to show overflow
          ">

            {/* Left Phone: Payment Methods (Peeche wala - Bottom-Left align) */}
            <img
              src={body1} // Apni left phone image ka sahi path yahan likhein
              alt="Payment Methods Screen"
              className="
            absolute z-10
            w-55 md:w-70 lg:w-[320px]
            bottom-15 -left-18
            object-contain
            "
            />

            {/* Right Phone: Thank You & Heart (Aage wala - Upper-Right align) */}
            <img
              src={body2} // Apni right phone image ka sahi path yahan likhein
              alt="Thank You Screen"
              className="
            absolute z-20
            w-60 md:w-75
            -bottom-18 right-7
            -translate-y-25
            object-contain
            "
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default DonationSection;