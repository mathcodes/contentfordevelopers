import React from "react";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/Navbar";
import Hero from "../components/homepage/hero/Hero";
import PlatformList from "../components/homepage/platformList/PlatformList"
import ContributorSection from "../components/homepage/contributorSection/ContributorSection";

function Homepage() {
    return (
        <div className="container mx-auto">
            {/* <Header /> */}
            <NavBar />
            <Hero/>
            <PlatformList/>
            <ContributorSection/>
            <Footer />  
        </div>
    );
}

export default Homepage;
