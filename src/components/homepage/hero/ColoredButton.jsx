import React from "react";

const ColoredButton = ({ text, variant, href }) => {
  return (
    <a
      href={href}
      className={` text-white rounded-3xl bg-gradient-to-r ${
        variant === "main" && "from-accent to-accent hover:to-accent2"
      } ${
        variant === "secondary" && "from-accent2 to-accent2 hover:to-accent"
      } sm:px-8 px-2 py-2 tracking-wider sm:text-lg text-sm sm:w-44 w-32 text-center transition-all duration-500 bg-size-200 bg-pos-0 hover:bg-pos-100 dark:hover:brightness-105 active:scale-[.96] active:translate-y-1`}
    >
      {text}
    </a>
  );
};

export default ColoredButton;
