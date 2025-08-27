import React, { useEffect } from "react";
import useResponsive from "../../hooks/useResponsive";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TheBlessingLocationContent = () => {
  console.log({ useResponsive, motion, useInView });

  const { isMobile } = useResponsive();

  const imageBaseClasses = "object-contain p-0 m-0 block w-full";

  return (
    <section className={`relative z-10  bg-white`}>
      {/* LOCATION TOP SECTION VIDEO  */}
      <div className="relative w-full  ">
        {" "}
        {/* Container with aspect ratio */}
        {isMobile ? (
          <video preload="metadata" key="mobile" playsInline autoPlay webkit-playsinline="true" muted loop id="myVideo">
            <source src="/locations/location-section-1-video-mobile-2.mp4" type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        ) : (
          <video preload="metadata" key="pc" autoPlay muted loop id="myVideo1">
            <source src="/locations/location-section-2-video.mp4" type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        )}
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2  ${isMobile ? "w-78 h-78 -translate-y-1/3" : "w-1/2 -translate-y-2/3"}`}>
          <img src="/locations/location-section-1-text.png" alt="TB" className={imageBaseClasses} />
        </div>{" "}
      </div>

      <h2 className={`text-center text-neutral-700 font-bold ${isMobile ? " text-2xl my-10" : " text-5xl my-16"} font-bold  `}>
        WEST MALAYSIA
      </h2>

      <div id="westMalaysiaImg" className={`grid grid-cols-2 gap-0 ${isMobile ? "px-5" : "px-10"}`}>
        <img loading="lazy" src="/locations/Location Pg1-Puchong.jpg" alt="TB" className={imageBaseClasses} />
        <img loading="lazy" src="/locations/Location Pg2-Sri Petaling.jpg" alt="TB" className={imageBaseClasses} />

        <img loading="lazy" src="/locations/Location Pg3-Sg Wang.jpg" alt="TB" className={imageBaseClasses} />
        <img loading="lazy" src="/locations/Location Pg4-Kepong.jpg" alt="TB" className={imageBaseClasses} />
        <img loading="lazy" src="/locations/Location Pg5-Cheras.jpg" alt="TB" className={imageBaseClasses} />
        <img loading="lazy" src="/locations/Location Pg6-USJ.jpg" alt="TB" className={imageBaseClasses} />
        <img loading="lazy" src="/locations/Location Pg7-TRX.jpg" alt="TB" className={imageBaseClasses} />

        <img loading="lazy" src="/locations/Location Pg8-Kuantan.jpg" alt="TB" className={imageBaseClasses} />
        <img loading="lazy" src="/locations/Location Pg9-Muar.jpg" alt="TB" className={imageBaseClasses} />
      </div>

      <h2 className={`text-center text-neutral-700 font-bold ${isMobile ? " text-2xl my-8" : " text-5xl my-16"} font-bold  `}>
        EAST MALAYSIA
      </h2>

      <div id="westMalaysiaImg" className={`grid grid-cols-2 gap-0 ${isMobile ? "px-5" : "px-10"}`}>
        <img loading="lazy" src="/locations/Location Pg10-Sibu.jpg" alt="TB" className={imageBaseClasses} />
        <img loading="lazy" src="/locations/Location Pg11-KK.jpg" alt="TB" className={imageBaseClasses} />
      </div>

      <h2 className={`text-center text-neutral-700 font-bold ${isMobile ? " text-2xl my-8" : " text-5xl my-16"} font-bold  `}>OVERSEAS</h2>

      <div id="westMalaysiaImg" className={`grid grid-cols-2 gap-0 ${isMobile ? "px-5" : "px-10"}`}>
        <img loading="lazy" src="/locations/Location Pg13-HK.jpg" alt="TB" className={imageBaseClasses} />
        <img loading="lazy" src="/locations/Location Pg12-Singapore.jpg" alt="TB" className={imageBaseClasses} />
        <img loading="lazy" src="/locations/Location Pg14-Indonesia.jpg" alt="TB" className={imageBaseClasses} />
      </div>
    </section>
  );
};

export default TheBlessingLocationContent;
