import {
  SiMdnwebdocs, SiFreecodecamp, SiJavascript, SiTypescript, SiGit, SiGithub,
  SiReact, SiVuedotjs, SiAngular, SiSvelte, SiDjango, SiSpring, SiNextdotjs,
  SiW3C, SiLeetcode, SiHackerrank, SiOpenai, SiGoogle, SiPython,
} from 'react-icons/si';
import {
  FaGraduationCap, FaBook, FaRobot, FaBalanceScale, FaUniversalAccess,
  FaWheelchair, FaCode, FaChartLine, FaTools,
} from 'react-icons/fa';

// Curated, hand-checked reference links for each topic on the homepage.
// `note` is a short "as of 2026" framing line; `items` are the actual resources.
export const resourcesByTopicId = {
  // 0 — Developer's Library
  0: {
    note: "A living set of references for learning to code and staying current — from first-time HTML to full-stack fluency. Bookmark these; they're updated far more often than any book.",
    sections: [
      {
        category: 'Start Here — Full Curricula',
        items: [
          { title: 'MDN Web Docs', url: 'https://developer.mozilla.org/', icon: SiMdnwebdocs, description: "The canonical, always-updated reference for HTML, CSS, and JavaScript — maintained by Mozilla and the broader web standards community." },
          { title: 'freeCodeCamp', url: 'https://www.freecodecamp.org/', icon: SiFreecodecamp, description: 'Free certifications covering responsive design, JavaScript algorithms, and full-stack development, with thousands of practice projects.' },
          { title: 'The Odin Project', url: 'https://www.theodinproject.com/', icon: FaGraduationCap, description: 'A free, project-heavy full-stack path (HTML/CSS/JS through Node and React) built and maintained by an open-source community.' },
          { title: 'CS50x (Harvard)', url: 'https://cs50.harvard.edu/x/', icon: FaGraduationCap, description: "Harvard's free introduction to computer science — strong fundamentals in algorithms, data structures, and how computers actually work." },
        ],
      },
      {
        category: 'Reference & Roadmaps',
        items: [
          { title: 'roadmap.sh', url: 'https://roadmap.sh/', icon: FaChartLine, description: 'Community-maintained visual roadmaps for frontend, backend, DevOps, and dozens of other developer paths.' },
          { title: 'JavaScript.info', url: 'https://javascript.info/', icon: SiJavascript, description: 'A deep, modern JavaScript tutorial that goes well past the basics into closures, async patterns, and the DOM.' },
          { title: 'TypeScript Handbook', url: 'https://www.typescriptlang.org/docs/handbook/intro.html', icon: SiTypescript, description: 'The official guide to TypeScript — worth a read once you outgrow plain JavaScript on any nontrivial project.' },
        ],
      },
      {
        category: 'Tooling Every Developer Needs',
        items: [
          { title: 'Pro Git (free book)', url: 'https://git-scm.com/book/en/v2', icon: SiGit, description: 'The complete, free reference for Git — from everyday commits to rebasing and internals.' },
          { title: 'GitHub Skills', url: 'https://skills.github.com/', icon: SiGithub, description: 'Short, hands-on courses that teach Git/GitHub workflows, Actions, and collaboration by doing them in real repos.' },
        ],
      },
    ],
  },

  // 1 — Coding Conventions
  1: {
    note: 'Style guides and design-pattern references that hold up across languages. The specific rules matter less than picking one consistent standard your whole codebase follows.',
    sections: [
      {
        category: 'Style Guides',
        items: [
          { title: 'Google Style Guides', url: 'https://google.github.io/styleguide/', icon: FaCode, description: 'Google’s public engineering style guides for JavaScript, Python, Java, C++, Go, and more — battle-tested at large scale.' },
          { title: 'Airbnb JavaScript Style Guide', url: 'https://github.com/airbnb/javascript', icon: FaCode, description: 'One of the most widely adopted JS/React style guides in the industry, with linked ESLint config.' },
          { title: "Google's Engineering Practices (Code Review)", url: 'https://google.github.io/eng-practices/review/', icon: FaTools, description: 'How Google approaches writing and reviewing changelists — a great template for team code-review standards.' },
        ],
      },
      {
        category: 'Design Patterns & Refactoring',
        items: [
          { title: 'Refactoring.Guru', url: 'https://refactoring.guru/design-patterns', icon: FaBook, description: 'Clear, illustrated explanations of the classic Gang-of-Four design patterns with examples in multiple languages.' },
          { title: "Martin Fowler's Refactoring Catalog", url: 'https://refactoring.com/catalog/', icon: FaBook, description: 'The canonical online catalog of refactoring techniques, from the author of Refactoring and Patterns of Enterprise Application Architecture.' },
          { title: 'SOLID Principles (DigitalOcean)', url: 'https://www.digitalocean.com/community/conceptual-articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design', icon: FaBook, description: 'A concise walkthrough of the five SOLID object-oriented design principles with practical examples.' },
        ],
      },
      {
        category: 'Version Control & Collaboration',
        items: [
          { title: 'Conventional Commits', url: 'https://www.conventionalcommits.org/', icon: SiGit, description: 'A lightweight commit-message convention that makes changelogs and semantic versioning automatable.' },
        ],
      },
    ],
  },

  // 2 — Frameworks & Libraries
  2: {
    note: "React, Vue, and Angular remain the three big frontend frameworks in 2026; React 19's compiler and Angular's zoneless signals-based reactivity are the notable recent shifts. On the backend, Django and Spring Boot remain the dominant batteries-included choices for Python and Java.",
    sections: [
      {
        category: 'Frontend Frameworks',
        items: [
          { title: 'React', url: 'https://react.dev/', icon: SiReact, description: 'Official docs for React 19 — component architecture, hooks, Server Components, and the new React Compiler.' },
          { title: 'Vue.js', url: 'https://vuejs.org/', icon: SiVuedotjs, description: 'Known for a gentle learning curve and less boilerplate than React or Angular, with first-class TypeScript support.' },
          { title: 'Angular', url: 'https://angular.dev/', icon: SiAngular, description: 'A full, opinionated framework favored for large enterprise apps — now built around Signals and zoneless change detection.' },
          { title: 'Svelte', url: 'https://svelte.dev/', icon: SiSvelte, description: 'A compiler-first alternative that ships little to no runtime framework code to the browser.' },
          { title: 'Next.js', url: 'https://nextjs.org/docs', icon: SiNextdotjs, description: 'The most popular React meta-framework, adding routing, server rendering, and API routes on top of React.' },
        ],
      },
      {
        category: 'Backend Frameworks',
        items: [
          { title: 'Django', url: 'https://docs.djangoproject.com/', icon: SiDjango, description: "Python's batteries-included web framework — ORM, admin panel, and auth built in, favored for rapid, secure development." },
          { title: 'Spring Boot', url: 'https://spring.io/projects/spring-boot', icon: SiSpring, description: 'The standard for Java backends; simplifies Spring configuration and integrates with a huge library ecosystem.' },
        ],
      },
      {
        category: 'Choosing & Comparing',
        items: [
          { title: 'State of JS Survey', url: 'https://stateofjs.com/', icon: FaChartLine, description: 'Annual survey data on real-world framework and library adoption, satisfaction, and trends across the JS ecosystem.' },
        ],
      },
    ],
  },

  // 3 — Accessibility & WCAG
  3: {
    note: 'WCAG 2.2 is the current, legally-referenced standard (it maps to ISO/IEC 40500:2025); WCAG 3.0 is still in draft. Automated tools catch roughly a third of issues at best — pair them with manual keyboard and screen-reader testing.',
    sections: [
      {
        category: 'Standards',
        items: [
          { title: 'WCAG 2.2 (W3C)', url: 'https://www.w3.org/TR/WCAG22/', icon: SiW3C, description: 'The official Web Content Accessibility Guidelines — 13 guidelines under 4 principles: perceivable, operable, understandable, robust.' },
          { title: 'ARIA Authoring Practices Guide', url: 'https://www.w3.org/WAI/ARIA/apg/', icon: SiW3C, description: "W3C's reference implementations for accessible UI patterns — dialogs, menus, tabs, comboboxes — with correct ARIA and keyboard behavior." },
          { title: 'Web Accessibility Initiative (WAI)', url: 'https://www.w3.org/WAI/', icon: SiW3C, description: "W3C's hub for accessibility standards, tutorials, and how the different guidelines (WCAG, ATAG, UAAG) relate." },
        ],
      },
      {
        category: 'Practical Guides & Checklists',
        items: [
          { title: 'The A11Y Project Checklist', url: 'https://www.a11yproject.com/checklist/', icon: FaUniversalAccess, description: 'A community-driven, plain-language checklist for shipping accessible sites, organized by what to check.' },
          { title: 'WebAIM', url: 'https://webaim.org/', icon: FaWheelchair, description: 'Articles, the WAVE evaluation tool, and the annual "WebAIM Million" report auditing accessibility across the top million sites.' },
          { title: 'Inclusive Components', url: 'https://inclusive-components.design/', icon: FaBook, description: 'Heydon Pickering’s deep-dive build-alongs for accessible UI components, pattern by pattern.' },
        ],
      },
      {
        category: 'Testing Tools',
        items: [
          { title: 'axe DevTools', url: 'https://www.deque.com/axe/devtools/', icon: FaTools, description: 'A widely-used automated accessibility testing browser extension and CI tool from Deque.' },
        ],
      },
    ],
  },

  // 4 — DSA
  4: {
    note: 'Structured problem sets (a curated 75–150, not a random 500) plus spaced repetition consistently beat unstructured grinding. This site’s own LeetCode tracker below is a good place to log your own progress.',
    sections: [
      {
        category: 'On This Site',
        items: [
          { title: 'LeetCode Solutions Tracker', url: '/leetcode', icon: SiLeetcode, description: 'Browse this project’s own worked LeetCode solutions, complexity notes, and (for select problems) interactive animations.', internal: true },
        ],
      },
      {
        category: 'Practice Platforms',
        items: [
          { title: 'LeetCode', url: 'https://leetcode.com/', icon: SiLeetcode, description: 'The largest bank of interview-style problems, with company-tagged sets and timed contests.' },
          { title: 'NeetCode', url: 'https://neetcode.io/', icon: FaCode, description: 'Curated roadmaps (including the well-known "NeetCode 150") with free video walkthroughs for every problem, organized by pattern.' },
          { title: 'HackerRank', url: 'https://www.hackerrank.com/', icon: SiHackerrank, description: 'Structured practice tracks by domain (algorithms, SQL, data structures) plus certification skill tests.' },
        ],
      },
      {
        category: 'Curated Problem Lists & References',
        items: [
          { title: 'Grind 75', url: 'https://www.techinterviewhandbook.org/grind75', icon: FaChartLine, description: 'A customizable, time-boxed successor to Blind 75 — pick your interview timeline and get a scheduled problem list.' },
          { title: 'Big-O Cheat Sheet', url: 'https://www.bigocheatsheet.com/', icon: FaBook, description: 'Time and space complexity reference for common data structures and sorting/searching algorithms.' },
          { title: 'VisuAlgo', url: 'https://visualgo.net/', icon: FaChartLine, description: 'Animated visualizations of sorting, graph, and tree algorithms — genuinely useful for building intuition.' },
        ],
      },
    ],
  },

  // 5 — AI & The Future
  5: {
    note: "The practical AI-engineering skill in 2026 isn't just prompting anymore — it's supervised, agentic development: giving models clear specs and tool access, then reviewing their work, rather than accepting output unread.",
    sections: [
      {
        category: 'Prompt Engineering & Building With LLMs',
        items: [
          { title: "Anthropic's Prompt Engineering Guide", url: 'https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview', icon: FaRobot, description: 'Official, hands-on guidance for structuring prompts for Claude — role assignment, chain-of-thought, XML tags, and examples.' },
          { title: "OpenAI's Prompt Engineering Guide", url: 'https://platform.openai.com/docs/guides/prompt-engineering', icon: SiOpenai, description: 'OpenAI’s official best practices for prompting GPT models via the API.' },
          { title: 'Google AI / Gemini Prompting Guide', url: 'https://ai.google.dev/gemini-api/docs/prompting-strategies', icon: SiGoogle, description: "Google's official prompting strategies for the Gemini API." },
        ],
      },
      {
        category: 'Ethics, Safety & Governance',
        items: [
          { title: 'NIST AI Risk Management Framework', url: 'https://www.nist.gov/itl/ai-risk-management-framework', icon: FaBalanceScale, description: 'A US federal framework for identifying and managing risk across the AI system lifecycle — a common reference point for AI governance.' },
          { title: "Anthropic's Responsible Scaling Policy", url: 'https://www.anthropic.com/rsp', icon: FaBalanceScale, description: "Anthropic's public framework for how it evaluates and limits catastrophic risk as AI models scale in capability." },
        ],
      },
      {
        category: 'Learning ML Fundamentals',
        items: [
          { title: "Google's Machine Learning Crash Course", url: 'https://developers.google.com/machine-learning/crash-course', icon: SiGoogle, description: 'A free, practical introduction to ML concepts and TensorFlow, built for working developers rather than researchers.' },
          { title: 'Practical Deep Learning (fast.ai)', url: 'https://course.fast.ai/', icon: SiPython, description: 'A free, code-first deep learning course that gets you training real models early rather than front-loading theory.' },
        ],
      },
    ],
  },
};
