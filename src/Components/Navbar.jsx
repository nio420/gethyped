import React, { useState, useEffect } from "react";
import { HiOutlineBars3BottomRight, HiXMark } from "react-icons/hi2";
import { underConstruction } from "../Utiles/toast";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu toggle
  const [isVisible, setIsVisible] = useState(true); // Navbar visibility on scroll
  const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false); // Hide on scroll down
        } else {
          setIsVisible(true); // Show on scroll up
        }
        setLastScrollY(window.scrollY);
      }
    };
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  const navItems = ["Expertises", "Work", "About", "Contact"];

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`flex items-center justify-between px-8 py-6 lg:px-16 w-full fixed top-0 left-0 z-100 transition-transform duration-500 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Logo */}
        <a
          href="/"
          className="inline-block origin-left text-2xl md:text-3xl lg:text-3xl font-black text-transparent relative z-110"
          style={{
            WebkitTextStroke: "2px black",
            transform: "perspective(500px) rotateY(-18deg)",
            transformOrigin: "left center",
          }}
        >
          GET
          <span className="text-black" style={{ WebkitTextStroke: "0px" }}>
            HYPED
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center bg-white rounded-xl px-2 py-1 shadow-[inset_0px_1px_4px_rgba(0,0,0,0.05)] border border-gray-200/80">
          {navItems.map((item, index) => (
            <a
              onClick={underConstruction}
              key={index}
              href={`#${item.toLowerCase()}`}
              className="group relative px-5 py-2 overflow-hidden rounded-xl transition-all duration-200 ease-in-out"
            >
              <span
                className="absolute inset-x-0 bottom-0 w-full h-0 transition-all duration-300 ease-in z-0 group-hover:h-full"
                style={{
                  background:
                    "linear-gradient(to top, #000000 0%, #000000 80%, #f97316 80%, #f97316 100%)",
                }}
              >
                <span className="absolute inset-0 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></span>
              </span>

              {/* Text animation */}
              <div className="relative z-10 flex flex-col overflow-hidden h-5">
                <span className="text-[13px] font-bold text-black transition-all duration-200 ease-out group-hover:-translate-y-full">
                  {item}
                </span>
                <span className="text-[13px] font-bold text-white transition-all duration-200 ease-out group-hover:-translate-y-full">
                  {item}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <button className="group hidden md:flex items-center gap-2 bg-[#e48dec]/50 text-gray-900 px-3 py-1.5 rounded-lg font-bold text-[15px] transition-all duration-300 active:scale-95 shadow-sm hover:-rotate-6 ease-in-out cursor-pointer">
            <span className="transition-transform duration-300 group-hover:skew-x-6 group-hover:scale-105">
              Get Results
            </span>
            <span className="text-orange-500 bg-white px-2 py-1 rounded-lg transition-transform duration-300 group-hover:skew-x-6">
              🔥
            </span>
          </button>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden flex items-center justify-center w-12 h-12 rounded-full relative z-110 border transition-all duration-500 ease-in-out ${
              isOpen
                ? "bg-white border-gray-200 rotate-180"
                : "bg-[#FAD9F0] border-pink-200 rotate-0"
            }`}
          >
            <div className="relative w-6 h-6 flex items-center justify-center cursor-pointer">
              <HiXMark
                className={`absolute transition-all duration-500 ease-in-out ${
                  isOpen
                    ? "opacity-100 scale-100 rotate-0"
                    : "opacity-0 scale-50 -rotate-90"
                }`}
                size={24}
              />
              <HiOutlineBars3BottomRight
                className={`absolute transition-all duration-500 ease-in-out ${
                  isOpen
                    ? "opacity-0 scale-50 rotate-90"
                    : "opacity-100 scale-100 rotate-0"
                }`}
                size={28}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Overlay Menu */}
      <div
        className={`fixed inset-0 bg-[#FAD9F0] z-90 md:hidden flex flex-col items-center justify-center transition-all ${
          isOpen
            ? "translate-y-0 opacity-100 duration-700"
            : "-translate-y-full opacity-0 duration-300"
        }`}
        style={{
          transitionTimingFunction: isOpen
            ? "cubic-bezier(0.175, 0.885, 0.32, 1.275)"
            : "cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div className="flex flex-col items-center gap-5">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="bg-white px-10 py-3 rounded-2xl text-lg font-bold text-black shadow-lg shadow-black/5 active:scale-90 transition-transform"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="absolute bottom-12">
          <button className="flex items-center gap-3 bg-black text-white px-8 py-4 rounded-2xl font-black text-lg shadow-2xl active:scale-95 transition-transform">
            Get Results
            <span className="bg-white px-2 py-1 rounded-lg text-sm">🔥</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;