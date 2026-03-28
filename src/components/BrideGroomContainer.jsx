import Image from "next/image";
import React from "react";

export const BrideGroomContainer = () => {
  return (
    <>
      <div
        className="relative h-170 md:h-190 lg:h-180 w-full flex flex-col items-center gap-5 md:gap-10 pt-15 md:pt-20"
        style={{
          backgroundImage: "url(/images/thirdbg.avif)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="h-20 w-20 md:h-30 md:w-30"
          style={{
            backgroundImage: "url(/images/hearts.avif)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <h2 className="text-[#004962] text-xl md:text-3xl">MEET THE</h2>
        <h3 className="text-center text-[#004962] text-6xl md:text-8xl font-semibold tracking-tight">
          <i>
            Bride &<br /> Groom
          </i>
        </h3>
        <h3 className="text-[#004962] w-75 md:w-150 lg:w-200 text-center font-medium">
          We are both so delighted that you are able to join us in celebrating
          what we hope will be one of the happiest days of our lives. The
          affection shown to us by so many people since our roka has been
          incredibly moving, and has touched us both deeply. We would like to
          take this opportunity to thank everyone most sincerely for their
          kindness. We are looking forward to see you at the wedding functions.
        </h3>
      </div>
    </>
  );
};
