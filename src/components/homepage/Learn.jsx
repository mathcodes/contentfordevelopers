import React from "react";
import PlatformCard from "../card/PlatformCard";
import DevEyes from "../DevEyes/DevEyes";

const Learn = () => {
  return (
    <section className="py-16" id="learn">
      <div className="site-container">
        <DevEyes label="Learn — section" code={`<section className="py-16" id="learn">\n  <div className="site-container">\n    <p className="eyebrow">Resources</p>\n    <h2 className="heading-1 mt-2 mb-4">Want to learn?</h2>\n    <PlatformCard />\n  </div>\n</section>`}>
          <p className="eyebrow gradientText mb-2">Resources</p>
          <h2 className="heading-1 text-blue dark:text-platinum mb-3">Want to learn?</h2>
          <p className="body text-slate-600 dark:text-slate-400 max-w-2xl mb-2">
            The devoted team behind this project have all been through — and continue to push through — learning new content, technology, frameworks, problem-solving strategies, frontend & backend architecture, and so much more.
          </p>
          <p className="body text-slate-600 dark:text-slate-400 max-w-2xl mb-10">
            We're giving back by providing{" "}
            <span className="gradientText font-bold">FREE</span>,{" "}
            <span className="gradientText font-bold">UP-TO-DATE</span>, and{" "}
            <span className="gradientText font-bold">DIVERSE</span>{" "}
            methods to learn the skills needed to make it in this industry.
          </p>
          <PlatformCard />
        </DevEyes>
      </div>
    </section>
  );
};

export default Learn;
