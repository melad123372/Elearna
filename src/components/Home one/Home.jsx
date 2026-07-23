import React from "react";
import { heroData } from "./Data";

export default function Hero() {
  const {
    bgImg1,
    bgImg2,
    img1,
    img2,
    BannerGirl,

    titleSmall,
    titleMain,
    description,
    buttonText,
  } = heroData;

  return (
    <section className="relative  p-8 min-h-screen overflow-hidden">
      {/* BACKGROUND IMAGE 1 */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImg1})` }}
      >
        {/* BACKGROUND IMAGE 2 */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
          style={{ backgroundImage: `url(${bgImg2})` }}
        ></div>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-[#0F252A]"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col-reverse lg:flex-row items-center px-6">
        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/2 relative flex justify-center items-center mt-10 lg:mt-0">
          {/* GIRL IMAGE */}
          <img
            src={BannerGirl}
            alt="girl"
            className="relative z-30 w-[240px] sm:w-[300px] md:w-[380px] lg:w-[550px] drop-shadow-2xl"
          />

          {/* IMG 1 FRONT */}
          <img
            src={img1}
            alt="decor1"
            className="absolute z-50 left-15 top-90 -translate-y-1/2 w-16 sm:w-24 md:w-50 rounded-xl shadow-xl"
          />

          {/* IMG 2 FRONT */}
          <img
            src={img2}
            alt="decor2"
            className="absolute z-50 right-14 bottom-3 w-16 sm:w-24 md:w-60 rounded-xl shadow-xl"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full lg:w-1/2 text-white text-center lg:text-left">
          <h5 className="text-sm uppercase tracking-widest text-cyan-400 mb-3">
            {titleSmall}
          </h5>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            {titleMain}
          </h1>

          <p className="mt-5 text-gray-200 max-w-md mx-auto lg:mx-0">
            {description}
          </p>

          <button className="mt-6 bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-full transition hover:scale-105">
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
}
