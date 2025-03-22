import Image from "next/image";
import React from "react";
import CtaButton from "./cta-button";

const steps = [
  {
    title: "Fill In The Smart Form",
    description:
      "Indicate your illness and the desired duration. It's quick and intuitive.",
    image: "/images/step-img-1.webp",
  },
  {
    title: "Receive Your PDF In 1 Minute",
    description:
      "After you've completed the checkout, your pre-filled sick leave will be sent by email within 1 minute, and it will be ready on the payment confirmation page.",
    image: "/images/step-img-2.webp",
  },
  {
    title: "100% Satisfaction Guarantee",
    description:
      "Join hundreds of thousands of satisfied customers who trust us. Our sick leave plans are easy to use and designed to meet your needs quickly and efficiently!",
    image: "/images/step-img-3.webp",
  },
];

const EasySteps = () => {
  return (
    <section className="pt-9 w-full bg-white">
      <div className="mx-auto text-center">
        <div className="leading-tight md:leading-normal">
          <h2 className="text-[30px] md:text-5xl font-semibold md:mb-2">{`Get An Online Doctor's`}</h2>
          <h2 className="text-[30px] md:text-5xl font-semibold mb-4">
            Note In 3 Easy Steps
          </h2>
        </div>
        <div className="flex justify-center">
          <div className="px-4 mb-9 max-w-2xl tracking-wide text-left text-gray-600 md:text-lg md:px-0">
            With our online platform we make it quick and simple for you to
            obtain a doctors note, so you can focus on rest and recovery.
          </div>
        </div>

        <div className="grid gap-6 px-6 pb-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.title}>
              <div className="bg-[#d9e9fe] pt-6 px-6 pb-12 rounded-lg">
                <div className="flex justify-center mb-4">
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={236}
                    height={236}
                    className="object-cover"
                  />
                </div>
                <h3 className="mb-4 text-2xl font-semibold">{step.title}</h3>
                <p className="text-sm tracking-wide text-left text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <CtaButton
          ctaText="Get your Note Now"
          descriptionTextColor="text-[#626262]"
        />
      </div>
    </section>
  );
};

export default EasySteps;
