import ReactPlayer from 'react-player'
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import Coder from "../components/Coder";
import { BsFillImageFill, BsFilm } from 'react-icons/bs'
import { useParams } from 'react-router-dom';
import solutions from "../data/problems_solutions.json";

export default function ProblemSolution() {
  const {id} = useParams();
  const solution = solutions.find((solution) => solution?.id === parseInt(id));

  return (
    <>
      <div className="container mx-auto" data-color-mode="dark">
        <NavBar />
        <div className="grid bg-white xs:grid-cols-1 sm:grid-cols-5 dark:text-white dark:bg-black text-blue">
          <h1 className="flex justify-center p-2 sm:col-span-3 xs:col-span-1">{solution.title}</h1>
          <p className="flex justify-center p-2 text-xs bg-blue-300">Time Complexity:<br />{solution?.Time_Complexity}</p>
          <p className="flex justify-center p-2 text-xs bg-blue-500">Space Complexity: <br />{solution?.Space_Complexity}</p>
        </div>
        <div className="grid gap-4 p-3 xs:grid-cols-1 md:grid-cols-2 dark:bg-blue dark:text-platinum text-blue bg-platinum">
          <div className="leading-10">
            <h1 className="text-2xl">Description</h1>
            {solution?.description}
            <hr />
            <div className="flex gap-2 mx-2 mt-2">
              <BsFilm />
              <BsFillImageFill />
            </div>
          </div>
          <div>
            <h1 className="text-2xl">Javascript Solution</h1>
            <Coder code={solution?.javascript} />
          </div>
          {solution?.video && <div className="mb-12 min-h-500">
            <h1 className="text-2xl">Video Solution</h1>
            <ReactPlayer url={solution?.video} width="100%" height="100%" />
          </div>}
          {solution?.image && <div>
            <button className="text-2xl" id="button">Diagram</button>
            <a href={solution?.image}><img src={solution?.image} alt="" width="50%" /></a>
          </div>}
        </div>
        <Footer />
      </div>
    </>
  );
}