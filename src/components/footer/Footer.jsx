const navigation = {
  content: [
    { name: 'LeetCode', href: '/leetcode' },
    { name: 'CodeWars', href: '/codewars' },
    { name: 'HackerRank', href: '/hackerrank' },
    { name: 'Notes & Resources', href: '/notes' },
  ],
  support: [
    { name: 'GitHub', href: 'https://github.com/mathcodes/contentfordevelopers' },
    { name: 'Guidelines', href: 'https://github.com/mathcodes/contentfordevelopers/blob/main/CONTRIBUTING.md' },
    { name: 'Issues', href: 'https://github.com/mathcodes/contentfordevelopers/issues' },
    { name: 'Pull Requests', href: 'https://github.com/mathcodes/contentfordevelopers/pulls' },
  ],
  company: [
    { name: 'About', href: 'https://github.com/mathcodes/contentfordevelopers' },
    { name: 'Blog', href: 'https://medium.com/@jcircle9' },
    { name: 'Contributors', href: 'https://github.com/mathcodes/contentfordevelopers/blob/main/README.md#contributors' },
  ],
  legal: [
    { name: 'License', href: 'https://github.com/mathcodes/contentfordevelopers/blob/main/LICENSE.md' },
    { name: 'Casebook', href: 'https://github.com/mathcodes/contentfordevelopers/blob/main/OPEN-SOURCE-CASEBOOK.md' },
    { name: 'Code of Conduct', href: 'https://github.com/mathcodes/contentfordevelopers/blob/main/CODE_OF_CONDUCT.md' },
  ],
};

const linkClass = "text-sm leading-6 text-slate-500 dark:text-slate-400 hover:text-accent dark:hover:text-accent transition-colors duration-150";
const headingClass = "text-sm font-semibold text-blue dark:text-platinum";

const FooterCol = ({ title, links }) => (
  <div>
    <h3 className={headingClass}>{title}</h3>
    <ul className="mt-4 space-y-3">
      {links.map((item) => (
        <li key={item.name}>
          <a href={item.href} className={linkClass}>{item.name}</a>
        </li>
      ))}
    </ul>
  </div>
);

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-blue border-t border-slate-200 dark:border-slate-700" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="site-container py-12 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-4">
            <img className="h-8" src="/CforD2.png" alt="ContentForDevelopers" />
            <p className="text-sm leading-6 text-slate-500 dark:text-slate-400 max-w-xs">
              Not just another LeetCode solution bank — a community-driven resource hub for developers at every level.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <FooterCol title="Content" links={navigation.content} />
              <div className="mt-10 md:mt-0">
                <FooterCol title="Contribute" links={navigation.support} />
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <FooterCol title="Community" links={navigation.company} />
              <div className="mt-10 md:mt-0">
                <FooterCol title="Open Source" links={navigation.legal} />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-200 dark:border-slate-700 pt-8">
          <p className="text-xs text-slate-400 dark:text-slate-500">
            &copy; {new Date().getFullYear()} ContentForDevelopers — Open source & community powered.
          </p>
        </div>
      </div>
    </footer>
  );
}

