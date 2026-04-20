import React from "react";
import { FiMail } from "react-icons/fi";
import {
  FaFire,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import { navItems, contactInfo, footerBottom } from "../Utiles/Footer";

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#F9F6F0] pt-12 md:pt-20 overflow-hidden">
      {/* TOP HEADER */}
      <div className="relative z-10 text-center px-6">
        <h2 className="text-5xl md:text-8xl lg:text-[120px] font-black text-black tracking-tighter mb-8 leading-tight">
          Let's Get Hyped!
        </h2>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="w-full sm:w-auto flex items-center justify-center gap-3 border-2 border-black px-3 py-2 rounded-xl font-bold hover:bg-black hover:text-white transition-all">
            Mail ons direct
            <div className="bg-black text-white p-1 rounded-md">
              <FiMail size={18} />
            </div>
          </button>

          <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#FF4500] text-white px-3 py-2 rounded-xl hover:rotate-3 font-bold hover:scale-105 transition-all">
            Get Results
            <div className="bg-white text-[#FF4500] p-1 rounded-md">
              <FaFire size={18} />
            </div> 
          </button>
        </div>
      </div>

      {/* SLANTED SECTION */}
      <div className="relative mt-10 md:-mt-12">
        <div
          className="absolute inset-0 bg-[#EBE7DE] overflow-hidden"
          style={{ clipPath: "polygon(0% 100%, 0% 85%, 100% 0%, 100% 100%)" }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 md:pt-60 pb-10">
          
          {/* LOGO */}
          <div className="flex justify-center md:block md:absolute md:bottom-20 md:-left-2 md:-rotate-12 sm:rotate-0 lg:rotate-0 mb-12 md:mb-0">
            <h1
              className="text-6xl md:text-5xl lg:text-7xl font-black text-transparent -rotate-3 md:-rotate-20"
              style={{ WebkitTextStroke: "1.5px black" }}
            >
              GET<span className="text-black">HYPED</span>
            </h1>
          </div>

          {/* MAIN GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div className="hidden lg:block relative h-1"></div>

            <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 text-center md:text-left w-full">
              {/* Nav & Socials */}
              <div className="space-y-8 w-full md:w-auto">
                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                  {navItems.map((item, index) => (
                    <a
                      key={index}
                      href={`#${item.toLowerCase()}`}
                      className="group relative px-5 py-2.5 overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-200 ease-in-out"
                    >
                      <span
                        className="absolute inset-x-0 bottom-0 w-full h-0 transition-all duration-300 ease-in z-0 group-hover:h-full"
                        style={{
                          background: "linear-gradient(to top, #000000 0%, #000000 80%, #f97316 80%, #f97316 100%)",
                        }}
                      >
                        <span className="absolute inset-0 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></span>
                      </span>

                      {/* Text Flip Container */}
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

                {/* Follow us & Icons */}
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <span className="opacity-60 font-bold text-sm whitespace-nowrap">Follow us</span>
                  <div className="flex gap-3">
                    {[FaLinkedinIn, FaTwitter, FaInstagram, FaYoutube].map((Icon, i) => (
                      <div key={i} className="bg-white p-3 rounded-full cursor-pointer hover:bg-black hover:text-white shadow-sm transition-colors text-black">
                        <Icon size={18} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact & Adress */}
              <div className="flex flex-col gap-8 sm:flex-row sm:justify-center md:flex-col md:justify-start w-full md:w-auto">
                {contactInfo.map((section, i) => (
                  <div key={i} className="min-w-fit">
                    <h4 className="uppercase tracking-widest text-[10px] mb-3 opacity-40 font-bold">
                      {section.title}
                    </h4>
                    {section.lines.map((line, idx) => (
                      <p key={idx} className="font-bold text-sm leading-relaxed text-black">
                        {line}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* FOOTER */}
          <div className="mt-16 md:mt-20 pt-8 border-t border-black/5">
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-end gap-4 md:gap-12 text-[10px] font-bold opacity-40 uppercase tracking-widest text-center">
              {footerBottom.map((item, i) => (
                <p key={i}>{item}</p>
              ))}
            </div>
          </div>
        </div>

        {/* SPIN BADGE */}
        <div className="absolute top-0 right-10 md:right-20 -translate-y-1/2 hidden lg:block">
          <div className="relative w-32 h-32 flex items-center justify-center animate-spin-slow text-black">
            <svg className="absolute w-full h-full" viewBox="0 0 100 100">
              <path
                id="circlePath"
                d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                fill="transparent"
              />
              <text className="text-[10px] font-bold uppercase fill-current">
                <textPath xlinkHref="#circlePath">
                  • GET HYPED • GET RESULTS • GET NOTICED
                </textPath>
              </text>
            </svg>
            <div className="bg-black text-white w-14 h-14 rounded-full flex items-center justify-center font-black text-xl">
              GH
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;