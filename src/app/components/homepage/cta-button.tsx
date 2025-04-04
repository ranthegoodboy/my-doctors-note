import Image from "next/image";
import React from "react";

const CtaButton = ({
  ctaText,
  descriptionTextColor = "text-white",
}: {
  ctaText: string;
  descriptionTextColor?: string;
}) => {
  return (
    <div className="flex flex-col items-center">
      <button className="bg-[#2323FE] hover:bg-[#3030FF] text-white px-[20px] py-[16px] rounded-md text-lg flex gap-3 w-[350px] justify-center font-semibold tracking-wide">
        {ctaText}
        <Image src="/images/arrow-right.svg" width={18} height={18} alt="" />
      </button>
      <div className="flex gap-4 items-center mt-3 text-white">
        <Image src="/images/guard.svg" width={32} height={33} alt="" />
        <span
          className={`tracking-wide text-[13px] md:text-[16px] ${descriptionTextColor}`}
        >
          100% Risk-Free Money Back Guarantee
        </span>
      </div>
    </div>
  );
};

export default CtaButton;
