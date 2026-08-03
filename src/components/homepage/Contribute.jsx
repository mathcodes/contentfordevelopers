import React from "react";
import ContributorSection from "./contributorSection/ContributorSection";
import DevEyes from "../DevEyes/DevEyes";

const Contribute = () => {
  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-800/40">
      <div className="site-container">
        <DevEyes label="Contribute — section" code={`<section className="py-16 bg-slate-50 dark:bg-slate-800/40">\n  <div className="site-container">\n    <h2 className="heading-1">Want to join the team?</h2>\n    <ContributorSection />\n  </div>\n</section>`}>
          <p className="eyebrow gradientText mb-2">Open Source</p>
          <h2 className="heading-1 text-blue dark:text-platinum mb-4">Want to join the team?</h2>
          <div className="body text-slate-600 dark:text-slate-400 max-w-2xl space-y-3 mb-8">
            <p>
              Anyone can contribute by visiting the{" "}
              <a
                className="underline hover:text-accent transition-colors duration-200"
                href="https://github.com/mathcodes/contentfordevelopers/blob/main/CONTRIBUTING.md"
                target="_blank"
                rel="noreferrer"
              >
                GitHub repo.
              </a>{" "}
              We welcome all levels of experience.
            </p>
            <p>
              Jon keeps a handful of <em>good first issue</em> options available — give it a shot, and if you're new, we'll walk you through the process.
            </p>
          </div>
          <a
            className="btn-primary inline-flex mb-10"
            href="https://github.com/mathcodes/contentfordevelopers/blob/main/CONTRIBUTING.md"
            target="_blank"
            rel="noreferrer"
          >
            Become a Contributor
          </a>
          <ContributorSection />
        </DevEyes>
      </div>
    </section>
  );
};

export default Contribute;
