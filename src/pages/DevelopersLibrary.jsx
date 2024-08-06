import { FaHtml5, FaCss3, FaJs, FaReact, FaYoutube, FaDatabase } from 'react-icons/fa';
import { BsLayoutWtf, BsStack } from 'react-icons/bs';

const developersLibrary = {
    title: 'Developers Library',
    description1: `Welcome to the Developers Library, your one-stop hub for accessing the most valuable resources and tools in the world of web development.This library is meticulously curated to include tutorials, articles, and guides that cater to both beginners and experienced developers. Whether you are looking to enhance your frontend skills, dive into backend programming, or explore the intricacies of HTML, CSS, JavaScript, and React, you will find the best resources available today right here. `,
    description2: `In addition to development fundamentals, the Developers Library also offers links to essential tools and YouTube tutorials that provide practical, hands-on learning experiences. `,
    description3: `From debugging and optimization tools to comprehensive video tutorials on advanced topics, this library ensures you have everything you need to stay updated and excel in your development journey. Explore our categorized topics below to start building, learning, and mastering new skills.`,
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
