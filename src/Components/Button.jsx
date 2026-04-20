import React from "react";
import { ArrowRight} from "lucide-react";

const Button = ({text}) => {
  return (
    <button className="flex items-center gap-2 w-fit bg-white border border-gray-700 px-4 py-2 rounded-lg group transition-all hover:shadow-inner hover:-rotate-6 duration-300 ease-in-out cursor-pointer">
      <span className="text-sm md:text-base font-bold tracking-tight">
        {text}
      </span>

      <div className="flex items-center justify-center bg-black rounded-lg w-7 h-7 transition-transform duration-300 ">
        <ArrowRight className="text-white w-4 h-4 stroke-[2.5]" />
      </div>
    </button>
  );
};

export default Button;
