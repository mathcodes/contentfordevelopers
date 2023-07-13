import * as React from "react";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/Navbar";
import { VscLibrary } from "react-icons/vsc";

export default function FrameworksAndLibraries({
  title,
  description,
  point1,
  point2,
  point3,
}) {
  return (
    <div className="px-[5%] text-blue dark:text-white">
      <NavBar />
      <div className="container mx-auto px-4 sm:px-8 min-h-screen">
        <div className="flex items-left justify-center flex-col min-h-100 py-5 px-5">
          <h1 className="text-3xl font-bold flex">
            <VscLibrary /> <VscLibrary /> {title}
          </h1>
          <p className="mt-4">{description}</p>
          <ul className="mt-4 flex flex-col space-y-2">
            <li>{point1}</li>
            <li>{point2}</li>
            <li>{point3}</li>
          </ul>
        </div>
        <div className="flex px-0">
          <div className="w-1/3 px-6">
            <img src="/CforD2.png" alt="LeetCode Logo" className="w-4" />
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
