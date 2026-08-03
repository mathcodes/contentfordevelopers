import { Fragment } from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { HiMenu, HiX } from "react-icons/hi";
import { CgDarkMode } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Dev Library", href: "/DevelopersLibrary" },
  { name: "Conventions", href: "/codingconventions" },
  { name: "Frameworks", href: "/frameworksandlibraries" },
  { name: "Accessibility", href: "/accessibilityandwcagguidelines" },
  { name: "DSA", href: "/dsa" },
  { name: "AI & Future", href: "/aiandthefuture" },
];

function toggleDark() {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  } else {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  }
}

export default function NavBar() {
  return (
    <Disclosure
      as="nav"
      className="sticky top-0 z-40 backdrop-blur-md bg-white/90 dark:bg-blue/90 border-b border-slate-200 dark:border-slate-700"
    >
      {({ open }) => (
        <>
          <div className="site-container">
            <div className="flex h-16 items-center justify-between gap-4">
              {/* Logo */}
              <a href="/" className="flex-shrink-0 flex items-center gap-2">
                <img className="h-8 w-auto" src="/CforD2.png" alt="ContentForDevelopers" />
                <span className="hidden sm:block font-bold text-blue dark:text-white text-sm tracking-wide">
                  C4D
                </span>
              </a>

              {/* Desktop nav links */}
              <div className="hidden lg:flex items-center gap-1 flex-1 justify-center">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="px-3 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-accent dark:hover:text-accent hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-150"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              {/* Right actions */}
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleDark}
                  className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-accent dark:hover:text-accent hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-150"
                  aria-label="Toggle dark mode"
                >
                  <CgDarkMode className="h-5 w-5" />
                </button>
                <a
                  href="https://github.com/mathcodes/contentfordevelopers"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-accent dark:hover:text-accent hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-150"
                  aria-label="GitHub repository"
                >
                  <FaGithub className="h-5 w-5" />
                </a>

                {/* Mobile hamburger */}
                <Disclosure.Button className="lg:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-150">
                  <span className="sr-only">Open menu</span>
                  {open ? <HiX className="h-5 w-5" /> : <HiMenu className="h-5 w-5" />}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <Transition
            as={Fragment}
            enter="transition ease-out duration-150"
            enterFrom="opacity-0 -translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-1"
          >
            <Disclosure.Panel className="lg:hidden border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-blue">
              <div className="site-container py-3 space-y-1">
                {navLinks.map((link) => (
                  <Disclosure.Button
                    key={link.name}
                    as="a"
                    href={link.href}
                    className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-accent dark:hover:text-accent hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-150"
                  >
                    {link.name}
                  </Disclosure.Button>
                ))}
                <Disclosure.Button
                  as="a"
                  href="https://github.com/mathcodes/contentfordevelopers/blob/main/CONTRIBUTING.md"
                  target="_blank"
                  rel="noreferrer"
                  className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-accent dark:hover:text-accent hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-150"
                >
                  Contribute
                </Disclosure.Button>
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}

