import React from "react";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/Navbar";
import Hero from "../components/homepage/hero/Hero";
import Learn from "../components/homepage/Learn";
import Contribute from "../components/homepage/Contribute";

function Homepage() {
  return (
    <div className="container mx-auto flex flex-col min-h-screen">
      {/* <Header /> */}
      <NavBar />
      <main className="flex-1">
        <Hero
          title= "ContentForDevelopers!"
          preTitle='Welcome to&nbsp;'
          description="An open-source project aimed at providing learning tools for
        developers that cover a wide range of learning styles."
        />
        {/* <TopicsGrid /> */}
        <Learn />
        <Contribute />
      </main>
      <Footer />
    </div>
  );
}

export default Homepage;
