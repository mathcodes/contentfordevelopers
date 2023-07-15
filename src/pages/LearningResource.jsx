import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import resources from "../data/learning_resources.json";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import { GiGraduateCap } from "react-icons/gi";

export default function LearningResource() {
    const { id } = useParams();
    const [resource, setResource] = useState(null);

    useEffect(() => {
        if (!id) return;
        setResource(resources?.find((item) => item?.id === parseInt(id)));
    }, [id]);
    return (
      <div className="px-[5%] text-blue dark:text-white">
        <NavBar />
        <div className="container mx-auto px-4 sm:px-8 min-h-screen">
          <div className="flex items-left justify-center flex-col min-h-100 py-5 px-5">
            <h1 className="text-3xl font-bold">{resource?.title}</h1>
            <p className="mt-4">{resource?.description}</p>
            <ul className="mt-4 flex flex-col space-y-2">
                {resource?.points?.map((point, index) => <li key={index}>{point}</li>)}
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
        </div>
        <Footer />
      </div>
    );
  }