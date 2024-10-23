import React, { useState, useEffect } from "react";
import { HeadingWithBadgeProps } from "../../types";

const HeadingWithBadge = ({
  subHeading,
  mainHeading,
  countdownTarget,
}: HeadingWithBadgeProps) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(countdownTarget) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Minutes: Math.floor((difference / 1000 / 60) % 60),
        Seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const timerComponents: JSX.Element[] = [];

  Object.keys(timeLeft).forEach((interval, index) => {
    if (timeLeft[interval as keyof typeof timeLeft]) {
      timerComponents.push(
        <div key={index} className="text-center px-2">
        <div className="text-base">{interval}</div>
          <span className="text-4xl font-semibold">
            {timeLeft[interval as keyof typeof timeLeft]}
          </span>
        </div>
      );
    }
  });

  return (
    <>
      <div className="flex items-center gap-4">
        <div className="w-5 h-10 bg-[#DB4444] rounded"></div>
        <div className="text-[#DB4444] font-Poppins font-semibold text-base">
          {subHeading}
        </div>
      </div>
      <div className="flex gap-x-24">
        <div className="h-12 font-Poppins font-semibold text-4xl mb-6 mt-10">
            {mainHeading}
        </div>

        <div className="flex gap-4 items-center justify-center">
            {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </div>
      </div>
     
    </>
  );
};

export default HeadingWithBadge;
