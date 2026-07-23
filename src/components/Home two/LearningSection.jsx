import React, { useState } from "react";

import leimg1 from "../../assets/11- Home Two Imgs/PotentialImage-1.webp";
import leimg2 from "../../assets/11- Home Two Imgs/PotentialImage-2.webp";
import leimg3 from "../../assets/11- Home Two Imgs/PotentialImage-3.webp";
import leimg4 from "../../assets/11- Home Two Imgs/PotentialImage-4.webp";

const data = [
  {
    id: "1",
    title: "Flexibility and convenience",
    desc: "Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus.",
    img: leimg1,
  },
  {
    id: "2",
    title: "Course accessibility",
    desc: "Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus.",
    img: leimg2,
  },
  {
    id: "3",
    title: "Cost-effectiveness",
    desc: "Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus.",
    img: leimg3,
  },
  {
    id: "4",
    title: "Personalized learning",
    desc: "Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus.",
    img: leimg4,
  },
];

export default function LearningSection() {
  const [activeImg, setActiveImg] = useState(data[0].img);

  return (
    <section className="w-full overflow-hidden bg-[#eef3f5]">
      {/* HEADER */}
      <div
        className="
          px-5
          py-12
          text-center
          sm:px-6
          sm:py-14
          md:px-8
          md:py-16
          lg:py-20
        "
      >
        <p
          className="
            text-xs
            font-semibold
            tracking-[0.18em]
            text-gray-700
            sm:text-sm
            sm:tracking-widest
          "
        >
          UNLOCKING POTENTIAL
        </p>

        <h1
          className="
            mx-auto
            mt-4
            max-w-5xl
            text-2xl
            font-bold
            leading-tight
            text-[#112a30]
            sm:mt-5
            sm:text-3xl
            md:text-4xl
            lg:text-5xl
            lg:leading-[1.15]
          "
        >
          Discover the boundless advantages and transformative power of
          eLearning for professional growth
        </h1>
      </div>

      {/* IMAGE AND CARDS */}
      <div
        className="
          relative
          min-h-[960px]
          overflow-hidden
          sm:min-h-[920px]
          md:min-h-[650px]
          lg:min-h-[700px]
        "
      >
        {/* ACTIVE IMAGE */}
        <img
          key={activeImg}
          src={activeImg}
          alt="Online learning"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-top
            transition-all
            duration-700
            sm:object-[55%_center]
            md:object-center
          "
        />

        {/* GRADIENT OVERLAY */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-black/20
            via-black/35
            to-black/90
            md:from-black/10
            md:via-black/20
            md:to-black/85
          "
        />

        {/* CARDS */}
        <div
          className="
            relative
            z-10
            grid
            min-h-[960px]
            grid-cols-1
            grid-rows-4
            sm:min-h-[920px]
            md:min-h-[650px]
            md:grid-cols-4
            md:grid-rows-1
            lg:min-h-[700px]
          "
        >
          {data.map((item) => (
            <div
              key={item.id}
              onMouseEnter={() => setActiveImg(item.img)}
              onClick={() => setActiveImg(item.img)}
              className="
                group
                relative
                flex
                cursor-pointer
                flex-col
                justify-end
                overflow-hidden
                border-b
                border-white/25
                p-5
                transition-colors
                duration-500
                hover:bg-black/15
                sm:p-6
                md:border-b-0
                md:border-r
                md:p-6
                lg:p-8
                xl:p-10
              "
            >
              <span
                className="
                  text-3xl
                  font-bold
                  leading-none
                  text-white
                  sm:text-4xl
                  md:text-4xl
                  lg:text-5xl
                "
              >
                {item.id}
              </span>

              <h2
                className="
                  mt-3
                  max-w-xs
                  text-lg
                  font-semibold
                  leading-snug
                  text-white
                  sm:mt-4
                  sm:text-xl
                  md:mt-5
                  lg:text-2xl
                "
              >
                {item.title}
              </h2>

              <p
                className="
                  mt-3
                  max-w-sm
                  text-sm
                  leading-6
                  text-white/80
                  opacity-100
                  transition-all
                  duration-700
                  ease-out
                  sm:mt-4
                  sm:text-base
                  sm:leading-7
                  md:mt-5
                  md:translate-y-full
                  md:opacity-0
                  md:group-hover:translate-y-0
                  md:group-hover:opacity-100
                  lg:leading-8
                "
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
