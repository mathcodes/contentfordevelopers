import * as React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import { GiDatabase } from "react-icons/gi";
import Grid from "../components/grid/Grid";

export default function DSA({
  title,
  description,
  point1,
  point2,
  point3,
}) {
  const cards = [
    {
      title: "Card 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Card 2",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Card 3",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    // Add more cards as needed
  ];
  return (
    <div className="px-[5%] text-blue dark:text-white">
      <NavBar />
      <div className="container mx-auto px-4 sm:px-8 min-h-screen">
        <div className="flex items-left justify-center flex-col min-h-100 py-5 px-5">
          <h1 className="text-3xl font-bold flex">
            <GiDatabase /> {title}
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
            <img src="/assets/png/c_for_d2.png" alt="" className="w-4" />
          </div>
          <div className="w-2/3 px-6">
            <h3 className="px-6">Under Construction!!</h3>
          </div>
        </div>
      </div>
      <div>
        {cards.map((index) => {
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            data={cards}
            title={title}
            description={description}
          />;
        })}
      </div>
      <Footer />
    </div>
  );
}