import React from "react";

export const Secondcontainer = () => {
  return (
    <>
      <div
        className="relative h-100 md:h-250 w-screen"
        style={{
          backgroundImage: "url(/images/bg1.avif)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="absolute -top-25 md:-top-35 lg:-top-50 left-0 md:left-10 lg:left-20 xl:left-50 h-74 md:h-144 w-70 md:w-140 float-animation-air"
          style={{
            backgroundImage: "url(/images/balloon.avif)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div
          className="absolute top-20 md:top-40 lg:top-5 left-5 lg:left-40 xl:left-80 h-68 md:h-168 w-100 md:w-212 float-castle"
          style={{
            backgroundImage: "url(/images/castel.png)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div
          className="absolute bottom-0 md:bottom-20 lg:bottom-40 right-10 lg:right-70 h-26 md:h-56 w-23 md:w-43 rotate-subtle"
          style={{
            backgroundImage: "url(/images/moon.png)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>
      {/* The Hills */}
      <div
        className="relative h-100 md:h-287 w-screen"
        style={{
          backgroundImage: "url(/images/bg1.avif)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="absolute h-130 w-105 md:h-380 md:w-355 top-45 md:top-130 -translate-y-1/2 left-1/2 -translate-x-1/2 float-animation-hills"
          style={{
            backgroundImage: "url(/images/hill.avif)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>
    </>
  );
};
