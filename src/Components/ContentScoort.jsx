import React from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import Button from "./Button";
import { contentData } from "../Utiles/ContentData";

const ContentScoort = () => {
  return (
    <section className="bg-[#F9F6F0] py-12 md:py-20 px-6 md:px-12 lg:px-24 min-h-screen flex flex-col justify-center overflow-hidden lg:mb-20">
      <div className="max-w-7xl mx-auto w-full">
        {/*  Header  */}
        <div className="mb-12 md:mb-10">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-7xl font-bold text-gray-950 tracking-tighter leading-[0.9] max-w-sm">
              Content <br /> dat scoort.
            </h2>
            <p className="text-lg md:text-xl font-medium text-black max-w-md leading-snug">
              Wij vertellen jouw verhaal. Op een manier die écht past bij jouw
              doelgroep. Met creatieve content die werkt en het verschil maakt.
            </p>
            <Button text={"Bekijk al ons werk"} />
          </div>
        </div>

        {/* Cards Grid  */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6 lg:gap-12 pt-8 md:pt-2">
          {contentData.map((card) => (
            <div
              key={card.id}
              className={`relative group w-full aspect-4/5 rounded-[30px] border-10 shadow-[0_15px_60px_-15px_rgba(0,0,0,0.1)] transition-transform hover:-rotate-3 duration-500 ease-in-out cursor-pointer 
                ${card.alignment} flex flex-col justify-end overflow-hidden`}
              style={{ borderColor: card.bgColor }}
            >
              {/* Video */}
              <video
                autoPlay
                src={card.video}
                loop
                muted
                playsInline
                alt="Abstract"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
              />

              <div className="relative z-10 p-2 lg:p-4 w-full h-full flex flex-col justify-end">
                <div
                  className="relative p-4 md:p-5 lg:p-8 pt-10 md:pt-10 lg:pt-14 flex flex-col gap-3 lg:gap-5 rounded-[20px]"
                  style={{
                    backgroundColor: card.color,
                    borderColor: card.bgColor,
                    clipPath: "polygon(0 18%, 100% 0, 100% 100%, 0% 100%)",
                  }}
                >
                  {/* Floating Icon*/}
                  <div className="absolute top-2 lg:top-3 right-4 lg:right-6 w-7 h-7 lg:w-9 lg:h-9 bg-white rounded-full flex items-center justify-center shadow-lg z-20">
                    <ArrowUpRight className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-gray-800 stroke-[2.5]" />
                  </div>

                  {/* Text and Tag */}
                  <div className="space-y-2 lg:space-y-3 pr-2 lg:pr-6">
                    <h4 className="text-white text-lg md:text-lg lg:text-2xl font-black leading-tight tracking-tighter">
                      {card.title}
                    </h4>
                    <span className="inline-block bg-white/20 text-white text-[9px] lg:text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-lg">
                      {card.tag}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentScoort;
