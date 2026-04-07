import * as React from 'react';
import PageTemplate from './PageTemplate';
import { BsYoutube } from 'react-icons/bs';

export default function DevelopersLibrary({ title, description, icon, point1, point2, point3, link }) {
    const topic = "Frontend";
    const cards = [
        {
            title: 'Transcriptions To Text',
            description: "Grab the transcript from, say YouTube, and paste it into this tool to get clean, usable text",
            icon: BsYoutube,
            iconColor: "#ff0000",

        }]
    return (
        <>
            <PageTemplate topic={topic} cards={cards} title={title} description={description} icon={icon} point1={point1} point2={point2} point3={point3} link={link} />

        </>
    );
}
