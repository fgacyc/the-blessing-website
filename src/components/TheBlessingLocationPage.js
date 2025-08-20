import React from "react";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";

import TheBlessingLocationContent from "./Sections/TheBlessingLocationContent";
// import BibleVerseSection from './Sections/BibleVerseSection';

const TheBlessingLocationPage = () => {
  return (
    <div className="min-h-screen bg-white text-white relative overflow-x-hidden">
      {/* Pure Black Background - No gradient effects */}

      <Header />
      <TheBlessingLocationContent />
      <div className={`mt-10  overflow-x-hidden`}>
        <Footer />
      </div>
      {/* Minimal Decorative Elements - Pure Black Background */}
    </div>
  );
};

export default TheBlessingLocationPage;
