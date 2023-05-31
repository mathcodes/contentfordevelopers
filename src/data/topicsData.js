import { HiCode, HiOutlinePencilAlt } from 'react-icons/hi'
import { SiDjango } from 'react-icons/si'
import { TbBugOff, TbPencil } from 'react-icons/tb'
import { CgPerformance } from 'react-icons/cg'
import { MdOutlineSecurity } from 'react-icons/md'
import { FaDatabase } from 'react-icons/fa'
import { GiArtificialIntelligence, GiGears } from 'react-icons/gi'
import { SlCloudUpload } from 'react-icons/sl'
import { BsClipboardPlus, BsSearch, BsDiagram2 } from 'react-icons/bs'
import { SiAzuredevops } from 'react-icons/si'
import { HiUsers } from 'react-icons/hi'
import { ImBooks } from 'react-icons/im'
import { GrPieChart } from 'react-icons/gr'


export const topics = [
  {
    id: 1,
    title: 'DSA - Technical Interview Practice',
    description: 'A collection of practice questions and coding challenges to help developers prepare for technical interviews.',
    point1: 'Practice coding challenges and algorithms',
    point2: 'Improve problem-solving and critical thinking skills',
    point3: 'Learn how to effectively communicate your thought process',
    link: '/DSA',
    icon: BsClipboardPlus
  },
  {
    id: 2,
    title: 'Coding Best Practices and Design Patterns',
    description: 'Best practices and design patterns for writing efficient, maintainable, and scalable code.',
    point1: 'Follow the SOLID principles',
    point2: 'Use design patterns such as Singleton and Factory',
    point3: 'Write clean, readable, and self-documenting code',
    link: '/CodingBestPractices',
    icon: HiCode
  },
  {
    id: 3,
    title: 'Tips and Tricks for Performance Optimization',
    description: 'Best practices for optimizing software performance, including code optimization and system tuning.',
    point1: 'Use caching and compression techniques to reduce load times',
    point2: 'Optimize database queries and network requests',
    point3: 'Monitor and measure performance regularly to identify bottlenecks',
    link: 'https://dev.to/suyashpradhan/performance-optimization-techniques-for-web-developers-3da1',
    icon: CgPerformance
  },
  {
    id: 4,
    title: 'Code Debugging and Troubleshooting Techniques',
    description: 'Techniques and tools for debugging and troubleshooting common software issues.',
    point1: 'Use debuggers and logging tools to identify issues',
    point2: 'Practice writing test cases to catch bugs early',
    point3: 'Collaborate with team members to solve complex issues',
    link: 'https://www.guru99.com/debugging-best-practices.html',
    icon: TbBugOff
  },
  {
    id: 5,
    title: 'Machine Learning and Artificial Intelligence',
    description: 'Resources and tutorials for learning and implementing machine learning and artificial intelligence algorithms.',
    point1: 'Understand the basic concepts and techniques of machine learning',
    point2: 'Choose the appropriate algorithms and models for your use case',
    point3: 'Train and test models using data sets',
    link: 'https://www.coursera.org/courses?query=machine%20learning',
    icon: GiArtificialIntelligence
  },
  {
    id: 6,
    title: 'Internet of Things (IoT) and Cloud Computing',
    description: 'Resources and tutorials for developing and deploying applications on cloud platforms and IoT devices.',
    point1: 'Understand the basic concepts of cloud computing and IoT',
    point2: 'Develop and deploy applications on cloud platforms such as AWS or Azure',
    point3: 'Build and program IoT devices using platforms such as Raspberry Pi or Arduino',
    link: 'https://aws.amazon.com/what-is-cloud-computing/',
    icon: SlCloudUpload
  },
  {
    id: 7,
    title: 'Tutorials for Programming Languages',
    description: 'Online tutorials and resources for learning popular programming languages such as Java, Python, and JavaScript.',
    point1: 'Learn the basics of the language syntax and data types',
    point2: 'Practice writing simple programs and projects',
    point3: 'Explore advanced concepts such as multithreading and asynchronous programming',
    link: 'https://www.tutorialspoint.com/index.htm',
    icon: HiOutlinePencilAlt
  },
  {
    id: 8,
    title: 'Frameworks and Libraries',
    description: 'Resources and tutorials for popular frameworks and libraries such as React, Angular, Vue.js, Django, and Spring.',
    point1: 'Learn the basics of the framework or library',
    point2: 'Practice building projects and applications with it',
    point3: 'Explore advanced features and use cases',
    link: 'https://reactjs.org/docs/getting-started.html',
    icon: ImBooks
  },
  {
    id: 9,
    title: 'DevOps and Software Development Methodologies',
    description: 'Best practices for software development and deployment, including Agile, Scrum, and Kanban methodologies.',
    point1: 'Collaborate effectively with team members',
    point2: 'Deliver high-quality software in a timely manner',
    point3: 'Continuously improve processes and workflows',
    link: 'https://www.atlassian.com/software-development/what-is-devops',
    icon: GiGears
  },
  {
    id: 11,
    title: 'Security-Related Topics',
    description: 'Resources and best practices for secure coding and cryptography, including techniques for preventing common security vulnerabilities.',
    point1: 'Use secure coding practices such as input validation and output encoding',
    point2: 'Encrypt sensitive data using cryptographic algorithms',
    point3: 'Stay up-to-date with security news and trends',
    link: 'https://www.owasp.org/index.php/Main_Page',
    icon: MdOutlineSecurity
  },
  {
    id: 12,
    name: "Software Testing and Quality Assurance",
    description: "Write automated tests to ensure your code works as expected.",
    useCases: [
      "To catch bugs and errors in your code early on.",
      "To ensure that your code works as expected in different scenarios.",
      "To make it easier to refactor your code later on.",
    ],
    techNeeded: ["Testing frameworks", "Mocking libraries"],
    transferableSkills: ["Critical thinking", "Attention to detail"],
  },
  {
    id: 13,
    title: 'Database Management and Data Analytics',
    description: 'Resources and tutorials for managing and analyzing data using popular database management systems and analytics tools.',
    point1: 'Design and implement efficient database schemas',
    point2: 'Use SQL or NoSQL query languages to retrieve data',
    point3: 'Analyze and visualize data using tools such as Tableau or Power BI',
    link: 'https://www.analyticsvidhya.com/learning-paths-data-science-business-analytics-business-intelligence-big-data/databases-sql-and-data-warehouses/',
    icon: FaDatabase
  },
  {
    id: 14,
    title: 'Resume and Cover Letter Writing',
    description: 'Tips and tricks on crafting an effective resume and cover letter for a developer position, including common mistakes to avoid and best practices to follow.',
    point1: 'Highlight your relevant experience and skills',
    point2: 'Tailor your resume and cover letter to the specific job you are applying for',
    point3: 'Proofread and edit your resume and cover letter carefully',
    link: 'https://www.thebalancecareers.com/it-developer-resume-examples-2071452',
    icon: TbPencil
  },
  {
    id: 15,
    title: 'Job Search Strategies',
    description: 'How to effectively search for developer job openings, including online job boards, networking events, and social media platforms.',
    point1: 'Create a strong online presence on LinkedIn and other relevant platforms',
    point2: 'Attend industry events and networking opportunities',
    point3: 'Apply for jobs that match your skills and experience',
    link: 'https://www.monster.com/career-advice/article/job-search-strategies-for-software-developers',
    icon: BsSearch
  },
  {
    id: 16,
    title: 'Interview Preparation',
    description: 'Tips and resources for preparing for a developer job interview, including sample interview questions and best practices for answering them.',
    point1: 'Research the company and the job position beforehand',
    point2: 'Prepare and practice your responses to common interview questions',
    point3: 'Dress professionally and arrive early to the interview',
    link: 'https://www.hackerrank.com/interview/interview-preparation-kit',
    icon: HiUsers
  },
];

