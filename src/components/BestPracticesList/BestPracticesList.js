import React, { useState } from "react";
import { bestPractices } from "../../data/topicsData";

const BestPracticeCard = ({ practice }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="w-1/5 m-4 overflow-hidden rounded shadow shadow-lg dark:shadow-accent">
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">{practice.name}</div>
        <div className="flex items-center cursor-pointer" onClick={toggleDetails}>
          <span className="mr-2 text-xs">{showDetails ? "▲" : "▼"}</span>
          <span className="text-xs font-bold text-gray-700">Details</span>
        </div>
        {showDetails && (
          <div className="mt-4 group">
            <p className="mb-2 text-base text-gray-700">{practice.description}</p>
            <div>
              <span className="mr-4 font-bold text-gray-700">Use Cases: </span>
              <ul className="mb-4 list-disc list-inside">
                {practice.useCases.map((useCase) => (
                  <li key={useCase} className="text-xs">
                    {useCase}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="mr-4 font-bold text-gray-700">Technology needed: </span>
              {practice.techNeeded.map((tech) => (
                <span key={tech} className="ml-2 mr-2 text-xs">
                  {tech}
                </span>
              ))}
            </div>
            <div>
              <span className="mr-4 font-bold text-gray-700">Transferable skills: </span>
              {practice.transferableSkills.map((skill) => (
                <span
                  key={skill}
                  className="flex items-center rounded-full px-2.5 bg-gray-800 text-white ml-2"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const BestPracticesList = () => {
  return <div className="flex flex-wrap justify-center">{bestPractices.map((practice) => <BestPracticeCard key={practice.id} practice={practice} />)}</div>;
};

export default BestPracticesList;
