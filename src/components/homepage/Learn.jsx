import React from "react";
import LearningResources from "../LearningResources";

const Learn = () => {
  return (
    <section className="relative mx-auto mb-12" id="platform-list">
      <div className="flex flex-col items-start justify-center lg:px-40 px-6 py-4  gap-6 leading-10 dark:text-platinum text-blue z-10 relative ">
        <div className="flex flex-col items-center mx-auto gap-6 max-w-3xl">
          <h4 className="gradientText font-bold text-2xl tracking-wide mt-4">
            Want to learn?
          </h4>
          <p className="text-lg ">
            The devoted team behind this project have all been through and
            continue to perservere through learning new content, technology,
            updates, languages, frameworks, problem-solving strategies, frontend
            & backend archtiecture, and so much more.
          </p>
          <p className="text-lg">
            Now we are all giving back to the community in the most helpful way
            we can think of: providing{" "}
            <span className="gradientText font-bold text-xl">FREE</span>,{" "}
            <span className="gradientText font-bold text-xl">UP-TO-DATE</span>,
            and <span className="gradientText font-bold text-xl">DIVERSE</span>{" "}
            methods to learn the skills needed to make it in this industry!
          </p>
        </div>
        <LearningResources />
      </div>
    </section>
  );
};

export default Learn;
