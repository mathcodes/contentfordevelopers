import * as React from 'react';

import Hero from "../components/homepage/hero/Hero";
import Footer from "../components/footer/Footer";
import PageHeader from "../components/pageHeader/PageHeader";
import NavBar from "../components/navbar/Navbar";
import { leetCodeData } from '../data/leetCode';
import "./pages.scss";
import TailwindTable from '../components/TailwindTable/TailwindTable';

export default function Leetcode() {
	DSAData = [
		{
			title: 'LeetCode',
			tag: 'Easy',
		},
		{
			title: '14 Front End Interview Patterns to Mastery',
		},
		{
			title: 'Data Structures and Algorithms',
		},
	]


	return (
		<div className='text-blue dark:text-white'>
			<NavBar />
			<Hero
				title="Data Structures and Algorithms"
				preTitle='Welcome to&nbsp;'
				description="Choose the problem set you'd like to explore!"
			/>
				{/* // create responsive grid of buttons with topics being mapped using DSAData; */}
			{DSAData.map((item, index) => {
				return (
					<div className="flex flex-col items-center justify-center w-full h-full">
						<button className="px-4 py-2 font-bold text-white rounded bg-gradient-to-r from-blue to-platinum">
							<a href="/">{item.title}</a>
						</button>
					</div>
				)
			})}

			<Footer />
		</div>
	);
}