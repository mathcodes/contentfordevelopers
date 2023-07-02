import * as React from 'react';
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
import { VscLibrary } from 'react-icons/vsc';
import { GiDatabase } from 'react-icons/gi'
import Grid from '../components/grid/Grid'


export default function DSA({ title, description, Icon, point1, point2, point3, link }) {
    const cards = [
        {
            title: 'Card 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            title: 'Card 2',
            description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            title: 'Card 3',
            description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        // Add more cards as needed
    ];
    return (


        <div className='leetCode text-blue dark:text-white'>
            <NavBar />
            <div className="container mx-auto px-4 sm:px-8 min-h-screen">
                <div className='flex items-left justify-center flex-col min-h-100 py-5 px-5'>
                    <h1 className="text-3xl font-bold flex"><GiDatabase />  {title}</h1>
                    <p className="mt-4">{description}</p>
                    <ul className="mt-4 flex flex-col space-y-2">
                        <li>{point1}</li>
                        <li>{point2}</li>
                        <li>{point3}</li>
                    </ul>

                </div>
                <div className="flex px-0">
                    <div className="w-1/3 px-6">
                        <img src="/CforD2.png" alt="LeetCode Logo" className="w-4" />
                    </div>
                    <div className="w-2/3 px-6">
                        <h3 className="px-6">Under Construction!!</h3>
                    </div>
                </div>
            </div>
            <div>
            {cards.map((index) => {
                <Grid item xs={12} sm={6} md={4} key={index} data={cards} title={title} description={description} />
            })}
            </div>
            <Footer />
        </div>

    );

}