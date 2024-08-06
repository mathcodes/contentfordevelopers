import { FaHtml5, FaCss3, FaJs, FaReact, FaYoutube, FaDatabase } from 'react-icons/fa';
import { BsLayoutWtf, BsStack } from 'react-icons/bs';

const developersLibrary = {
    title: 'Developers Library',
    description: "Links to today's best development resources",
    icon: BsLayoutWtf,
    iconColor: "#db11a9",
    point1: "Point 1",
    point2: "Point 2",
    point3: "Point 3",
    link: "https://example.com/developers-library",
    cards: [
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
};

export default developersLibrary;
