/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ExpertiseData } from "../Utiles/ExpertiseData.js";

const ExpertiseCards = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001
  });

  return (
    <div ref={containerRef} className="relative bg-[#F9F6F0] mt-0 pb-20 md:pb-40">
      <div className="h-[400vh]">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          <div className="relative w-full max-w-7xl h-[85vh] md:h-125 lg:h-150 px-4 md:px-6">
            {ExpertiseData.map((card, index) => {
              const start = index * 0.25;
              const y = useTransform(smoothProgress, [start, start + 0.12], [index === 0 ? 0 : 1000, 0]);
              const scale = useTransform(smoothProgress, [start + 0.12, start + 0.25], [1, 0.96]);

              return (
                <motion.div
                  key={card.id}
                  style={{
                    y,
                    scale,
                    zIndex: index + 1,
                    top: index * 10,
                    backgroundColor: card.bgColor
                  }}
                  className="absolute inset-0 rounded-[30px] md:rounded-[40px] shadow-[0_-10px_60px_rgba(0,0,0,0.05)] p-6 md:p-10 lg:p-12 border border-black/5 flex flex-col justify-between"
                >
                  {/* HEADER */}
                  <div className="shrink-0 flex justify-between items-start">
                    <div className="space-y-1 md:space-y-2 lg:space-y-4">
                      <span className="inline-block text-[10px] md:text-xs font-bold bg-black/5 text-gray-700 px-2 py-1 rounded-md uppercase tracking-wider">
                        Expertise
                      </span>
                      <h2 className="text-3xl md:text-5xl lg:text-[75px] font-black text-black tracking-tighter leading-[0.9]">
                        {card.title}
                      </h2>
                    </div>
                    <span className="text-4xl md:text-[60px] lg:text-[100px] font-black text-black/5 leading-none select-none">
                      {card.id}
                    </span>
                  </div>

                  {/* CONTENT */}
                  <div className="flex-1 flex flex-col md:flex-row items-center md:items-end justify-center md:justify-between gap-4 md:gap-8 overflow-hidden">
                    {/* VIDEO */}
                    <div className="w-44 h-60 sm:w-52 sm:h-72 md:w-56 md:h-72 lg:w-60 lg:h-85 bg-white rounded-lg overflow-hidden border-2 border-gray-200 shadow-xl rotate-0 md:rotate-2 shrink-0 md:order-last mb-10 sm:mb-30"> 
                      <video 
                        src={card.video} 
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* TEXT */}
                    <div className="w-full md:flex-1 space-y-4 lg:space-y-4 flex flex-col justify-end">
                      <div className="space-y-2 text-left">
                        <h3 className="text-lg md:text-xl lg:text-2xl font-extrabold tracking-tight text-black">
                          {card.tagline}
                        </h3>
                        <p className="text-[13px] md:text-sm lg:text-[17px] font-semibold text-gray-800 leading-snug max-w-xl">
                          {card.desc}
                        </p>
                      </div>
                      <div className="flex justify-start">
                        <button 
                          style={{ backgroundColor: card.btnColor }}
                          className="flex items-center gap-2 text-white pl-4 pr-1 py-1 lg:pl-5 lg:pr-1.5 lg:py-1.5 rounded-full group transition-transform hover:-rotate-3 duration-300 ease-in-out active:scale-95"
                        >
                          <span className="text-[11px] md:text-sm lg:text-base font-bold tracking-tight">
                            Meer over {card.title.toLowerCase()}
                          </span>
                          <div className="bg-white rounded-full p-1 shadow-sm">
                            <ArrowRight 
                              style={{ color: card.btnColor }} 
                              className="w-3.5 h-3.5 md:w-4 md:h-4 stroke-3" 
                            />
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseCards;