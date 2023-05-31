import React from "react";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/Navbar";
import Hero from "../components/homepage/hero/Hero";
// import bestPractices from "../data/topicsData";
import BestPracticesList from "../components/BestPracticesList/BestPracticesList";

function CodingBestPractices() {
  return (
    <div className='leetCode text-blue dark:text-white'>

  		<NavBar />
      <Hero
        title= "Coding Best Practices!"
        preTitle='Welcome to&nbsp;'
        description="For start, we have broken down the best practices into 10 categories."
      />
      <BestPracticesList />
      <Footer />
    </div>
  );
}

export default CodingBestPractices;
