// Hero Section Data

import bgImg1 from "../../assets/Elearna - Home One/bgImg1.avif";
import bgImg2 from "../../assets/Elearna - Home One/bgImg2.avif";
import img1 from "../../assets/Elearna - Home One/img1.webp";
import img2 from "../../assets/Elearna - Home One/img2.avif";

import girlimg from "../../assets/Elearna - Home One/girlimg.webp";

export const heroData = {
  bgImg1: bgImg1,
  bgImg2: bgImg2,
  img1: img1,
  img2: img2,
  girlimg: girlimg,

  titleSmall: "Online learning",
  titleMain: "More than 25000+ courses",
  description:
    "Lorem ipsum dolor sit amet consectetur. Gravida enim risus sollicitudin mauris tincidunt commodo ornare.",
  buttonText: "Get Started",
};

// LogoSection

import logo1 from "../../assets/Elearna - Home One/logo1.svg";
import logo2 from "../../assets/Elearna - Home One/logo2.svg";
import logo3 from "../../assets/Elearna - Home One/logo3.svg";
import logo4 from "../../assets/Elearna - Home One/logo4.svg";
import logo5 from "../../assets/Elearna - Home One/logo5.svg";
export const logos = [logo1, logo2, logo3, logo4, logo5];

// Courses



// testimonials

import userImg from "../../assets/Elearna - Home One/userimg.avif";
import userImg2 from "../../assets/Elearna - Home One/userimg2.avif";

export const testimonials = [
  {
    image: userImg,
    name: "Linda Grady",
    role: "CO-ASSISTANT MANAGER",
    text: "Lorem ipsum dolor“Lorem ipsum dolor sit amet consectetur. Adipiscing eget risus tempus facilisis scelerisque vitae consectetur vitae. Amet faucibus venenatis donec mattis. Morbi placerat eleifend malesuada sed semper quis.” sit ametconsectetur. Adipiscing eget risus tempus facilisis scelerisque vitae consectetur vitae.",
  },
  {
    image: userImg2,
    name: "John Smith",
    role: "WEB DEVELOPER",
    text: "Amazing learning “Lorem ipsum dolor sit amet consectetur. Molestie faucibus nibh felis tempor vel aliquet cursus placerat duis. Est felis pulvinar tortor ut nibh montes ante gravida velit. Facilisi posuere in sed mattis blandit duis aliquet.”experience and very professional teachers.",
  },
];

// CourseExplorer

import expimg1 from "../../assets/Elearna - Home One/expimg1.webp";
import expimg2 from "../../assets/Elearna - Home One/expimg2.webp";
import expimg3 from "../../assets/Elearna - Home One/expimg3.webp";
import expimg4 from "../../assets/Elearna - Home One/expimg4.webp";

export const PopularCourses = [
  {
    image: expimg1,
    price: "Free",
    category: "DEVELOPMENT",
    title: "Building single page applications with angular",
    rating: "5.00 (328)",
  },

  {
    image: expimg2,
    price: "$59",
    category: "DEVELOPMENT",
    title: "Database integration with MongoDB",
    rating: "4.49 (756)",
  },

  {
    image: expimg3,
    price: "$49",
    category: "MANAGEMENT",
    title: "Risk management and business continuity",
    rating: "4.88 (210)",
  },

  {
    image: expimg4,
    price: "$72",
    category: "DEVELOPMENT",
    title: "Full-stack development with the MERN stack",
    rating: "5.00 (985)",
  },
];
