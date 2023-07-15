import React from "react";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/Navbar";
import Hero from "../components/homepage/hero/Hero";
import Learn from "../components/homepage/Learn";
import Contribute from "../components/homepage/Contribute";

function Homepage() {
  return (
    <div className="container mx-auto">
      <NavBar />
      <Hero />
      <Learn />
      <Contribute />
      <Footer />
    </div>
  );
}

export default Homepage;
