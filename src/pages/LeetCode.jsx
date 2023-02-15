import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { yellow, red, green } from '@mui/material/colors';
import { Contributor } from "../components/contributor/Contributor";
import Footer from "../components/footer/Footer";
import Table from "../components/table/Table";
import NavBar from "../components/navbar/Navbar";
import { leetCodeData } from '../data/leetCode';
import LinkIcon from '@mui/icons-material/Link';
import "./LeetCode.scss";
import TailwindTable from '../components/TailwindTable/TailwindTable';

export default function Leetcode() {

	return (
		<div className='leetCode text-blue dark:text-white'>
			<NavBar />
			<div className='flex items-left justify-center flex-col min-h-100 py-5 px-5'>

			</div>
			<div className="flex px-0">
				<div className="w-1/3 px-0">
					<img src="https://raw.githubusercontent.com/mathcodes/contentfordevelopers/main/src/assets/Images/LeetCode_logo_black.png" alt="LeetCode Logo" height="20px" />
				</div>
				<div className="w-2/3 px-0 ">
								{/* HOVER TITLE
			note: added the yellow from LeetCode logo to config 'lcyellow: "#f79f1bff"'*/}
				<div className='flex  flex-row   py-5 px-0'><h1 className='text-8xl justify-center hover:text-lcyellow'>L</h1><h1 className='text-8xl justify-center hover:text-accent2'>e</h1><h1 className='text-8xl justify-center hover:text-accent'>e</h1><h1 className='text-8xl justify-center hover:text-accent2'>t</h1><h1 className='text-8xl justify-center hover:text-lcyellow'>C</h1><h1 className='text-8xl justify-center hover:text-accent2'>o</h1><h1 className='text-8xl justify-center hover:text-lcyellow'>d</h1><h1 className='text-8xl justify-center hover:text-accent2'>e</h1></div>

					<h3>Choose the problem you'd like to explore!</h3>
				</div>
			</div>

			<div className=" text-blue dark:text-white" text-white>
				<TailwindTable />
			</div>
			<Footer />
		</div>
	);
}
