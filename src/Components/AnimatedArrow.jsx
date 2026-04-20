import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { MoveDown } from "lucide-react";

const AnimatedArrow = () => {
  return (
    <div className=" md:col-span-1 md:col-start-12 flex justify-center md:justify-end mt-6 md:mt-0">
      <motion.div
        className=" hidden md:block group relative p-3 md:p-2 bg-white border border-gray-900 rounded-lg shadow-sm cursor-pointer overflow-hidden"
        whileHover="hovered"
        initial="initial"
      >
        <div className="relative w-4 h-4 md:w-5 md:h-5">
          <motion.div
            variants={{
              initial: { y: 0, opacity: 1 },
              hovered: { y: 40, opacity: 0 },
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <MoveDown className="w-full h-full text-orange-400 stroke-[2.5]" />
          </motion.div>

          <motion.div
            variants={{
              initial: { y: -40, opacity: 0 },
              hovered: { y: 0, opacity: 1 },
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <MoveDown className="w-full h-full text-orange-400 stroke-[2.5]" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AnimatedArrow;
