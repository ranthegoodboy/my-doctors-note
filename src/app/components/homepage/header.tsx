"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <div
      className={`w-full fixed top-[37px] left-0 right-0 transition-transform duration-100 z-50 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="w-full bg-white py-[28px] flex justify-center border-b border-gray-300">
        <div className="container px-4 flex justify-center">
          <div className="flex items-center">
            <Image
              src="/images/dn-logo.webp"
              alt="Your Company"
              width={240}
              height={29}
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
