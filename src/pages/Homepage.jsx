import React from "react";
import Footer from "../components/footer/Footer";
import Hero from "../components/homepage/hero/Hero";
import PlatformList from "../components/homepage/platformList/PlatformList";
import ContributorSection from "../components/homepage/contributorSection/ContributorSection";

function Homepage() {
  return (
    <div>
      <Hero />
      <PlatformList />
      <ContributorSection />
      <Footer />
    </div>
  );
}

export default Homepage;
