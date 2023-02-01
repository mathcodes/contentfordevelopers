import React from "react";
import { SiLeetcode } from "react-icons/si";

function PlatformCard({ title, src, href }) {
  return (
    <a href={href}>
      {/* <div className='platform-card'> */}
      <div className="p-[2px] m-6 rounded-xl bg-gradient-to-r from-accent to-accent2 shadow-lg ">
        <div className="p-6 w-52 h-44 text-center relative flex flex-col  items-center bg-white dark:bg-blue justify-between rounded-lg hover:scale-95 hover:shadow-sm transition-all duration-200 group">
          <SiLeetcode className="w-12 h-12 group-hover:scale-110 transition-all duration-300 delay-100" />
          <div className="flex-1 flex items-end ">
            <p className="text-lg leading-tight tracking-wide group-hover:scale-105 transition-all duration-200 delay-50">
              {title}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
}

export default PlatformCard;