// const interviewPrepTopics = [
//   {
//     id: 1,
//     title: 'Soft Skills',
//     description: 'Resources and advice on developing soft skills such as communication, teamwork, and leadership, which are critical for success in a developer job.',
//     point1: 'Learn effective communication and collaboration strategies',
//     point2: 'Develop leadership and management skills',
//     point3: 'Improve time management and organization skills',
//     link: 'https://blog.hubspot.com/marketing/soft-skills',
//     icon:'
//   },
//   {
//     id: 2,
//     title: 'Negotiating Offers',
//     description: 'Strategies for negotiating job offers, including salary, benefits, and other perks.',
//     point1: 'Research salary and compensation benchmarks for your role and experience level',
//     point2: 'Consider non-salary benefits such as healthcare, vacation time, and flexible work arrangements',
//     point3: 'Know your worth and be prepared to negotiate',
//     link: 'https://www.glassdoor.com/blog/how-to-negotiate-your-job-offer/',
//     icon:'
//   },
//   {
//     id: 3,
//     title: 'Industry Insights',
//     description: 'Insights into the job market and trends in the tech industry, including emerging technologies and in-demand skills.',
//     point1: 'Stay up-to-date with industry news and trends',
//     point2: 'Learn about emerging technologies and their potential impact on the job market',
//     point3: 'Identify in-demand skills and develop your skills accordingly',
//     link: 'https://www.builtin.com/industry-insights',
//     icon: SiBitcoincash
//   }
// ];

