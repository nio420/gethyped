import React from "react";
import { images } from "../Utiles/MarqueeSection";

const MarqueeSection = () => {
  return (
    <section className="py-20 md:py-30 bg-white overflow-hidden">
      {/* Header */}
      <div className="text-start px-6 md:ml-12 mb-10 md:mb-20">
        <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-gray-900">
          These brands <br /> got hyped.
        </h2>
      </div>

      <div className="relative w-full overflow-hidden ">
        {/* Track */}
        <div className="flex w-max animate-marquee gap-3 md:gap-4">
          {[...images, ...images, ...images].map((img, i) => (
            <div
              key={i}
              className="flex items-center justify-center w-28 md:w-auto border border-gray-400 rounded-xl p-3 md:p-4 bg-white shrink-0"
            >
              <img
                src={img}
                className="w-full h-auto object-cover"
                alt="brand"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 max-w-7xl mx-auto border-b border-gray-400 pb-1"/>
    </section>
  );
};

export default MarqueeSection;