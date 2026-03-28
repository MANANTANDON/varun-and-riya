import Head from "next/head";
import { Footer } from "@/components/Footer";
import { TopContainer } from "@/components/TopContainer";
import React, { useEffect, useRef, useState } from "react";
import { Secondcontainer } from "@/components/SecondContainer";
import { InfoContainer } from "@/components/InfoContainer";
import { BrideGroomContainer } from "@/components/BrideGroomContainer";
import { Pause, PlayArrow } from "@mui/icons-material";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 500);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Varun & Riya Wedding | 29 April 2026</title>

        <meta
          name="description"
          content="Join us to celebrate the wedding of Varun & Riya on 29 April 2026. A beautiful journey of love begins."
        />

        <meta
          name="keywords"
          content="Varun Riya wedding, Indian wedding 2026, Varun weds Riya, wedding invitation"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Varun ❤️ Riya Wedding" />
        <meta
          property="og:description"
          content="You're invited to Varun & Riya’s wedding on 29 April 2026 💍"
        />
        <meta property="og:image" content="/images/v.jpeg" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Varun ❤️ Riya Wedding" />
        <meta
          name="twitter:description"
          content="Celebrate with us on 29 April 2026 💍"
        />
        <meta name="twitter:image" content="/images/v.jpeg" />
      </Head>

      <button
        className="sfpro-text fixed top-6 right-6 z-50 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer bg-[#DBC375] shadow-[0_12px_30px_rgba(0,0,0,0.9)] hover:scale-110 transition-all duration-300"
        onClick={handlePlayPause}
      >
        {isPlaying ? <Pause /> : <PlayArrow />}
      </button>
      <audio ref={audioRef} loop>
        <source src="/audio/music.mp3" type="audio/mpeg" />
      </audio>
      <div className="relative overflow-hidden">
        <TopContainer isMobile={isMobile} />
        <Secondcontainer isMobile={isMobile} />
        <div
          className="absolute h-670 w-30 -left-5 md:left-0 bottom-0 z-20"
          style={{
            backgroundImage: "url(/images/left.png)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div
          className="absolute h-602.5 w-415.25 -left-287 md:-left-270 lg:-left-250 xl:-left-240 -bottom-200 md:-bottom-50 z-19 float-castle"
          style={{
            backgroundImage: "url(/images/lefttree.avif)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div
          className="absolute h-670 w-30 bottom-0 -right-4 md:right-0 z-20"
          style={{
            backgroundImage: "url(/images/right.png)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div
          className="absolute h-487.5 w-270.5  -bottom-280 -right-190 md:-bottom-70 md:-right-180 lg:-right-170 lg:bottom-0 xl:-right-140 xl:bottom-0 float-castle"
          style={{
            backgroundImage: "url(/images/righttree.avif)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div
          className="absolute h-34 w-473 -bottom-5 md:bottom-0 z-20 "
          style={{
            backgroundImage: "url(/images/bottom.png)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div
          className="absolute w-38 h-57 md:w-63 md:h-107 -bottom-5 -left-8 md:-bottom-10 md:-left-10 z-20 "
          style={{
            backgroundImage: "url(/images/leftimg.avif)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div
          className="absolute w-38 h-57 md:w-63 md:h-107 -bottom-5 -right-8 md:-bottom-10 md:-right-10 z-20 "
          style={{
            backgroundImage: "url(/images/rightimg.avif)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div
          className="absolute w-26.25 h-35  md:w-76.25 md:h-85 bottom-13 md:bottom-30 left-1/2 -translate-x-1/2 translate-y-1/2 z-20"
          style={{
            backgroundImage: "url(/images/om.avif)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>
      <InfoContainer />
      <BrideGroomContainer />
      <Footer isMobile={isMobile} />

      {/* Hidden SEO text */}
      <p className="hidden">
        Varun and Riya are getting married on 29 April 2026. Join us in this
        beautiful Indian wedding celebration filled with love, traditions, and
        unforgettable memories.
      </p>
      <img
        src="/images/v.jpeg"
        alt="Varun and Riya wedding"
        className="hidden"
      />
    </>
  );
}
