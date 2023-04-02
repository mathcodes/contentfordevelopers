import React from "react";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/Navbar";
import Hero from "../components/homepage/hero/Hero";
import PlatformList from "../components/homepage/platformList/PlatformList";
import ContributorSection from "../components/homepage/contributorSection/ContributorSection";
import Learn from "../components/homepage/Learn";
import Contribute from "../components/homepage/Contribute";
import TopicsGrid from "../components/TopicsGrid/TopicsGrid";

function Homepage() {
  return (
    <div className="container mx-auto">
      {/* <Header /> */}
      <NavBar />
      <Hero />
      <TopicsGrid />
      <Learn />
      <Contribute />
      <Footer />
    </div>
  );
}

export default Homepage;