/*
Technical Interview Practice:

1DSA
2Coding Best Practices and Design Patterns
3Tips and Tricks for Performance Optimization
4Code Debugging and Troubleshooting Techniques
5Machine Learning and Artificial Intelligence
6Internet of Things (IoT) and Cloud Computing
7Tutorials for Programming Languages

Software Development:

9Frameworks and Libraries
9DevOps and Software Development Methodologies
10Security-Related Topics
11Database Management and Data Analytics
12Software Testing and Quality Assurance

Career Development:

14Resume and Cover Letter Writing
15Job Search Strategies
16Interview Preparation

*/


export const bestPractices = [
  {
    id: 1,
    name: "Write clean and maintainable code",
    description: "Write code that is easy to read, understand, and modify.",
    useCases: [
      "To make your code more maintainable and easier to work with.",
      "To reduce the likelihood of bugs and errors in your code.",
      "To make your code more scalable and easier to extend.",
    ],
    techNeeded: ["Code editors", "Linter"],
    transferableSkills: ["Problem solving", "Attention to detail"],
  },




{
  id: 2,
    name: "Use version control",
      description:
  "Keep track of changes to your code over time and collaborate with others more easily.",
    useCases: [
      "To keep track of changes to your code over time.",
      "To collaborate with others more easily.",
      "To revert to an earlier version of your code if something goes wrong.",
    ],
      techNeeded: ["Git", "GitHub", "GitLab"],
        transferableSkills: ["Teamwork", "Communication"],
  },
{
  id: 12,
    name: "Software Testing and Quality Assurance",
      description: "Write automated tests to ensure your code works as expected.",
        useCases: [
          "To catch bugs and errors in your code early on.",
          "To ensure that your code works as expected in different scenarios.",
          "To make it easier to refactor your code later on.",
        ],
          techNeeded: ["Testing frameworks", "Mocking libraries"],
            transferableSkills: ["Critical thinking", "Attention to detail"],
  },
{
  id: 4,
    name: "Document your code",
      description:
  "Write clear and concise documentation to help others understand your code.",
    useCases: [
      "To help others understand your code more easily.",
      "To make it easier to maintain your code over time.",
      "To ensure that your code is well-documented and easy to understand.",
    ],
      techNeeded: ["Documentation tools"],
        transferableSkills: ["Communication", "Writing"],
  },
{
  id: 5,
    name: "Follow coding standards and conventions",
      description:
  "Follow established coding standards and conventions to improve the quality and readability of your code.",
    useCases: [
      "To make your code more readable and consistent.",
      "To improve the quality of your code.",
      "To ensure that your code is easy to maintain and extend.",
    ],
      techNeeded: ["Code editors", "Linter"],
        transferableSkills: ["Attention to detail", "Adaptability"],
  },
{
  id: 6,
    name: "Refactor code regularly",
      description:
  "Refactor your code regularly to improve its quality and maintainability.",
    useCases: [
      "To improve the quality and maintainability of your code.",
      "To remove duplication and improve code reuse.",
      "To make your code more scalable and easier to extend.",
    ],
      techNeeded: ["Code editors", "Refactoring tools"],
        transferableSkills: ["Problem solving", "Adaptability"],
  },
{
  id: 7,
    name: "Write code that is easy to read and understand",
      description:
  "Write code that is easy to read and understand to make it easier to maintain over time.",
    useCases: [
      "To improve the quality of your code.",
      "To make it easier to maintain your code over time.",
      "To make it easier for others to understand your code.",
    ],
      techNeeded: ["Code editors", "Refactoring tools"],
        transferableSkills: ["Problem solving", "Adaptability"],
  },
{
  id: 8,
    name: "Use meaningful variable and function names",
      description:
  "Use descriptive names for your variables and functions to make your code more readable and understandable.",
    useCases: [
      "To make your code more readable and understandable.",
      "To improve the quality of your code.",
      "To make it easier to maintain your code over time.",
    ],
      techNeeded: ["Code editors"],
        transferableSkills: ["Attention to detail", "Communication"],
  },
{
  id: 9,
    name: "Optimize your code for performance",
      description:
  "Optimize your code to make it run faster and use fewer resources.",
    useCases: [
      "To improve the performance of your application.",
      "To reduce the amount of resources needed by your application.",
      "To improve the user experience of your application.",
    ],
      techNeeded: ["Profiling tools", "Performance testing tools"],
        transferableSkills: ["Problem solving", "Critical thinking"],
  },
{
  id: 10,
    name: "Keep up with new technologies and trends",
      description:
  "Stay up-to-date with new technologies and trends to improve your skills and stay competitive in the industry.",
    useCases: [
      "To improve your skills and knowledge.",
      "To stay competitive in the industry.",
      "To be able to use new technologies and tools in your work.",
    ],
      techNeeded: ["Online learning platforms", "Technical blogs"],
        transferableSkills: ["Learning", "Adaptability"],
  },
  // Add more objects for additional best practices here
];
