import Image from "next/image";
import React from "react";
import CtaButton from "./homepage/cta-button";

const PeaceOfMind = () => {
  return (
    <section className="pb-4 mt-1 w-full bg-white">
      <div className="px-4 pb-4 mx-auto text-center">
        <h2 className="text-[32px] md:text-5xl font-semibold tracking-wide md:mb-2">
          Get Peace of Mind
        </h2>
        <h2 className="text-[32px] md:text-5xl font-semibold tracking-wide mb-1">
          With <span className="text-[#2323FD]">My Doctors Note</span>
        </h2>
        <div className="flex justify-center mb-4">
          <Image src="/images/line-dark.svg" width={263} height={8} alt="" />
        </div>
        <div className="flex justify-center mb-5 text-lg text-left text-gray-600">
          <div className="flex flex-col leading-tight">
            <div>{`My Doctor’s Note provides a fast, hassle-free solution for`}</div>
            <div>{`obtaining excuse notes. Focus on your recovery while we`}</div>
            <div>{`take care of the paperwork, delivering your note in minutes.`}</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-[18px] mb-12">
          <div className="grid gap-[18px]">
            <div className="px-4 py-5 bg-[#d8e8fd] rounded-md">
              <h3 className="text-2xl font-semibold tracking-wide text-left">
                Trusted by Thousands Across the USA
              </h3>
              <div className="mt-5 space-y-5">
                <div className="flex gap-2 text-[#585858] tracking-wide">
                  <Image src="/images/dot.svg" width={3} height={3} alt="" />
                  <div className="text-left">
                    <span className="font-bold">
                      Professional & Reliable –{" "}
                    </span>
                    <span>
                      Includes key medical absence details in a format widely
                      recognized by workplaces..
                    </span>
                  </div>
                </div>
                <div className="flex gap-2 text-[#585858] tracking-wide">
                  <Image src="/images/dot.svg" width={4} height={4} alt="" />
                  <div className="text-left">
                    <span className="font-bold">
                      Essential Information Included -{" "}
                    </span>
                    <span>
                      Clearly structured while protecting your privacy.
                    </span>
                  </div>
                </div>
                <div className="flex gap-2 text-[#585858] tracking-wide">
                  <Image src="/images/dot.svg" width={3} height={3} alt="" />
                  <div className="text-left">
                    <span className="font-bold">Instant & Hassle-Free – </span>
                    <span>
                      No appointments, no waiting. Receive your document within
                      seconds via email.
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex gap-8 px-4 mt-5 md:gap-14">
                <Image
                  src="/images/walmart.svg"
                  alt=""
                  width={138}
                  height={35}
                />
                <Image src="/images/fedex.svg" alt="" width={112} height={31} />
                <Image
                  src="/images/starbucks.webp"
                  alt=""
                  width={138}
                  height={38}
                />
              </div>
            </div>
            <div className="px-4 py-5 bg-[#d8e8fd] rounded-md">
              <h3 className="text-2xl font-semibold tracking-wide text-left">
                Customer Support That Puts You First
              </h3>
              <div className="mt-5 space-y-5">
                <div className="flex gap-2 text-[#585858] tracking-wide">
                  <Image src="/images/dot.svg" width={3} height={3} alt="" />
                  <div className="text-left">
                    <span className="font-bold">
                      Adjustable to Your Needs –{" "}
                    </span>
                    <span>Easily modify details to match your situation.</span>
                  </div>
                </div>
                <div className="flex gap-2 text-[#585858] tracking-wide">
                  <Image src="/images/dot.svg" width={4} height={4} alt="" />
                  <div className="text-left">
                    <span className="font-bold">Always Here for You - </span>
                    <span>
                      Get assistance whenever you need it, day or night.
                    </span>
                  </div>
                </div>
                <div className="flex gap-2 text-[#585858] tracking-wide">
                  <Image src="/images/dot.svg" width={3} height={3} alt="" />
                  <div className="text-left">
                    <span className="font-bold">
                      Real People, Real Support –{" "}
                    </span>
                    <span>
                      Our team is here to help, every step of the way.
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex gap-9 items-center pb-3 mt-8">
                <Image src="/images/help.png" alt="" width={234} height={50} />
                <div className="text-[#00C48C] font-bold text-[14px] md:text-[22px]">{`We're ready to help!`}</div>
              </div>
            </div>
          </div>

          <div className="grid gap-[18px]">
            <div className="px-4 pt-5 pb-7 bg-[#d8e8fd] rounded-md max-h-content">
              <h3 className="text-2xl font-semibold tracking-wide text-left">
                Get Your Note In Under 1 Minute
              </h3>
              <div className="mt-5 space-y-5">
                <div className="flex gap-2 text-[#585858] tracking-wide">
                  <Image src="/images/dot.svg" width={4} height={4} alt="" />
                  <div className="text-left">
                    <span className="font-bold">Skip the Wait – </span>
                    <span>
                      No appointments, no delays. Get what you need instantly,
                      anytime.
                    </span>
                  </div>
                </div>
                <div className="flex gap-2 text-[#585858] tracking-wide">
                  <Image src="/images/dot.svg" width={3} height={3} alt="" />
                  <div className="text-left">
                    <span className="font-bold">Available 24/7 - </span>
                    <span>
                      No need to schedule weeks in advance. Access your document
                      on demand, day or night.
                    </span>
                  </div>
                </div>
                <div className="flex gap-2 text-[#585858] tracking-wide">
                  <Image src="/images/dot.svg" width={4} height={4} alt="" />
                  <div className="text-left">
                    <span className="font-bold">Instant Email Delivery – </span>
                    <span>
                      Receive your note directly in your inbox, ready to use.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 py-5 bg-[#d8e8fd] rounded-md max-h-max">
              <h3 className="text-2xl font-semibold tracking-wide text-center">
                The Best Price In The Market
              </h3>
              <div className="text-[#585858] text-3xl mt-10 mb-8 font-semibold line-through">
                $42.99
              </div>
              <div className="text-[70px] mb-6 font-semibold">$29.99</div>

              <div className="flex gap-9 justify-center pb-5">
                <div className="text-[#00C48C] font-bold text-2xl">{`30% Discount - Limited Time!`}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CtaButton
        ctaText="Get your Doctors Note Now"
        descriptionTextColor="text-[#626262]"
      />
    </section>
  );
};

export default PeaceOfMind;
