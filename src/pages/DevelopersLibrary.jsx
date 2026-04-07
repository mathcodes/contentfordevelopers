import * as React from 'react';
import { useState } from 'react';
import PageTemplate from './PageTemplate';
import { FaHtml5, FaCss3, FaJs, FaReact, FaYoutube, FaDatabase } from 'react-icons/fa';
import { BsLayoutWtf, BsStack, BsYoutube } from 'react-icons/bs';
import FELinks from '../components/links/FELinks';

export default function DevelopersLibrary({ title, description, icon, point1, point2, point3 }) {
    const [showFELinks, setShowFELinks] = useState(false);

    const topic = "Frontend";
    const link = FELinks;
    const FEData = [
        {
            title: 'Transcriptions To Text',
            description: "Grab the transcript from, say YouTube, and paste it into this tool to get clean, usable text",
            icon: BsYoutube,
            iconColor: "#ff0000",
        },
    ]
    const cards = [
        {
            title: 'Frontend',
            description: "Links to today's best frontend development resources",
            icon: BsLayoutWtf,
            iconColor: "#db11a9",
        },
        {
            title: 'Backend',
            description: "Links to today's best backend development resources",
            icon: FaDatabase,
            iconColor: "#5a67ec",
        },
        {
            title: 'HTML',
            description: "Links to today's best HTML resources",
            icon: FaHtml5,
            iconColor: "#dc4a24",
        },
        {
            title: 'CSS',
            description: "Links to today's best CSS resources",
            icon: FaCss3,
            iconColor: "#244bdd",
        },
        {
            title: 'JavaScript',
            description: "Links to today's best JavaScript resources",
            icon: FaJs,
            iconColor: "#e8d44d",
        },
        {
            title: 'React',
            description: "Links to today's best React resources",
            icon: FaReact,
            iconColor: "#61dafb",

        },
        {
            title: 'YouTube Tutorials',
            description: "Links to today's best YouTube tutorials",
            icon: FaYoutube,
            iconColor: "#ff0000",
        },
        {
            title: 'Tools',
            description: "Links to today's best tools",
            icon: BsStack,
            iconColor: "#d35400",
        }
    ]


return (
        <>
            {showFELinks} ? (
            <>
                {cards.map((card) => (
                    <div className="flex flex-col items-center justify-center bg-gray-100 rounded-lg shadow-lg p-6 m-4">
                        <PageTemplate topic={topic} cards={cards} title={title} description={description} icon={icon} point1={point1} point2={point2} point3={point3} link={link} />
                        <h1 className="text-2xl font-semibold mb-4 p-5">Topics</h1>
                        <div className={"text-2xl font-semibold mb-4 p-5" + (cards.iconColor)}></div>
                    </div>
                ))}
                    </>
                ) : (
                <FELinks data={FEData} color={(cards.iconColor)} />
                )
            </>
            );
}
