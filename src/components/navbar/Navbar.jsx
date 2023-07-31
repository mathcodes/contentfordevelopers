import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { HiMenu, HiBell, HiX } from "react-icons/hi";
import { CgDarkMode } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  const onClick = () => {
    // set switch for dark mode
    let body = document.body;
    console.log(body);
    if (body.classList.contains("dark")) {
      body.classList.remove("dark");
      body.classList.add("light");
      document.documentElement.classList.remove("dark");
    } else {
      body.classList.remove("light");
      body.classList.add("dark");
      document.documentElement.classList.add("dark");
    }
  };
  return (
    <div className="container mx-auto">
      <Disclosure as="nav" className=" dark:text-white text-black">
        {({ open }) => (
          <>
            <div className="mx-auto py-4 max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="block h-8 w-auto lg:hidden"
                      src="/CforD2.png"
                      alt="Your Company"
                    />
                    <img
                      className="hidden h-8 w-auto lg:block"
                      src="/CforD2.png"
                      alt="Your Company"
                    />
                  </div>
                  <div className="hidden sm:ml-6 lg:block">
                    <div className="flex space-x-4 ">
                      <a
                        href="/"
                        className="rounded-md bg-gray-900 pr-12 py-2  text-sm font-medium text-black dark:text-white hover:text-accent"
                      >
                        Content For Developers
                       
                      </a>
                      {/* <a
                        href="/leetcode"
                        className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-accent"
                      >
                        LeetCode
                      </a>
                      <a
                        href="/codewars"
                        className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-accent"
                      >
                        CodeWars
                      </a>
                      <a
                        href="/hackerrank"
                        className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-accent"
                      >
                        HackerRank
                      </a>
                      <a
                        href="/notes"
                        className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-accent"
                      >
                        Notes & Resources
                      </a> */}
                    </div>
                  </div>
                </div>

                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex items-center ">
                    <button onClick={onClick} className="p-4">
                      <CgDarkMode
                        className="h-6 w-6 fill-black dark:fill-white"
                        aria-hidden="true"
                      />
                    </button>
                    <button
                      type="button"
                      className="rounded-full bg-gray-800 p-4 text-black hover:text-white focus:outline-none"
                    >
                      <span className="sr-only">View notifications</span>
                      <a href="https://github.com/mathcodes/contentfordevelopers">
                        <FaGithub
                          className="h-6 w-6 fill-black dark:fill-white"
                          aria-hidden="true"
                        />
                      </a>
                    </button>

                    {/* Profile dropdown */}
                    <Menu as="div" className="relative p-4">
                      <div>
                        <Menu.Button className="rounded-full bg-gray-100 p-1 text-gray-400 hover:text-black focus:outline-none">
                          <HiMenu />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute z-100 right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white dark:bg-black text-black dark:text-white  py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm hover:text-accent"
                                )}
                              >
                                Home
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="./DevelopersLibrary"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm hover:text-accent"
                                )}
                              >
                                Developer's Library
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="/codingconventions"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm hover:text-accent"
                                )}
                              >
                                Coding Conventions
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="/frameworksandlibraries"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm hover:text-accent"
                                )}
                              >
                                Frameworks & Libraries
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="accessibilityandwcagcompliance"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm hover:text-accent"
                                )}
                              >
                                Accessibility & WCAG Compliance
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="aiandthefuture"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm hover:text-accent"
                                )}
                              >
                                AI & The Future
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="dsa"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm hover:text-accent"
                                )}
                              >
                                DSA
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="https://github.com/mathcodes/contentfordevelopers/blob/main/CONTRIBUTING.md"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm hover:text-accent"
                                )}
                              >
                                Contribute
                              </a>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
                <div className="-mr-2 flex sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <HiX className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <HiMenu className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
                >
                  Dashboard
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Team
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Projects
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Calendar
                </Disclosure.Button>
              </div>
              <div className="border-t border-gray-700 pt-4 pb-3">
                <div className="inline-flex items-end px-5">
                  <button
                    onClick={onClick}
                    className="ml-auto p-1 flex-shrink-0 hover:text-accent"
                  >
                    <CgDarkMode
                      className="h-6 w-6 fill-black dark:fill-white"
                      aria-hidden="true"
                    />
                  </button>
                  <button
                    type="button"
                    className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-accent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="sr-only">Contribute to GitHub</span>
                    <FaGithub
                      className="h-6 w-6 fill-black dark:fill-white"
                      aria-hidden="true"
                    />
                  </button>
                </div>
                <div className="mt-3 space-y-1 px-2">
                  <Disclosure.Button
                    as="a"
                    href="/leetcode"
                    className="block rounded-md px-3 py-2 text-base font-medium dark:text-white text-blue hover:bg-gray-700 hover:text-accent"
                  >
                    LeetCode
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="/codewars"
                    className="block rounded-md px-3 py-2 text-base font-medium dark:text-white text-blue hover:bg-gray-700 hover:text-accent"
                  >
                    CodeWars
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="/hackerrank"
                    className="block rounded-md px-3 py-2 text-base font-medium dark:text-white text-blue hover:bg-gray-700 hover:text-accent"
                  >
                    HackerRank
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="/notes"
                    className="block rounded-md px-3 py-2 text-base font-medium dark:text-white text-blue dark:bg-gray-700 hover:text-accent"
                  >
                    Notes & Resources
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="https://github.com/mathcodes/contentfordevelopers/blob/main/CONTRIBUTING.md"
                    className="block rounded-md px-3 py-2 text-base font-medium dark:text-white text-blue hover:bg-gray-700 hover:text-accent"
                  >
                    Contribute
                  </Disclosure.Button>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
