import React from "react";
import {bestPractices} from "../../data/topicsData";

const TopicList = () => {


  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-5xl px-6 mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Top Ten Best Practices for Developers
        </h2>
        <div className="grid grid-cols-1 gap-10 mt-10 sm:grid-cols-2 lg:grid-cols-3">
          {bestPractices.map((practice, index) => (
            <div key={index} className="overflow-hidden bg-white rounded-lg shadow">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">{practice}</h3>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-10 text-lg text-gray-500">
          Remember to always help others in the industry by sharing your knowledge and experience. Together we can make a difference!
        </p>
      </div>
    </section>
  );
};

export default TopicList;
