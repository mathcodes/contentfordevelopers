import * as React from 'react';
import PageTemplate from '../../pages/PageTemplate';
import Grid from '../grid/Grid';
import { FaHtml5, FaCss3, FaJs, FaReact, FaYoutube, FaDatabase } from 'react-icons/fa';
import { BsLayoutWtf, BiSolidData, BsYoutube  } from 'react-icons/bs';
import YouTubeToText from './YouTubeToText';

export default function DevelopersLibrary({ title, description, icon, point1, point2, point3, link }) {
    const topic = "Online Tools";
    const cards = [
        {
            title: 'YouTube Transcript Converter',
            description: "Paste the text straight from youtube's transcrips and to get clean, usable text",
            icon: BsYoutube,
            iconColor: "#db11a9",
        },

        // Add more cards as needed
      ];
    return (
        <>
            <YouTubeToText />
        </>
    );
}