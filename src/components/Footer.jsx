import React, { useEffect, useState } from "react";

export const Footer = () => {
  const targetDate = new Date("2026-04-29T00:00:00");

  const getTimeLeft = () => {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="h-175 w-screen flex items-center justify-center"
      style={{
        backgroundImage: "url(/images/footerbg.avif)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="text-[#4C0B7A] flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl">The countdown begins</h2>
        <h3 className="text-3xl md:text-4xl mt-2">
          {String(timeLeft.days).padStart(2, "0")}:
          {String(timeLeft.hours).padStart(2, "0")}:
          {String(timeLeft.minutes).padStart(2, "0")}:
          {String(timeLeft.seconds).padStart(2, "0")}
        </h3>
        <p className="mt-10 text-sm text-center w-75 md:w-full">
          <i>R.S.V.P</i>{" "}
          <span className="font-medium">
            Gujral's, Kapoor's, Tandon's, Sawhney's, Bhasin's, Chadha's &
            Anand's
          </span>
        </p>
        <p className=" text-sm text-center mt-3 w-75 md:w-full">
          <i>Special invitiation from little flowers</i>{" "}
          <span className="font-medium">Anameha, Aaryav, Meeraya & Avya</span>
        </p>
        <p className="mt-20 text-xs">© developed by Manan (Snowchild Studio)</p>
      </div>
    </div>
  );
};
