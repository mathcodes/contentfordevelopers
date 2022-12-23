import React from "react";
// import Cards from '../components/Card'
import { Contributor } from "../components/contributor/Contributor";
import Footer from "../components/footer/Footer";
import ItemCard from "../components/card/ItemCard";
import NavBar from "../components/navbar/Navbar";

import "./LeetCode.scss";

function LeetCode() {
	

	return (
		<div className='leetCode'>
			<NavBar/>
			<div className='banner'>
				<h2>
					LeetCode Problems
					<hr />
				</h2>
				<h3>Choose the problem you'd like to explore!</h3>
			</div>
			
			<div className="item_wrapper">
			<ItemCard />
				
			</div>

			<section className="contributor_section">
				<div className="desc">
					<h1>Our Contributors</h1>
					<h3>Who constantly try to make the website better</h3>
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

export default LeetCode;
