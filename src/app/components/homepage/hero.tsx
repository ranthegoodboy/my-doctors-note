import Image from "next/image";
import React from "react";
import CtaButton from "./cta-button";

const Hero = () => {
  return (
    <section
      className="w-full bg-cover bg-center min-h-[326px] md:min-h-[503px] flex items-center justify-center relative mt-[59px] md:mt-[86px]"
      style={{
        backgroundImage: "url('/images/hero.webp')",
        objectFit: "cover",
      }}
    >
      <div className="absolute inset-0 bg-black/50 z-[1]"></div>
      <div className="container px-4 z-[2] text-center">
        <h1 className="text-[28px] md:text-[50px] tracking-wide font-semibold text-white leading-tight mb-2">
          {`Your Doctor's Note`}
          <br />
          In 1 Minute, for $29.99!
        </h1>
        <div className="flex justify-center mb-6">
          <Image src="/images/line.svg" width={434} height={10} alt="" />
        </div>
        <CtaButton ctaText=" Get your Note Now" />
      </div>
    </section>
  );
};

export default Hero;
