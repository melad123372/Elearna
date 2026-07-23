import React from "react";

import girlImg from "../../assets/12- About Two imgs/InstructorImageWithLogo.webp";
import avatarImg from "../../assets/12- About Two imgs/ReviewPopup.webp";

const InstructorSection = () => {
  return (
    <section className="w-full px-2 py-8 sm:px-4 sm:py-10 lg:px-5 lg:py-16">
      <div className="relative mx-auto w-full max-w-[1920px]">
        {/* Main card */}
        <div className="relative min-h-[520px] w-full rounded-[6px] bg-[#102c31] lg:min-h-[400px]">
          {/* Background */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[6px]">
            <div
              className="absolute inset-0 opacity-25"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(255,255,255,0.24) 0.7px, transparent 0.8px)",
                backgroundSize: "5px 5px",
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#102c31] via-[#102c31]/95 to-[#102c31]/75" />
          </div>

          {/* Content */}
          <div className="relative z-10 grid min-h-[520px] grid-cols-1 lg:min-h-[400px] lg:grid-cols-[56%_44%]">
            {/* Left content */}
            <div className="flex flex-col justify-center px-6 pb-7 pt-9 sm:px-10 lg:px-16 lg:py-8 xl:px-[105px]">
              <h2 className="text-[31px] font-medium leading-tight tracking-[-0.8px] text-white sm:text-[38px] lg:text-[42px] xl:text-[46px]">
                Became an instructor
              </h2>

              <p className="mt-4 max-w-[800px] text-[16px] font-medium leading-[1.75] text-white/65 sm:text-[18px] lg:mt-5 lg:text-[19px] xl:text-[21px]">
                Lorem ipsum dolor sit amet consectetur. Pellentesque id quam
                mauris mus. Vitae diam dolor lacus amet integer ut.
              </p>

              <button
                type="button"
                className="mt-6 flex min-h-[56px] w-full max-w-[320px] items-center justify-center rounded-[5px] bg-[#ffb700] px-6 text-[17px] font-medium text-[#09282d] transition-all duration-300 hover:-translate-y-1 hover:bg-[#ffc126] hover:shadow-[0_15px_35px_rgba(255,183,0,0.25)] active:translate-y-0 sm:min-h-[62px] sm:text-[18px]"
              >
                Start Teaching Today
              </button>
            </div>

            {/* Right side */}
            <div className="relative min-h-[330px] sm:min-h-[370px] lg:min-h-0">
              {/* Girl image */}
              <div className="pointer-events-none absolute inset-0 z-[3] flex items-end justify-center px-5 pt-4 sm:px-8 lg:justify-end lg:px-8 xl:px-12">
                <img
                  src={girlImg}
                  alt="Instructor"
                  className="h-auto mb-7 w-full max-w-[300px] object-contain sm:max-w-[370px] lg:max-w-[440px] xl:max-w-[470px] 2xl:max-w-[500px]"
                />
              </div>

              {/* Rating card */}
              <div
                className="
    absolute
    bottom-4
    left-1/2
    z-20
    flex
    w-[220px]
    -translate-x-1/2
    items-center
    justify-center
    rounded-full
    bg-white
    px-5
    py-4
    shadow-[0_20px_60px_rgba(0,0,0,0.22)]
    sm:bottom-6
    sm:w-[260px]
    sm:px-6
    lg:bottom-auto
    lg:left-[-5%]
    lg:top-[105px]
    lg:w-[250px]
    lg:translate-x-0
    xl:left-0
  "
              >
                <img
                  src={avatarImg}
                  alt="Students"
                  className="
      h-auto
      w-[170px]
      max-w-none
      object-contain
      sm:w-[200px]
      lg:w-[190px]
      xl:w-[210px]
    "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorSection;
