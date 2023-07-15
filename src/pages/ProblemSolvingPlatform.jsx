import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import ProblemSetTable from "../components/ProblemSetTable";

export default function ProblemSolvingPlatform({ platform }) {
  return (
    <div className="px-[5%] text-blue dark:text-white">
      <NavBar />
      <div className="flex flex-row px-0">
        <div className="flex justify-center w-1/4 px-0">
          <img src={platform?.logo} alt="" className="w-3/4" />
        </div>
        <div className="w-2/4 px-0 ">
          <div className="flex flex-row px-0 py-5">
            <h1 className="justify-center text-3xl">{platform?.name}</h1>
          </div>
          <h3>{platform?.description}</h3>
        </div>
      </div>
      <h4 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        {platform?.name} Problems
      </h4>
      <div className="mb-5 text-blue dark:text-white">
        <ProblemSetTable
          platformLogo={platform?.logo}
          problems={platform?.problems}
        />
      </div>
      <Footer />
    </div>
  );
}
