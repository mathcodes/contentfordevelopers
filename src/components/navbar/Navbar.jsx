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
      <Disclosure as="nav" className="text-black  dark:text-white">
        {({ open }) => (
          <>
            <div className="px-4 py-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="block w-auto h-8 lg:hidden"
                      src="/CforD2.png"
                      alt="Your Company"
                    />
                    <img
                      className="hidden w-auto h-8 lg:block"
                      src="/CforD2.png"
                      alt="Your Company"
                    />
                  </div>
                  <div className="hidden sm:ml-6 lg:block">
                    <div className="flex space-x-4 ">
                      <a
                        href="/"
                        className="py-2 pr-12 text-sm font-medium text-black bg-gray-900 rounded-md dark:text-white hover:text-accent"
                      >
                        CFD
                      </a>
                      <a
                        href="/leetcode"
                        className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-accent"
                      >
                        LeetCode
                      </a>
                      <a
                        href="/codewars"
                        className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-accent"
                      >
                        CodeWars
                      </a>
                      <a
                        href="/hackerrank"
                        className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-accent"
                      >
                        HackerRank
                      </a>
                      <a
                        href="/notes"
                        className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-accent"
                      >
                        Notes & Resources
                      </a>
                    </div>
                  </div>
                </div>

                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex items-center ">
                    <button onClick={onClick}>
                      <CgDarkMode
                        className="w-6 h-6 fill-black dark:fill-white"
                        aria-hidden="true"
                      />
                    </button>
                    <button
                      type="button"
                      className="p-1 text-black bg-gray-800 rounded-full hover:text-white focus:outline-none"
                    >
                      <span className="sr-only">View notifications</span>
                      <a href="https://github.com/mathcodes/contentfordevelopers">
                        <FaGithub
                          className="w-6 h-6 fill-black dark:fill-white"
                          aria-hidden="true"
                        />
                      </a>
                    </button>

                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="p-1 text-gray-400 bg-gray-100 rounded-full hover:text-black focus:outline-none">
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
                        <Menu.Items className="absolute right-0 z-10 w-48 py-1 mt-2 text-black origin-top-right bg-white rounded-md shadow-lg dark:bg-black dark:text-white ring-1 ring-black ring-opacity-5 focus:outline-none">
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
                                href="/leetcode"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm hover:text-accent"
                                )}
                              >
                                LeetCode
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="/codewars"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm hover:text-accent"
                                )}
                              >
                                CodeWars
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="/hackerrank"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm hover:text-accent"
                                )}
                              >
                                HackerRank
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="notes"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm hover:text-accent"
                                )}
                              >
                                Notes & Resources
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
                <div className="flex -mr-2 sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <HiX className="block w-6 h-6" aria-hidden="true" />
                    ) : (
                      <HiMenu className="block w-6 h-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-3 py-2 text-base font-medium text-white bg-gray-900 rounded-md"
                >
                  Dashboard
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                >
                  Team
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                >
                  Projects
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                >
                  Calendar
                </Disclosure.Button>
              </div>
              <div className="pt-4 pb-3 border-t border-gray-700">
                <div className="inline-flex items-end px-5">
                  <button
                    onClick={onClick}
                    className="flex-shrink-0 p-1 ml-auto hover:text-accent"
                  >
                    <CgDarkMode
                      className="w-6 h-6 fill-black dark:fill-white"
                      aria-hidden="true"
                    />
                  </button>
                  <button
                    type="button"
                    className="flex-shrink-0 p-1 ml-auto text-gray-400 bg-gray-800 rounded-full hover:text-accent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="sr-only">Contribute to GitHub</span>
                    <FaGithub
                      className="w-6 h-6 fill-black dark:fill-white"
                      aria-hidden="true"
                    />
                  </button>
                </div>
                <div className="px-2 mt-3 space-y-1">
                  <Disclosure.Button
                    as="a"
                    href="/leetcode"
                    className="block px-3 py-2 text-base font-medium rounded-md dark:text-white text-blue hover:bg-gray-700 hover:text-accent"
                  >
                    LeetCode
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="/codewars"
                    className="block px-3 py-2 text-base font-medium rounded-md dark:text-white text-blue hover:bg-gray-700 hover:text-accent"
                  >
                    CodeWars
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="/hackerrank"
                    className="block px-3 py-2 text-base font-medium rounded-md dark:text-white text-blue hover:bg-gray-700 hover:text-accent"
                  >
                    HackerRank
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="/notes"
                    className="block px-3 py-2 text-base font-medium rounded-md dark:text-white text-blue dark:bg-gray-700 hover:text-accent"
                  >
                    Notes & Resources
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="https://github.com/mathcodes/contentfordevelopers/blob/main/CONTRIBUTING.md"
                    className="block px-3 py-2 text-base font-medium rounded-md dark:text-white text-blue hover:bg-gray-700 hover:text-accent"
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
