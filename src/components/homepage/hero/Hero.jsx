import React from "react";
import ColoredButton from "./ColoredButton";

//This is a component that serves as a main element of the landing page, right under the navbar
const Hero = () => {
  return (
    <section className="relative mx-auto min-h-[40vh] mb-12">
      <div className="flex flex-col items-center justify-center   dark:text-platinum text-blue z-10 relative sm:py-40 py-28">
        <div className="lg:px-40 px-6 pb-16 leading-10">
          <h3 className="text-dynamicHeader tracking-wide leading-tight mb-4">
            <span className="sm:inline block">Welcome to&nbsp;</span>
            <span className="">
              <span className="gradientText font-extrabold">
                ContentForDevelopers!
              </span>
            </span>
          </h3>
          <p className="sm:text-xl text-lg">
            An open-source project aimed at providing learning tools for
            developers that cover a wide range of learning styles.
          </p>
        </div>
        <div className="flex justify-center gap-4 max-w-sm">
          <ColoredButton text="Learn" variant="main" href="#platform-list" />
          <ColoredButton
            text="Contribute"
            variant="secondary"
            href="#contribute"
          />
        </div>
      </div>

      <div className="absolute left-0 top-0 w-full h-full ">
        <div className="hero-bg w-full h-full" />
      </div>
    </section>
  );
};

export default Hero;

// Welcome to ContentForDevelopers! This is an open-source project aimed at providing learning tools for developers that cover a wide range of learning styles. The devoted team behind this project have all been through and continue to perservere through learning new content, technology, updates, languages, frameworks, problem-solving strategies, frontend & backend archtiecture, and so much more. Now we are all giving back to the community in the most helpful way we can think of: providing FREE, UP-TO-DATE, and DIVERSE methods to learn the skills needed to make it in this industry!

// Want to join the team?!? Anyone can contribute by visiting the GitHub Repo! We would love to have you on board and welcome all levels of experience. Jon makes sure to keep a handful of 'good first issue' options available, so give it a shot, and if you're new, we offer assistance to walk you through the process. Become a contributor TODAY and start becoming part of the community!
