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
    link: '/frameworkslibraries',
    icon: VscLibrary
  },
  {
    id: 3,
    title: 'Accessibility and WCAG Compliance',
    description: 'Resources for making your websites and applications accessible to all users, including those with disabilities.',
    point1: 'Understand the importance of accessibility and WCAG compliance',
    point2: 'Learn how to make your websites and applications accessible, including sites with AI and machine learning',
    point3: 'Explore accessibility features and tools',
    link: '/accessibilitywcag',
    icon: FaClipboardCheck
  },
  {
    id: 4,
    title: 'AI & The Future',
    description: 'Resources discussing AI and its impact on our future, including ethical issues and concerns.',
    point1: 'Understand the basic concepts of AI and machine learning',
    point2: 'Explore the ethical implications of AI and machine learning',
    point3: 'Learn how to use LLMs, AI, and machine learning to solve real-world problems',
    link: '/aiFuture',
    icon: GiArtificialIntelligence
  },
  {
    id: 5,
    title: 'DSA',
    description: 'A collection of practice questions from LeetCode to help developers prepare for technical interviews.',
    point1: 'Practice LeetCode coding challenges and algorithms',
    point2: 'Improve problem-solving and critical thinking skills',
    point3: 'Learn how to effectively communicate your thought process',
    link: '/dsa',
    icon: GiDatabase
  },
    // {
  //   id: 1,
  //   title: 'Coding Best Practices and Design Patterns',
  //   description: 'Best practices and design patterns for writing efficient, maintainable, and scalable code.',
  //   point1: 'Follow the SOLID principles',
  //   point2: 'Use design patterns such as Singleton and Factory',
  //   point3: 'Write clean, readable, and self-documenting code',
  //   link: 'https://www.toptal.com/software/solid-principles',
  //   icon: HiCode
  // },
  // {
  //   id: 2,
  //   title: 'Tutorials for Programming Languages',
  //   description: 'Online tutorials and resources for learning popular programming languages such as Java, Python, and JavaScript.',
  //   point1: 'Learn the basics of the language syntax and data types',
  //   point2: 'Practice writing simple programs and projects',
  //   point3: 'Explore advanced concepts such as multithreading and asynchronous programming',
  //   link: 'https://www.tutorialspoint.com/index.htm',
  //   icon: HiOutlinePencilAlt
  // },
  // {
  //   id: 3,
  //   title: 'Frameworks and Libraries',
  //   description: 'Resources and tutorials for popular frameworks and libraries such as React, Angular, Vue.js, Django, and Spring.',
  //   point1: 'Learn the basics of the framework or library',
  //   point2: 'Practice building projects and applications with it',
  //   point3: 'Explore advanced features and use cases',
  //   link: 'https://reactjs.org/docs/getting-started.html',
  //   icon: VscLibrary
  // },
  // {
  //   id: 4,
  //   title: 'DevOps and Software Development Methodologies',
  //   description: 'Best practices for software development and deployment, including Agile, Scrum, and Kanban methodologies.',
  //   point1: 'Collaborate effectively with team members',
  //   point2: 'Deliver high-quality software in a timely manner',
  //   point3: 'Continuously improve processes and workflows',
  //   link: 'https://www.atlassian.com/software-development/what-is-devops',
  //   icon: SiAzuredevops
  // },
  // {
  //   id: 5,
  //   title: 'Code Debugging and Troubleshooting Techniques',
  //   description: 'Techniques and tools for debugging and troubleshooting common software issues.',
  //   point1: 'Use debuggers and logging tools to identify issues',
  //   point2: 'Practice writing test cases to catch bugs early',
  //   point3: 'Collaborate with team members to solve complex issues',
  //   link: 'https://www.guru99.com/debugging-best-practices.html',
  //   icon: TbBugOff
  // },
  // {
  //   id: 6,
  //   title: 'Tips and Tricks for Performance Optimization',
  //   description: 'Best practices for optimizing software performance, including code optimization and system tuning.',
  //   point1: 'Use caching and compression techniques to reduce load times',
  //   point2: 'Optimize database queries and network requests',
  //   point3: 'Monitor and measure performance regularly to identify bottlenecks',
  //   link: 'https://dev.to/suyashpradhan/performance-optimization-techniques-for-web-developers-3da1',
  //   icon: CgPerformance
  // },
  // {
  //   id: 0,
  //   title: "Developer's Library",
  //   description: "Resources for learning HTML, CSS, JavaScript, React, Angular, Typescript.... you name it. It's all here, or coming with your help!",
  //   point1: "Consider this to be your Citadel, Enclave, Symposium, Refuge.",
  //   point2: "A place to learn, grow, and share. Your Pinnacle, Arcanum, your Confluence.",
  //   point3: "Your Developer's Library.",
  //   link: "https://www.youtube.com/watch?v=3qJWd2bqW2A",
  // },

  // {
  //   id: 7,
  //   title: 'Security-Related Topics',
  //   description: 'Resources and best practices for secure coding and cryptography, including techniques for preventing common security vulnerabilities.',
  //   point1: 'Use secure coding practices such as input validation and output encoding',
  //   point2: 'Encrypt sensitive data using cryptographic algorithms',
  //   point3: 'Stay up-to-date with security news and trends',
  //   link: 'https://www.owasp.org/index.php/Main_Page',
  //   icon: MdOutlineSecurity
  // },
  // {
  //   id: 8,
  //   title: 'Database Management and Data Analytics',
  //   description: 'Resources and tutorials for managing and analyzing data using popular database management systems and analytics tools.',
  //   point1: 'Design and implement efficient database schemas',
  //   point2: 'Use SQL or NoSQL query languages to retrieve data',
  //   point3: 'Analyze and visualize data using tools such as Tableau or Power BI',
  //   link: 'https://www.analyticsvidhya.com/learning-paths-data-science-business-analytics-business-intelligence-big-data/databases-sql-and-data-warehouses/',
  //   icon: FaDatabase
  // },
  // {
  //   id: 9,
  //   title: 'Machine Learning and Artificial Intelligence',
  //   description: 'Resources and tutorials for learning and implementing machine learning and artificial intelligence algorithms.',
  //   point1: 'Understand the basic concepts and techniques of machine learning',
  //   point2: 'Choose the appropriate algorithms and models for your use case',
  //   point3: 'Train and test models using data sets',
  //   link: 'https://www.coursera.org/courses?query=machine%20learning',
  //   icon: GiArtificialIntelligence
  // },
  // {
  //   id: 10,
  //   title: 'Internet of Things (IoT) and Cloud Computing',
  //   description: 'Resources and tutorials for developing and deploying applications on cloud platforms and IoT devices.',
  //   point1: 'Understand the basic concepts of cloud computing and IoT',
  //   point2: 'Develop and deploy applications on cloud platforms such as AWS or Azure',
  //   point3: 'Build and program IoT devices using platforms such as Raspberry Pi or Arduino',
  //   link: 'https://aws.amazon.com/what-is-cloud-computing/',
  //   icon: SlCloudUpload
  // },
  // {
  //   id: 11,
  //   title: 'Resume and Cover Letter Writing',
  //   description: 'Tips and tricks on crafting an effective resume and cover letter for a developer position, including common mistakes to avoid and best practices to follow.',
  //   point1: 'Highlight your relevant experience and skills',
  //   point2: 'Tailor your resume and cover letter to the specific job you are applying for',
  //   point3: 'Proofread and edit your resume and cover letter carefully',
  //   link: 'https://www.thebalancecareers.com/it-developer-resume-examples-2071452',
  //   icon: TbPencil
  // },

];

