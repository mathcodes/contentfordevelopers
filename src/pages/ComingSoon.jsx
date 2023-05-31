import React from "react";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/Navbar";
import Hero from "../components/homepage/hero/Hero";
import PlatformList from "../components/homepage/platformList/PlatformList";
import ContributorSection from "../components/homepage/contributorSection/ContributorSection";
import Learn from "../components/homepage/Learn";
import Contribute from "../components/homepage/Contribute";
import TopicsGrid from "../components/TopicsGrid/TopicsGrid";

function ComingSoon() {
  return (
    <div className="container mx-auto">
      {/* <Header /> */}
      <NavBar />
      <Hero
        title= "ContentForDevelopers!"
        preTitle='Welcome to&nbsp;'
        description="THIS PART OF THE SITE IS UNDER CONSTRUCTION 🚧!!! THANK YOU FOR YOUR PATIENCE 🙏"
      />

      <button className="px-4 py-2 font-bold text-white rounded bg-gradient-to-r from-blue to-platinum">
        <a href="/">Back Home</a>
      </button>
      <Footer />
    </div>
  );
}

export default ComingSoon;