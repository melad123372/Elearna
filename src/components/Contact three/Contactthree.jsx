import React from "react";
import leimg2 from "../../assets/Elearna - Home Two/leimg2.webp";

const ContactHero = () => {
  return (
    <section className="relative min-h-[700px] w-full overflow-hidden sm:min-h-[800px] lg:min-h-[750px]">
      {/* Background Image */}
      <img
        src={leimg2}
        alt="Contact"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[620px] items-center justify-center px-4 pb-32 pt-14 sm:min-h-[720px] sm:px-6 sm:pb-36 lg:min-h-[690px] lg:px-8 lg:pb-20">
        <div className="mx-auto w-full max-w-4xl text-center text-white">
          <h1 className="text-4xl font-medium text-yellow-400 sm:text-6xl md:text-7xl lg:text-8xl">
            Contact
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-200 sm:mt-6 sm:text-base sm:leading-7 md:text-lg">
            Lorem ipsum dolor sit amet consectetur. Est cras viverra pharetra
            tellus
            <span className="hidden sm:inline">
              <br />
            </span>{" "}
            pulvinar amet aliquam. Vestibulum hac tincidunt.
          </p>

          <div className="mt-8 sm:mt-10">
            <h2 className="break-all text-xl font-light sm:break-normal sm:text-4xl md:text-5xl">
              info@example.com
            </h2>

            <div className="mx-auto my-6 h-px w-32 bg-gray-300 sm:my-8 sm:w-60 md:w-80" />

            <h3 className="text-2xl font-light sm:text-5xl md:text-6xl">
              (888) 123 4567
            </h3>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 z-20 w-full border-t border-white/10 bg-black/10 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-5 text-center text-[10px] font-medium uppercase tracking-wide text-white sm:px-6 sm:text-xs lg:min-h-[60px] lg:flex-row lg:gap-8 lg:py-3 lg:text-sm">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:gap-x-7 lg:justify-start lg:gap-10">
            <span>Style Guide</span>
            <span>Password Protected</span>
            <span>404</span>
            <span>License</span>
          </div>

          <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-6 lg:justify-end lg:gap-10">
            <span>Design by Radiant Templates</span>
            <span>Powered by Webflow</span>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default ContactHero;
