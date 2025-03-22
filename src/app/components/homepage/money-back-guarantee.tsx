import Image from "next/image";
import React from "react";

const MoneyBackGuarantee = () => {
  return (
    <section className="w-full py-16 px-6">
      <div className="bg-[#b9eedf] rounded-lg flex flex-col md:flex-row justify-center py-[30px]">
        <div className="max-w-3xl flex flex-col md:flex-row justify-between items-center gap-8">
          <Image
            src="/images/money-back.svg"
            alt="Money Back Guarantee"
            width={144}
            height={179}
          />
          <div className="space-y-3 text-center md:text-left">
            <h3 className="font-semibold text-[32px] text-[#000101] tracking-wide">
              Money Back Guarantee!
            </h3>
            <div className="text-lg tracking-wide">
              {`We will refund 100% of your payment, in case you're not 100% satisfied with our service.`}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoneyBackGuarantee;
