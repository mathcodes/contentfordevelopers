import React, { useState } from "react";
import { IconContext } from "react-icons";

export default function Grid({ data, link }) {
  const [showGrid, setShowGrid] = useState(true);
  const handleCardClick = () => {
    setShowGrid(false);
  };
  return (
    <div>
      {showGrid ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="p-2 m-4 rounded-lg z-1 bg-gradient-to-r from-accent to-accent2 shadow-l cursor-pointer"
              onClick={handleCardClick}
            >
              <div className="flex p-6 h-full text-center transition-all duration-1000 bg-white rounded-lg dark:bg-blue hover:scale-95 hover:shadow-sm group">
                <div className="p-4 rounded shadow">
                  <IconContext.Provider
                    value={{
                      color: item.iconColor,
                      className: "global-class-name",
                    }}
                  >
                    <div className="flex mb-2">
                      <item.icon className="mr-2 w-6 h-6" />
                      <h2 className="text-lg font-semibold">{item.title}</h2>
                    </div>
                  </IconContext.Provider>
                  <p className="text-gray-600">{item.description}</p>
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
