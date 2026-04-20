import React from 'react'

const Hero = () => {
  return (
    <section className="px-6 md:px-8 lg:px-16 pt-28 md:pt-32 pb-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Headline */}
        <h1 
          className="text-[11vw] sm:text-[10vw] md:text-[80px] lg:text-[95px] font-semibold text-[#161616] tracking-tighter"
          style={{ 
            fontFamily: "'Inter', sans-serif",
            lineHeight: "1.05",
            fontWeight: "600"
          }}
        >
          Get Hyped. Get <br className="hidden md:block" />
          Noticed. Get Results.
        </h1>

        {/* Subtext */}
        <p 
          className="mt-6 md:mt-9 lg:mt-5 text-[16px] sm:text-[18px] md:text-[22px] lg:text-[24px] text-[#161616] max-w-xl md:max-w-2xl"
          style={{ 
            fontFamily: "'Inter', sans-serif",
            lineHeight: "1.4",
            fontWeight: "600"
          }}
        >
          Klaar met gokken op content <br className="hidden md:block" />
          die niets oplevert?
        </p>
      </div>
    </section>
  );
};

export default Hero;