import React from "react";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/Navbar";
import Hero from "../components/homepage/hero/Hero";
import Learn from "../components/homepage/Learn";
import Contribute from "../components/homepage/Contribute";

function Homepage() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1">
        <Hero
          preTitle="Welcome to"
          title="ContentForDevelopers"
          description="An open-source project aimed at providing learning tools for developers that cover a wide range of learning styles."
        />
        <Learn />
        <Contribute />
      </main>
      <Footer />
    </div>
  );
}

export default Homepage;
