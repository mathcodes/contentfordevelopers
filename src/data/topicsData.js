import { HiCode } from 'react-icons/hi';
import { GiDatabase, GiGraduateCap, GiArtificialIntelligence } from 'react-icons/gi';
import { VscLibrary } from 'react-icons/vsc';
import { FaClipboardCheck } from 'react-icons/fa';

export const topics = [
  {
    id: 0,
    title: "Developer's Library",
    description: "Resources for learning HTML, CSS, JavaScript, React, Angular, TypeScript — you name it. It's all here, or coming with your help!",
    point1: "A place for developers to learn and grow",
    point2: "Share your knowledge, or learn from others",
    point3: "Build community and level up your resume",
    link: "/DevelopersLibrary",
    icon: GiGraduateCap,
  },
  {
    id: 1,
    title: 'Coding Conventions',
    description: 'Best practices and design patterns for writing efficient, maintainable, and scalable code.',
    point1: 'Coding best practices and design patterns',
    point2: 'Code refactoring, optimization, and performance',
    point3: 'Code review, documentation, and version control',
    link: '/codingconventions',
    icon: HiCode,
  },
  {
    id: 2,
    title: 'Frameworks & Libraries',
    description: 'Resources and tutorials for popular frameworks and libraries such as React, Angular, Vue.js, Django, and Spring.',
    point1: 'Compare and contrast different frameworks and libraries',
    point2: "Learn today's most popular frameworks and libraries",
    point3: 'Explore advanced features, pros and cons, and real-world use cases',
    link: '/frameworksandlibraries',
    icon: VscLibrary,
  },
  {
    id: 3,
    title: 'Accessibility & WCAG',
    description: 'Resources for making your websites and applications accessible to all users, including those with disabilities.',
    point1: 'Understand the importance of accessibility and WCAG compliance',
    point2: 'Learn how to build accessible websites and applications',
    point3: 'Explore accessibility tooling and auditing techniques',
    link: '/accessibilityandwcagguidelines',
    icon: FaClipboardCheck,
  },
  {
    id: 4,
    title: 'DSA',
    description: 'Practice problems and strategies to sharpen your data structures and algorithms skills for technical interviews.',
    point1: 'Practice LeetCode coding challenges and algorithms',
    point2: 'Improve problem-solving and critical thinking',
    point3: 'Learn to communicate your thought process clearly',
    link: '/dsa',
    icon: GiDatabase,
  },
  {
    id: 5,
    title: 'AI & The Future',
    description: 'Resources discussing AI and its impact on our future, including ethical issues and concerns.',
    point1: 'Understand the basic concepts of AI and machine learning',
    point2: 'Explore the ethical implications of AI',
    point3: 'Learn how to use LLMs and AI to solve real-world problems',
    link: '/aiandthefuture',
    icon: GiArtificialIntelligence,
  },
];

