import Head from "next/head";
import { Footer } from "@/components/Footer";
import { TopContainer } from "@/components/TopContainer";
import React, { useEffect, useState } from "react";
import { Secondcontainer } from "@/components/SecondContainer";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

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
        <title>Varun & Riya Wedding | 28 April 2026</title>

        <meta
          name="description"
          content="Join us to celebrate the wedding of Varun & Riya on 28 April 2026. A beautiful journey of love begins."
        />

        <meta
          name="keywords"
          content="Varun Riya wedding, Indian wedding 2026, Varun weds Riya, wedding invitation"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Varun ❤️ Riya Wedding" />
        <meta
          property="og:description"
          content="You're invited to Varun & Riya’s wedding on 28 April 2026 💍"
        />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Varun ❤️ Riya Wedding" />
        <meta
          name="twitter:description"
          content="Celebrate with us on 28 April 2026 💍"
        />
        <meta name="twitter:image" content="/images/og-image.jpg" />
      </Head>

      <TopContainer isMobile={isMobile} />
      {/* <div
          className="absolute top-100 md:-top-50 left-1/2 -translate-x-1/2 h-74 md:h-144 w-70 md:w-140 float-animation-air border border-zinc-100"
          style={{
            backgroundImage: "url(/images/balloon.avif)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        /> */}
      <Secondcontainer isMobile={isMobile} />
      <Footer isMobile={isMobile} />

      {/* Hidden SEO text */}
      <p className="hidden">
        Varun and Riya are getting married on 28 April 2026. Join us in this
        beautiful Indian wedding celebration filled with love, traditions, and
        unforgettable memories.
      </p>
    </>
  );
}
