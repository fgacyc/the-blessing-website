import React from "react";
import { useRef } from "react";

import useResponsive from "../../hooks/useResponsive";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "primeicons/primeicons.css";

const Footer = () => {
  const { isMobile } = useResponsive();
  const containerRef = useRef();
  const imageBaseClasses = "object-contain";

  return (
    <section className={`relative z-10  overflow-y-hidden  overflow-x-hidden bg-black`} ref={containerRef}>
      <div className="relative justify-center overflow-x-hidden">
        <div>
          <img
            src="/aboutUs/aboutUs-last-section-img-4.jpg"
            alt="TB"
            className={`${imageBaseClasses} ${isMobile ? " h-[500px] w-auto object-cover " : ""}  overflow-x-hidden  opacity-70`}
          />
        </div>
        <div className={`${isMobile ? "w-3/4 mt-4 -translate-x-3/6" : "-translate-x-1/2 "} absolute top-3/5 left-1/2  -translate-y-1/2`}>
          <div className="flex justify-center">
            <img
              src="./aboutUs/aboutUs-footer-logo.png"
              alt="TB"
              className={`${imageBaseClasses} ${isMobile ? "w-46 h-46" : "w-96 h-96"}  `}
            />
          </div>
          <div className="flex justify-center">
            <img
              src="/aboutUs/aboutUs-footer-logo-1.png"
              alt="TB"
              className={`${imageBaseClasses} ${isMobile ? "scale-90" : "scale-60"}  `}
            />
          </div>
          <div className={`${isMobile ? "flex space-x-4 mt-5 translate-x-5  min-w-max" : "flex space-x-10 mt-5 w-full "}`}>
            <button
              className={`${isMobile ? "w-14 h-8 text-[0.6rem] " : "w-52 h-16 "} bg-white text-black rounded-lg font-bold px-2
              `}>
              <a href="#" className="">
                {" "}
                关于我们{" "}
              </a>
            </button>
            <button
              className={`${isMobile ? "w-14 h-8 text-[0.6rem] " : "w-52 h-16 "} bg-white text-black rounded-lg font-bold px-2
              `}>
              {" "}
              <a href="#" className="">
                {" "}
                Vision{" "}
              </a>
            </button>
            <button
              className={`${isMobile ? "w-14 h-8 text-[0.6rem] " : "w-52 h-16 "} bg-white text-black rounded-lg font-bold px-2
              `}>
              {" "}
              <a href="#"> 加入聚点 </a>
            </button>
            <button
              className={`${isMobile ? "w-14 h-8 text-[0.6rem] " : "w-52 h-16 "} bg-white text-black rounded-lg font-bold px-2
              `}>
              {" "}
              <a href="#"> 联系我们 </a>
            </button>{" "}
          </div>

          {/* COMMUNITY CONNECTION */}
          <div
            className={`${
              isMobile ? "flex space-x-5 justify-center mt-3 min-w-max" : "flex justify-center font-bold mt-8 space-x-10 text-lg w-full "
            }`}>
            <a
              href="https://www.instagram.com/fgatheblessing"
              className={`${
                isMobile ? "text-[2.3rem] scale-65" : "text-[3rem]"
              } pi pi-instagram  transform duration-300 ease-out hover:scale-105 text-red-700 bg-white animate-bounce rounded-lg p-3`}></a>
            <a
              href="http://facebook.com/fgatheblessing"
              className={`${
                isMobile ? "text-[2.3rem] scale-65" : "text-[3rem]"
              } pi pi-facebook  transform duration-300 ease-out hover:scale-105 text-blue-700 bg-white  animate-bounce rounded-lg p-3`}></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
