import { motion } from "framer-motion";

import event1 from "../../assets/Elearna - Events/event1.webp";
import event2 from "../../assets/Elearna - Events/event2.webp";
import event3 from "../../assets/Elearna - Events/event3.webp";
import event4 from "../../assets/Elearna - Events/event4.webp";
import event5 from "../../assets/Elearna - Events/event5.webp";
import event6 from "../../assets/Elearna - Events/event6.webp";

const events = [
  {
    id: 1,
    image: event1,
    date: "22",
    month: "NOV",
    year: "2024",
    location: "PHOENIX, USA",
    time: "9:00 AM - 3:00 PM",
    title: "Professional online events",
  },
  {
    id: 2,
    image: event2,
    date: "25",
    month: "NOV",
    year: "2024",
    location: "NEW YORK",
    time: "10:00 AM - 4:00 PM",
    title: "Business Leadership Summit",
  },
  {
    id: 3,
    image: event3,
    date: "28",
    month: "NOV",
    year: "2024",
    location: "LONDON",
    time: "8:00 AM - 2:00 PM",
    title: "Creative Design Workshop",
  },
  {
    id: 4,
    image: event4,
    date: "02",
    month: "DEC",
    year: "2024",
    location: "PARIS",
    time: "11:00 AM - 5:00 PM",
    title: "Technology Conference",
  },
  {
    id: 5,
    image: event5,
    date: "05",
    month: "DEC",
    year: "2024",
    location: "TOKYO",
    time: "9:30 AM - 4:30 PM",
    title: "Health & Wellness Seminar",
  },
  {
    id: 6,
    image: event6,
    date: "10",
    month: "DEC",
    year: "2024",
    location: "DUBAI",
    time: "1:00 PM - 6:00 PM",
    title: "Innovative Teaching Strategies",
  },
];

export default function EventsSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="py-20 px-6 md:px-12"
    >
      {/* Heading */}

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.7,
        }}
        className="text-center max-w-3xl mx-auto"
      >
        <span
          className="
        
          font-semibold
          tracking-widest
        "
        >
          OUR EVENT
        </span>

        <h2
          className="
          text-4xl md:text-5xl
          font-bold mt-4
          text-slate-900
        "
        >
          Professional online events
        </h2>

        <p
          className="
          mt-5 text-gray-500
        "
        >
          Lorem ipsum dolor sit amet consectetur. Congue sit pellentesque eu
          scelerisque urna a porttitor.
        </p>
      </motion.div>

      {/* Cards */}

      <div
        className="
        grid md:grid-cols-2
        lg:grid-cols-3
        gap-8 mt-16
      "
      >
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{
              opacity: 0,
              y: 80,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            className="
              group
              relative
              overflow-hidden
              rounded-[4px]
              shadow-lg
            "
          >
            {/* Image */}

            <img
              src={event.image}
              alt={event.title}
              className="
                w-full
                h-[500px]
                object-cover
                transition-all
                duration-500
                group-hover:scale-110
              "
            />

            {/* Date */}

            <div
              className="
                absolute
                top-4
                right-4

                bg-white
                rounded-md
                px-4
                py-3
                text-center
                shadow

                translate-x-24
                opacity-0

                group-hover:translate-x-0
                group-hover:opacity-100

                transition-all
                duration-500
              "
            >
              <h2 className="text-3xl font-bold">{event.date}</h2>

              <p className="text-xs text-gray-500">{event.month}</p>

              <p className="text-xs text-gray-500">{event.year}</p>
            </div>

            {/* Hover Content */}

            <div
              className="
                absolute
                bottom-0
                left-0
                w-full

                translate-y-full

                group-hover:translate-y-0

                transition-all
                duration-500
              "
            >
              {/* Moving Text */}

              <div
                className="
                bg-yellow-400
                py-3
                overflow-hidden
              "
              >
                <motion.div
                  animate={{
                    x: ["0%", "-50%"],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="
                    flex
                    whitespace-nowrap
                  "
                >
                  {[...Array(10)].map((_, i) => (
                    <span
                      key={i}
                      className="
                        mx-6
                        text-sm
                        font-semibold
                      "
                    >
                      See event details •
                    </span>
                  ))}
                </motion.div>
              </div>

              {/* Details */}

              <div className="bg-white p-6">
                <p
                  className="
                  text-xs
                  tracking-widest
                  text-gray-500
                  uppercase
                "
                >
                  {event.location} • {event.time}
                </p>

                <h3
                  className="
                  text-2xl
                  font-bold
                  text-slate-900
                  mt-4
                  text-center 
                "
                >
                  {event.title}
                </h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
