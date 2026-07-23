import React from "react";
import perimg2 from "../../assets/2- About One imgs/HomeOneVideoposter.jpg";
import perimg1 from "../../assets/2- About One imgs/GirlImageUsingLaptop.webp";
export default function App() {
  return (
    <section className="flex flex-col p-80 lg:flex-row gap-60 px-6 lg:px-10 py-20 items-center overflow-hidden">
      {/* LEFT SIDE */}
      <div className="relative w-full lg:w-1/2 h-[520px]">
        {/* Yellow circle */}
        <div className="absolute top-0 left-20 w-56 h-56 bg-yellow-400 rounded-full"></div>

        {/* Outline circle */}
        <div className="absolute -left-20 bottom-[-100px] w-[460px] h-[460px] border-4 border-gray-100 rounded-full"></div>

        {/* Small image */}
        <div className="absolute z-20 left-0 top-32 w-[260px] h-[320px]">
          <img
            src={perimg1}
            className="w-full h-full object-cover"
            alt="teacher"
          />
        </div>

        {/* Main image */}
        <div className="absolute left-70 p-0 top-8 w-[400px] h-[550px]">
          <img
            src={perimg2}
            className="w-full h-full object-cover rounded"
            alt="student"
          />
        </div>
      </div>

      {/* RIGHT CONTENT */}

      <div className="w-full lg:w-1/2">
        <p className="font-bold tracking-wider text-lg text-[#102c33]">
          WHAT WE OFFER
        </p>

        <h1 className="text-4xl lg:text-4xl font-bold leading-tight text-[#102c33] mt-5">
          Personalized learning for
          <br />
          your ambitions
        </h1>

        <p className="text-gray-500 text-lg lg:text-xl leading-relaxed mt-6">
          Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris
          mus. Vitae diam dolor lacus amet integer ut.
        </p>

        {/* Features */}

        <div className="flex flex-col md:flex-row gap-10 mt-8">
          <ul className="space-y-5 text-lg font-semibold text-[#102c33] list-disc pl-5">
            <li>Skill-based instruction</li>

            <li>Global certification</li>
          </ul>

          <ul className="space-y-5 text-lg font-semibold text-[#102c33] list-disc pl-5">
            <li>Analytics and insights</li>

            <li>Customizable courses</li>
          </ul>
        </div>

        {/* CTA */}

        <div className="bg-[#eef6f8] mt-10 p-8 lg:p-6 rounded flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-2xl font-bold text-[#102c33]">
              Still have questions?
            </h3>

            <p className="text-gray-500 text-lg mt-4">
              Lorem ipsum dolor sit amet conse
              <br />
              ipsum blandit etiam aliquam.
            </p>
          </div>

          <button className="bg-[#102c33] text-white px-10 py-4 rounded text-lg">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
