import { memo } from "react";
import resources from "../../data/learning_resources.json";
import getReactIconByName from "../../utils/getReactIconByName";
import { Link } from "react-router-dom";

const ResourceCard = memo(({ id, title, icon }) => {
  const Icon = getReactIconByName(icon);
  return (  
    <Link to={`/source/${id}`} className="flex justify-center items-center">
      <div className="p-2 m-4 rounded-lg z-1 bg-gradient-to-r from-accent to-accent2 shadow-l">
        <div className="flex p-6 text-center transition-all duration-1000 bg-white rounded-lg dark:bg-blue hover:scale-95 hover:shadow-sm group">
          <Icon
            color="#999"
            className="w-12 h-12 transition duration-1000 ease-in-out fill-current delay-50 hover:text-blue-700 hover:fill-current group-hover:scale-110"
          />
          <div className="absolute top-0 items-end flex-1 ">
            <p className="relative top-0 hidden p-1 m-6 text-green-500 transition-all duration-200 rounded-lg opacity-0 shadow-l group-hover:scale-105 group-hover:block group-hover:opacity-100 delay-50 tooltip">
              <p className="absolute top-0 left-0 p-2 text-xs leading-tight text-gray-700 transition duration-1000 bg-white border rounded-lg shadow-lg z-5 group-hover:left-20 group-hover:scale-105 delay-50 dark:bg-blue ">
                {title}
              </p>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
});

export default function LearningResources() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 space--between">
      {resources.map((resource, index) => (
        <ResourceCard
          key={index}
          id={resource?.id}
          title={resource?.title}
          description={resource?.description}
          icon={resource?.icon}
        />
      ))}
    </div>
  );
}
