import { Footer } from "@/components/Footer";
import { TopContainer } from "@/components/TopContainer";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 500);
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <TopContainer isMobile={isMobile} />
      <Footer isMobile={isMobile} />
    </>
  );
}
