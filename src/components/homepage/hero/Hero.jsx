import React from "react";
import DevEyes from "../../DevEyes/DevEyes";

const Hero = ({ preTitle, title, description }) => {
  return (
    <section className="relative min-h-[50vh] flex items-center">
      <div className="absolute inset-0">
        <div className="w-full h-full hero-bg" />
      </div>

      <div className="site-container relative z-10 py-20 sm:py-28">
        <DevEyes label="Hero — section" code={`<section className="relative min-h-[50vh] flex items-center">\n  <div className="site-container relative z-10 py-20 sm:py-28">\n    <p className="eyebrow">{preTitle}</p>\n    <h1 className="display gradientText mt-2">{title}</h1>\n    <p className="body-lg mt-4 max-w-2xl">{description}</p>\n  </div>\n</section>`}>
          <p className="eyebrow text-slate-500 dark:text-slate-400">{preTitle}</p>
          <h1 className="display gradientText mt-2 mb-4">{title}</h1>
          <p className="body-lg text-slate-600 dark:text-platinum max-w-2xl mb-8">
            {description}
          </p>
          <div className="flex flex-wrap gap-4">
            <a className="btn-primary" href="#learn">
              Explore Topics
            </a>
            <a
              className="btn-ghost"
              href="https://github.com/mathcodes/contentfordevelopers/blob/main/CONTRIBUTING.md"
              target="_blank"
              rel="noreferrer"
            >
              Contribute
            </a>
          </div>
        </DevEyes>
      </div>
    </section>
  );
};

export default Hero;

