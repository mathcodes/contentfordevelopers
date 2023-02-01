import React from "react";
import { data } from "../../../data/db";
import { Contributor } from "../../contributor/Contributor";

//This is a component that appears on homepage to show contributors
const ContributorSection = () => {
  return (
    <section className="px-2 py-8 flex flex-col items-center mt-6">
      <h4 className="gradientText font-bold text-2xl tracking-wide">
        Contributors
      </h4>
      <div className="p-[2px] my-6 rounded-lg bg-gradient-to-r from-accent to-accent2 shadow-lg ">
        <div className="flex flex-wrap justify-center py-6 px-2 max-w-3xl bg-white dark:bg-blue dark:text-platinum text-blue rounded-lg">
          {data.map((res) => (
            <Contributor res={res} key={res.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContributorSection;
