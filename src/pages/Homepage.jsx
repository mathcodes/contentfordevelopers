import React from "react";
import { Contributor } from "../components/contributor/Contributor";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/Navbar";
import Header from "../components/header/Header";
import Hero from "../components/homepage/hero/Hero";
import PlatformList from "../components/homepage/platformList/PlatformList"
import "./Homepage.scss";

function Homepage() {
    return (
        <div>
            {/* <Header /> */}
            <NavBar />
            <Hero/>
            <PlatformList/>

            <section className="contributor_section">
                <div className="desc">
                    <h1>Contributors</h1>
                </div>

                <div className="contributors_wrapper">
                    <Contributor />
                </div>
            </section>

            <footer className="footer">
                <Footer />
            </footer>
        </div>
    );
}

export default Homepage;
