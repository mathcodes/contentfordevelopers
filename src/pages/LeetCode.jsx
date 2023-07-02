import * as React from 'react';
import Footer from "../components/footer/Footer";
import PageHeader from "../components/pageHeader/PageHeader";
import NavBar from "../components/navbar/Navbar";
import { leetCodeData } from '../data/leetCode';
import "./pages.css";
import TailwindTable from '../components/TailwindTable/TailwindTable';

const makeTailWindTableVisible = () => {
	document.getElementById("tailwindTable").style.display = "block";
}

export default function Leetcode() {

	return (
		<div className='leetCode text-blue dark:text-white'>
			<NavBar />
			<PageHeader
				title="LeetCode"
				description="Under Construction!!"
				image="https://raw.githubusercontent.com/mathcodes/contentfordevelopers/main/src/assets/Images/LeetCode_logo_black.png"
			/>
	<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onclick={makeTailWindTableVisible}>
		LeetCode Problem
	</button>
			<div className="tailwindTable text-blue dark:text-white" text-white style={{display:'hidden'}}>
				<TailwindTable data={leetCodeData} />
			</div>
			<Footer />
		</div>
	);
}
