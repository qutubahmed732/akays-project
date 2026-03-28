import body3 from "./assets/Body3.png";
import body4 from "./assets/Body4.png";
import { SiGoogleplay } from "react-icons/si";

const LastSection = () => {

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
              Join the Fun – Download MyBindle Now!
            </h2>
            <p className="text-white text-opacity-80 text-lg max-w-xl">
              Your Social Network, Your Way
              Download MyBindle Now and Be a Part of a Community That’s Always Evolving!
            </p>

            {/* White 'Donate Now' Button */}
            <div class="p-8 bg-[#ff5349]">
              <div class="flex flex-col sm:flex-row gap-6 items-center justify-center">

                <a href="#" class="bg-white whitespace-nowrap hover:bg-white/90 shadow-md transition-all px-6 py-3 rounded-full flex items-center gap-4 border border-gray-100">
                  {/* Apple Logo (SVG Best Option) */}
                  <svg class="w-8 h-8 text-black" viewBox="0 0 384 512" fill="currentColor">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 0 184.8 0 273.6c0 51.1 19.8 111.9 49.3 154.2 16.4 23.6 42.4 52.1 76.7 52.1 31.6 0 44.1-19.1 82.2-19.1 38 0 49.5 19.1 82.2 19.1 35.3 0 58-29.4 75.8-54.1 20.3-27.9 28.6-54.8 28.6-55.9-.2-.1-50.6-18.7-50.6-70.2zM276.5 93.3c21.8-26 31.8-53.8 29.3-81.1-23.7.9-50.5 14.7-67.5 33.6-16.1 17.8-28.7 44.6-25.3 71 25 2.1 48.7-11.8 63.5-23.5z" />
                  </svg>
                  <div class="flex flex-col">
                    <span class="text-[9px] uppercase tracking-wider font-semibold text-gray-700 leading-none">Download on the</span>
                    <span class="text-xl font-bold text-gray-900 leading-none">App Store</span>
                  </div>
                </a>

                <a href="#" class="bg-white whitespace-nowrap hover:bg-white/90 shadow-md transition-all px-6 py-3 rounded-full flex items-center gap-4 border border-gray-100">
                  {/* Apple Logo (SVG Best Option) */}
                  <SiGoogleplay className="text-black text-2xl" />
                  <div class="flex flex-col">
                    <span class="text-[9px] uppercase tracking-wider font-semibold text-gray-700 leading-none">get it on</span>
                    <span class="text-xl font-bold text-gray-900 leading-none">Google App</span>
                  </div>
                </a>

              </div>

            </div>
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
              src={body3} // Apni left phone image ka sahi path yahan likhein
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
              src={body4} // Apni right phone image ka sahi path yahan likhein
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

export default LastSection;