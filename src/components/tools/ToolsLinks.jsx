import React from 'react';
import { FiLink } from 'react-icons/fi';

const ToolsLinks = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data.map((item, index) => (
        <div key={index} className="bg-gray-100 p-4 rounded shadow">
          <div className="flex items-center mb-2">
            <FiLink className="mr-2 text-purple-700" />
            <h2 className="text-lg font-semibold">{item.title}</h2>
          </div>
          <div className="flex items-center mb-2">
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <p className="text-gray-600">{item.title}</p>
            </a>
          </div>
          <div className="flex items-center mb-2">
            <p className="text-gray-600">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ToolsLinks;
