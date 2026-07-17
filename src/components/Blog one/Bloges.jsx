import React from "react";
import carimg4 from "../../assets/Elearna - Home One/carimg4.webp";
const Hero = () => {
  return (
    <section
      className="relative h-screen  w-full bg-cover bg-center   flex items-center"
      style={{
        backgroundImage: `url(${carimg4})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 px-5  sm:px-4 md:px-6 lg:px-8 max-w-3xl">
        <p className="text-white text-sm sm:text-base font-semibold tracking-wide mb-8">
          NEWS AND JOURNALS
        </p>

        <h1
          className="
          text-white 
          font-bold 
          leading-tight
          text-4xl
          sm:text-3xl
          md:text-4xl
          lg:text-5xl
          
          "
        >
          Planning to transition
          <br />
          to a new career?
        </h1>
      </div>
    </section>
  );
};

export default Hero;
