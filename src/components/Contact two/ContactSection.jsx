import React from "react";
import { FiHome, FiFileText, FiClock } from "react-icons/fi";
import bgimg from "../../assets/Elearna - Contact Two/bgimg.webp";

const ContactSection = () => {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-5">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-800 sm:text-sm">
            CONTACT US
          </p>

          <h2 className="mt-4 text-2xl font-bold leading-tight text-slate-900 sm:mt-5 sm:text-3xl md:text-4xl">
            Get details information about
            <br className="hidden sm:block" />
            online courses, contact us. we're
            <br className="hidden sm:block" />
            happy to discuss
          </h2>

          <p className="mt-5 text-sm leading-7 text-gray-500 sm:mt-6 sm:text-base sm:leading-8">
            Lorem ipsum dolor sit amet consectetur. Neque libero donec hendrerit
            nam id purus suspendisse. Imperdiet nam lorem tempus in.
          </p>
        </div>

        {/* Contact Info */}
        <div className="mt-10 grid grid-cols-1 gap-8 border-gray-200 px-2 py-8 sm:mt-14 sm:px-6 md:mt-16 md:grid-cols-3 md:p-10">
          <div className="flex items-start gap-4">
            <FiHome className="shrink-0 text-3xl text-slate-900 sm:text-4xl" />

            <div>
              <h4 className="text-lg font-semibold sm:text-xl">
                Area location
              </h4>

              <p className="mt-2 text-sm leading-6 text-gray-500 sm:text-base">
                410 Sandtown, California
                <br />
                94001, USA
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 border-gray-200 md:border-x md:px-8">
            <FiFileText className="shrink-0 text-3xl text-slate-900 sm:text-4xl" />

            <div>
              <h4 className="text-lg font-semibold sm:text-xl">
                Contact details
              </h4>

              <p className="mt-2 text-sm leading-6 text-gray-500 sm:text-base">
                888-123-4567
                <br />
                info@example.com
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 md:justify-end">
            <FiClock className="shrink-0 text-3xl text-slate-900 sm:text-4xl" />

            <div>
              <h4 className="text-lg font-semibold sm:text-xl">
                Opening hours
              </h4>

              <p className="mt-2 text-sm leading-6 text-gray-500 sm:text-base">
                Monday–Friday
                <br />
                10:30am–7:00pm
              </p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative mt-12 min-h-[820px] sm:mt-16 sm:min-h-[850px] md:min-h-[900px] lg:mt-20 lg:min-h-[650px]">
          {/* Background Image */}
          <img
            src={bgimg}
            alt="Contact"
            className="absolute inset-0 h-full w-full rounded-md object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 rounded-md bg-black/20" />

          {/* Contact Form */}
          <div
            className="
              absolute
              left-4
              right-4
              top-1/2
              z-10
              -translate-y-1/2
              rounded-lg
              bg-white
              p-5
              shadow-2xl
              sm:left-8
              sm:right-8
              sm:p-8
              md:p-10
              lg:left-auto
              lg:right-10
              lg:w-full
              lg:max-w-xl
            "
          >
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl">
              Fill out for contact
            </h2>

            <p className="mt-3 text-sm text-gray-500 sm:mt-4 sm:text-base">
              Lorem ipsum dolor sit amet consectetur libero donec.
            </p>

            <form className="mt-6 space-y-4 sm:mt-8 sm:space-y-5">
              <input
                type="text"
                placeholder="Your name*"
                className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-slate-900 sm:py-4 sm:text-base"
              />

              <input
                type="email"
                placeholder="Your email*"
                className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-slate-900 sm:py-4 sm:text-base"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-slate-900 sm:py-4 sm:text-base"
              />

              <textarea
                rows="5"
                placeholder="Your message*"
                className="w-full resize-none rounded-md border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-slate-900 sm:py-4 sm:text-base"
              />

              <label className="flex items-start gap-2 text-xs leading-5 text-gray-600 sm:items-center sm:text-sm">
                <input type="checkbox" className="mt-1 shrink-0 sm:mt-0" />
                <span>Save information for the next time comment.</span>
              </label>

              <button
                type="submit"
                className="w-full rounded-md bg-slate-900 px-10 py-3 text-sm text-white transition hover:bg-slate-800 sm:w-auto sm:py-4 sm:text-base"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
