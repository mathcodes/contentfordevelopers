import React from "react";
import ContributorSection from "./contributorSection/ContributorSection";

const Contribute = () => {
  return (
    <section className="relative mx-auto mb-12" id="platform-list">
      <div className="flex flex-col items-start justify-center lg:px-40 px-6 py-4  gap-6 leading-10 dark:text-platinum text-blue z-10 relative ">
        <div className="flex flex-col  mx-auto gap-6 max-w-3xl">
          <h4 className="gradientText font-bold text-2xl tracking-wide mt-4 text-center">
            Want to join the team?
          </h4>
          <p className="text-lg">
            Anyone can contribute by visiting the{" "}
            <a className="underline hover:text-accent transition-all duration-300 cursor-pointer tracking-wide  " href="https://github.com/mathcodes/contentfordevelopers/blob/main/CONTRIBUTING.md">
              GitHub Repo!
            </a>{" "}
            We would love to have you on board and welcome all levels of
            experience.
          </p>
          <p className="text-lg">
            Jon makes sure to keep a handful of 'good first issue' options
            available, so give it a shot, and if you're new, we offer assistance
            to walk you through the process.
          </p>
          <p className="text-lg">
            Become a contributor TODAY and start becoming part of the community!
          </p>
          <ContributorSection />
        </div>
      </div>
    </section>
  );
};

export default Contribute;
