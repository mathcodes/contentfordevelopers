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
        category: 'Beginner-Friendly Resources',
        items: [
          { title: 'MDN Web Docs', url: 'https://developer.mozilla.org/', icon: SiMdnwebdocs, description: "The canonical, always-updated reference for HTML, CSS, and JavaScript — maintained by Mozilla and the broader web standards community." },
          { title: 'freeCodeCamp', url: 'https://www.freecodecamp.org/', icon: SiFreecodecamp, description: 'Free certifications covering responsive design, JavaScript algorithms, and full-stack development, with thousands of practice projects.' },
          { title: 'The Odin Project', url: 'https://www.theodinproject.com/', icon: FaGraduationCap, description: 'A free, project-heavy full-stack path (HTML/CSS/JS through Node and React) built and maintained by an open-source community.' },
          { title: 'CS50x (Harvard)', url: 'https://cs50.harvard.edu/x/', icon: FaGraduationCap, description: "Harvard's free introduction to computer science — strong fundamentals in algorithms, data structures, and how computers actually work." },
        ],
      },
      {
        category: 'Advanced Tooling & Workflow',
        items: [
          { title: 'roadmap.sh', url: 'https://roadmap.sh/', icon: FaChartLine, description: 'Community-maintained visual roadmaps for frontend, backend, DevOps, and dozens of other developer paths.' },
          { title: 'JavaScript.info', url: 'https://javascript.info/', icon: SiJavascript, description: 'A deep, modern JavaScript tutorial that goes well past the basics into closures, async patterns, and the DOM.' },
          { title: 'TypeScript Handbook', url: 'https://www.typescriptlang.org/docs/handbook/intro.html', icon: SiTypescript, description: 'The official guide to TypeScript — worth a read once you outgrow plain JavaScript on any nontrivial project.' },
          { title: 'web.dev', url: 'https://web.dev/', icon: FaChartLine, description: 'Google’s browser-focused learning hub for performance, accessibility, modern APIs, and practical frontend best practices.' },
          { title: 'Node.js Docs', url: 'https://nodejs.org/en/docs/', icon: FaCode, description: 'The official Node.js documentation for runtime behavior, networking, tooling, and building real server-side apps.' },
          { title: 'Pro Git (free book)', url: 'https://git-scm.com/book/en/v2', icon: SiGit, description: 'The complete, free reference for Git — from everyday commits to rebasing and internals.' },
          { title: 'GitHub Skills', url: 'https://skills.github.com/', icon: SiGithub, description: 'Short, hands-on courses that teach Git/GitHub workflows, Actions, and collaboration by doing them in real repos.' },
          { title: 'Docker Docs', url: 'https://docs.docker.com/', icon: FaTools, description: 'The canonical docs for containers, images, Compose, and shipping consistent development environments.' },
          { title: 'PostgreSQL Docs', url: 'https://www.postgresql.org/docs/', icon: FaBook, description: 'Reference-grade docs for SQL, indexing, transactions, and tuning one of the most common production databases.' },
        ],
      },
      {
        category: 'Best of the Web',
        items: [
          { title: 'MDN Web Docs', url: 'https://developer.mozilla.org/', icon: SiMdnwebdocs, description: 'The best single reference for browser behavior, HTML, CSS, and JavaScript.' },
          { title: 'freeCodeCamp', url: 'https://www.freecodecamp.org/', icon: SiFreecodecamp, description: 'A practical, project-first path for learning by doing.' },
          { title: 'roadmap.sh', url: 'https://roadmap.sh/', icon: FaChartLine, description: 'A sharp map of the modern developer journey across disciplines.' },
          { title: 'JavaScript.info', url: 'https://javascript.info/', icon: SiJavascript, description: 'A deeper, clearer explanation of how JavaScript really works.' },
        ],
      },
    ],
  },

  // 1 — Coding Conventions
  1: {
    note: 'Style guides and design-pattern references that hold up across languages. The specific rules matter less than picking one consistent standard your whole codebase follows.',
    sections: [
      {
        category: 'Beginner-Friendly Resources',
        items: [
          { title: 'Google Style Guides', url: 'https://google.github.io/styleguide/', icon: FaCode, description: 'Google’s public engineering style guides for JavaScript, Python, Java, C++, Go, and more — battle-tested at large scale.' },
          { title: 'Airbnb JavaScript Style Guide', url: 'https://github.com/airbnb/javascript', icon: FaCode, description: 'One of the most widely adopted JS/React style guides in the industry, with linked ESLint config.' },
          { title: "Google's Engineering Practices (Code Review)", url: 'https://google.github.io/eng-practices/review/', icon: FaTools, description: 'How Google approaches writing and reviewing changelists — a great template for team code-review standards.' },
          { title: 'Google HTML/CSS Style Guide', url: 'https://google.github.io/styleguide/htmlcssguide.html', icon: FaCode, description: 'A compact, opinionated guide that keeps HTML and CSS readable, consistent, and maintainable at scale.' },
        ],
      },
      {
        category: 'Advanced Tooling & Workflow',
        items: [
          { title: 'Refactoring.Guru', url: 'https://refactoring.guru/design-patterns', icon: FaBook, description: 'Clear, illustrated explanations of the classic Gang-of-Four design patterns with examples in multiple languages.' },
          { title: "Martin Fowler's Refactoring Catalog", url: 'https://refactoring.com/catalog/', icon: FaBook, description: 'The canonical online catalog of refactoring techniques, from the author of Refactoring and Patterns of Enterprise Application Architecture.' },
          { title: 'SOLID Principles (DigitalOcean)', url: 'https://www.digitalocean.com/community/conceptual-articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design', icon: FaBook, description: 'A concise walkthrough of the five SOLID object-oriented design principles with practical examples.' },
          { title: 'Refactoring by Martin Fowler', url: 'https://martinfowler.com/books/refactoring.html', icon: FaBook, description: 'The classic book and companion writing that codified modern refactoring habits still used by experienced teams.' },
          { title: 'Conventional Commits', url: 'https://www.conventionalcommits.org/', icon: SiGit, description: 'A lightweight commit-message convention that makes changelogs and semantic versioning automatable.' },
          { title: 'How to Write a Git Commit Message', url: 'https://cbea.ms/git-commit/', icon: SiGit, description: 'A practical guide to writing commit messages that communicate intent, not just changes.' },
        ],
      },
      {
        category: 'Best of the Web',
        items: [
          { title: 'Google Style Guides', url: 'https://google.github.io/styleguide/', icon: FaCode, description: 'A dependable baseline for readable, consistent code across large teams.' },
          { title: 'Refactoring.Guru', url: 'https://refactoring.guru/design-patterns', icon: FaBook, description: 'The clearest visual guide to patterns, smells, and practical refactoring.' },
          { title: 'Conventional Commits', url: 'https://www.conventionalcommits.org/', icon: SiGit, description: 'A small convention with a big payoff in release clarity and team communication.' },
          { title: 'Google Engineering Practices', url: 'https://google.github.io/eng-practices/review/', icon: FaTools, description: 'A mature standard for review, change quality, and engineering discipline.' },
        ],
      },
    ],
  },

  // 2 — Frameworks & Libraries
  2: {
    note: "React, Vue, and Angular remain the three big frontend frameworks in 2026; React 19's compiler and Angular's zoneless signals-based reactivity are the notable recent shifts. On the backend, Django and Spring Boot remain the dominant batteries-included choices for Python and Java.",
    sections: [
      {
        category: 'Beginner-Friendly Resources',
        items: [
          { title: 'React', url: 'https://react.dev/', icon: SiReact, description: 'Official docs for React 19 — component architecture, hooks, Server Components, and the new React Compiler.' },
          { title: 'Vue.js', url: 'https://vuejs.org/', icon: SiVuedotjs, description: 'Known for a gentle learning curve and less boilerplate than React or Angular, with first-class TypeScript support.' },
          { title: 'Angular', url: 'https://angular.dev/', icon: SiAngular, description: 'A full, opinionated framework favored for large enterprise apps — now built around Signals and zoneless change detection.' },
          { title: 'Svelte', url: 'https://svelte.dev/', icon: SiSvelte, description: 'A compiler-first alternative that ships little to no runtime framework code to the browser.' },
          { title: 'Next.js', url: 'https://nextjs.org/docs', icon: SiNextdotjs, description: 'The most popular React meta-framework, adding routing, server rendering, and API routes on top of React.' },
        ],
      },
      {
        category: 'Advanced Tooling & Workflow',
        items: [
          { title: 'Django', url: 'https://docs.djangoproject.com/', icon: SiDjango, description: "Python's batteries-included web framework — ORM, admin panel, and auth built in, favored for rapid, secure development." },
          { title: 'Spring Boot', url: 'https://spring.io/projects/spring-boot', icon: SiSpring, description: 'The standard for Java backends; simplifies Spring configuration and integrates with a huge library ecosystem.' },
          { title: 'Spring Guides', url: 'https://spring.io/guides', icon: SiSpring, description: 'Small, task-based tutorials that walk through real application patterns from database access to messaging and security.' },
          { title: 'Vite', url: 'https://vite.dev/', icon: FaTools, description: 'A fast default build tool for modern frontends with excellent DX for React, Vue, and TypeScript projects.' },
          { title: 'TanStack Query', url: 'https://tanstack.com/query/latest', icon: FaTools, description: 'A widely adopted data-fetching and caching layer that makes async state simpler and more predictable.' },
        ],
      },
      {
        category: 'Best of the Web',
        items: [
          { title: 'React', url: 'https://react.dev/', icon: SiReact, description: 'The default frontend choice for modern component-driven products.' },
          { title: 'Next.js', url: 'https://nextjs.org/docs', icon: SiNextdotjs, description: 'The most practical way to ship production React apps at scale.' },
          { title: 'Vue.js', url: 'https://vuejs.org/', icon: SiVuedotjs, description: 'A clean, approachable framework that still earns serious adoption.' },
          { title: 'State of JS Survey', url: 'https://stateofjs.com/', icon: FaChartLine, description: 'A useful read on what the ecosystem is actually choosing and why.' },
        ],
      },
    ],
  },

  // 3 — Accessibility & WCAG
  3: {
    note: 'WCAG 2.2 is the current, legally-referenced standard (it maps to ISO/IEC 40500:2025); WCAG 3.0 is still in draft. Automated tools catch roughly a third of issues at best — pair them with manual keyboard and screen-reader testing.',
    sections: [
      {
        category: 'Beginner-Friendly Resources',
        items: [
          { title: 'WCAG 2.2 (W3C)', url: 'https://www.w3.org/TR/WCAG22/', icon: SiW3C, description: 'The official Web Content Accessibility Guidelines — 13 guidelines under 4 principles: perceivable, operable, understandable, robust.' },
          { title: 'ARIA Authoring Practices Guide', url: 'https://www.w3.org/WAI/ARIA/apg/', icon: SiW3C, description: "W3C's reference implementations for accessible UI patterns — dialogs, menus, tabs, comboboxes — with correct ARIA and keyboard behavior." },
          { title: 'Web Accessibility Initiative (WAI)', url: 'https://www.w3.org/WAI/', icon: SiW3C, description: "W3C's hub for accessibility standards, tutorials, and how the different guidelines (WCAG, ATAG, UAAG) relate." },
          { title: 'MDN Accessibility', url: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility', icon: FaUniversalAccess, description: 'Practical, browser-focused guidance for semantics, keyboard use, focus states, and accessible patterns.' },
        ],
      },
      {
        category: 'Advanced Tooling & Workflow',
        items: [
          { title: 'The A11Y Project Checklist', url: 'https://www.a11yproject.com/checklist/', icon: FaUniversalAccess, description: 'A community-driven, plain-language checklist for shipping accessible sites, organized by what to check.' },
          { title: 'WebAIM', url: 'https://webaim.org/', icon: FaWheelchair, description: 'Articles, the WAVE evaluation tool, and the annual "WebAIM Million" report auditing accessibility across the top million sites.' },
          { title: 'Inclusive Components', url: 'https://inclusive-components.design/', icon: FaBook, description: 'Heydon Pickering’s deep-dive build-alongs for accessible UI components, pattern by pattern.' },
          { title: 'Accessibility Insights', url: 'https://accessibilityinsights.io/', icon: FaTools, description: 'Microsoft’s free tool for scanning sites for common issues and checking real accessibility quality.' },
          { title: 'axe DevTools', url: 'https://www.deque.com/axe/devtools/', icon: FaTools, description: 'A widely-used automated accessibility testing browser extension and CI tool from Deque.' },
          { title: 'WAVE', url: 'https://wave.webaim.org/', icon: FaWheelchair, description: 'A fast accessibility checker that highlights common issues directly in the rendered page.' },
        ],
      },
      {
        category: 'Best of the Web',
        items: [
          { title: 'WCAG 2.2', url: 'https://www.w3.org/TR/WCAG22/', icon: SiW3C, description: 'The authoritative standard for accessible web experiences.' },
          { title: 'The A11Y Project', url: 'https://www.a11yproject.com/', icon: FaUniversalAccess, description: 'A practical, human-readable guide for everyday accessibility decisions.' },
          { title: 'WebAIM', url: 'https://webaim.org/', icon: FaWheelchair, description: 'A standout source for real-world accessibility testing and education.' },
          { title: 'axe DevTools', url: 'https://www.deque.com/axe/devtools/', icon: FaTools, description: 'A top-tier automated check for catching issues early in product work.' },
        ],
      },
    ],
  },

  // 4 — DSA
  4: {
    note: 'Structured problem sets (a curated 75–150, not a random 500) plus spaced repetition consistently beat unstructured grinding. This site’s own LeetCode tracker below is a good place to log your own progress.',
    sections: [
      {
        category: 'Beginner-Friendly Resources',
        items: [
          { title: 'LeetCode Solutions Tracker', url: '/leetcode', icon: SiLeetcode, description: 'Browse this project’s own worked LeetCode solutions, complexity notes, and (for select problems) interactive animations.', internal: true },
          { title: 'LeetCode', url: 'https://leetcode.com/', icon: SiLeetcode, description: 'The largest bank of interview-style problems, with company-tagged sets and timed contests.' },
          { title: 'NeetCode', url: 'https://neetcode.io/', icon: FaCode, description: 'Curated roadmaps (including the well-known "NeetCode 150") with free video walkthroughs for every problem, organized by pattern.' },
          { title: 'HackerRank', url: 'https://www.hackerrank.com/', icon: SiHackerrank, description: 'Structured practice tracks by domain (algorithms, SQL, data structures) plus certification skill tests.' },
        ],
      },
      {
        category: 'Advanced Tooling & Workflow',
        items: [
          { title: 'CSES Problem Set', url: 'https://cses.fi/problemset/', icon: FaCode, description: 'A high-quality set of algorithmic problems used by competitive programmers and interview-prep students alike.' },
          { title: 'Grind 75', url: 'https://www.techinterviewhandbook.org/grind75', icon: FaChartLine, description: 'A customizable, time-boxed successor to Blind 75 — pick your interview timeline and get a scheduled problem list.' },
          { title: 'Big-O Cheat Sheet', url: 'https://www.bigocheatsheet.com/', icon: FaBook, description: 'Time and space complexity reference for common data structures and sorting/searching algorithms.' },
          { title: 'VisuAlgo', url: 'https://visualgo.net/', icon: FaChartLine, description: 'Animated visualizations of sorting, graph, and tree algorithms — genuinely useful for building intuition.' },
          { title: 'Princeton Algorithms', url: 'https://algs4.cs.princeton.edu/home/', icon: FaBook, description: 'A rigorous algorithm course with clear lecture notes, implementations, and deeper conceptual explanations.' },
        ],
      },
      {
        category: 'Best of the Web',
        items: [
          { title: 'LeetCode', url: 'https://leetcode.com/', icon: SiLeetcode, description: 'The most complete daily practice platform for interview prep.' },
          { title: 'NeetCode', url: 'https://neetcode.io/', icon: FaCode, description: 'A disciplined, pattern-based path that cuts through the noise.' },
          { title: 'VisuAlgo', url: 'https://visualgo.net/', icon: FaChartLine, description: 'A strong visual aid for learning algorithms by intuition, not memorization.' },
          { title: 'Grind 75', url: 'https://www.techinterviewhandbook.org/grind75', icon: FaChartLine, description: 'One of the best structured plans for getting interview-ready.' },
        ],
      },
    ],
  },

  // 5 — AI & The Future
  5: {
    note: "The practical AI-engineering skill in 2026 isn't just prompting anymore — it's supervised, agentic development: giving models clear specs and tool access, then reviewing their work, rather than accepting output unread.",
    sections: [
      {
        category: 'Beginner-Friendly Resources',
        items: [
          { title: "Anthropic's Prompt Engineering Guide", url: 'https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview', icon: FaRobot, description: 'Official, hands-on guidance for structuring prompts for Claude — role assignment, chain-of-thought, XML tags, and examples.' },
          { title: "OpenAI's Prompt Engineering Guide", url: 'https://platform.openai.com/docs/guides/prompt-engineering', icon: SiOpenai, description: 'OpenAI’s official best practices for prompting GPT models via the API.' },
          { title: 'Google AI / Gemini Prompting Guide', url: 'https://ai.google.dev/gemini-api/docs/prompting-strategies', icon: SiGoogle, description: "Google's official prompting strategies for the Gemini API." },
          { title: "Google's Machine Learning Crash Course", url: 'https://developers.google.com/machine-learning/crash-course', icon: SiGoogle, description: 'A free, practical introduction to ML concepts and TensorFlow, built for working developers rather than researchers.' },
        ],
      },
      {
        category: 'Advanced Tooling & Workflow',
        items: [
          { title: 'OpenAI Cookbook', url: 'https://cookbook.openai.com/', icon: FaRobot, description: 'Hands-on examples for tool calling, evaluation, and production patterns that help teams ship real AI features.' },
          { title: 'NIST AI Risk Management Framework', url: 'https://www.nist.gov/itl/ai-risk-management-framework', icon: FaBalanceScale, description: 'A US federal framework for identifying and managing risk across the AI system lifecycle — a common reference point for AI governance.' },
          { title: "Anthropic's Responsible Scaling Policy", url: 'https://www.anthropic.com/rsp', icon: FaBalanceScale, description: "Anthropic's public framework for how it evaluates and limits catastrophic risk as AI models scale in capability." },
          { title: 'OpenAI Model Spec', url: 'https://openai.com/index/introducing-the-openai-model-spec/', icon: FaBalanceScale, description: 'A useful look at how model behavior is shaped, constrained, and aligned in practice.' },
          { title: 'Practical Deep Learning (fast.ai)', url: 'https://course.fast.ai/', icon: SiPython, description: 'A free, code-first deep learning course that gets you training real models early rather than front-loading theory.' },
          { title: 'Deep Learning AI', url: 'https://www.deeplearning.ai/', icon: FaRobot, description: 'Short, practical courses and tutorials from one of the best-known ML education providers in the industry.' },
        ],
      },
      {
        category: 'Best of the Web',
        items: [
          { title: "Anthropic's Prompt Engineering Guide", url: 'https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview', icon: FaRobot, description: 'One of the clearest practical guides for writing prompts that work.' },
          { title: 'OpenAI Cookbook', url: 'https://cookbook.openai.com/', icon: FaRobot, description: 'A strong production-oriented resource for tool use, evaluation, and orchestration.' },
          { title: "Google's Machine Learning Crash Course", url: 'https://developers.google.com/machine-learning/crash-course', icon: SiGoogle, description: 'A high-value intro to ML concepts without getting lost in theory.' },
          { title: 'NIST AI Risk Management Framework', url: 'https://www.nist.gov/itl/ai-risk-management-framework', icon: FaBalanceScale, description: 'The best governance reference for responsible AI system design.' },
        ],
      },
    ],
  },
};
