import * as React from 'react';
import Footer from "../components/footer/Footer";
import PageHeader from "../components/pageHeader/PageHeader";
import NavBar from "../components/navbar/Navbar";
import { leetCodeData } from '../data/leetCode';
import "./pages.css";
import TailwindTable from '../components/TailwindTable/TailwindTable';

export default function Leetcode() {

	return (
		<div className='leetCode text-blue dark:text-white'>
			<NavBar />
			<PageHeader
				title="LeetCode"
				description="Under Construction!!"
				image="https://raw.githubusercontent.com/mathcodes/contentfordevelopers/main/src/assets/Images/LeetCode_logo_black.png"
			/>

			<div className=" text-blue dark:text-white" text-white>
				<TailwindTable data={leetCodeData} />
			</div>
			<Footer />
		</div>
	);
}
