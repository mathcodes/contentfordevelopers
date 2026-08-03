import React from "react";

export const Contributor = ({ res }) => (
  <div className="p-2 flex flex-col items-center">
    <a href={res.html_url} target="_blank" rel="noreferrer">
      <img
        className="rounded-full md:h-16 md:w-16 h-12 w-12 m-1 hover:scale-125 transition-transform duration-200 ring-2 ring-white dark:ring-blue"
        src={res.avatar_url}
        alt={res.login}
        title={res.login}
      />
    </a>
  </div>
);

