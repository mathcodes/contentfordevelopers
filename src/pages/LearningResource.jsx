import { useParams } from "react-router-dom";
import resources from "../data/learning_resources.json";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import { GiGraduateCap } from "react-icons/gi";
import getReactIconByName from "../utils/getReactIconByName";

export default function LearningResource() {
  const { id } = useParams();
  const resource = resources?.find((item) => item?.id === parseInt(id));
  return (
    <div className="px-[5%] text-blue dark:text-white">
      <NavBar />
      <div className="container mx-auto px-4 sm:px-8 min-h-screen">
        <div className="flex items-left justify-center flex-col min-h-100 py-5 px-5">
          <h1 className="text-3xl font-bold">{resource?.title}</h1>
          <p className="mt-4">{resource?.description}</p>
          <ul className="mt-4 flex flex-col space-y-2">
            {resource?.points?.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          <a
            href={resource?.link}
            className="mt-4 text-blue-500 dark:text-blue-300 hover:underline flex items-center space-x-2"
          >
            <span>Watch now</span>
            <GiGraduateCap className="text-xl" />
          </a>
        </div>
        <div className="flex px-0">
          <div className="w-1/3 px-6">
            <img src="/assets/png/c_for_d2.png" alt="" className="w-4" />
          </div>
          <div className="w-2/3 px-6">
            <h3 className="px-6">Under Construction!!</h3>
          </div>
        </div>
        <h1 className="text-2xl font-semibold mb-4 p-5">Topics</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {resource?.stacks?.map((stack, index) => {
            const Icon = getReactIconByName(stack?.icon);
            return (
              <div
                key={index}
                className="p-2 m-4 rounded-lg z-1 bg-gradient-to-r from-accent to-accent2 shadow-l cursor-pointer"
              >
                <div className="flex p-6 h-full text-center transition-all duration-1000 bg-white rounded-lg dark:bg-blue hover:scale-95 hover:shadow-sm group">
                  <div className="p-4 rounded shadow">
                    <div className="flex mb-2">
                      <Icon color={stack?.color} className="mr-2 w-6 h-6" />
                      <h2 className="text-lg font-semibold">{stack?.title}</h2>
                    </div>
                    <p className="text-gray-600">{stack?.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
