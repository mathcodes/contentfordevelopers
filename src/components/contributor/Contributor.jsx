import React from "react";

export const Contributor = ({ res }) => (
  <div className="p-1 flex flex-col items-center">
    <a
      href={res.html_url}
      target="_blank"
      rel="noreferrer"
      className="block rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent2"
    >
      <img
        className="rounded-full md:h-16 md:w-16 h-12 w-12 m-1 hover:scale-110 transition-transform duration-200 ring-2 ring-white dark:ring-blue"
        src={res.avatar_url}
        alt={`${res.login} on GitHub (opens in a new tab)`}
        width="64"
        height="64"
        loading="lazy"
      />
    </a>
  </div>
);
