import React from "react";

export const TopContainer = ({ isMobile }) => {
  return (
    <>
      <div
        className="relative h-150 md:h-140 lg:h-220 w-screen overflow-hidden"
        style={{
          backgroundImage: "url(/images/bg1.avif)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Top Graphic */}
        <div
          className="absolute w-screen h-125 lg:h-175 flex justify-center z-20"
          style={{
            backgroundImage: `url(${isMobile ? "/images/top2.avif" : "/images/top.avif"})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="h-fit text-[#DBC375] mt-24 flex flex-col gap-2 lg:gap-4 items-center">
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-semibold">
              Varun
            </h1>
            <h2 className="text-3xl lg:text-5xl xl:text-6xl font-medium">
              <i>weds</i>
            </h2>
            <h2 className="text-5xl lg:text-7xl xl:text-8xl font-semibold">
              Riya
            </h2>
          </div>
        </div>
        {/* Shiv Cont */}
        <div
          className="absolute top-115 sm:top-102 lg:top-165 left-1/2 w-90 lg:w-200 h-70 lg:h-150 flex justify-center z-19 -translate-x-1/2 -translate-y-1/2 float-animation-shiv"
          style={{
            backgroundImage: "url(/images/shiv.avif)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
        {/* leaves + flowers: LEFT */}
        <div
          className="absolute top-85 md:top-70 lg:top-85 -left-36 md:left-5 lg:-left-50 xl:-left-15 w-90 lg:w-200 h-70 lg:h-150 flex justify-center z-19 float-animation float-animation-leaves"
          style={{
            backgroundImage: "url(/images/leftleaves.avif)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div
          className="absolute top-95 md:top-75 lg:top-95 -left-55 md:-left-30 lg:-left-100 xl:-left-80 w-90 lg:w-200 h-70 lg:h-150 flex justify-center z-19 float-animation float-animation-flowers"
          style={{
            backgroundImage: "url(/images/leftflower.avif)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
        {/* leaves + flowers: RIGHT */}
        <div
          className="absolute top-85 md:top-70 lg:top-85 -right-36 md:right-5 lg:-right-50 xl:-right-15 w-90 lg:w-200 h-70 lg:h-150 flex justify-center z-19 float-animation float-animation-leaves"
          style={{
            backgroundImage: "url(/images/rightleaves.avif)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div
          className="absolute top-95 md:top-75 lg:top-95 -right-55 md:-right-30 lg:-right-100 xl:-right-80 w-90 lg:w-200 h-70 lg:h-150 justify-center z-19 float-animation float-animation-flowers"
          style={{
            backgroundImage: "url(/images/rightflower.avif)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>
    </>
  );
};
