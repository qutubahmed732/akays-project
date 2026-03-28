import mobile from "./assets/mobile.png";
import logo from "./assets/logo.png";


const LandingPage = () => {
  


  return (
    <header className='relative bg-[#ff5a54] text-white min-h-screen pb-5'>
      {/* LOGO */}
      <section className='flex items-center gap-2 text-white text-2xl font-semibold w-fit mx-auto py-5'>
        <img src={logo} className='w-15' alt="logo" />
        <span>Mybindle</span>
      </section>

      <section className="max-w-7xl mx-auto px-6 w-full flex flex-col-reverse md:flex-row items-center justify-between md:gap-10">

        {/* <!-- LEFT CONTENT --> */}
        <div className="flex-1 text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Stay Connected <br />
            Stay Social <br />
            Stay You!
          </h1>

          <p className="mt-6 text-sm md:text-base text-white/80 max-w-md">
            A place where friendships grow, communities thrive, and moments turn into unforgettable experiences. Whether you're looking to reconnect with old friends, build new relationships, or share what matters most to you – MyBindle is your home on the internet.
          </p>

          <button className="mt-6 bg-white text-red-500 px-6 py-3 rounded-lg font-semibold hover:scale-105 transition">
            Get Started
          </button>
        </div>

        {/* <!-- RIGHT IMAGE --> */}
        <div className="flex-1 flex justify-center relative before:hidden before:md:block before:content-['🔥_Seamless_Connections'] before:absolute before:py-5 before:px-5 before:bg-white before:text-lg before:text-black before:top-10 before:left-10 before:z-150 before:rounded-lg before:text-center before:content-center before:drop-shadow-2xl after:content-['🌎_Discover_&_Explore'] after:absolute after:hidden after:md:block after:bg-white after:text-lg after:text-black after:bottom-20 after:right-10 after:z-150 after:rounded-lg after:text-center after:content-center after:drop-shadow-2xl after:py-5 after:px-5">
          <img
            src={mobile}
            alt="app"
            className="w-65 md:w-90 drop-shadow-2xl reltive z-100"
          />
        </div>

      </section>
        <div className="hidden md:block absolute bottom-0 left-0 w-full h-20 bg-[#f2f2f2] z-50" />

    </header>
  );
};

export default LandingPage;