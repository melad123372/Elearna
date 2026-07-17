import React from "react";
import leimg2 from "../../assets/Elearna - Contact Two/leimg2.webp";
const ContactHero = () => {
  return (
    <section
      className="relative h-[350px] sm:h-[450px] md:h-[550px] lg:h-[400px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${leimg2})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center h-full px-6 sm:px-10 md:px-16 lg:px-10">
        <div>
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold">
            Contact us
          </h1>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
