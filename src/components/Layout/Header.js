import React, { useState, useEffect, useRef } from "react";
import useResponsive from "../../hooks/useResponsive";
import MobileMenu from "./MobileMenu";
import { useRouter } from "next/router";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(0);
  const { isMobile } = useResponsive();
  const navRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const router = useRouter();

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine if scrolled from top
      setIsScrolled(currentScrollY > 10);

      // Determine scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Measure header height
  useEffect(() => {
    const navElement = navRef.current;
    if (!navElement) return;

    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        // Ensure we're using the offsetHeight for the actual rendered height
        setHeaderHeight(entry.target.offsetHeight);
      }
    });

    observer.observe(navElement);

    return () => {
      observer.unobserve(navElement);
    };
  }, []); // Empty dependency array, ResizeObserver handles changes.

  const scrollToSection = (route) => {
    // const element = document.getElementById(sectionId);
    // if (element) {
    //   element.scrollIntoView({ behavior: "smooth" });
    // }
    router.push(route);
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const route = (item) => {
    if (item.route != null) router.push(item.route);
    else scrollToSection(item.id);
  };

  const navigationItems = [
    { id: "aboutTheBlessing", label: "About The Blessing", chinese: "关于我们", route: "/aboutTheBlessing" },
    {
      id: "theBlessingLocation",
      label: "The Blessing Location",
      chinese: "The Blessing 地点",
      route: "/theBlessingLocation",
    },
    {
      id: "theBlessingCoference",
      label: "The Blessing Conference",
      chinese: "The Blessing 聚会",
      route: "/theBlessingConference",
    },
  ];

  return (
    <>
      <nav
        className={`
        /* Added ref for height measurement */
        relative z-50 flex justify-between bg-white items-center w-full px-4 sm:px-8
        fixed top-0 left-0 right-0 header-slide-in
        transition-all duration-500 ease-in-out 
        ${scrollDirection === "down" && !isMobileMenuOpen ? "-translate-y-full" : "translate-y-0"}
        ${
          isScrolled
            ? " py-3 bg-gradient-to-r from-theme-primary/98 via-theme-primary/95 to-theme-primary/98 backdrop-blur-enhanced border-b border-theme-primary/50 shadow-2xl"
            : " py-6 bg-gradient-to-r from-theme-primary/95 via-theme-primary/90 to-theme-primary/95 backdrop-blur-sm border-b border-theme-primary shadow-lg"
        }
      `}
        ref={navRef}>
        {/* Logo */}
        <div
          className={`
          bg-theme-tertiary  rounded-lg hover-glow
          transition-all duration-300 ease-in-out
          hover:bg-theme-tertiary/80 hover:scale-105 hover:shadow-lg
          cursor-pointer
          ${isScrolled ? "scale-95" : "scale-100"}
        `}>
          <span className="text-theme-primary font-semibold text-sm sm:text-base transition-all duration-300">
            <img src="/logo-tb-2.png" alt="TB" className={isMobile ? "w-22 h-22" : "w-32 h-32"} onClick={() => router.push("/")} />
          </span>
        </div>

        {/* Desktop Navigation */}
        {!isMobile && (
          <div className="flex space-x-4 lg:space-x-8 text-sm">
            {navigationItems.map((item, index) => (
              <div
                key={item.id}
                className="text-center  cursor-pointer group relative nav-item-fade-in "
                onClick={() => route(item)}
                style={{
                  animationDelay: `${(index + 1) * 150}ms`,
                }}>
                <div
                  className={`
                  px-3 lg:px-4 py-3 rounded-lg relative overflow-hidden
                  transition-all duration-500 ease-out
                  hover:bg-theme-tertiary/50 hover:scale-105 hover:shadow-lg
                  group-hover:transform group-hover:-translate-y-1
                  ${isScrolled ? "scale-95" : "scale-100"}
                `}>
                  <div className="text-base font-bold lg:text-lg tracking-wider transition-all duration-300 text-theme-primary relative z-10">
                    {item.label}
                  </div>
                  {item.chinese && (
                    <div className="text-sm opacity-90 font-bold group-hover:opacity-100 transition-all duration-300 text-theme-primary relative z-10">
                      {item.chinese}
                    </div>
                  )}
                  {/* Orange underline with enhanced animation */}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 gradient-orange-underline transition-all duration-500 ease-out group-hover:w-full"></span>
                  {/* Subtle background glow effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-400/0 to-orange-500/0 group-hover:from-orange-500/10 group-hover:via-orange-400/20 group-hover:to-orange-500/10 transition-all duration-500 rounded-lg"></span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <button
            className={`
              text-theme-primary p-3 rounded-lg relative overflow-hidden
              transition-all duration-300 ease-out bg-black
              hover:bg-theme-tertiary/50 hover:scale-110 hover:shadow-lg
              ${isMobileMenuOpen ? "bg-theme-tertiary/30 scale-105" : ""}
              ${isScrolled ? "scale-95" : "scale-100"}
            `}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu">
            <div className="w-6 h-6 flex flex-col justify-center items-center relative z-10">
              <span
                className={`
                bg-white block transition-all duration-500 ease-out h-0.5 w-6 rounded-sm
                ${isMobileMenuOpen ? "rotate-45 translate-y-1 bg-orange-400" : "-translate-y-0.5"}
              `}></span>
              <span
                className={`
                bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5
                ${isMobileMenuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"}
              `}></span>
              <span
                className={`
                bg-white block transition-all duration-500 ease-out h-0.5 w-6 rounded-sm
                ${isMobileMenuOpen ? "-rotate-45 -translate-y-1 bg-orange-400" : "translate-y-0.5"}
              `}></span>
            </div>
            {/* Ripple effect background */}
            <span className="absolute inset-0 bg-gradient-to-r from-orange-500/0 to-orange-400/0 hover:from-orange-500/20 hover:to-orange-400/20 transition-all duration-300 rounded-lg"></span>
          </button>
        )}
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navigationItems={navigationItems}
        onNavigate={scrollToSection}
        headerHeight={headerHeight}
      />
    </>
  );
};

export default Header;
