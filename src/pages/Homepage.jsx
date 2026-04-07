import React from "react";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/Navbar";
import Hero from "../components/homepage/hero/Hero";
import Learn from "../components/homepage/Learn";
import Contribute from "../components/homepage/Contribute";

function Homepage() {
  return (
    <div className="container mx-auto">
      {/* <Header /> */}
      <NavBar />
      <Hero
        title= "ContentForDevelopers!"
        preTitle='Welcome to&nbsp;'
        description="An open-source project aimed at providing learning tools for
        developers that cover a wide range of learning styles."
      />
      {/* <TopicsGrid /> */}
      <Learn />
      <Contribute />
      <Footer />
    </div>
  );
}

export default Homepage;
