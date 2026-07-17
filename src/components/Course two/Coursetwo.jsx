import React from "react";

import bgimg from "../../assets/Elearna - Course Two/bgimg.webp";

const Hero = () => {
  return (
    <section
      className="relative min-h-[500px] w-full bg-cover bg-[position:35%_center] bg-no-repeat sm:min-h-[600px] sm:bg-center lg:h-screen"
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-900/60"></div>

      {/* Content */}
      <div className="relative z-10 flex min-h-[500px] w-full items-center justify-center px-4 sm:min-h-[600px] sm:px-10 lg:h-full lg:justify-end lg:px-20">
        <div className="ml-0 w-full max-w-xl text-center lg:text-left">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-white sm:text-base md:text-lg">
            Start With
          </p>

          <h1 className="text-3xl font-medium leading-tight text-white sm:text-5xl md:text-6xl lg:text-6xl">
            Professional online <br /> courses
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
