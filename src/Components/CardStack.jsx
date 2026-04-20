import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const CardStack = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const springTransition = { type: "spring", stiffness: 300, damping: 25 };

  const getXOffset = (index) => {
    if (hoveredIndex === null) return 0;
    if (index === hoveredIndex) return 0;
    return index < hoveredIndex ? -100 : 100;
  };

  const cardSize = "w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px]";

  return (
    <section className="relative mt-20 pb-40 overflow-visible">
      <div className="flex justify-center items-center -space-x-24 md:-space-x-20 lg:-space-x-28 px-5 md:px-10">
        {/* CARD 1 */}
        <motion.div
          onMouseEnter={() => setHoveredIndex(0)}
          onMouseLeave={() => setHoveredIndex(null)}
          animate={{
            y: hoveredIndex === 0 ? -15 : 0,
            rotate: hoveredIndex === 0 ? 0 : -8,
            x: getXOffset(0),
            zIndex: hoveredIndex === 0 ? 50 : 10,
            scale: hoveredIndex === 0 ? 1.05 : 1,
          }}
          transition={springTransition}
          className={`${cardSize} bg-[#0D67FF] rounded-[40px] md:rounded-[55px] p-8 md:p-10 lg:p-12 flex flex-col justify-between shadow-xl cursor-pointer relative`}
        >
          {/* Top Content */}
          <span className="text-gray-900 text-5xl md:text-6xl lg:text-[90px] font-black tracking-tighter leading-none">
            10M+
          </span>
          {/* Bottom Content */}
          <div className="text-gray-900 font-bold">
            <p className="text-lg md:text-xl lg:text-3xl border-b-2 border-black inline-block pb-1">
              Organische views
            </p>
            <p className="text-[10px] md:text-sm lg:text-lg mt-1 lg:mt-2 opacity-90">
              Groei door slimme content
            </p>
          </div>
        </motion.div>

        {/* CARD 2 */}
        <motion.div
          onMouseEnter={() => setHoveredIndex(1)}
          onMouseLeave={() => setHoveredIndex(null)}
          animate={{
            y: hoveredIndex === 1 ? -15 : 0,
            rotate: hoveredIndex === 1 ? 0 : 2,
            x: getXOffset(1),
            zIndex: hoveredIndex === 1 ? 50 : 20,
            scale: hoveredIndex === 1 ? 1.05 : 1,
          }}
          transition={springTransition}
          className={`${cardSize} bg-white rounded-[40px] md:rounded-[55px] overflow-hidden shadow-2xl cursor-pointer border border-white`}
        >
          <video
            src="/LoopSalontopper.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-[30px] md:rounded-[35px]"
            alt="Team work"
          />
        </motion.div>

        {/* CARD 3 */}
        <motion.div
          onMouseEnter={() => setHoveredIndex(2)}
          onMouseLeave={() => setHoveredIndex(null)}
          animate={{
            y: hoveredIndex === 2 ? -15 : 0,
            rotate: hoveredIndex === 2 ? 0 : -4,
            x: getXOffset(2),
            zIndex: hoveredIndex === 2 ? 50 : 15,
            scale: hoveredIndex === 2 ? 1.05 : 1,
          }}
          transition={springTransition}
          className={`hidden md:flex ${cardSize} bg-[#00E89B] rounded-[55px] p-10 flex-col justify-between shadow-xl cursor-pointer`}
        >
          {/* Top Content */}
          <span className="text-gray-900 text-6xl lg:text-[90px] font-black tracking-tighter leading-none">
            30+
          </span>
          {/* Bottom Content */}
          <div className="text-gray-900 font-bold">
            <p className="text-xl lg:text-3xl border-b-2 border-black inline-block pb-1">
              Merken geholpen
            </p>
            <p className="text-sm lg:text-lg mt-2 opacity-90">
              Van start-up tot multinational
            </p>
          </div>
        </motion.div>

        {/* CARD 4 */}
        <motion.div
          onMouseEnter={() => setHoveredIndex(3)}
          onMouseLeave={() => setHoveredIndex(null)}
          animate={{
            y: hoveredIndex === 3 ? -15 : 0,
            rotate: hoveredIndex === 3 ? 0 : 6,
            x: getXOffset(3),
            zIndex: hoveredIndex === 3 ? 50 : 5,
            scale: hoveredIndex === 3 ? 1.05 : 1,
          }}
          transition={springTransition}
          className={`hidden md:block ${cardSize} bg-blue-100 rounded-[55px] overflow-hidden shadow-lg opacity-90 cursor-pointer`}
        >
          <video
            src="/petrolhead-loop.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            alt="Abstract"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CardStack;
