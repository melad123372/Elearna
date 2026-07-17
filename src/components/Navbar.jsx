import { useEffect, useRef, useState } from "react";
import { ChevronDown, ShoppingBag, Menu, X } from "lucide-react";
import { FaArrowRight } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { Link } from "react-router-dom";

import logo from "../assets/logo.svg";

const courseTypes = [
  {
    id: "free",
    title: "Free courses",
    description: "Free learning resources for skill development.",
  },
  {
    id: "paid",
    title: "Paid courses",
    description: "Premium courses available after purchase and login.",
  },
];

const megaMenuCourses = [
  {
    title: "Finance",
    description: "Understanding corporate finance and investments.",
    path: "/courses/finance",
  },
  {
    title: "Design",
    description: "Advanced Photoshop techniques for designers.",
    path: "/courses/design",
  },
  {
    title: "Management",
    description: "Crisis management and problem-solving strategies.",
    path: "/courses/management",
  },
  {
    title: "Development",
    description: "Building modern single-page applications.",
    path: "/courses/development",
  },
];

const menus = [
  {
    name: "Home",
    dropdown: [
      { name: "Home One", path: "/home-one" },
      { name: "Home Two", path: "/home-two" },
      { name: "Home Three", path: "/home-three" },
    ],
  },
  {
    name: "Courses",
    isMegaMenu: true,
    dropdown: [
      { name: "Finance", path: "/courses/finance" },
      { name: "Design", path: "/courses/design" },
      { name: "Management", path: "/courses/management" },
      { name: "Development", path: "/courses/development" },
      { name: "Course Grid", path: "/courses/grid" },
      { name: "Course Details", path: "/courses/details" },
    ],
  },
  {
    name: "Pages",
    dropdown: [
      { name: "About One", path: "/about-one" },
      { name: "About Two", path: "/about-two" },
      { name: "Course One", path: "/course-one" },
      { name: "Course Two", path: "/course-two" },
      { name: "Course Three", path: "/course-three" },
      { name: "FAQ", path: "/faq" },
      { name: "Pricing One", path: "/pricing-one" },
      { name: "Pricing Two", path: "/pricing-two" },
      { name: "Pricing Three", path: "/pricing-three" },
      { name: "Career", path: "/career" },
      { name: "Events", path: "/events" },
      { name: "Team", path: "/team" },
    ],
  },
  {
    name: "Blog",
    dropdown: [
      { name: "Blog One", path: "/blog-one" },
      { name: "Blog Two", path: "/blog-two" },
      { name: "Blog Three", path: "/blog-three" },
    ],
  },
  {
    name: "Contact",
    dropdown: [
      { name: "Contact One", path: "/contact-one" },
      { name: "Contact Two", path: "/contact-two" },
      { name: "Contact Three", path: "/contact-three" },
    ],
  },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeCourseType, setActiveCourseType] = useState("free");
  const [scrolled, setScrolled] = useState(false);

  const hoverTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  const openDesktopMenu = (menuName) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }

    setOpenMenu(menuName);
  };

  const closeDesktopMenu = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }

    hoverTimeoutRef.current = setTimeout(() => {
      setOpenMenu(null);
    }, 140);
  };

  const toggleDesktopMenu = (menuName) => {
    setOpenMenu((currentMenu) => (currentMenu === menuName ? null : menuName));
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setOpenMenu(null);
  };

  return (
    <nav
      className={`fixed left-0 top-0 z-[9999] w-full transition-all duration-300 ${
        scrolled ? "bg-[#0F252A] shadow-lg shadow-black/10" : "bg-transparent"
      }`}
    >
      {/* Main Navbar */}
      <div
        className={`mx-auto flex max-w-[1440px] items-center justify-between px-4 transition-all duration-300 md:px-8 lg:px-10 xl:px-12 ${
          scrolled ? "h-[72px]" : "h-[84px]"
        }`}
      >
        {/* Logo */}
        <Link
          to="/"
          onClick={() => setOpenMenu(null)}
          className="shrink-0 transition-transform duration-300 hover:scale-105"
        >
          <img src={logo} alt="Elearna" className="w-[125px] md:w-[140px]" />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden h-full items-center gap-6 lg:flex xl:gap-10">
          {menus.map((menu) => {
            const isOpen = openMenu === menu.name;

            return (
              <li
                key={menu.name}
                className="relative flex h-full items-center"
                onMouseEnter={() => openDesktopMenu(menu.name)}
                onMouseLeave={closeDesktopMenu}
              >
                <button
                  type="button"
                  onClick={() => toggleDesktopMenu(menu.name)}
                  aria-expanded={isOpen}
                  className={`relative flex h-full items-center gap-2 whitespace-nowrap text-base font-medium transition-colors duration-300 after:absolute after:bottom-[18px] after:left-0 after:h-[2px] after:bg-yellow-400 after:transition-all after:duration-300 xl:text-lg ${
                    isOpen
                      ? "text-yellow-400 after:w-full"
                      : "text-white after:w-0 hover:text-yellow-400 hover:after:w-full"
                  }`}
                >
                  {menu.name}

                  <ChevronDown
                    size={17}
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-yellow-400" : "rotate-0"
                    }`}
                  />
                </button>

                {/* Courses Mega Menu */}
                {menu.isMegaMenu && (
                  <div
                    onMouseEnter={() => openDesktopMenu("Courses")}
                    onMouseLeave={closeDesktopMenu}
                    className={`fixed left-1/2 z-[100] h-[400px] w-[800px] max-w-[calc(100vw-32px)] -translate-x-1/2 overflow-hidden rounded-xl border border-gray-200 border-b-[5px] border-b-[#ffb400] bg-white shadow-[0_25px_70px_rgba(0,0,0,0.24)] transition-all duration-300 ${
                      scrolled ? "top-[72px]" : "top-[84px]"
                    } ${
                      openMenu === "Courses"
                        ? "visible translate-y-0 opacity-100"
                        : "pointer-events-none invisible -translate-y-3 opacity-0"
                    }`}
                  >
                    <div className="grid h-full grid-cols-[210px_1fr]">
                      {/* Left Side */}
                      <aside className="h-full bg-[#edf5f7] p-4">
                        <div className="flex h-full flex-col gap-3">
                          {courseTypes.map((type) => {
                            const isActive = activeCourseType === type.id;

                            return (
                              <button
                                key={type.id}
                                type="button"
                                onMouseEnter={() =>
                                  setActiveCourseType(type.id)
                                }
                                onFocus={() => setActiveCourseType(type.id)}
                                onClick={() => setActiveCourseType(type.id)}
                                className={`flex-1 rounded-lg border px-4 py-4 text-left transition-all duration-300 ${
                                  isActive
                                    ? "border-white bg-white shadow-md"
                                    : "border-transparent hover:bg-white/60"
                                }`}
                              >
                                <h3
                                  className={`text-base font-semibold transition-colors duration-300 ${
                                    isActive
                                      ? "text-[#ffad00]"
                                      : "text-[#10272d]"
                                  }`}
                                >
                                  {type.title}
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-[#777]">
                                  {type.description}
                                </p>

                                <span
                                  className={`mt-3 block h-[2px] bg-[#ffb400] transition-all duration-300 ${
                                    isActive ? "w-10" : "w-0"
                                  }`}
                                />
                              </button>
                            );
                          })}
                        </div>
                      </aside>

                      {/* Right Side */}
                      <div className="flex h-full min-w-0 flex-col p-6">
                        {/* Course Links */}
                        <div className="grid flex-1 grid-cols-2 gap-x-7 gap-y-5">
                          {megaMenuCourses.map((course) => (
                            <Link
                              key={course.title}
                              to={`${course.path}?type=${activeCourseType}`}
                              onClick={() => setOpenMenu(null)}
                              className="group/course rounded-lg p-2 transition-all duration-300 hover:bg-[#f7fafb]"
                            >
                              <h3 className="text-sm font-bold uppercase tracking-wide text-[#10272d] transition-colors duration-300 group-hover/course:text-[#ffb400]">
                                {course.title}
                              </h3>

                              <p className="mt-2 line-clamp-2 text-xs leading-5 text-[#7d7d7d] transition-colors duration-300 group-hover/course:text-[#555]">
                                {course.description}
                              </p>

                              <span className="mt-2 block h-[2px] w-0 bg-[#ffb400] transition-all duration-300 group-hover/course:w-10" />
                            </Link>
                          ))}
                        </div>

                        {/* Earnings Banner */}
                        <div className="mt-4 flex min-h-[92px] items-center gap-3 rounded-lg bg-[#edf5f7] px-4 py-3">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#fff4d4] text-[#ffad00]">
                            <GiMoneyStack className="text-2xl" />
                          </div>

                          <div className="min-w-0 flex-1">
                            <h3 className="text-sm font-semibold text-[#10272d]">
                              Increase your potential earnings
                            </h3>

                            <p className="mt-1 line-clamp-2 text-xs leading-5 text-[#818181]">
                              Develop professional skills and improve your
                              career opportunities.
                            </p>
                          </div>

                          <Link
                            to={`/courses/grid?type=${activeCourseType}`}
                            onClick={() => setOpenMenu(null)}
                            aria-label="View all courses"
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#ffb400] text-[#10272d] transition-all duration-300 hover:-translate-y-1 hover:bg-[#10272d] hover:text-white active:scale-95"
                          >
                            <FaArrowRight className="text-sm" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Normal Desktop Dropdown */}
                {!menu.isMegaMenu && (
                  <div
                    onMouseEnter={() => openDesktopMenu(menu.name)}
                    onMouseLeave={closeDesktopMenu}
                    className={`absolute left-0 top-full min-w-[230px] overflow-hidden rounded-b-lg border border-gray-100 bg-white py-2 shadow-2xl shadow-black/20 transition-all duration-300 ${
                      isOpen
                        ? "visible translate-y-0 opacity-100"
                        : "pointer-events-none invisible -translate-y-2 opacity-0"
                    }`}
                  >
                    {menu.dropdown.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        onClick={() => setOpenMenu(null)}
                        className="block border-b border-gray-100 px-5 py-3 text-sm font-medium text-[#0F252A] transition-all duration-300 last:border-b-0 hover:bg-yellow-400 hover:pl-8 hover:text-black"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        {/* Desktop Right Side */}
        <div className="hidden items-center gap-5 text-white lg:flex xl:gap-8">
          <Link
            to="/cart"
            aria-label="Shopping cart"
            className="relative transition-all duration-300 hover:-translate-y-1 hover:text-yellow-400"
          >
            <ShoppingBag size={27} />

            <span className="absolute -right-3 -top-3 flex h-6 min-w-6 items-center justify-center rounded-full bg-yellow-400 px-1.5 text-xs font-semibold text-black">
              0
            </span>
          </Link>

          <Link
            to="/login"
            className="text-base transition-colors duration-300 hover:text-yellow-400 xl:text-lg"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="border-l border-gray-400 pl-5 text-base transition-colors duration-300 hover:border-yellow-400 hover:text-yellow-400 xl:text-lg"
          >
            Register
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((previous) => !previous)}
          aria-label={
            mobileOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={mobileOpen}
          className="text-white transition-all duration-300 hover:scale-110 hover:text-yellow-400 lg:hidden"
        >
          {mobileOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-y-auto bg-[#0F252A] transition-all duration-500 lg:hidden ${
          mobileOpen
            ? "max-h-[calc(100vh-72px)] border-t border-white/10 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 pb-7 pt-3">
          {menus.map((menu) => {
            const isOpen = openMenu === menu.name;

            return (
              <div key={menu.name} className="border-b border-white/15 py-3">
                <button
                  type="button"
                  onClick={() => setOpenMenu(isOpen ? null : menu.name)}
                  className="flex w-full items-center justify-between py-1 text-lg font-medium text-white transition-colors duration-300 hover:text-yellow-400"
                >
                  {menu.name}

                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-yellow-400" : "rotate-0"
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? "mt-3 max-h-[650px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {menu.dropdown.map((sub) => (
                    <Link
                      key={sub.name}
                      to={sub.path}
                      onClick={closeMobileMenu}
                      className="block border-l-2 border-transparent py-2.5 pl-4 text-sm text-gray-300 transition-all duration-300 hover:border-yellow-400 hover:pl-6 hover:text-yellow-400"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}

          {/* Mobile Account Links */}
          <div className="mt-6 flex items-center gap-6">
            <Link
              to="/cart"
              onClick={closeMobileMenu}
              aria-label="Shopping cart"
              className="relative text-white transition-colors duration-300 hover:text-yellow-400"
            >
              <ShoppingBag size={26} />

              <span className="absolute -right-3 -top-3 flex h-5 min-w-5 items-center justify-center rounded-full bg-yellow-400 px-1 text-xs font-semibold text-black">
                0
              </span>
            </Link>

            <Link
              to="/login"
              onClick={closeMobileMenu}
              className="text-white transition-colors duration-300 hover:text-yellow-400"
            >
              Login
            </Link>

            <Link
              to="/register"
              onClick={closeMobileMenu}
              className="border-l border-gray-500 pl-5 text-white transition-colors duration-300 hover:text-yellow-400"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
