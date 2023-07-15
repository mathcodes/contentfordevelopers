import React, { useEffect } from "react";
import ReactPlayer from 'react-player'
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import Coder from "../components/Coder";
import { BsFillImageFill, BsFilm } from 'react-icons/bs'
import { SelectionText } from "@uiw/react-textarea-code-editor";
import { useParams } from 'react-router-dom';
import { LeetCodeSolutions } from "../data/solutionLC";
import { CodeWarsSolutions } from "../data/solutionCW";

export default function ItemPage({ sol }) {

  let data = sol === 'lc'
    ?
    LeetCodeSolutions
    :
    CodeWarsSolutions;

  let idValue = useParams();
  let id = idValue.id - 1;
  const textRef = React.useRef();
  const javascript = `${data[id].javascript}`
  const content = `${data[id].content}`

  useEffect(() => {
    let sH = document.getElementById('showHideDiagram')
    if (!data[id].image) {
      sH.style.display = 'none';
    } else {
      sH.style.display = 'block';
    }
    if (textRef.current) {
      const obj = new SelectionText(textRef.current);
      console.log("obj:", obj);
    }
  }, []);

  const showHide = (() => {
    let image = document.getElementById('image');
    if (image.style.display === 'none') {
      image.style.display = 'block';
    } else {
      image.style.display = 'none';
    }
  })

  return (
    <>
      <div className="container mx-auto" data-color-mode="dark">
        <NavBar />
        <div className="grid bg-white xs:grid-cols-1 sm:grid-cols-5 dark:text-white dark:bg-black text-blue">
          <h1 className="flex justify-center p-2 sm:col-span-3 xs:col-span-1">{data[id].title}</h1>
          <p className="flex justify-center p-2 text-xs bg-blue-300">Time Complexity:<br />{data[id].Time_Complexity}</p>
          <p className="flex justify-center p-2 text-xs bg-blue-500">Space Complexity: <br />{data[id].Space_Complexity}</p>
        </div>
        <div className="grid gap-4 p-3 xs:grid-cols-1 md:grid-cols-2 dark:bg-blue dark:text-platinum text-blue bg-platinum">
          <div className="leading-10">
            <h1 className="text-2xl">Description</h1>
            {content}
            <hr />
            <div className="flex gap-2 mx-2 mt-2">
              <BsFilm />
              <BsFillImageFill />
            </div>
          </div>
          <div>
            <h1 className="text-2xl">Javascript Solution</h1>
            <Coder code={javascript} />
          </div>
          <div className="mb-12 min-h-500">
            <h1 className="text-2xl">Video Solution</h1>
            <ReactPlayer url={data[id].video} width="100%" height="100%" />
          </div>
          <div id="showHideDiagram">
            <button className="text-2xl" id="button" onClick={showHide}>Diagram</button>
            <a href={data[id].image}><img id="image" src={data[id].image} alt="img" width="50%" /></a>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}