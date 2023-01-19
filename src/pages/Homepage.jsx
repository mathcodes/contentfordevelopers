import React from "react";
import { Contributor } from "../components/contributor/Contributor";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/Navbar";
import PlatformCard from "../components/card/PlatformCard";
import Header from "../components/header/Header";
import "./Homepage.scss";

function Homepage() {
    return (
        <div className='homepage'>
            <Header />
            <NavBar />

            <div className='siteDesc'>
                <p>
                    Welcome to ContentForDevelopers! This is an open-source project aimed at providing learning tools for developers that cover a wide range of learning styles. The devoted team behind this project have all been through and continue to perservere through learning new content, technology, updates, languages, frameworks, problem-solving strategies, frontend & backend archtiecture, and so much more. Now we are all giving back to the community in the most helpful way we can think of: providing FREE, UP-TO-DATE, and DIVERSE methods to learn the skills needed to make it in this industry!
                    <hr />
                    Want to join the team?!? Anyone can contribute by visiting the GitHub Repo! We would love to have you on board and welcome all levels of experience. Jon makes sure to keep a handful of 'good first issue' options available, so give it a shot, and if you're new, we offer assistance to walk you through the process. Become a contributor TODAY and start becoming part of the community!
                </p>
            </div>

            <div className="platform_wrapper">
                <PlatformCard title="Leetcode" href='/leetcode'/>
                <PlatformCard title="HackerRank" href='/itempage'/>
                <PlatformCard title="CodeWars" href='/codewars'/>
                <PlatformCard title="Data Structures & Algorithms" href='/dsa'/>
                <PlatformCard title="Notes and Resources" href='/notesandresources'/>
            </div>

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
