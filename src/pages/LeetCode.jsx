import React from "react";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/Navbar";
import Hero from "../components/homepage/hero/Hero";
import TopicsGrid from "../components/TopicsGrid/TopicsGrid";
import { leetCodeData } from "../data/leetCode";
import TailwindTable from "../components/TailwindTable/TailwindTable";

function LeetCode() {
  return (
    <div className="container mx-auto">
      {/* <Header /> */}
      <NavBar />
      <Hero
        title="LeetCode!"
        preTitle='Data Structures and Algorithms Mastery with '
        description="Explore different learning styles to master Data Structures and Algorithms!"
      />
      {/* <TopicsGrid /> */}

      <div className=" text-blue dark:text-white" text-white>
        <TailwindTable data={leetCodeData} />
      </div>
      <Footer />
    </div>
  );
}

export default LeetCode;



let number = 5;

if (number > 10) {

  console.log("The number is greater than 10");

} else {

  console.log("The number is less than or equal to 10");

}