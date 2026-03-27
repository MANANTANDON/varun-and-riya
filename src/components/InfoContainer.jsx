import { EVENTS, INFO } from "@/constant";
import React from "react";

export const InfoContainer = () => {
  return (
    <>
      <div
        className="h-1198.5 w-full flex flex-col items-center py-20"
        style={{
          backgroundImage: "url(/images/secondbg.avif)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="text-[#DBC375] text-xl md:text-3xl font-medium">
          ॐ श्री गणेशाय नम
        </h1>
        <div
          className="h-60 w-60 md:h-80 md:w-80 flex flex-col items-center py-20"
          style={{
            backgroundImage: "url(/images/ganeshji.avif)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <h3 className="text-[#DBC375] text-xl font-light">
          वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ। <br />
          निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥
        </h3>
        <h2 className="text-[#DBC375] text-md md:text-xl font-light mt-8">
          {INFO?.pageOne?.headingOne}
        </h2>
        <h2 className="text-[#DBC375] text-lg md:text-2xl text-center font-medium">
          {INFO?.pageOne?.grandParents}
        </h2>
        <h2 className="text-[#DBC375] text-xl md:text-4xl font-semibold mt-8 text-center">
          <i>{INFO?.pageOne?.groomsParents}</i>
        </h2>
        <p className="text-[#DBC375]  text-base/5 md:text-xl/6.5  w-75 md:w-150 text-center mt-2">
          {INFO?.pageOne?.descriptionOne}
        </p>
        <h2 className="text-[#DBC375] text-6xl md:text-9xl mt-8 font-semibold">
          <i>{INFO.groomName}</i>
        </h2>
        <h2 className="text-[#DBC375] text-3xl md:text-6xl my-2">&</h2>
        <h2 className="text-[#DBC375] text-6xl md:text-9xl font-semibold">
          <i>{INFO.brideName}</i>
        </h2>
        <h2 className="text-[#DBC375] text-xl md:text-4xl font-semibold pt-8 text-center">
          <i>{INFO?.pageOne?.brideParents}</i>
        </h2>
        <h2 className="text-[#DBC375] text-lg md:text-2xl font-light pt-10 lg:pt-30">
          On the following events
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-50 gap-y-20 mt-8">
          {EVENTS.slice(0, 4).map((item, key) => (
            <div key={key} className="flex flex-col items-center">
              <div className="border-3 border-[#DBC375] p-2 rounded-[150px]">
                <div
                  className=" h-112 w-75 "
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                />
              </div>
              <div className="flex flex-col gap-4 items-center mt-5">
                <h2 className=" text-[#DBC375] text-4xl font-semibold">
                  {item?.name}
                </h2>
                <h2 className=" text-[#DBC375] text-xl">{item?.date}</h2>
                <h2 className="w-70 text-[#DBC375] text-base/5 text-center">
                  <i>{item?.venue}</i>
                </h2>
                <h2 className=" text-[#DBC375]">{item?.time}</h2>
                <a
                  href={item?.location}
                  className=" text-[#DBC375]"
                  target="_blank"
                >
                  <i>
                    <u>see the route</u>
                  </i>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 mt-20">
          <div className="flex flex-col items-center">
            <div className="border-3 border-[#DBC375] p-2 rounded-[150px]">
              <div
                className=" h-112 w-75 "
                style={{
                  backgroundImage: `url(${EVENTS[4].image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </div>
            <div className="flex flex-col gap-4 items-center mt-5">
              <h2 className=" text-[#DBC375] text-4xl font-semibold">
                {EVENTS[4].name}
              </h2>
              <h2 className=" text-[#DBC375] text-xl">{EVENTS[4].date}</h2>
              <h2 className="w-70 text-[#DBC375] text-base/5 text-center">
                <i>{EVENTS[4].venue}</i>
              </h2>
              <h2 className=" text-[#DBC375]">{EVENTS[4].time}</h2>
              <a
                href={EVENTS[4].location}
                className=" text-[#DBC375]"
                target="_blank"
              >
                <i>
                  <u>see the route</u>
                </i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="h-30 md:h-80 w-full flex flex-col items-center py-20 -mt-1 lg:hidden"
        style={{
          backgroundImage: "url(/images/secondbg.avif)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
    </>
  );
};
