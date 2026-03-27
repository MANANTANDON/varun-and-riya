import React from "react";

export const TopContainer = ({ isMobile }) => {
  return (
    <>
      <div
        className="relative h-225 w-screen"
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
          className="absolute top-115 sm:top-102 lg:top-165 left-1/2 w-90 lg:w-200 h-70 lg:h-150 flex justify-center z-19 -translate-x-1/2 -translate-y-1/2 float-animation "
          style={{
            backgroundImage: "url(/images/shiv.avif)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>
    </>
  );
};
