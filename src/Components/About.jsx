import React from "react";
import { MoveDown } from "lucide-react";
import AnimatatedArrow from "./AnimatedArrow";
import Button from "./Button";
import Img from "../assets/AnniekBril.webp";

const AboutSection = () => {
  return (
    <section className="bg-brand-bg text-[#161616] px-6 md:px-12 lg:px-16 pt-16 md:pt-24 pb-20 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Headline */}
        <div className="grid grid-cols-1 md:grid-cols-12 mb-12 md:mb-20">
          <div className="md:col-span-10 lg:col-span-8 mx-auto">
            <h1
              className="text-[32px] sm:text-[40px] md:text-[52px] lg:text-[59px] text-center md:text-left"
              style={{
                fontFamily: "'Inter', sans-serif",
                lineHeight: "1",
                fontWeight: "600",
                color: "rgb(22, 22, 22)",
                letterSpacing: "-0.02em",
              }}
            >
              Wij maken content die opvalt. Die blijft hangen. Die jouw
              doelgroep raakt en jouw merk in beweging brengt. Snel, krachtig en
              energiek.
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 items-center md:items-end gap-8 md:gap-12">
          {/* Image  */}
          <div className="md:col-span-4 lg:col-span-3 flex justify-center md:justify-start">
            <div className="w-55 h-75 sm:w-65 sm:h-85 md:w-full md:h-95 lg:h-100 overflow-hidden rounded-[30px] md:rounded-[40px] shadow-sm md:-translate-y-6">
              <img
                src={Img}
                alt="portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text + Button */}
          <div className="md:col-span-8 md:col-start-5 lg:col-span-6 flex flex-col gap-6 md:gap-8">
            <p
              className="text-[18px] md:text-[22px] lg:text-[24px] max-w-xl"
              style={{
                fontFamily: "'Inter', sans-serif",
                lineHeight: "31px",
                fontWeight: "600",
                color: "rgb(22, 22, 22)",
              }}
            >
              We stoppen niet bij mooie plaatjes en vette beelden. We maken het
              meetbaar. Zo weet je precies wat werkt en wat niet. Nooit meer
              content zonder strategie. Nooit meer content zonder resultaat.
            </p>

            <Button text={"Bekijk al ons werk"} />
          </div>

          <div className="hidden lg:block">
            <AnimatatedArrow />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
