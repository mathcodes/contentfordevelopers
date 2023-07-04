import * as React from 'react';
import { useState } from 'react';
import PageTemplate from './PageTemplate';
import { FaHtml5, FaCss3, FaJs, FaReact, FaYoutube, FaDatabase } from 'react-icons/fa';
import { BsLayoutWtf, BsStack, BsYoutube } from 'react-icons/bs';
import ToolsLinks from '../components/tools/ToolsLinks';
import YouTubeToText from '../components/tools/YouTubeToText/YouTubeToText'
import CSSInterpreter from '../components/tools/CSSInterpreter/CSSInterpreter'

export default function OnlineTools({ title, description, icon, point1, point2, point3 }) {
    const [showToolsLinks, setShowToolsLinks] = useState(false);
    const FEData = [
        {
            title: 'test',
            description: "Grab the transcript from, say YouTube, and paste it into this tool to get clean, usable text",
            icon: BsYoutube,
            iconColor: "#ff0000",
        },
    ]
    const topic = "Online Tools";
    const link = ToolsLinks;
    const cards = [
        {
            title: 'Transcriptions To Text',
            description: "Grab the transcript from, say YouTube, and paste it into this tool to get clean, usable text",
            icon: BsYoutube,
            iconColor: "#ff0000",
            credits: "Jon Christie",
            creditsLink: "jonchristie.net",
            component: <YouTubeToText />
        },
        {
            title: 'CSS Selector Interpreter',
            description: "Enter a CSS selector and see what it selects",
            icon: FaCss3,
            iconColor: "#244bdd",
            credits: "Evan Winston",
            creditsLink: "https://codepen.io/IrrelevantEvan",
            component: <CSSInterpreter />
        },
    ]

    return (
        <>
        {{showToolsLinks} ? (
        <>
            {cards.map((card) => (
                <div className="flex flex-col items-center justify-center bg-gray-100 rounded-lg shadow-lg p-6 m-4">
                    <PageTemplate
                    onclick={() => setShowToolsLinks(true)}
                    topic={topic} cards={cards} title={title} description={description} icon={icon} point1={point1} point2={point2} point3={point3} link={link} />

                </div>
            ))}
                </>
            ) : (
            <ToolsLinks data={FEData} color={(cards.iconColor)} />
            )}
        </>
        );
}
