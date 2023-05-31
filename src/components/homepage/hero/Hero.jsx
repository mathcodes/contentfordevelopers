import React from "react";
import ColoredButton from "./ColoredButton";

//This is a component that serves as a main element of the landing page, right under the navbar
const Hero = ({preTitle, title, description}) => {
  return (
    <section className="relative mx-auto min-h-[40vh] mb-12">
      <div className="relative z-10 flex flex-col items-center justify-center dark:text-platinum text-blue sm:py-40 py-28">
        <div className="px-6 pb-16 leading-10 lg:px-40">
          <h3 className="mb-4 leading-tight tracking-wide text-dynamicHeader">
            <p>
            <span className="block text-xl sm:inline">{preTitle}</span>

            </p>
            <span className="">
              <span className="font-extrabold gradientText">
                {title}
              </span>
            </span>
          </h3>
          <p className="text-lg sm:text-xl">
            {description}
          </p>
        </div>
        <div className="flex justify-center max-w-sm gap-4">

        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full ">
        <div className="w-full h-full hero-bg" />
      </div>
    </section>
  );
};

export default Hero;

// Welcome to ContentForDevelopers! This is an open-source project aimed at providing learning tools for developers that cover a wide range of learning styles. The devoted team behind this project have all been through and continue to perservere through learning new content, technology, updates, languages, frameworks, problem-solving strategies, frontend & backend archtiecture, and so much more. Now we are all giving back to the community in the most helpful way we can think of: providing FREE, UP-TO-DATE, and DIVERSE methods to learn the skills needed to make it in this industry!

// Want to join the team?!? Anyone can contribute by visiting the GitHub Repo! We would love to have you on board and welcome all levels of experience. Jon makes sure to keep a handful of 'good first issue' options available, so give it a shot, and if you're new, we offer assistance to walk you through the process. Become a contributor TODAY and start becoming part of the community!
