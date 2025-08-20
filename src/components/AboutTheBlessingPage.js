import React from "react";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";

import AboutUsContent from "./Sections/AboutUsContent";

// import BibleVerseSection from './Sections/BibleVerseSection';

const AboutTheBlessingPage = () => {
  return (
    <div className="min-h-screen bg-white text-white relative overflow-x-hidden">
      {/* Pure Black Background - No gradient effects */}

      <Header />
      <AboutUsContent />
      <Footer />
      {/* Minimal Decorative Elements - Pure Black Background */}
    </div>
  );
};

export default AboutTheBlessingPage;
