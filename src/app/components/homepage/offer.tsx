"use client";

import React, { useEffect, useState } from "react";

const Offer = () => {
  const [timeLeft, setTimeLeft] = useState(600);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="w-full sticky top-0 z-[100]">
      <div className="w-full bg-[#2323fd] text-white text-center py-[6px] font-semibold tracking-wider md:text-base">
        30% OFF if you order in the next {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
      </div>
    </div>
  );
};

export default Offer;
