import React from 'react';
import { FiLink } from 'react-icons/fi';

const BELinks = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data.map((item, index) => (
        <div
          key={index}
          className="bg-gray-100 p-4 rounded shadow"
        >
          <div className="flex items-center mb-2">
            <FiLink className="mr-2 text-purple-700" />
            <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BELinks;
