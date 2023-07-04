import React from 'react';
import mdxPages from '../components/mdxpages/mdxPages.mdx';
import MDXContent from '../components/mdxpages/mdxContent.mdx'; // Import the MDX file
import Grid from '../components/grid/Grid';


import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { yellow, red, green } from '@mui/material/colors';
import { Contributor } from "../components/contributor/Contributor";
import Footer from "../components/footer/Footer";
import Table from "../components/table/Table";
import NavBar from "../components/navbar/Navbar";
import { codeWarsData } from '../data/codeWars.js';
import LinkIcon from '@mui/icons-material/Link';
import "./pages.css";
import TailwindTable from '../components/TailwindTable/TailwindTable';
import { GiGraduateCap } from 'react-icons/gi';

export default function PageTemplate({ cards, title, description, icon, point1, point2, point3, link }) {

	return (


<div className='leetCode text-blue dark:text-white'>
    <NavBar />
    <div className="container mx-auto px-4 sm:px-8 min-h-screen">
        <div className='flex items-left justify-center flex-col min-h-100 py-5 px-5'>
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="mt-4">{description}</p>
            <Grid data={cards} link={link}/>
        </div>


    </div>
    <Footer />
</div>

	);
}