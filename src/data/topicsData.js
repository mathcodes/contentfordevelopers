import { HiCode, HiOutlinePencilAlt } from 'react-icons/hi'
import { SiDjango } from 'react-icons/si'
import { TbBugOff, TbPencil } from 'react-icons/tb'
import { CgPerformance } from 'react-icons/cg'
import { MdOutlineSecurity } from 'react-icons/md'
import { FaDatabase } from 'react-icons/fa'
import { GiDatabase, GiGraduateCap, GiArtificialIntelligence } from 'react-icons/gi'
import { SlCloudUpload } from 'react-icons/sl'
import { BsClipboardPlus, BsSearch } from 'react-icons/bs'
import { SiAzuredevops  } from 'react-icons/si'
// import { HiUsers } from 'react-icons/hi'
// import { VscAzureDevops } from 'react-icons/vsc'
import { VscLibrary } from 'react-icons/vsc'
import { FaClipboardCheck } from 'react-icons/fa'


export const topics = [
  {
    id: 0,
    title: "Developer's Library",
    description: "Resources for learning HTML, CSS, JavaScript, React, Angular, Typescript.... you name it. It's all here, or coming with your help!",
    point1: "A place for developers to learn and grow",
    point2: "Share your knowledge, or learn from others",
    point3: "Be a part of a community and build up that resume",
    link: "/DevelopersLibrary",
    icon: GiGraduateCap
  },
  {
    id: 1,
    title: 'Coding Conventions',
    description: 'Best practices and design patterns for writing efficient, maintainable, and scalable code.',
    point1: 'Coding Best Practices and Design Patterns',
    point2: 'Code Refactoring, Optimization, and Performance',
    point3: 'Code Review, Documentation, and Version Control',
    link: '/codingconventions',
    icon: HiCode
  },
  {
    id: 2,
    title: 'Frameworks & Libraries',
    description: 'Resources and tutorials for popular frameworks and libraries such as React, Angular, Vue.js, Django, and Spring.',
    point1: 'Compare and contrast different frameworks and libraries',
    point2: 'Learn today\'s most popular frameworks and libraries',
    point3: 'Explore advanced features and use cases, pros and cons, and more',
    link: '/frameworksandlibraries',
    icon: VscLibrary
  },
  {
    id: 3,
    title: 'Accessibility and WCAG Compliance',
    description: 'Resources for making your websites and applications accessible to all users, including those with disabilities.',
    point1: 'Understand the importance of accessibility and WCAG compliance',
    point2: 'Learn how to make your websites and applications accessible, including sites with AI and machine learning',
    point3: 'Explore accessibility features and tools',
    link: '/accessibilityandwcag',
    icon: FaClipboardCheck
  },
  {
    id: 4,
    title: 'DSA',
    description: 'A collection of practice questions from LeetCode to help developers prepare for technical interviews.',
    point1: 'Practice LeetCode coding challenges and algorithms',
    point2: 'Improve problem-solving and critical thinking skills',
    point3: 'Learn how to effectively communicate your thought process',
    link: '/dsa',
    icon: GiDatabase
  },
  {
    id: 5,
    title: 'AI & The Future',
    description: 'Resources discussing AI and its impact on our future, including ethical issues and concerns.',
    point1: 'Understand the basic concepts of AI and machine learning',
    point2: 'Explore the ethical implications of AI and machine learning',
    point3: 'Learn how to use LLMs, AI, and machine learning to solve real-world problems',
    link: '/aiandthefuture',
    icon: GiArtificialIntelligence
  },
  {
    id: 6,
    title: 'Tools',
    description: 'Online tools for developers, including code convertersm, editors, IDEs, and more.',
    point1: 'Converters, Editors, IDEs, and more',
    point2: 'Tools for developers of all skill levels',
    point3: 'Learn how to use tools to improve your workflow',
    link: '/onlinetools',
    icon: BsClipboardPlus
  },
]