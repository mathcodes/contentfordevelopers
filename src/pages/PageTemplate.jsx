import React from "react";
import mdxPages from "../components/mdxpages/mdxPages.mdx";
import MDXContent from "../components/mdxpages/mdxContent.mdx"; // Import the MDX file
import Grid from "../components/grid/Grid";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import { GiGraduateCap } from "react-icons/gi";

export default function PageTemplate({
  cards,
  title,
  description,
  point1,
  point2,
  point3,
  link,
}) {
  return (
    <div className="px-[5%] text-blue dark:text-white">
      <NavBar />
      <div className="container mx-auto px-4 sm:px-8 min-h-screen">
        <div className="flex items-left justify-center flex-col min-h-100 py-5 px-5">
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="mt-4">{description}</p>
          <ul className="mt-4 flex flex-col space-y-2">
            <li>{point1}</li>
            <li>{point2}</li>
            <li>{point3}</li>
          </ul>
          <a
            href={link}
            className="mt-4 text-blue-500 dark:text-blue-300 hover:underline flex items-center space-x-2"
          >
            <span>Watch now</span>
            <GiGraduateCap className="text-xl" />
          </a>
        </div>
        <div className="flex px-0">
          <div className="w-1/3 px-6">
            <img src="/assets/png/c_for_d2.png" alt="LeetCode Logo" className="w-4" />
          </div>
          <div className="w-2/3 px-6">
            <h3 className="px-6">Under Construction!!</h3>
          </div>
        </div>
        <h1 className="text-2xl font-semibold mb-4 p-5">Topics</h1>
        <Grid data={cards} link={link} />
      </div>
      <Footer />
    </div>
  );
}
