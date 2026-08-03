import React, { useState } from 'react';
import { IconContext } from "react-icons";

export default function Grid({ data, link }) {
  const [showGrid, setShowGrid] = useState(true);

  return (
    <div>
      {showGrid ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="p-0.5 rounded-xl bg-gradient-to-r from-accent to-accent2 cursor-pointer"
              onClick={() => setShowGrid(false)}
            >
              <div className="flex p-6 h-full text-center rounded-xl bg-white dark:bg-blue hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors duration-200 group">
                <div className="p-4">
                  <IconContext.Provider value={{ color: item.iconColor }}>
                    <div className="flex items-center gap-2 mb-2">
                      {item.icon && <item.icon className="w-6 h-6" />}
                      <h2 className="text-lg font-semibold text-blue dark:text-platinum">{item.title}</h2>
                    </div>
                  </IconContext.Provider>
                  <p className="body text-slate-500 dark:text-slate-400">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        link
      )}
    </div>
  );
}

