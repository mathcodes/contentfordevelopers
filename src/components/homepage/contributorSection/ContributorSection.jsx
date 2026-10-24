import React from "react";
import { data } from "../../../data/db";
import { Contributor } from "../../contributor/Contributor";

// Static, wrapping grid instead of an auto-scrolling carousel: moving content
// with no pause control fails WCAG 2.2.2, and the carousel's cloned slides
// were focusable while aria-hidden and overflowed narrow screens.
const ContributorSection = () => (
  <div>
    <p className="eyebrow text-slate-500 dark:text-slate-400 mb-4">Contributors</p>
    <div className="rounded-xl overflow-hidden bg-gradient-to-r from-accent to-accent2 p-0.5">
      <ul className="rounded-xl bg-white dark:bg-blue py-4 px-2 flex flex-wrap justify-center gap-1 list-none m-0">
        {data.map((res) => (
          <li key={res.id}>
            <Contributor res={res} />
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default ContributorSection;
