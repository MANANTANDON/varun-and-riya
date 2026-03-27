import { INFO } from "@/constant";
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
        <h2 className="text-[#DBC375] text-xl md:text-4xl font-semibold py-8 text-center">
          <i>{INFO?.pageOne?.brideParents}</i>
        </h2>
        <h2 className="text-[#DBC375] text-lg md:text-2xl font-light">
          On the following events
        </h2>
      </div>
    </>
  );
};
