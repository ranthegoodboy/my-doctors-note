import { Assistant } from "next/font/google";
import Image from "next/image";
import React from "react";

const assistant = Assistant({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const footerList = [
  {
    title: "Customer service",
    links: ["Contact Us", "Refund Request", "Frequent Asked Questions"],
  },
  {
    title: "Policies",
    links: [
      "Terms Of Service",
      "Refund Policy",
      "Privacy Policy",
      "Disclaimer Policy",
      "Intellectual Property Policy",
      "Jurisdiction Policy",
      "Limitation of Liability Policy",
      "Indemnification Policy",
    ],
  },
];

const Footer = () => {
  return (
    <footer
      className={`w-full pt-10 pb-7 md:pb-10 bg-white border-t border-gray-200 mt-20 ${assistant.className}`}
    >
      <div className="mx-auto boxed-container">
        <div className="grid gap-12 md:grid-cols-4 md:gap-8">
          <div className="flex flex-col gap-5">
            <Image
              src="/images/dn-logo.webp"
              alt="Your Company"
              width={165}
              height={20}
            />

            <div className="text-[rgba(18,18,18,0.75)] mt-1">
              <span className="font-bold">Support</span>
              {` (Mon-Fri, 9am-6pm EST)`}
            </div>
            <div className="text-[rgba(18,18,18,0.75)]">
              <span className="font-bold">Email:</span>
              {` help@urgentsupport.co`}
            </div>
          </div>

          {footerList.map((list) => (
            <div key={list.title}>
              <h4 className=" mb-5 text-lg text-[#121212]">{list.title}</h4>
              <ul className="space-y-5 md:space-y-4 text-sm text-[rgba(18,18,18,0.75)] tracking-wide">
                {list.links.map((link) => (
                  <li
                    key={link}
                    className="hover:text-[rgba(18,18,18)] hover:underline underline-offset-3 cursor-pointer"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className=" mb-5 text-lg text-[#121212]">Company Details</h4>
            <ul className="space-y-2 text-[rgba(18,18,18,0.75)]">
              <li className="mb-4">COMPANY NAME & ADDRESS</li>
              <li>Company registration</li>
              <li>number: 000000</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center text-[rgba(18,18,18,0.75)] text-xs mt-12 border-t border-gray-200 pt-5 md:pt-11">
        © 2025, My Doctors Note
      </div>
    </footer>
  );
};

export default Footer;
