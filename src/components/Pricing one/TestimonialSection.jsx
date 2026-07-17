import { useState } from "react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import { RiDoubleQuotesL } from "react-icons/ri";

const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur. Adipiscing eget risus tempus facilisis scelerisque vitae consectetur vitae. Amet faucibus venenatis donec mattis. Morbi placerat eleifend malesuada sed semper quis.",
    name: "Linda Grady",
    role: "Co-Assistant Manager",
  },
  {
    quote:
      "Working with this team was an excellent experience. Their attention to detail, communication, and commitment helped us achieve outstanding results.",
    name: "Sarah Johnson",
    role: "Marketing Director",
  },
  {
    quote:
      "The entire process was simple, professional, and effective. I would confidently recommend their services to any growing business.",
    name: "Michael Carter",
    role: "Project Manager",
  },
];

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const previousTestimonial = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1,
    );
  };

  const nextTestimonial = () => {
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1,
    );
  };

  const testimonial = testimonials[activeIndex];

  return (
    <section className="flex min-h-screen items-center justify-center bg-white px-5 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-6xl text-center">
        <RiDoubleQuotesL
          aria-hidden="true"
          className="mx-auto mb-8 text-[90px] text-gray-100 sm:mb-10 sm:text-[120px] lg:text-[160px]"
        />

        <blockquote
          key={activeIndex}
          className="mx-auto max-w-5xl text-xl font-medium leading-relaxed text-slate-900 transition-all duration-300 sm:text-2xl sm:leading-relaxed lg:text-[31px] lg:leading-[1.25]"
        >
          “{testimonial.quote}”
        </blockquote>

        <div className="mt-12 sm:mt-14">
          <h3 className="text-1xl font-medium text-slate-900 sm:text-3xl">
            {testimonial.name}
          </h3>

          <p className="mt-3 text-sm font-medium uppercase tracking-wide text-gray-500 sm:text-lg">
            {testimonial.role}
          </p>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={previousTestimonial}
            aria-label="Previous testimonial"
            className="group flex size-12 items-center justify-center rounded-full border border-slate-400 text-slate-500 transition hover:border-slate-900 hover:bg-slate-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 sm:size-14"
          >
            <HiOutlineArrowLeft className="text-2xl transition-transform group-hover:-translate-x-0.5" />
          </button>

          <button
            type="button"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
            className="group flex size-12 items-center justify-center rounded-full border border-slate-400 text-slate-500 transition hover:border-slate-900 hover:bg-slate-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 sm:size-14"
          >
            <HiOutlineArrowRight className="text-2xl transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
