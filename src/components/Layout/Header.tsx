import React, { useState, useEffect } from "react";
import Headroom from "react-headroom";
import { Link as ScrollLink } from "react-scroll";
import { IoLogoSoundcloud } from "react-icons/io5";
import cn from "classnames";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

interface Link {
  name: string;
  link: string;
}

const Header: React.FC = () => {
  const links: Link[] = [
    { name: "Home", link: "/home" },
    { name: "Service", link: "/service" },
    { name: "Portofolio", link: "/portofolio" },
    { name: "Testimonials", link: "/testimonials" },
    { name: "Contact us", link: "/contact" },
  ];

  const [isHidden, setIsHidden] = useState(false);
  const [open, setOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  };

  const handleToggleMobileMenu = () => {
    setOpen(!open);
  };

  const handleLinkClick = () => {
    setOpen(false); // Menutup menu navigasi saat salah satu link diklik
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Headroom className="w-full z-50">
      <nav
        className={cn(
          "flex justify-between px-4 lg:px-10 py-4 items-center",
          isHidden
            ? "bg-slate-100/100 shadow-md transition-all duration-300 ease-in-out"
            : "bg-transparent"
        )}
      >
        <div className="logo">
          <a href="/" className="text-sky-500 font-semibold">
            <span className="flex justify-center items-center gap-1">
              <IoLogoSoundcloud size={30} />
              <h1 className="text-xl font-bold">BlueBash</h1>
            </span>
          </a>
        </div>
        <button
          type="button"
          className="lg:hidden text-sky-400"
          onClick={handleToggleMobileMenu}
        >
          {open ? <AiOutlineClose size={20} /> : <FaBars size={20} />}
        </button>
        <ul
          className={cn(
            "md:flex flex-col lg:flex-row items-center gap-2 lg:gap-8 py-1 lg:py-0 md:pt-2 rounded-b-md absolute lg:static bg-slate-50 opacity-95 md:bg-slate-50 lg:bg-transparent lg:w-auto lg:z-[auto] z-[-6] md:right-10 right-0 w-full md:w-60 md:pl-0 pl-9 transition-all duration-500 ease-in",
            open ? "top-14" : "top-[-420px]"
          )}
        >
          {links.map((link) => (
            <li
              key={link.name}
              className="mx-auto pb-1 cursor-pointer text-xl md:my-4 lg:my-auto my-5"
            >
              {link.link ? (
                <ScrollLink
                  to={link.link.substring(1)}
                  smooth={true}
                  duration={500}
                  offset={0}
                  className="font-bold text-sky-400"
                  onClick={handleLinkClick}
                >
                  {link.name}
                </ScrollLink>
              ) : (
                <a
                  href={link.link}
                  className="text-white hover:text-indigo-200 hover:border-b-4 border-white rounded p-2 duration-200"
                  onClick={handleLinkClick}
                >
                  {link.name}
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </Headroom>
  );
};

export default Header;
