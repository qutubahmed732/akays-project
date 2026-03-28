const InstallSection = () => {
  const steps = [
    { id: "01", title: "Download", desc: "Open Play Store or App Store", active: true },
    { id: "02", title: "Install App", desc: "The app will install automatically.", active: false },
    { id: "03", title: "Ready to Use", desc: "Sign up or log in to start exploring!", active: false },
  ];

  return (
    <section className="bg-[#f2f2f2]">
      <div className="py-20 px-6 max-w-7xl mx-auto text-center">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How to Install Our App</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Getting started is quick and easy! Follow these simple steps to install and start using MyBindle today.
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative">

          {/* Horizontal Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute top-5 left-[15%] right-[15%] h-px bg-gray-300 z-0"></div>

          {/* Numbers & Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-12 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">

                {/* Number Circle */}
                <div className={`
                w-12 h-10 bg-[#f2f2f2] flex px-10 items-center justify-center font-bold text-3xl mb-2 md:mb-10
                ${step.active ? "text-red-500" : "text-gray-800"}
                `}>
                  {step.id}
                </div>

                {/* Step Card */}
                <div className="w-full bg-[#f2f2f2] p-8 rounded-3xl shadow-[-3px_-3px_4px_rgba(255,255,255,1),8px_10px_3px_rgba(0,0,0,0.03)] border border-gray-50">
                  <h4 className="font-bold text-gray-900 text-lg mb-2">{step.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstallSection;