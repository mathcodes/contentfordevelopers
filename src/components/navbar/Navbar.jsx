import React, { useState } from "react";
import { image } from "../../data/images";

const pages = ["LeetCode", "HackerRank", "CodeWars", "DSA"];

const settings = ["Contribute", "About", "Contact"];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="w-[100vw] bg-[#1976d2] text-white static z-50">
      <div className="max-w-[1440px] w-full py-4 lg:px-12 md:px-8 px-2 flex items-center justify-between mx-auto">
        <div className="flex items-center w-fit ">
          <a href="/" className="flex items-center max-w-xl">
            <img src={image[0].CforDLogo} className="w-2/12" />
            <h6 className="lg:text-2xl sm:text-xl text-md font-bold tracking-widest md:ml-4 ml-2 whitespace-nowrap">
              CONTENT FOR DEVELOPERS
            </h6>
          </a>
          <div className="lg:block hidden">
            {pages.map((page) => (
              <a
                key={page}
                className="ml-4 uppercase cursor-pointer hover:underline"
                href={`/${page}`}
              >
                {page}
              </a>
            ))}
          </div>
        </div>
        <div className="relative">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="text-3xl leading-none"
          >
            ☰
          </button>
          {showMenu ? (
            <div className="absolute top-12 right-4 bg-white rounded-md divide-y-2 px-2">
              <div className="flex flex-col justify-center items-center gap-2">
                {pages.map((page) => (
                  <a
                    className="text-black w-full text-center px-4 py-1 first-of-type:mt-2 last-of-type:mb-2 hover:bg-gray-200 cursor-pointer lg:hidden block"
                    href={`/${page}`}
                  >
                    {page}
                  </a>
                ))}
              </div>
              <div className="flex flex-col justify-center items-center gap-2">
                {settings.map((setting) => (
                  <a
                    className="text-black w-full text-center px-4 py-1 first-of-type:mt-2 last-of-type:mb-2 hover:bg-gray-200 cursor-pointer"
                    href={`/${setting}`}
                  >
                    {setting}
                  </a>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
