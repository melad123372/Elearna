import { useState, useEffect } from "react";
import { ChevronDown, ShoppingBag, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menus = [
    {
      name: "Home",
      path: "/",
      dropdown: [
        { name: "Home One", path: "/home-one" },
        { name: "Home Two", path: "/home-two" },
        { name: "Home Three", path: "/home-three" },
      ],
    },
    {
      name: "Courses",
      path: "/courses",
      dropdown: [
        { name: "Course Grid", path: "/courses/grid" },
        { name: "Course Details", path: "/courses/details" },
      ],
    },
    {
      name: "Pages",
      path: "/pages",
      dropdown: [
        { name: "About one", path: "/about" },
        { name: "About two", path: "/about two" },
        { name: "Course One", path: "/Course One" },
        { name: "Course Two", path: "/Course Two" },
        { name: "Course Three", path: "/Course Three" },
        { name: "Pricing One", path: "/Pricing One" },
        { name: "Pricing Two", path: "/Pricing Two" },
        { name: "Pricing Three", path: "/Pricing Three" },
        { name: "Career", path: "/Career" },
        { name: "Events", path: "/Events" },
        { name: "Team", path: "/Team" },
        { name: "FAQ", path: "/faq" },
      ],
    },
    {
      name: "Blog",
      path: "/blog",
      dropdown: [
        { name: "Blog One", path: "/Blog One" },
        { name: "Blog two", path: "/Blog two" },
        { name: "Blog Three", path: "/Blog Three" },
      ],
    },
    {
      name: "Contact",
      path: "/contact",
      dropdown: [
        { name: "Contact One", path: "/Contact One" },
        { name: "Contact two", path: "/Contact two" },
        { name: "Contact Three", path: "/Contact Three" },
      ],
    },
  ];

  return (
    <nav
      className={`
      fixed 
      top-0 
      left-0 
      w-full 
      z-50
      transition-all
      duration-300
      ${scrolled ? "bg-[#0F252A]" : "bg-transparent"}
    `}
    >
      <div
        className="
        flex 
        items-center 
        justify-between 
        px-4 
        md:px-10 
        py-4
      "
      >
        <Link to="/">
          <img src={logo} alt="logo" className="w-32 md:w-30" />
        </Link>

        <ul className="hidden lg:flex gap-10">
          {menus.map((menu) => (
            <li
              key={menu.name}
              className="relative"
              onMouseEnter={() => setOpenMenu(menu.name)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <Link
                to={menu.path}
                className="
                  flex
                  items-center
                  gap-2
                  text-lg
                  text-white
                "
              >
                {menu.name}

                {menu.dropdown.length > 0 && <ChevronDown size={18} />}
              </Link>

              {openMenu === menu.name && menu.dropdown.length > 0 && (
                <div
                  className="
                  absolute
                  top-8
                  left-0
                  w-52
                  bg-white
                  rounded-lg
                  shadow-xl
                  py-2
                "
                >
                  {menu.dropdown.map((sub) => (
                    <Link
                      key={sub.name}
                      to={sub.path}
                      className="
                          block
                          px-5
                          py-2
                          text-black
                          hover:bg-yellow-400
                        "
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        <div
          className="
          hidden
          lg:flex
          items-center
          gap-8
          text-white
        "
        >
          <Link to="/cart" className="relative">
            <ShoppingBag size={28} />

            <span
              className="
              absolute
              -top-3
              -right-3
              bg-yellow-400
              text-black
              rounded-full
              px-2
              text-sm
            "
            >
              0
            </span>
          </Link>

          <Link to="/login" className="text-lg">
            Login
          </Link>

          <Link
            to="/register"
            className="
              border-l
              border-gray-400
              pl-5
              text-lg
            "
          >
            Register
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white"
        >
          {mobileOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {mobileOpen && (
        <div
          className="
          lg:hidden
          bg-[#0F252A]
          px-5
          pb-5
        "
        >
          {menus.map((menu) => (
            <div
              key={menu.name}
              className="
              border-b
              border-gray-600
              py-3
            "
            >
              <button
                onClick={() =>
                  setOpenMenu(openMenu === menu.name ? null : menu.name)
                }
                className="
                flex
                justify-between
                w-full
                text-lg
                text-white
              "
              >
                {menu.name}

                {menu.dropdown.length > 0 && <ChevronDown size={18} />}
              </button>

              {openMenu === menu.name && menu.dropdown.length > 0 && (
                <div className="pl-5 mt-3">
                  {menu.dropdown.map((sub) => (
                    <Link
                      key={sub.name}
                      to={sub.path}
                      className="
                      block
                      py-2
                      text-white
                      hover:text-yellow-400
                    "
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="flex gap-5 mt-5 text-white">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
