import * as React from 'react';
import { useState } from 'react';
import PageTemplate from './PageTemplate';
import { FaHtml5, FaCss3, FaJs, FaReact, FaYoutube, FaDatabase } from 'react-icons/fa';
import { BsLayoutWtf, BsStack, BsYoutube } from 'react-icons/bs';
import FELinks from '../components/links/FELinks'

export default function DevelopersLibrary({ title, description, icon, point1, point2, point3 }) {
    const [showTemplate, setShowFELinks] = useState(false);
    const topic = "Frontend";
    const link = FELinks;

    const cards = [
        {
            key: 1,
            title: 'Frontend',
            description: "Links to today's best frontend development resources",
            icon: BsLayoutWtf,
            iconColor: "#db11a9",
        },
        {
            key: 2,
            title: 'Backend',
            description: "Links to today's best backend development resources",
            icon: FaDatabase,
            iconColor: "#5a67ec",
        },
        {
            key: 3,
            title: 'HTML',
            description: "Links to today's best HTML resources",
            icon: FaHtml5,
            iconColor: "#dc4a24",
        },
        {
            key: 4,
            title: 'CSS',
            description: "Links to today's best CSS resources",
            icon: FaCss3,
            iconColor: "#244bdd",
        },
        {
            key: 5,
            title: 'JavaScript',
            description: "Links to today's best JavaScript resources",
            icon: FaJs,
            iconColor: "#e8d44d",
        },
        {
            key: 6,
            title: 'React',
            description: "Links to today's best React resources",
            icon: FaReact,
            iconColor: "#61dafb",

        },
        {
            key: 7,
            title: 'YouTube Tutorials',
            description: "Links to today's best YouTube tutorials",
            icon: FaYoutube,
            iconColor: "#ff0000",
        },
        {
            key: 8,
            title: 'Tools',
            description: "A collection of homemade, ready-to-use tools",
            icon: BsStack,
            iconColor: "#d35400",
        }
    ]


    return (
        <>
            {showTemplate} ? (
            <PageTemplate
                onclick={() => setShowFELinks(true)}
                topic={topic} cards={cards} title={title} description={description} icon={icon} point1={point1} point2={point2} point3={point3} link={link} />

            ) : (
            <>

                    <FELinks data={cards} color={(cards.iconColor)} />

            </>
            )
        </>
    );
}
