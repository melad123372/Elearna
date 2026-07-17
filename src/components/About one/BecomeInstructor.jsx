import React from "react";
import { FaStar } from "react-icons/fa";
import becimg1 from "../../assets/Elearna - About One/becimg1.webp";
export default function BecomeInstructor() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-10 py-20 overflow-hidden">
      {/* Left Content */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h1 className="text-4xl lg:text-5xl font-bold text-[#102c33]">
          Became an instructor
        </h1>

        <p className="mt-6 text-gray-500 text-lg lg:text-xl leading-relaxed">
          Lorem ipsum dolor sit amet consectetur. Sed ultricies fames
          scelerisque urna quis semper amet. Nisl tincidunt tortor nullam est
          nec commodo orci dictum in. Lorem consectetur donec purus sagittis.
        </p>

        <button className="mt-10 bg-[#102c33] text-white px-10 py-4 rounded-md text-lg">
          Start Teaching Today
        </button>
      </div>

      {/* Right Side */}
      <div className="relative w-full lg:w-1/2  h-[500px] mt-12 lg:mt-0">
        {/* Person */}
        <img
          src={becimg1}
          alt="Instructor"
          className="
          absolute z-10 
          left-30 bottom-0 
          h-[520px] 
          object-contain
          "
        />

        {/* Review Card */}
        <div
          className="
          absolute z-20
          top-36 left-10
          bg-white
          shadow-xl
          rounded-full
          px-7 py-4
          flex items-center gap-4
        "
        >
          Avatar
          <div className="flex -space-x-3">
            <img
              src="https://randomuser.me/api/portraits/women/1.jpg"
              className="w-12 h-12 rounded-full border-2 border-white"
            />

            <img
              src="https://randomuser.me/api/portraits/men/2.jpg"
              className="w-12 h-12 rounded-full border-2 border-white"
            />

            <img
              src="https://randomuser.me/api/portraits/men/3.jpg"
              className="w-12 h-12 rounded-full border-2 border-white"
            />
          </div>
          {/* Rating */}
          <div>
            <div className="flex text-yellow-400 text-lg">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar key={star} />
              ))}
            </div>

            <p className="text-gray-500 font-semibold">4.94 (625)</p>
          </div>
        </div>
      </div>
    </section>
  );
}
