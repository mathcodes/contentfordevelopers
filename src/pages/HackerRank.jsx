import * as React from "react";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/Navbar";
import ProblemSetTable from "../components/ProblemSetTable";

export default function Leetcode() {
  return (
    <div className="px-[5%] text-blue dark:text-white">
      <NavBar />
      <div className="flex items-left justify-center flex-col min-h-100 py-5 px-5"></div>
      <div className="flex px-0">
        <div className="w-1/3 px-0">
          <img
            src="https://raw.githubusercontent.com/mathcodes/contentfordevelopers/main/src/assets/Images/LeetCode_logo_black.png"
            alt="LeetCode Logo"
            height="20px"
          />
        </div>
        <div className="w-2/3 px-0 ">
          {/* HOVER TITLE
			note: added the yellow from LeetCode logo to config 'lcyellow: "#f79f1bff"'*/}
          <div className="flex  flex-row   py-5 px-0">
            <h1 className="text-8xl justify-center hover:text-lcyellow">L</h1>
            <h1 className="text-8xl justify-center hover:text-accent2">e</h1>
            <h1 className="text-8xl justify-center hover:text-accent">e</h1>
            <h1 className="text-8xl justify-center hover:text-accent2">t</h1>
            <h1 className="text-8xl justify-center hover:text-lcyellow">C</h1>
            <h1 className="text-8xl justify-center hover:text-accent2">o</h1>
            <h1 className="text-8xl justify-center hover:text-lcyellow">d</h1>
            <h1 className="text-8xl justify-center hover:text-accent2">e</h1>
          </div>

          <h3>Under Construction!!</h3>
        </div>
      </div>

      <div className=" text-blue dark:text-white" text-white>
        <ProblemSetTable />
      </div>
      <Footer />
    </div>
  );
}
